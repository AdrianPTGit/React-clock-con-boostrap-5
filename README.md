# Reloj Mundial en React

Una aplicación en React que muestra relojes sincronizados para diferentes zonas horarias del mundo. Todos los relojes comparten el mismo estado de tiempo y pueden ajustarse simultáneamente mediante botones de control intuitivos.

## Características

- 🌍 **Múltiples zonas horarias**: Muestra relojes para 6 zonas horarias diferentes (UTC, EST, PST, GMT, JST, AEDT)  
- 🔄 **Tiempo sincronizado**: Todos los relojes se actualizan en tiempo real y permanecen sincronizados  
- ⏱️ **Controles de tiempo**: Ajusta horas, minutos y segundos en todos los relojes simultáneamente  
- 🎨 **Interfaz atractiva**: Diseño moderno y responsivo con fondos degradados y animaciones suaves  
- 📱 **Adaptable a móviles**: Funciona perfectamente en todo tipo de pantallas  

## Controles de tiempo

- **Horas**: Suma o resta 1 hora a todos los relojes  
- **Minutos**: Suma o resta 1 minuto a todos los relojes  
- **Segundos**: Suma o resta 10 segundos a todos los relojes  
- **Reiniciar**: Restablece todos los relojes a la hora real actual  

## Instalación

```bash
npm install
```
## Ejecución de la aplicación
```bash
npm start
```
La aplicación se abrirá en tu navegador en `http://localhost:3000`

## Compilación para producción
```bash
npm run build
```
## Tecnologías utilizadas

- React 19.2.0
- React Hooks (useState, useEffect)
- CSS3 con degradados y animaciones

## Cómo funciona

> La aplicación mantiene un único estado de tiempo que se comparte entre todos los componentes del reloj. Cuando ajustas la hora mediante los botones de control, todos los relojes se actualizan simultáneamente respetando sus diferencias horarias. Los relojes avanzan automáticamente cada segundo, manteniendo la sincronización.

## Agregar Boostrap5
### 1️⃣ Instala Bootstrap con npm
En la raíz de tu proyecto React (donde está el `package.json`), ejecuta:
```bash
npm install bootstrap
```
2️⃣ Importa el CSS globalmente

En el archivo principal de tu aplicación (normalmente `src/index.js` o `src/main.jsx`):
```bash
import 'bootstrap/dist/css/bootstrap.min.css';
```
>💡 Esto hace que los estilos de Bootstrap estén disponibles en toda tu app.

### 3️⃣ (Opcional) Importar el JavaScript de Bootstrap

Si necesitas _modales_, _dropdowns_ o _tooltips_ (que requieren _JavaScript_), añade:

```bash
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```
