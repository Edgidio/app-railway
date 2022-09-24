// obtener mysql2
const mysql = require('mysql2');
// Importar modulos de NODE
const {promisify} = require('util');
    // creando la conexion pool
const pool = mysql.createPool({
    host: process.env.host_db || 'localhost',
    user: process.env.user_db || 'root',
    password: process.env.password_db || '1q2w3e4rt',
    database: process.env.name_database_db || 'railway_ed',
    ssl: {
        rejectUnauthorized: false
    }
});

// Extablecer la nonexion a la base de datos
pool.getConnection( (err, con) => {
    if ( err ){
        console.log('No se puedo conectar a la base de datos');
    };

    console.log('Conectado correctamente a Railway');
});

pool.query = promisify(pool.query);

module.exports = pool;
