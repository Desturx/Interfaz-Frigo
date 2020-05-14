# Interfaz-Frigo
Práctica de usabilidad y accesibilidad. Diseño de la interfaz de un frigorífico.


# Uso
Usabilidad y Accesibilidad. Práctica 2. Interfaz para frigorífico.
------------------------------------------------------------------

El software del frigorífico está distribuido en las siguientes carpetas:

- cliente: Carpeta donde se almacena las web del emulador y de la interfaz del alumno
   - emulador: Carpeta donde se encuentra la web del emulador (NO MODIFICAR)
   - interfaz: Carpeta donde el estudiante alojará su web de interfáz (ahora hay un pequeño ejemplo)
   - electro.js: Librería para el acceso al electrodoméstico. Se comunica con el servidor (NO MODIFICAR)
   - index.html: Página web índice del cliente web (NO MODIFICAR)
- servidor: Carpeta donde se encuentra el servidor del emulador (NO MODIFICAR)



Instalación
-----------

El servidor está implementado con NodeJS.

* Instalar NodeJS en el equipo desde https://nodejs.org/
* Desde la carpeta 'servidor' ejecutar:

  npm install

  Esto instalará las librerias que necesita el emulador: 'express' y 'websocket'



Iniciar el servidor
-------------------

Cada vez que se quiera iniciar el servidor, desde la carpeta 'servidor' ejecutar:

node .

Esto lanzará el servidor en el puerto 8080.
Si se desea lanzar otro puerto utilizar la opción '-p <puerto>':

node . -p 3000

Se podrá acceder a la web desde la propia máquina en la dirección:

http://localhost:8080/