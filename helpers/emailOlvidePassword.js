import nodemailer from 'nodemailer';
import emailOlvidePasswordTemplate from './emailOlvidePasswordTemplate.js';
 
const emailOlvidePassword = async (datos) => {
    const {email, nombre, token} = datos;
 
    const port = Number(process.env.EMAIL_PORT) || 587;
    const secure = port === 465;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port,
        secure,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
      });

    try {
      const info = await transport.sendMail({
        from: '"APV - Administrador Pacientes Veterinaria" <apv@correo.com>',
        to: email,
        subject: "Reestablece tu Contraseña",
        text: "Reestablece tu Contraseña",
        html: emailOlvidePasswordTemplate({nombre, token, frontendUrl: process.env.FRONTEND_URL}),
      });

      console.log('Mensaje enviado: %s', info.messageId);
      return info;
    } catch (error) {
      console.error('Error enviando email de olvide-password:', error);
      throw error;
    }
};
 
export default emailOlvidePassword;