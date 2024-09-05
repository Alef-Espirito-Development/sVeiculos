// routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Rota para adicionar um veículo
router.post('/', vehicleController.addVehicle);

// Rota para listar todos os veículos
router.get('/', vehicleController.getVehicles);

// Rota para listar os veículos pelo id
router.get('/:id', vehicleController.getVehicles);

// Rota para atualizar um veículo
router.put('/:id', vehicleController.updateVehicle);

// Rota para deletar um veículo
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;
