const express = require('express');
const app = express();

// configuraciones de express
app.set('PORT', process.env.PORT || 8080);

// middelewares

// rutas
app.use('/', require('./routes/index.routes'));

//correro servidor
app.listen(app.get('PORT'), () => {
    console.log(`Server run on port ${app.get('PORT')}`);
    require('./conexion_base_de_datos');
});