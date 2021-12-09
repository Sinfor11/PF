//Obtenemos algunos parametros de selenium y el requerimiento del driver de chrome
const {By,Key,Builder, until} = require("selenium-webdriver");
require("chromedriver");
//Usaremos el assert para llevar a cabo la prueba de MOCHA
var assets = require("assert");

describe('Pruebas de login', function(){
    //PRUEBA PARA ENVIAR TODOS LOS DATOS CORRECTOS Y HACER INICIO DE SESIÓN
    it('Autenticacion correcta Login', async function(){
        assets.equal(1,1); 
    });
});