// routes/alumnos.js
const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

// Obtener todos los alumnos
router.get('/', async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un alumno por ID
router.get('/:id', async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ error: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo alumno
router.post('/', async (req, res) => {
  try {
    const alumno = await Alumno.create(req.body);
    res.status(201).json(alumno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un alumno
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Alumno.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedAlumno = await Alumno.findByPk(req.params.id);
      res.json(updatedAlumno);
    } else {
      res.status(404).json({ error: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un alumno
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Alumno.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send('Alumno eliminado');
    } else {
      res.status(404).json({ error: 'Alumno no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
