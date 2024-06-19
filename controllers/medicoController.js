const { Medico } = require('../models');

module.exports = {
  // Create a new doctor
  async createMedico(req, res) {
    try {
      const { nome, especialidade } = req.body;
      const medico = await Medico.create({ nome, especialidade });
      return res.status(201).json(medico);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all doctors
  async getAllMedicos(req, res) {
    try {
      const medicos = await Medico.findAll();
      return res.status(200).json(medicos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a single doctor by id
  async getMedicoById(req, res) {
    try {
      const { id } = req.params;
      const medico = await Medico.findByPk(id);
      if (!medico) {
        return res.status(404).json({ error: 'Médico não encontrado' });
      }
      return res.status(200).json(medico);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a doctor by id
  async updateMedico(req, res) {
    try {
      const { id } = req.params;
      const { nome, especialidade } = req.body;
      const medico = await Medico.findByPk(id);
      if (!medico) {
        return res.status(404).json({ error: 'Médico não encontrado' });
      }
      await medico.update({ nome, especialidade });
      return res.status(200).json(medico);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a doctor by id
  async deleteMedico(req, res) {
    try {
      const { id } = req.params;
      const medico = await Medico.findByPk(id);
      if (!medico) {
        return res.status(404).json({ error: 'Médico não encontrado' });
      }
      await medico.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
