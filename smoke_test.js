import { Builder, By, until } from 'selenium-webdriver';

// Función que define y ejecuta las pruebas de humo
async function runSmokeTest() {
    // Inicializar el driver del navegador (en este caso, Chrome)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navegar a la URL de tu aplicación desplegada en Railway
           await driver.get('https://pruebafront-production-e3aa.up.railway.app/');

        // Esperar a que la página cargue completamente
           await driver.wait(until.elementLocated(By.css('body')), 10000);

        // Realizar acciones de prueba (por ejemplo, verificar la presencia de elementos)
          console.log('Prueba Login sin credenciales:');
          await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();
          await driver.findElement(By.id('loginEmail')).sendKeys('kevina.moralesc@uqvirtual.edu.co');
          await driver.findElement(By.id('loginPassword')).sendKeys('123456789');
          await driver.findElement(By.xpath("//button[contains(text(), 'Ingresar')]")).click();

        try {
            await driver.wait(until.elementLocated(By.id('swal2-html-container')), 5000);
            let alertElement = await driver.findElement(By.id('swal2-html-container'));
            let alertText = await alertElement.getText();
            console.log('Texto de la alerta:', alertText);

            // Verificar el texto de la alerta
            if (alertText === 'No se encontro el usuario, revisalo o sino estas registrado, registrate') {
                console.log('La alerta contiene el texto esperado.');
            } else {
                console.error('La alerta no contiene el texto esperado.');
            }
        } catch (e) {
            console.log('No se encontró ninguna alerta.');
        }

    } catch (error) {
        console.error('Ocurrió un error durante la ejecución de la prueba:', error);
    } finally {
        // Cerrar el navegador al finalizar la prueba
        await driver.quit();
    }
}

// Ejecutar la función de prueba de humo
runSmokeTest();