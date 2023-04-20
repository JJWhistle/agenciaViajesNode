import { Testimonial } from '../models/Testimoniales.js';
import {Viaje} from '../models/Viajes.js';

const paginaInicio = async (req, res) => {

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonial.findAll({limit: 3}));
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error);
    }
    
}

const paginaNosotros = async (req, res) => {

    try {
        await res.render('nosotros', {
            pagina: 'Nosotros'
        })
    } catch (error) {
        console.log(error);
    }
    
}

const paginaViajes = async (req, res) => {

    // Consultar DB
    try {
        const viajes = await Viaje.findAll();
        
        await res.render('viajes', {
            pagina: 'Próximos Viajes',
            viajes,
        })

    } catch (error) {
        console.log(error);
    }
    
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
    
}

// Muestra viaje por slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({where: {slug}});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}