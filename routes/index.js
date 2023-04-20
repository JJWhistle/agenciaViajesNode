import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
} from '../controllers/paginasControllers.js';

import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

const rout = express.Router();

rout.get('/', paginaInicio);
rout.get('/nosotros', paginaNosotros);
rout.get('/viajes', paginaViajes);
rout.get('/viajes/:slug', paginaDetalleViaje);
rout.get('/testimoniales', paginaTestimoniales);
rout.post('/testimoniales', guardarTestimonial);

export default rout;