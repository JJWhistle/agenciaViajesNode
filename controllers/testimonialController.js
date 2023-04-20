import {Testimonial} from '../models/Testimoniales.js';
const guardarTestimonial = async (req, res) => {
    try {
        const {nombre, email, mensaje} = await req.body;
        const errores = [];

        if(nombre.trim() === '') {
            errores.push({mensaje: 'El nombre esta vacio'})
        }

        if(email.trim() === '') {
            errores.push({mensaje: 'El email esta vacio'})
        }
        
        if(mensaje.trim() === '') {
            errores.push({mensaje: 'El mensaje esta vacio'})
        }
        
        if(errores.length > 0) {
            // Consultar Testimoniales existentes
                const testimoniales = await Testimonial.findAll();

            // Mostrar vista con errores

            res.render('testimoniales', {
                pagina: 'Testimoniales',
                errores,
                nombre,
                email,
                mensaje,
                testimoniales
            })
        } else {
            // Almacenar datos en BD

            try {
                await Testimonial.create({
                    nombre,
                    email,
                    mensaje
                });

                res.redirect('/testimoniales')
            } catch (error) {
                console.log(error);
            }

        }
    } catch (error) {
        console.log(error);
    }
}

export {
    guardarTestimonial
}