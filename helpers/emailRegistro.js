import nodemailer from 'nodemailer';
import emailRegisterTemplate from './emailRegisterTemplate.js';
 
const emailRegistro = async (datos) => {
    const {email, nombre, token} = datos;
 
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });   
 
    // Enviar email
    const info = await transport.sendMail({
        from: '"APV - Administrador Pacientes Veterinaria" <apv@correo.com>', // sender address
        to: email, // list of receivers
        subject: "APV - Comprueba tu cuenta ✔", // Subject line
        text: "Comprueba tu cuenta APV", // plain text body
        html: emailRegisterTemplate({nombre, token, frontendUrl: process.env.FRONTEND_URL}),
      });
 
    console.log('Mensaje enviado: %s', info.messageId);
};
 
export default emailRegistro;