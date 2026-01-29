import nodemailer from 'nodemailer';
import emailOlvidePasswordTemplate from './emailOlvidePasswordTemplate.js';
 
const emailOlvidePassword = async (datos) => {
    const {email, nombre, token} = datos;
 
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });   
 
    const info = await transport.sendMail({
        from: '"APV - Administrador Pacientes Veterinaria" <apv@correo.com>', 
        to: email, 
        subject: "Reestablece tu Password", 
        text: "Reestablece tu Password", 
        html: emailOlvidePasswordTemplate({nombre, token, frontendUrl: process.env.FRONTEND_URL}),
       });
 
    console.log('Mensaje enviado: %s', info.messageId);
};
 
export default emailOlvidePassword;