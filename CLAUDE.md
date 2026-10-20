# Proyecto: practica — "Mi primera página"

## Qué es
Sitio web estático de práctica para aprender HTML, CSS y JavaScript.
Tiene 4 páginas: Inicio, Servicios, Productos (4 artículos de ciclismo, precios en colones ₡) y Contacto.
- Para quién es: solo práctica. Es un ejemplo para mi primo de cómo voy retomando conceptos y cómo trabajo con Claude.
- Cómo se ve "terminado": publicado en internet para que mi primo lo vea (también en celular); el formulario muestra "¡Gracias!" (no envía nada); los botones "Agregar" muestran un aviso; todas las páginas en `lang="es"`; el menú marca la página actual.
- Estado: retomado. Terminando según la definición de arriba.

## Cómo se corre
No necesita servidor. Abre `index.html` con doble clic en el navegador.
Para verlo como celular: F12 en el navegador → ícono de celular (vista responsive).
La única copia del sitio es `C:\Users\Victor\Desktop\practica` (ver "Historia" abajo).

## Archivos
- `index.html`, `servicios.html`, `productos.html`, `contacto.html`: las páginas.
- `estilos.css`: todos los estilos (colores base: navy y gold). Galería: 4 por línea en computadora, 2 en tablet (<1000px), 1 en celular (<600px).
- `script.js`: menú ☰ en celular, "¡Gracias!" del formulario y aviso de los botones "Agregar".
- `img/`: fotos de productos (Unsplash). `ricardo-iv-tamayo-...jpg` está guardada pero no se usa en ninguna página (no está en git).

## Plan para terminar (5 pasos)
1. ✅ `lang="es"` en todas las páginas.
2. ✅ El menú marca la página actual (`class="activo"` en cada HTML + regla en CSS).
3. ✅ Formulario muestra "¡Gracias, nombre!" (JS en `script.js`, campos `required`).
4. ✅ Botones "Agregar" muestran un aviso flotante 2,5 s (JS en `script.js`).
5. ⏳ Publicar en GitHub Pages (explicar comandos y esperar OK antes).

## Qué está hecho
- Menú en todas las páginas, con botón ☰ en celular y la página actual marcada.
- Portada con sección "hero" (bloque grande de bienvenida) y botón a Servicios.
- Tarjetas de servicios.
- Galería de 4 productos con precio y botón "Agregar" con aviso.
- Formulario de contacto con "¡Gracias, nombre!" (no envía nada, a propósito).
- Pie de página.
- Todo en GitHub: `github.com/gamesandpages/practica`, rama `main`.

## Historia (2026-10-20)
- Había DOS copias del sitio: `Desktop\practica` (buena) y `Proyectos\practica` (vieja del 19/10). El usuario abría la vieja y por eso no veía el "¡Gracias!" ni el aviso.
- La vieja se respaldó en `C:\Users\Victor\Respaldos\practica-vieja-2026-10-20`, sus 2 fotos nuevas se copiaron a `Desktop\practica\img` y luego se borró `Proyectos\practica`.
- Claude in Chrome no abre `file:///` (aunque se active el permiso en la extensión); para probar se usa un servidor local temporal (script PowerShell, puerto 8765).
- En PowerShell 5.1, `git commit -m` con comillas dentro del mensaje se rompe: usar mensajes sin comillas o `git commit -F archivo`.

## Qué falta / detalles conocidos
- Paso 5: publicar en GitHub Pages.
- Pendiente opcional: desanclar el atajo "practica" de Proyectos en el Acceso rápido del Explorador (ya no lleva a nada).
- Las fotos pesan mucho (hasta 5 MB); en celular cargan lento. Mejora posible: achicarlas.

## Próximo paso
Activar GitHub Pages (paso 5) para que el sitio tenga una dirección pública, explicando cada paso y esperando OK.
