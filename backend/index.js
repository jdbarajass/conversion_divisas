const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Configurar middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'conversor_divisas',
    password: '5102',
    port: 5432,
});

// Ruta para obtener todas las tasas
app.get('/rates', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM exchange_rates');
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para convertir monto
app.post('/convert', async (req, res) => {
    const { from, to, amount } = req.body;
    try {
        const result = await pool.query(
            'SELECT rate FROM exchange_rates WHERE from_currency = $1 AND to_currency = $2',
            [from, to]
        );
        if (result.rows.length === 0) {
            return res.status(404).send('Tasa no encontrada');
        }
        const rate = result.rows[0].rate;
        const convertedAmount = amount * rate;
        res.json({ result: convertedAmount });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});