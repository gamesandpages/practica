# Proyecto: practica — "Mi primera página"

## Qué es
Sitio web estático de práctica para aprender HTML, CSS y JavaScript.
Tiene 4 páginas: Inicio, Servicios, Productos (jerseys de ciclismo, precios en colones ₡) y Contacto.
- Para quién es: solo práctica. Es un ejemplo para mi primo de cómo voy retomando conceptos y cómo trabajo con Claude.
- Cómo se ve "terminado": publicado en internet para que mi primo lo vea (también en celular); el formulario muestra "¡Gracias!" (no envía nada); los botones "Agregar" muestran un aviso; todas las páginas en `lang="es"`; el menú marca la página actual.
- Estado: retomado. Terminando según la definición de arriba.

## Cómo se corre
No necesita servidor. Abre `index.html` con doble clic en el navegador.
Para verlo como celular: F12 en el navegador → ícono de celular (vista responsive).

## Archivos
- `index.html`, `servicios.html`, `productos.html`, `contacto.html`: las páginas.
- `estilos.css`: todos los estilos (colores base: navy y gold).
- `script.js`: abre/cierra el menú ☰ en pantallas chicas (menos de 600px).
- `img/`: fotos de productos (Unsplash).

## Plan para terminar (5 pasos)
1. ✅ `lang="es"` en todas las páginas.
2. ✅ El menú marca la página actual (`class="activo"` en cada HTML + regla en CSS).
3. ✅ Formulario muestra "¡Gracias, nombre!" (JS en `script.js`, campos `required`).
4. ✅ Botones "Agregar" muestran un aviso flotante 2,5 s (JS en `script.js`).
5. ⏳ Publicar en GitHub Pages (explicar comandos y esperar OK antes).

## Problema abierto (causa encontrada 2026-10-20)
Los pasos 3 y 4 SÍ funcionan: se probaron en el Chrome real del usuario con Claude in Chrome, sin errores en consola.
Causa: hay DOS copias del sitio.
- `C:\Users\Victor\Desktop\practica` → la copia nueva (la que editamos con Claude).
- `C:\Users\Victor\Proyectos\practica` → copia vieja del 19/10, con su propio `.git` y `CLAUDE.md`; su `script.js` no tiene el código del "¡Gracias!" ni del aviso.
El usuario abría la copia vieja. Decisión: la oficial es la de `Desktop`.
La copia vieja ya está respaldada en `C:\Users\Victor\Respaldos\practica-vieja-2026-10-20` (47 archivos, verificado). No tenía trabajo único (mismo commit, CLAUDE.md más viejo). Falta borrar `C:\Users\Victor\Proyectos\practica` (lo hace el usuario a mano).
Nota: Claude in Chrome no abre `file:///` salvo que se active "Permitir acceso a URLs de archivo" en la extensión; para probar se usó un servidor local temporal (PowerShell, puerto 8765).

## Qué está hecho
- Menú en todas las páginas, con botón ☰ en celular.
- Portada con sección "hero" (bloque grande de bienvenida) y botón a Servicios.
- Tarjetas de servicios y galería de 3 productos con precio.
- Formulario de contacto (solo el diseño).
- Pie de página.

## Qué falta / detalles conocidos
- Paso 5: publicar en GitHub Pages.
- El formulario no envía nada a propósito (solo muestra "¡Gracias!").
- Los cambios de los pasos 1–4 todavía no tienen commit en git.

## Próximo paso
Hacer commit de los pasos 1–4 y publicar en GitHub Pages (paso 5), explicando los comandos y esperando OK.
