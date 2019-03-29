# el-baraton-ecommerce

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

Node version 10.15.3

## Desarrollo

Se utilizaron los frameworks AngularJS y Bootstrap 3. Para la persistencia se cargan los datos del archivo 
products.json y otros generados, como los del carrito en el localstorage del navegador, principalmente para evitar que se pierdan los datos al cerrar la página.

## Compilación

Al clonar el repositorio se deben seguir los siguientes pasos:

- Ejecutar en la carpeta del proyecto el comando `npm install`.
- Ejecutar en la carpeta del proyecto el comando `bower install`.
- Ejecutar en la carpeta del proyecto el comando `grunt build`, lo cual genera la carpeta dist.
- Copiar la carpeta dist en un servidor web ( de preferencia Apache).

En caso de querer ejecutar localmente a modo de prueba se puede usar el comando `grunt serve`.


