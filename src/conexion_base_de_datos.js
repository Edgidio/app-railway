// obtener mysql2
const mysql = require('mysql2');
// Importar modulos de NODE
const {promisify} = require('util');
    // creando la conexion pool
const pool = mysql.createPool({
    host: process.env.host_db || 'containers-us-west-69.railway.app',
    user: process.env.user_db || 'root',
    password: process.env.password_db || 'iC8BafIA6ffdqMsvPOye',
    database: process.env.name_database_db || 'railway_ed',
    ssl: {
        rejectUnauthorized: false
    },
    port: process.env.port_db || 680
});

// Extablecer la nonexion a la base de datos
pool.getConnection( (err, con) => {
    if ( err ){
        return console.log('No se puedo conectar a la base de datos', err);
    };

    console.log('Conectado correctamente a Railway');
});

pool.query = promisify(pool.query);

module.exports = pool;
