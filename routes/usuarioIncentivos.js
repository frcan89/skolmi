// routes/usuarioIncentivos.js
const express = require('express');
const router = express.Router();
const UsuarioIncentivo = require('../models/UsuarioIncentivo');

// Obtener todos los usuarios con incentivos
router.get('/', async (req, res) => {
  try {
    const usuarioIncentivos = await UsuarioIncentivo.findAll();
    res.json(usuarioIncentivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un usuario con incentivo por ID
router.get('/:id', async (req, res) => {
  try {
    const usuarioIncentivo = await UsuarioIncentivo.findByPk(req.params.id);
    if (usuarioIncentivo) {
      res.json(usuarioIncentivo);
    } else {
      res.status(404).json({ error: 'UsuarioIncentivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario con incentivo
router.post('/', async (req, res) => {
  try {
    const usuarioIncentivo = await UsuarioIncentivo.create(req.body);
    res.status(201).json(usuarioIncentivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un usuario con incentivo
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await UsuarioIncentivo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUsuarioIncentivo = await UsuarioIncentivo.findByPk(req.params.id);
      res.json(updatedUsuarioIncentivo);
    } else {
      res.status(404).json({ error: 'UsuarioIncentivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un usuario con incentivo
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await UsuarioIncentivo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send('UsuarioIncentivo eliminado');
    } else {
      res.status(404).json({ error: 'UsuarioIncentivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
