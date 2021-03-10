/*  Archivo controllers/mascotas.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  console.log(req.body)
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
  // Simulando dos usuarios y respondiendolos
  var mascota1 = new Mascota(1, 'Firulais', 'pug', 'http://foto.del.perro')
  var mascota2 = new Mascota(2, 'Blacky', 'chihuahua', 'http://foto.del.perro')
  res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
  // simulando un usuario previamente existente que el usuario utili
  var mascota1 = new Mascota(req.params.id, 'Firulais', 'pug', 'http://foto.del.perro')
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminarMascota(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
}