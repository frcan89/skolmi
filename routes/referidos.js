// routes/referidos.js
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const Referido = require('../models/Referido');
const Usuario = require('../models/Usuario');
const e = require('express');

// generar apikey
async function generarApiKeyUnica() {
  let apiKey;
  let existe;

  do {
    // Genera una apiKey aleatoria
    apiKey = uuidv4();

    // Verifica si la apiKey ya existe en la base de datos
    existe = await Referido.findOne({ where: { apiKey } });
  } while (existe);

  return apiKey;
}

// Obtener usuario referidor por ID
async function buscarUsuarioPorApiKey(apiKey) {
  try {
    const usuario = await Usuario.findOne({ where: { apiKey } });
    if (usuario) {
      console.log('Usuario encontrado:', usuario.dataValues.id);
      return usuario.dataValues.id;
    } else {
      console.log('Usuario no encontrado');
      return 1;
    }
  } catch (error) {
    console.error('Error al buscar el usuario:', error);
    throw error;
  }
}

// Obtener todos los referidos
router.get('/', async (req, res) => {
  try {
    const referidos = await Referido.findAll();
    res.json(referidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un referido por ID
router.get('/:id', async (req, res) => {
  try {
    const referido = await Referido.findByPk(req.params.id);
    if (referido) {
      res.json(referido);
    } else {
      res.status(404).json({ error: 'Referido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo referido
router.post('/', async (req, res) => {
  try {
    const apiKey = await generarApiKeyUnica();
    console.log(req.body.userid)
    const usuarioReferidor = await buscarUsuarioPorApiKey(req.body.userid);
    const data = {
      apiKey: apiKey,
      nombre: req.body.name,
      email: req.body.email,
      estado: "Activo",
      fechaRegistro: new Date(),
      usuarioReferidor: usuarioReferidor
    }
    const referido = await Referido.create(data);
    console.log(data);
    res.status(201).json(referido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un referido
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Referido.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedReferido = await Referido.findByPk(req.params.id);
      res.json(updatedReferido);
    } else {
      res.status(404).json({ error: 'Referido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un referido
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Referido.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send('Referido eliminado');
    } else {
      res.status(404).json({ error: 'Referido no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
