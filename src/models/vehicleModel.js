// models/vehicleModel.js
class Vehicle {
  constructor(id, owner, licensePlate, document, color, valorRecebido, createdAt) {
    this.id = id;
    this.owner = owner;
    this.licensePlate = licensePlate;
    this.document = document;
    this.color = color;
    this.valorRecebido = valorRecebido;
    this.createdAt = createdAt;
  }
}

module.exports = Vehicle;
