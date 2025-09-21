require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Nodemailer para Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oryvia.empresa@gmail.com', // Tu email de Gmail
    pass: process.env.GMAIL_PASSWORD || 'tu_app_password_aqui' // App Password de Gmail
  }
});

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio',
    page: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Acerca de Mí',
    page: 'about'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Proyectos',
    page: 'projects'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contacto - ORYVIA',
    page: 'contact'
  });
});

// Ruta para manejar el envío del formulario de contacto
app.post('/contact', async (req, res) => {
  try {
    const { name, company, position, email, service, message } = req.body;

    // Validación básica
    if (!name || !company || !position || !email || !service || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor, completa todos los campos requeridos.' 
      });
    }

    // Configurar el email
    const mailOptions = {
      from: 'oryvia.empresa@gmail.com',
      to: 'oryvia.empresa@gmail.com', // Email donde quieres recibir los mensajes
      subject: `Nueva consultoría de ${name} - ${company}`,
      html: `
        <h2>Nueva Solicitud de Consultoría</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Cargo:</strong> ${position}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio de Interés:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Enviado desde el sitio web de ORYVIA</em></p>
      `
    };

    // Enviar email
    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true, 
      message: '¡Solicitud de consultoría enviada correctamente! Te contactaremos pronto.' 
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' 
    });
  }
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada',
    page: '404'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📁 Directorio de trabajo: ${__dirname}`);
});
