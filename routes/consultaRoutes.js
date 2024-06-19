const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.post('/consulta', consultaController.createConsulta);
router.get('/consultas', consultaController.getAllConsultas);
router.get('/consulta/:id', consultaController.getConsultaById);
router.put('/consulta/:id', consultaController.updateConsulta);
router.delete('/consulta/:id', consultaController.deleteConsulta);

module.exports = router;