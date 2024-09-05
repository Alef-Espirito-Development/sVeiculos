// controllers/vehicleController.js
const { db } = require('../firebase');
const Vehicle = require('../models/vehicleModel');

// Função para adicionar um veículo ao Firestore
exports.addVehicle = async (req, res) => {
  try {
    const { proprietario, licensePlate, documento, cor, valorRecebido } = req.body;

    // Verifica se valorRecebido é uma string e remove formatação de moeda
    const parsedValorRecebido = typeof valorRecebido === 'string'
      ? parseFloat(valorRecebido.replace(/[^\d]/g, ''))
      : valorRecebido; // Assume que já é um número

    // Verifica se já existe um veículo com a mesma placa
    const existingVehicleSnapshot = await db.collection('vehicles').where('licensePlate', '==', licensePlate).get();
    if (!existingVehicleSnapshot.empty) {
      return res.status(400).json({ error: 'Já existe um veículo cadastrado com essa placa.' });
    }

    const vehicleRef = db.collection('vehicles').doc(); // Cria uma referência ao novo documento
    const vehicle = new Vehicle(vehicleRef.id, proprietario, licensePlate, documento, cor, parsedValorRecebido, new Date()); // Cria uma instância do modelo Vehicle com data de cadastro

    await vehicleRef.set({ ...vehicle, dataCadastro: new Date() }); // Grava o veículo no Firestore
    res.status(201).json({ message: 'Veículo adicionado com sucesso!', vehicle });
  } catch (error) {
    console.error('Erro ao adicionar veículo:', error.message);
    res.status(500).json({ error: 'Erro ao adicionar veículo.', details: error.message });
  }
};

// Função para listar todos os veículos do Firestore
exports.getVehicles = async (req, res) => {
  try {
    const snapshot = await db.collection('vehicles').get(); // Obtém todos os documentos da coleção 'vehicles'
    const vehicles = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        dataCadastro: data.dataCadastro ? data.dataCadastro.toDate().toISOString() : null // Converte a data para ISO string
      };
    });

    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Erro ao buscar veículos:', error.message);
    res.status(500).json({ error: 'Erro ao buscar veículos.', details: error.message });
  }
};

// Função para atualizar um veículo no Firestore
exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { proprietario, licensePlate, documento, cor, valorRecebido } = req.body;

    const parsedValorRecebido = typeof valorRecebido === 'string'
      ? parseFloat(valorRecebido.replace(/[^\d]/g, ''))
      : valorRecebido; // Assume que já é um número

    const vehicleRef = db.collection('vehicles').doc(id);
    await vehicleRef.update({ proprietario, licensePlate, documento, cor, valorRecebido: parsedValorRecebido });

    res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error.message);
    res.status(500).json({ error: 'Erro ao atualizar veículo.', details: error.message });
  }
};

// Função para deletar um veículo no Firestore
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const vehicleRef = db.collection('vehicles').doc(id);
    await vehicleRef.delete();

    res.status(200).json({ message: 'Veículo excluído com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar veículo:', error.message);
    res.status(500).json({ error: 'Erro ao deletar veículo.', details: error.message });
  }
};

// Função para recuperar um veículo pelo ID
exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicleRef = db.collection('vehicles').doc(id);
    const doc = await vehicleRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Veículo não encontrado.' });
    }

    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error('Erro ao buscar veículo:', error.message);
    res.status(500).json({ error: 'Erro ao buscar veículo.', details: error.message });
  }
};

