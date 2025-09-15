const fs = require('fs');
const path = require('path');

// Función para crear directorio si no existe
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Función para copiar archivos
function copyFile(src, dest) {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
}

// Función para copiar directorio recursivamente
function copyDir(src, dest) {
    ensureDir(dest);
    const files = fs.readdirSync(src);
    
    files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        
        if (fs.statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            copyFile(srcPath, destPath);
        }
    });
}

// Función para renderizar plantilla EJS simple
function renderTemplate(templatePath, data) {
    let content = fs.readFileSync(templatePath, 'utf8');
    
    // Reemplazar variables simples
    Object.keys(data).forEach(key => {
        const regex = new RegExp(`<%= ${key} %>`, 'g');
        content = content.replace(regex, data[key]);
    });
    
    return content;
}

// Función para generar HTML estático
function generateStaticHTML() {
    console.log('🚀 Generando archivos estáticos...');
    
    // Crear directorio dist
    ensureDir('dist');
    
    // Copiar archivos públicos
    if (fs.existsSync('public')) {
        copyDir('public', 'dist');
        console.log('✅ Archivos públicos copiados');
    }
    
    // Leer layout principal
    const layoutPath = 'views/layouts/main.ejs';
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    
    // Páginas a generar
    const pages = [
        {
            name: 'index',
            title: 'Inicio - Mi Portafolio',
            page: 'home',
            template: 'views/index.ejs'
        },
        {
            name: 'about',
            title: 'Acerca de Mí - Mi Portafolio',
            page: 'about',
            template: 'views/about.ejs'
        },
        {
            name: 'projects',
            title: 'Proyectos - Mi Portafolio',
            page: 'projects',
            template: 'views/projects.ejs'
        },
        {
            name: 'contact',
            title: 'Contacto - Mi Portafolio',
            page: 'contact',
            template: 'views/contact.ejs'
        },
        {
            name: '404',
            title: 'Página no encontrada - Mi Portafolio',
            page: '404',
            template: 'views/404.ejs'
        }
    ];
    
    // Generar cada página
    pages.forEach(page => {
        console.log(`📄 Generando ${page.name}.html...`);
        
        // Leer contenido de la página
        const pageContent = fs.readFileSync(page.template, 'utf8');
        
        // Reemplazar <%- body %> en el layout
        const htmlContent = layoutContent.replace('<%- body %>', pageContent);
        
        // Reemplazar variables
        const finalHTML = renderTemplate('temp', {
            title: page.title,
            page: page.page
        }).replace('temp', htmlContent);
        
        // Escribir archivo HTML
        const outputPath = path.join('dist', `${page.name}.html`);
        fs.writeFileSync(outputPath, finalHTML);
        
        console.log(`✅ ${page.name}.html generado`);
    });
    
    // Crear index.html (redirección a la página principal)
    const indexContent = fs.readFileSync('dist/index.html', 'utf8');
    fs.writeFileSync('dist/index.html', indexContent);
    
    console.log('🎉 Build completado exitosamente!');
    console.log('📁 Archivos generados en la carpeta "dist"');
}

// Ejecutar build
if (require.main === module) {
    generateStaticHTML();
}

module.exports = { generateStaticHTML };
