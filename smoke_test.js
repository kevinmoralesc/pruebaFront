import { Builder, By, until } from 'selenium-webdriver';

async function login(driver) {
    console.log('Iniciando sesión...');
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();
    await driver.findElement(By.id('loginEmail')).sendKeys('kevina.moralesc@uqvirtual.edu.co');
    await driver.findElement(By.id('loginPassword')).sendKeys('123456789');
    await driver.findElement(By.xpath("//button[contains(text(), 'Ingresar')]")).click();
}

async function handleAlert(driver) {
    try {
        await driver.wait(until.elementLocated(By.id('swal2-html-container')), 5000);
        let alertElement = await driver.findElement(By.id('swal2-html-container'));
        let alertText = await alertElement.getText();
        console.log('Login sin credenciales:');
        console.log('Texto de la alerta:', alertText);

        if (alertText === 'No se encontro el usuario, revisalo o sino estas registrado, registrate') {
            console.log('La alerta contiene el texto esperado.');
        } else {
            console.error('La alerta no contiene el texto esperado.');
        }
    } catch (e) {
        console.log('No se encontró ninguna alerta.');
    }
}

async function runSmokeTest() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(/* Aquí puedes configurar las opciones de Chrome si lo necesitas */)
        .build();

    try {
        await driver.get('https://pruebafront-production-e3aa.up.railway.app/');
        await driver.wait(until.elementLocated(By.css('body')), 10000);
        await login(driver);
        await handleAlert(driver);
    } catch (error) {
        console.error('Ocurrió un error durante la ejecución de la prueba:', error);
    } finally {
        await driver.quit();
    }
}

runSmokeTest();
