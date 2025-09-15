# 🚀 Guía de Despliegue - Mi Portafolio

## Problema Común: Error 404 en Netlify

Si estás viendo un error 404 en Netlify, es porque **Netlify está diseñado para sitios estáticos**, no para aplicaciones Node.js que requieren un servidor.

## ✅ Solución: Convertir a Sitio Estático

He creado una solución que convierte tu portafolio Node.js en un sitio estático compatible con Netlify.

### 📁 Archivos Agregados

1. **`netlify.toml`** - Configuración de Netlify
2. **`build.js`** - Script para generar archivos estáticos
3. **Scripts actualizados** en `package.json`

## 🔧 Pasos para Solucionar el Error

### 1. Actualizar tu Repositorio

```bash
# Agregar los nuevos archivos
git add .
git commit -m "Agregar soporte para despliegue estático en Netlify"
git push origin main
```

### 2. Configurar Netlify Correctamente

En tu dashboard de Netlify:

1. Ve a **Site settings** → **Build & deploy**
2. Configura:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Haz clic en **Deploy site**

### 3. Verificar el Despliegue

- Netlify ejecutará `npm run build`
- Esto generará archivos HTML estáticos en la carpeta `dist`
- Netlify servirá estos archivos estáticos

## 🧪 Probar Localmente

Antes de desplegar, puedes probar la versión estática:

```bash
# Generar archivos estáticos
npm run build

# Previsualizar localmente
npm run preview
```

Esto abrirá `http://localhost:3000` con la versión estática.

## 📋 Comandos Disponibles

```bash
# Desarrollo (con servidor Node.js)
npm run dev

# Generar sitio estático
npm run build

# Previsualizar sitio estático
npm run preview

# Producción (servidor Node.js)
npm start
```

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollo**: Usa `npm run dev` para desarrollo local
2. **Build**: Usa `npm run build` antes de desplegar
3. **Preview**: Usa `npm run preview` para verificar
4. **Deploy**: Sube a GitHub y Netlify se encarga del resto

## 🎯 Ventajas de la Versión Estática

- ✅ **Más rápida**: No necesita servidor
- ✅ **Más barata**: Hosting gratuito en Netlify
- ✅ **Más segura**: Sin vulnerabilidades del servidor
- ✅ **Mejor SEO**: Carga más rápida
- ✅ **CDN global**: Distribución mundial

## 🚨 Limitaciones

- ❌ No hay formulario de contacto funcional (solo visual)
- ❌ No hay procesamiento del lado del servidor
- ❌ No hay base de datos

## 💡 Alternativas para Funcionalidades Dinámicas

Si necesitas funcionalidades del servidor:

1. **Formulario de contacto**: Usa [Formspree](https://formspree.io/) o [Netlify Forms](https://www.netlify.com/products/forms/)
2. **Base de datos**: Usa [Firebase](https://firebase.google.com/) o [Supabase](https://supabase.com/)
3. **Autenticación**: Usa [Auth0](https://auth0.com/) o [Firebase Auth](https://firebase.google.com/products/auth)

## 🔧 Configuración Avanzada

### Variables de Entorno en Netlify

Si necesitas variables de entorno:

1. Ve a **Site settings** → **Environment variables**
2. Agrega tus variables
3. Úsalas en tu código con `process.env.VARIABLE_NAME`

### Dominio Personalizado

1. Ve a **Domain settings**
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## 📞 Soporte

Si sigues teniendo problemas:

1. Verifica que `npm run build` funcione localmente
2. Revisa los logs de build en Netlify
3. Asegúrate de que la carpeta `dist` se genere correctamente

---

**¡Con estos cambios, tu portafolio debería funcionar perfectamente en Netlify!** 🎉
