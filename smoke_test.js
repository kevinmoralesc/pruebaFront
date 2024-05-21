import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function login(driver) {
    console.log('Iniciando sesión..');
    // Esperar a que el botón "Login" esté presente
    await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Login')]")), 10000);
    // Hacer clic en el botón "Login"
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();
    // Continuar con el resto de las acciones de inicio de sesión
    await driver.findElement(By.id('loginEmail')).sendKeys('kevina.moralesc@uqvirtual.edu.co');
    await driver.findElement(By.id('loginPassword')).sendKeys('123456789');
    await driver.findElement(By.xpath("//button[contains(text(), 'Ingresar')]")).click();
}

async function handleAlertLogin(driver) {
    try {
        await driver.wait(until.elementLocated(By.id('swal2-html-container')), 100000);
        let alertElement = await driver.findElement(By.id('swal2-html-container'));
        let alertText = await alertElement.getText();
        console.log('Login sin credenciales:');
        console.log('Texto de la alerta:', alertText);

        if (alertText === 'No se encontro el usuario, revisalo o sino estas registrado, registrate') {
            console.log('La alerta contiene el texto esperado.');
        } else {
            console.error('La alerta no contiene el texto esperado.');
            process.exit(1); // Marcar como fallida la acción
        }
    } catch (e) {
        console.log('No se encontró ninguna alerta.');
        process.exit(1); // Marcar como fallida la acción
    }
}

async function runSmokeTest() {
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://pruebafront-production-6724.up.railway.app/');
        await driver.wait(until.elementLocated(By.css('body')), 10000);
        await login(driver);
        await handleAlertLogin(driver);
    } catch (error) {
        console.error('Ocurrió un error durante la ejecución de la prueba:', error);
    } finally {
        await driver.quit();
    }
}

runSmokeTest();
