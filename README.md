<h1 align="center"> Conversor de Divisas </h1>

_Aplicación web para hacer conversión de monedas de diferentes paises._ 🚀

##**Stack tecnológico** 🛠️
**Backend:** 
```
**Lenguaje:** JavaScript con Node.js (fácil de aprender y usar).
**Framework:** Express.js (ligero y flexible para crear APIs REST).
**Base de datos:** PostgreSQL (relacional, robusta y gratuita).
```
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com)
* [PostgreSQL](https://www.postgresql.org)

##**Frontend:** 
```
* **Framework:** React.js (popular, basado en componentes y usa JavaScript).
```
* [React.js](https://react.dev)

##**Control de versiones:**
* [Git/GitHub](https://git-scm.com)
  
##**Herramientas adicionales:**
```
**Editor**: Visual Studio Code (gratis y con muchas extensiones).
**Cliente HTTP:** Postman (para probar el API).
```
## Instrucciones de instalación 📋

##**Configuración del entorno**
**Instalar herramientas**
```
1) **Descargar Visual Studio Code:** Descargarlo desde [Visual Studio Code](https://code.visualstudio.com) e instalarlo.
2) **Node.js y npm:** Descargar Node.js desde [Node.js](https://nodejs.org/en). Instalar y verifica en la terminal con: node -v ó npm -v
```
**Git:**
```
1) Descárgalo desde git-scm.com e instálalo.
2) Verifica con: git --version
```
**PostgreSQL:**
Descárgalo desde * [PostgreSQL](https://www.postgresql.org) e instalarlo.
Durante la instalación, se debe configurar una contraseña para el usuario postgres.
### Clona el repositorio: 🔧
```
git clone https://github.com/tu-usuario/currency-converter.git
npm install
npm start
```

**FrontEnd**
### 1. Clona el repositorio: 🔧
Copia la URL del repositorio https://github.com/jdbarajass/conversion_divisas.git
En la terminal, en una carpeta vacía, ejecuta:
En bash
```
git clone https://github.com/jdbarajass/conversion_divisas.git
npm install
npm start
```
**BackEnd**
## Instrucciones de instalación
```
cd backend
npm install
node index.js
```
##**Base de Datos**
Configura PostgreSQL con la base de datos currency_converter y la tabla exchange_rates.
Modelo de datos
Tabla exchange_rates:

id: SERIAL PRIMARY KEY
from_currency: VARCHAR(3)
to_currency: VARCHAR(3)
rate: DECIMAL(10,4)
last_updated: TIMESTAMP



