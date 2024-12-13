// routes/notificaciones.js
const express = require('express');
const router = express.Router();
const Notificacion = require('../models/Notificacion');

// Obtener todas las notificaciones
router.get('/', async (req, res) => {
  try {
    const notificaciones = await Notificacion.findAll();
    res.json(notificaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener una notificación por ID
router.get('/:id', async (req, res) => {
  try {
    const notificacion = await Notificacion.findByPk(req.params.id);
    if (notificacion) {
      res.json(notificacion);
    } else {
      res.status(404).json({ error: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear una nueva notificación
router.post('/', async (req, res) => {
  try {
    const notificacion = await Notificacion.create(req.body);
    res.status(201).json(notificacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una notificación
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Notificacion.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedNotificacion = await Notificacion.findByPk(req.params.id);
      res.json(updatedNotificacion);
    } else {
      res.status(404).json({ error: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar una notificación
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Notificacion.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send('Notificación eliminada');
    } else {
      res.status(404).json({ error: 'Notificación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
