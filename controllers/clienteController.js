const { Cliente } = require('../models');

module.exports = {
  // Create a new client
  async createCliente(req, res) {
    try {
      const { nome, email } = req.body;
      const cliente = await Cliente.create({ nome, email });
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get all clients
  async getAllClientes(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Get a single client by id
  async getClienteById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Update a client by id
  async updateCliente(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      await cliente.update({ nome, email });
      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Delete a client by id
  async deleteCliente(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
      await cliente.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
