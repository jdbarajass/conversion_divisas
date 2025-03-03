# Conversor de Divisas

_Aplicación web para hacer conversión de monedas de diferentes países._ 🚀

## Stack Tecnológico 🛠️

### Backend
- **Lenguaje:** JavaScript con Node.js (fácil de aprender y usar).
- **Framework:** Express.js (ligero y flexible para crear APIs REST).
- **Base de datos:** PostgreSQL (relacional, robusta y gratuita).

Recursos:
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com)
- [PostgreSQL](https://www.postgresql.org)

### Frontend
- **Framework:** React.js (popular, basado en componentes y usa JavaScript).

Recursos:
- [React.js](https://react.dev)

### Control de Versiones
- [Git/GitHub](https://git-scm.com)

### Herramientas Adicionales
- **Editor:** Visual Studio Code (gratis y con muchas extensiones).
- **Cliente HTTP:** Postman (para probar el API).

---

## Instrucciones de Instalación y Configuración 📋

### 1. Configuración del Entorno

**Instalar Herramientas**

1. **Visual Studio Code:** Descárgalo e instálalo desde [Visual Studio Code](https://code.visualstudio.com).
2. **Node.js y npm:** Descarga e instala Node.js desde [Node.js](https://nodejs.org/en). Verifica la instalación ejecutando:
   ```bash
   node -v
   npm -v
   ```
3. **Git:** Descárgalo e instálalo desde [Git](https://git-scm.com) y verifica la instalación:
   ```bash
   git --version
   ```
4. **PostgreSQL:** Descárgalo e instálalo desde [PostgreSQL](https://www.postgresql.org). Durante la instalación, configura una contraseña para el usuario `postgres`.

### 2. Clonar el Repositorio

Clona el repositorio principal y accede a la carpeta del proyecto:
```bash
git clone https://github.com/jdbarajass/conversion_divisas.git
cd conversion_divisas
```

### 3. Configuración del Backend

#### 3.1 Instalar Dependencias del Backend

Accede a la carpeta `backend` e instala las dependencias necesarias:
```bash
cd backend
npm install
```

#### 3.2 Configurar la Base de Datos

1. Abre PostgreSQL (puedes usar pgAdmin o la terminal).
2. Crea la base de datos `currency_converter`:
   ```sql
   CREATE DATABASE currency_converter;
   ```
3. Conéctate a la base de datos:
   ```sql
   \c currency_converter
   ```
4. Crea la tabla `exchange_rates`:
   ```sql
   CREATE TABLE exchange_rates (
       id SERIAL PRIMARY KEY,
       from_currency VARCHAR(3) NOT NULL,
       to_currency VARCHAR(3) NOT NULL,
       rate DECIMAL(10, 4) NOT NULL,
       last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
5. Inserta datos de ejemplo:
   ```sql
   INSERT INTO exchange_rates (from_currency, to_currency, rate) VALUES
   ('USD', 'EUR', 0.85),
   ('EUR', 'USD', 1.18),
   ('USD', 'COP', 4200.00),
   ('COP', 'USD', 0.00024);
   ```

#### 3.3 Configurar la Conexión a la Base de Datos

En el archivo `backend/index.js`, configura la conexión a PostgreSQL actualizando la contraseña según corresponda:
```javascript
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'currency_converter',
    password: 'tu-contraseña',  // Cambia esto por tu contraseña de PostgreSQL
    port: 5432,
});
```

#### 3.4 Ejecutar el Backend

Inicia el servidor del backend:
```bash
node index.js
```
El servidor se ejecutará en [http://localhost:5000](http://localhost:5000).

### 4. Configuración del Frontend

#### 4.1 Instalar Dependencias del Frontend

Desde la raíz del proyecto, accede a la carpeta `frontend` e instala las dependencias:
```bash
cd ../frontend
npm install
```

#### 4.2 Ejecutar el Frontend

Inicia la aplicación frontend:
```bash
npm start
```
La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000).

---

## Uso de la Aplicación

1. **Seleccionar Monedas:** Elige la moneda de origen y la moneda de destino desde los menús desplegables.
2. **Ingresar Monto:** Escribe el monto que deseas convertir.
3. **Convertir:** Haz clic en el botón "Convertir" para ver el resultado.

### Probar el API con Postman (Opcional)

- **Obtener tasas de cambio:**
  ```http
  GET http://localhost:5000/rates
  ```
- **Convertir un monto:**
  Envía una solicitud POST a:
  ```http
  POST http://localhost:5000/convert
  ```
  Con el siguiente cuerpo JSON:
  ```json
  {
      "from": "USD",
      "to": "EUR",
      "amount": 100
  }
  ```

---
