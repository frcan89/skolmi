// routes/referidos.js
const express = require('express');
const router = express.Router();
const Referido = require('../models/Referido');

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
    const referido = await Referido.create(req.body);
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
