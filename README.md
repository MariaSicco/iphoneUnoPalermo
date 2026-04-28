# iPhone Uno Palermo — Landing

Sitio estático de una sola página para iPhone Uno Palermo. HTML + Tailwind (CDN) + JS vanilla + GSAP (CDN). No tiene build, no necesita servidor: se sube a GitHub Pages y queda online.

---

## En 30 segundos

- **Qué es**: la landing oficial del negocio. Una sola página con catálogo, trade-in, pagos, FAQ y contacto por WhatsApp.
- **Cómo se edita**: precios y datos del negocio viven todos en un solo archivo (`js/main.js`). Cambiás ahí, guardás, subís. Listo.
- **Cómo se publica**: con GitHub Pages, gratis. Instrucciones más abajo.
- **Cómo se ve**: estilo editorial premium (estética tipo Apple, Aesop, Linear). Nada de banners chillones.

---

## Estructura del proyecto

```
iphoneUNO/
├── index.html              ← La página entera
├── css/styles.css          ← Ajustes finos sobre Tailwind
├── js/main.js              ← Precios, WhatsApp, animaciones
├── assets/
│   ├── img/                ← Mockups, logo, og-image
│   └── fonts/              ← Vacío (fuentes por Google Fonts CDN)
├── BRAND_GUIDELINES.md     ← Manual de marca completo
├── README.md               ← Este archivo
└── .nojekyll               ← Necesario para GitHub Pages
```

---

## Cómo editar lo que cambia seguido

Todos los datos editables están en **`js/main.js`**, arriba de todo, en un objeto llamado `CONFIG`. Abrís el archivo con cualquier editor (VS Code, Notepad++, hasta el bloc de notas) y cambiás los valores entre comillas.

### 1. Cambiar precios de los iPhones

Buscá la sección `CATALOG` dentro de `CONFIG`. Vas a ver algo así:

```js
catalog: [
  { model: "iPhone 13",      capacity: "128GB", price: { x1: 380, x5: 360, x10: 340 } },
  { model: "iPhone 13 Pro",  capacity: "128GB", price: { x1: 480, x5: 450, x10: 430 } },
  ...
]
```

- `x1` = precio por unidad
- `x5` = precio por unidad comprando 5
- `x10` = precio por unidad comprando 10
- Los precios están en **dólares (USD)**.

Cambiás el número, guardás el archivo, subís el cambio (ver sección de deploy abajo).

### 2. Cambiar el WhatsApp

Buscá `whatsapp` dentro de `CONFIG`:

```js
whatsapp: "5491100000000",
```

- Sin "+", sin espacios, sin guiones. Solo números.
- Formato: código de país (54) + 9 + código de área sin el 0 (11) + número sin el 15 (XXXXXXXX).
- Ejemplo: para `+54 9 11 5555-1234` se escribe `5491155551234`.

### 3. Cambiar la dirección

Buscá `address` dentro de `CONFIG`:

```js
address: "Palermo, CABA · dirección al confirmar turno",
```

Cambiás el texto entre comillas. Si querés que el botón "Cómo llegar" abra Maps con la dirección real, también editá `mapsUrl` justo debajo.

### 4. Cambiar el horario

Buscá `hours` dentro de `CONFIG`:

```js
hours: "09:00 / 22:00",
```

### 5. Cambiar el tipo de cambio (USD a ARS)

El toggle "USD / ARS aprox" usa una variable que tenés que actualizar a mano cada cierto tiempo. Buscá `EXCHANGE_RATE` en `js/main.js`:

```js
const EXCHANGE_RATE = 1200; // ARS por 1 USD — actualizar manualmente
```

Cambiás el número, guardás. La página recalcula los pesos sola.

### 6. Cambiar Instagram, redes, mensajes pre-armados

Todo está en el mismo `CONFIG` al inicio de `js/main.js`. Cada campo tiene un comentario al lado explicando qué hace.

---

## Cómo deployar a GitHub Pages — paso a paso

Esta guía asume que **nunca usaste GitHub**. Si ya tenés cuenta y repo, saltá a la sección "Si ya tenés repo creado".

### Parte A: crear cuenta y repositorio (una sola vez)

