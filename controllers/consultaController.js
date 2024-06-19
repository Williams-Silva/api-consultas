const { Consulta, Cliente, Medico } = require('../models');

module.exports = {
  // Create a new consultation
  async createConsulta(req, res) {
    try {
      const { data, descricao, ClienteId, MedicoId } = req.body;
      const consulta = await Consulta.create({ data, descricao, ClienteId, MedicoId });
      return res.status(201).json(consulta);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all consultations
  async getAllConsultas(req, res) {
    try {
      const consultas = await Consulta.findAll({
        include: [
          { model: Cliente, attributes: ['nome', 'email'] },
          { model: Medico, attributes: ['nome', 'especialidade'] }
        ]
      });
      return res.status(200).json(consultas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a single consultation by id
  async getConsultaById(req, res) {
    try {
      const { id } = req.params;
      const consulta = await Consulta.findByPk(id, {
        include: [
          { model: Cliente, attributes: ['nome', 'email'] },
          { model: Medico, attributes: ['nome', 'especialidade'] }
        ]
      });
      if (!consulta) {
        return res.status(404).json({ error: 'Consulta não encontrada'});
      }
      return res.status(200).json(consulta);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a consultation by id
  async updateConsulta(req, res) {
    try {
      const { id } = req.params;
      const { data, descricao, ClienteId, MedicoId } = req.body;
      const consulta = await Consulta.findByPk(id);
      if (!consulta) {
        return res.status(404).json({ error: 'Consulta não encontrada' });
      }
      await consulta.update({ data, descricao, ClienteId, MedicoId });
      return res.status(200).json(consulta);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a consultation by id
  async deleteConsulta(req, res) {
    try {
      const { id } = req.params;
      const consulta = await Consulta.findByPk(id);
      if (!consulta) {
        return res.status(404).json({ error: 'Consulta não encontrada' });
      }
      await consulta.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
