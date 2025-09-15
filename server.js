const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

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
    title: 'Inicio - Mi Portafolio',
    page: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Acerca de Mí - Mi Portafolio',
    page: 'about'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Proyectos - Mi Portafolio',
    page: 'projects'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contacto - Mi Portafolio',
    page: 'contact'
  });
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Página no encontrada - Mi Portafolio',
    page: '404'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📁 Directorio de trabajo: ${__dirname}`);
});
