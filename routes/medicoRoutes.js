const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

router.post('/medico', medicoController.createMedico);
router.get('/medicos', medicoController.getAllMedicos);
router.get('/medico/:id', medicoController.getMedicoById);
router.put('/medico:id', medicoController.updateMedico);
router.delete('/medico:id', medicoController.deleteMedico);

module.exports = router;