# Mi Portafolio Personal

Un portafolio web moderno y responsivo desarrollado con Node.js, Express y EJS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación Intuitiva**: Menú de navegación fijo con indicadores de página activa
- **Secciones Completas**:
  - Página de inicio con hero section y proyectos destacados
  - Acerca de mí con timeline de experiencia
  - Galería de proyectos con filtros
  - Página de contacto con formulario funcional
- **Animaciones**: Efectos de scroll, transiciones suaves y animaciones CSS
- **Optimizado**: Carga rápida y SEO friendly

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Template Engine**: EJS
- **Estilos**: CSS Grid, Flexbox, Variables CSS
- **Iconos**: Font Awesome
- **Fuentes**: Google Fonts (Inter)

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── public/
│   ├── css/
│   │   └── style.css          # Estilos principales
│   └── js/
│       └── main.js            # JavaScript del frontend
├── views/
│   ├── layouts/
│   │   └── main.ejs           # Layout principal
│   ├── index.ejs              # Página de inicio
│   ├── about.ejs              # Acerca de mí
│   ├── projects.ejs           # Proyectos
│   ├── contact.ejs            # Contacto
│   └── 404.ejs                # Página de error 404
├── server.js                  # Servidor principal
├── package.json               # Dependencias y scripts
└── README.md                  # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene incluido con Node.js)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes git
   git clone <tu-repositorio>
   cd mi-portafolio
   
   # O simplemente navega a la carpeta del proyecto
   cd mi-portafolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor**
   ```bash
   # Modo desarrollo (con nodemon para auto-reload)
   npm run dev
   
   # O modo producción
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuración Personal

### Personalizar Información Personal

1. **En `views/layouts/main.ejs`**:
   - Cambia "Mi Portafolio" por tu nombre
   - Actualiza los enlaces de redes sociales

2. **En `views/index.ejs`**:
   - Reemplaza "Tu Nombre" con tu nombre real
   - Modifica la descripción profesional
   - Actualiza las habilidades técnicas

3. **En `views/about.ejs`**:
   - Personaliza tu historia y experiencia
   - Actualiza el timeline de experiencia profesional
   - Modifica la información educativa

4. **En `views/projects.ejs`**:
   - Reemplaza los proyectos de ejemplo con los tuyos
   - Actualiza las tecnologías utilizadas
   - Agrega enlaces reales a GitHub y demos

5. **En `views/contact.ejs`**:
   - Actualiza tu información de contacto
   - Modifica los enlaces de redes sociales
   - Personaliza el mensaje de disponibilidad

### Personalizar Estilos

- **Colores**: Modifica las variables CSS en `public/css/style.css`
- **Fuentes**: Cambia las fuentes de Google Fonts en `views/layouts/main.ejs`
- **Layout**: Ajusta el diseño en los archivos CSS

### Agregar Funcionalidades

- **Formulario de Contacto**: Integra con servicios como EmailJS, Formspree o tu propio backend
- **Blog**: Agrega una sección de blog con un CMS
- **Base de Datos**: Conecta con MongoDB o PostgreSQL para proyectos dinámicos
- **Autenticación**: Implementa login para panel administrativo

## 📱 Características Responsivas

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**:
  - Móvil: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
- **Navegación Móvil**: Menú hamburguesa funcional
- **Imágenes Adaptativas**: Se ajustan automáticamente al tamaño de pantalla

## 🎨 Personalización de Colores

El proyecto utiliza variables CSS para facilitar la personalización:

```css
:root {
    --primary-color: #6366f1;      /* Color principal */
    --secondary-color: #f59e0b;    /* Color secundario */
    --accent-color: #10b981;       /* Color de acento */
    --text-primary: #1f2937;       /* Texto principal */
    --text-secondary: #6b7280;     /* Texto secundario */
    --bg-primary: #ffffff;         /* Fondo principal */
    --bg-secondary: #f9fafb;       /* Fondo secundario */
}
```

## 🚀 Despliegue

### Opciones de Despliegue

1. **Heroku**:
   ```bash
   # Instalar Heroku CLI
   heroku create tu-portafolio
   git push heroku main
   ```

2. **Vercel**:
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   vercel
   ```

3. **Netlify**:
   - Conecta tu repositorio de GitHub
   - Configura el build command: `npm install && npm start`

4. **VPS/Servidor Propio**:
   ```bash
   # Instalar PM2 para gestión de procesos
   npm install -g pm2
   pm2 start server.js --name "portafolio"
   ```

## 📝 Scripts Disponibles

- `npm start`: Ejecuta el servidor en modo producción
- `npm run dev`: Ejecuta el servidor en modo desarrollo con nodemon
- `npm test`: Ejecuta las pruebas (configurar según necesidades)

## 🤝 Contribuciones

Si quieres contribuir a este proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- Abre un issue en GitHub
- Contacta a través de [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

## 🔄 Actualizaciones Futuras

- [ ] Integración con CMS
- [ ] Sistema de blog
- [ ] Panel administrativo
- [ ] Integración con APIs externas
- [ ] Optimización SEO avanzada
- [ ] PWA (Progressive Web App)

---

**¡Disfruta creando tu portafolio personal!** 🎉
