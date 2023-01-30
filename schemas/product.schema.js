const Joi = require('joi');

const id = Joi.number().integer();
const codigo = Joi.string().min(3).max(20);
const nombre = Joi.string().min(3).max(15);
const precio = Joi.number().integer().min(2);
const fabricado = Joi.string().min(3).max(50);
const fechaVencimiento = Joi.date();

const createProductSchema = Joi.object({
  codigo: codigo.required(),
  nombre: nombre.required(),
  precio: precio.required(),
  fabricado: fabricado.required(),
  fechaVencimiento: fechaVencimiento.required()
});

const updateProductSchema = Joi.object({
  codigo: codigo.required(),
  nombre: nombre.required(),
  precio: precio.required(),
  fabricado: fabricado.required(),
  fechaVencimiento: fechaVencimiento.required()
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
