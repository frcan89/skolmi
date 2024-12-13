const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const usuariosRouter = require('./routes/usuarios');
const referidosRouter = require('./routes/referidos');
const incentivosRouter = require('./routes/incentivos');
const notificacionesRouter = require('./routes/notificaciones');
const usuarioIncentivosRouter = require('./routes/usuarioIncentivos');
const alumnosRouter = require('./routes/alumnos');
// Importa las demás rutas aquí

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/usuarios', usuariosRouter);
app.use('/referidos', referidosRouter);
app.use('/incentivos', incentivosRouter);
app.use('/notificaciones', notificacionesRouter);
app.use('/usuarioIncentivos', usuarioIncentivosRouter);
app.use('/alumnos', alumnosRouter);
// Usa las demás rutas aquí

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error al conectar a la base de datos:', error);
});
