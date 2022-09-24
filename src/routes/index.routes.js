const express = require('express');
const router = express.Router();

// importar conexion mysql
const pool = require('../conexion_base_de_datos');

// rutas
router.get('/', (req, res) => {
    res.send('Railway funcionando perfectamente')
});

// rutas
router.get('/database', async (req, res) => {

    try {
            // conexion mysql
    const consulta = await pool.query('SELECT * FROM Informacion');

    res.json({
        info: "Esto es una aplicación súper básica para probar las bondades que ofrece Railway",
        consulta
    })
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;