1. **Crearte cuenta en GitHub.** Andá a [github.com](https://github.com), click en "Sign up", elegí usuario y contraseña. Verificá el mail.

2. **Instalar GitHub Desktop** (es la forma fácil, sin terminal). Descargalo de [desktop.github.com](https://desktop.github.com) e instalalo. Cuando lo abras, te pide que inicies sesión con la cuenta que creaste.

3. **Crear el repositorio.** Dentro de GitHub Desktop:
   - Menú **File → New repository**
   - Name: `iphoneuno-palermo` (o el que quieras, sin espacios)
   - Local path: elegí dónde guardarlo. Si el proyecto ya está en `Desktop/iphoneUNO`, primero movelo a otro lado o usá la opción "Add existing repository" en el siguiente paso.
   - Initialize with README: **destildado** (porque ya tenemos uno).
   - Click en "Create repository".

   **Si ya tenés la carpeta del proyecto** (que es el caso): en lugar de "New repository", andá a **File → Add local repository** y seleccioná la carpeta `iphoneUNO`. Si te dice que no es un repo de Git, click en "create a repository" y aceptá.

4. **Subir el proyecto a GitHub.**
   - En GitHub Desktop, vas a ver todos los archivos del proyecto en el panel izquierdo.
   - Abajo, escribí un mensaje en "Summary" (ej: "Primer commit").
   - Click en **"Commit to main"**.
   - Después, click en **"Publish repository"** arriba a la derecha.
   - Te pregunta si querés mantenerlo privado: **destildá "Keep this code private"** (GitHub Pages gratis necesita que sea público).
   - Click en "Publish".

### Parte B: activar GitHub Pages

1. Andá a [github.com](https://github.com) en el navegador y entrá a tu repositorio (lo vas a ver en el listado de tu perfil).
2. Click en la pestaña **"Settings"** (arriba a la derecha del repo).
3. En el menú lateral izquierdo, click en **"Pages"**.
4. En "Source", elegí **"Deploy from a branch"**.
5. En "Branch", elegí **`main`** y carpeta **`/ (root)`**. Click en **Save**.
6. Esperá entre 1 y 5 minutos. Refrescás la página y arriba va a aparecer una caja verde con la URL: algo como `https://tu-usuario.github.io/iphoneuno-palermo/`.

Ya está online. Esa URL la podés mandar por WhatsApp, ponerla en el bio de Instagram, lo que quieras.

### Parte C: cómo subir cambios después

Cada vez que edites un archivo (precios, WhatsApp, lo que sea):

1. Abrí GitHub Desktop.
2. Vas a ver los cambios en el panel izquierdo.
3. Escribí un mensaje corto en "Summary" (ej: "Actualizar precios iPhone 15").
4. Click en **"Commit to main"**.
5. Click en **"Push origin"** arriba.
6. Esperá 1-2 minutos y los cambios están online en la misma URL.

### Si ya tenés repo creado

Solo hacés `commit` y `push` desde GitHub Desktop, o desde la terminal:

```bash
git add .
git commit -m "Mensaje del cambio"
git push
```

---

## Conectar dominio propio (opcional)

Si querés usar un dominio tipo `iphoneunopalermo.com` en lugar de la URL larga de GitHub:

1. **Comprá el dominio** en cualquier registrador (NIC.ar para `.com.ar`, Namecheap o Google Domains para `.com`).

2. **En GitHub** → repo → Settings → Pages → "Custom domain" → escribí tu dominio (ej: `iphoneunopalermo.com`) y click en Save. GitHub crea un archivo `CNAME` en el repo automáticamente.

3. **En el panel del registrador**, configurá los DNS:
   - Para dominio raíz (`iphoneunopalermo.com`): agregá 4 registros tipo `A` apuntando a estas IPs de GitHub:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Para `www.iphoneunopalermo.com`: agregá un registro tipo `CNAME` apuntando a `tu-usuario.github.io`.

4. **Esperá** entre 1 y 24 horas a que se propaguen los DNS. Después tildá "Enforce HTTPS" en GitHub Pages.

---

## Probarlo localmente antes de subir

No necesitás nada complicado. Tenés dos opciones:

**Opción 1: doble click en `index.html`.** Se abre en el navegador. Funciona el 99% de la cosas.

**Opción 2: con un servidor local** (recomendado, evita un par de quirks de CORS):

```bash
# desde la carpeta del proyecto
python3 -m http.server 8000
```

Después abrís `http://localhost:8000` en el navegador.

---

## Problemas comunes

- **"No se ven los precios" o "el toggle USD/ARS no funciona".** Casi seguro es un error de sintaxis en `js/main.js` después de editar. Abrí el navegador, click derecho → Inspeccionar → pestaña Console: si hay un error rojo, te dice qué línea. Lo más típico es una coma de más o una comilla cerrada mal.
- **"GitHub Pages dice 404".** Verificá que el archivo `.nojekyll` (que empieza con punto) esté en la raíz. Sin ese archivo, GitHub a veces ignora carpetas que empiezan con `_`.
- **"Cambié algo y no se ve online".** Hard refresh en el navegador: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac). GitHub Pages a veces tarda 1-2 minutos en propagar.

---

## Stack técnico

- HTML5 semántico
- Tailwind CSS via CDN (sin build step)
- GSAP + ScrollTrigger via CDN (animaciones)
- Google Fonts: Inter Tight, Inter, JetBrains Mono
- JS vanilla, sin frameworks

Sin tracking, sin analytics, sin cookies en esta versión. Si en el futuro querés agregar un Pixel de Meta o GA4, se hace en el `<head>` de `index.html`.

---

## Licencia

Código del sitio: uso interno de iPhone Uno Palermo. La marca, el logo y el contenido son propiedad del cliente. Las fuentes están bajo SIL Open Font License (gratis para uso comercial).
