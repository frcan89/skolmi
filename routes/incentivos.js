// routes/incentivos.js
const express = require('express');
const router = express.Router();
const Incentivo = require('../models/Incentivo');

// Obtener todos los incentivos
router.get('/', async (req, res) => {
  try {
    const incentivos = await Incentivo.findAll();
    res.json(incentivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un incentivo por ID
router.get('/:id', async (req, res) => {
  try {
    const incentivo = await Incentivo.findByPk(req.params.id);
    if (incentivo) {
      res.json(incentivo);
    } else {
      res.status(404).json({ error: 'Incentivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo incentivo
router.post('/', async (req, res) => {
  try {
    const incentivo = await Incentivo.create(req.body);
    res.status(201).json(incentivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un incentivo
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Incentivo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedIncentivo = await Incentivo.findByPk(req.params.id);
      res.json(updatedIncentivo);
    } else {
      res.status(404).json({ error: 'Incentivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un incentivo
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Incentivo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send('Incentivo eliminado');
    } else {
      res.status(404).json({ error: 'Incentivo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
