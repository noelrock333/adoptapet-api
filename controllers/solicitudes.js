/*  Archivo controllers/solicitudes.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Solicitud = require('../models/Solicitud')

function crearSolicitud(req, res) {
  // Instanciaremos una nueva solicitud utilizando la clase solicitud
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtenerSolicitudes(req, res) {
  // Simulando dos solicitudes y respondiendolas
  var solicitud1 = new Solicitud(1, 1, '10/03/2021', 1)
  var solicitud2 = new Solicitud(2, 1, '9/03/2021', 2)
  res.send([solicitud1, solicitud2])
}

function modificarSolicitud(req, res) {
  // simulando una solicitud previamente existente que el usuario utili
  var solicitud1 = new Solicitud(req.params.id, 1, '10/03/2021', 1)
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarSolicitud(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud
}