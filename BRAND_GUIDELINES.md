# iPhone Uno Palermo — Manual de marca

> Versión 1.0 · Abril 2026
> Documento vivo. Cualquier aplicación que no esté contemplada acá debe consultarse antes de salir al mundo.

---

## 1. Esencia de marca

iPhone Uno Palermo no es una tienda de celulares. Es el lugar al que vas cuando ya sabés lo que querés y no querés que te vendan humo.

**Posicionamiento.** Una boutique Apple en Palermo: equipos nuevos sellados, usados premium con batería al 100% y trade-in que valora bien tu equipo actual. Curaduría sobre cantidad. Conversación sobre cartelería.

**Promesa.** Apple sin vueltas. Si lo tenemos, te lo decimos. Si no lo tenemos, también.

**Personalidad.** Discreta, técnica, confiable. Pensá en un relojero antes que en un vendedor. Habla poco, sabe mucho, no necesita gritar el precio para que entres.

**Públicos.**
- El que ya tiene iPhone y quiere upgrade sin perder valor en el camino.
- El que compra su primer iPhone y necesita confianza más que descuento.
- El revendedor o emprendedor que mueve volumen y quiere precio mayorista honesto.

**Anti-personalidad.** Nunca somos: el local con 18 carteles fluo, el vendedor que te promete un precio por WhatsApp y otro en mostrador, ni la página con banners "MEGA OFERTA HOY".

---

## 2. Logo

El logo es el ícono de un iPhone visto de espaldas, contenido dentro de un app icon redondeado, sobre el lockup tipográfico "iPhone / UNO / PALERMO".

### Versiones

- **Lockup completo** (ícono + tipografía apilada). Default. Para landing, packaging, ticket, redes.
- **Solo isotipo** (el ícono encerrado). Para favicons, perfiles redondos, marca de agua sutil.
- **Solo wordmark** (la tipografía sin ícono). Para footers ajustados o aplicaciones donde el isotipo perdería legibilidad por tamaño.

### Espacio de respiro

Margen mínimo alrededor del logo equivalente a la altura de la "P" de "iPhone". Nunca menos. Idealmente, el doble.

### Tamaños mínimos

- Lockup completo: 96 px de alto en pantalla, 24 mm en impresión.
- Isotipo: 24 px en pantalla, 8 mm en impresión.

### Qué NO hacer

- No deformar, rotar, ni inclinar.
- No cambiar el color del logo (vive en Ink #0E0E0E sobre Bone #F5F1E8 o sobre White).
- No agregarle gradientes, sombras, brillos ni efectos.
- No encerrarlo en cajas, círculos ni marcos extra.
- No usarlo sobre fotos sin máscara sólida detrás.
- No reemplazar la tipografía del wordmark por otra "parecida".
- No reescalar ícono y wordmark de manera independiente.

---

## 3. Paleta

La paleta es deliberadamente reducida. Si necesitás un sexto color, casi seguro estás resolviendo el problema con color cuando deberías resolverlo con jerarquía o espacio.

| Token  | Nombre  | HEX       | RGB              | Uso                                                                |
|--------|---------|-----------|------------------|--------------------------------------------------------------------|
| ink    | Ink     | `#0E0E0E` | `14, 14, 14`     | Texto sobre fondos claros. Fondos de secciones contraste. Logo.    |
| bone   | Bone    | `#F5F1E8` | `245, 241, 232`  | Fondo principal. Heredado del logo. Cálido, no blanco clínico.     |
| steel  | Steel   | `#6B6B6B` | `107, 107, 107`  | Texto secundario, divisores, hints, capacidades de los modelos.    |
| pulse  | Pulse   | `#FF4D2E` | `255, 77, 46`    | Acento único. CTAs primarios. Eyebrows mono. Numerales del paso a paso. |
| white  | White   | `#FFFFFF` | `255, 255, 255`  | Cards, surfaces sobre Bone. Tablas de precios.                     |

### Reglas de uso

1. **Bone manda.** Es el fondo de la marca. White se usa para elevar surfaces, no como fondo principal.
2. **Pulse es escaso.** Si Pulse aparece más de tres veces en una pantalla, algo está mal. Pulse es la voz que se levanta una sola vez en la conversación.
3. **Ink es el texto.** Steel es la sombra del texto. Si dudás, Ink.
4. **Contrastes mínimos.** Texto Ink sobre Bone: 18.4:1. Texto Steel sobre Bone: 4.6:1 (válido para body, no para texto fino). Pulse sobre Ink: 5.1:1 (válido). Pulse sobre Bone: 3.9:1 — usar solo en texto grande o decorativo, nunca en body.
5. **Nada de gradientes.** La marca no tiene gradientes. Si necesitás profundidad, usá sombras muy sutiles o jerarquía tipográfica.

---

## 4. Tipografía

Tres familias, todas vía Google Fonts. Cada una con un trabajo claro.

### Inter Tight (Display)

Para titulares y headlines. Pesos 400, 500, 600. Tracking -0.03em en tamaños grandes. Line-height ajustado (1.0 a 1.1).

```
H1 — clamp(48px, 8vw, 96px) / 600 / -0.03em
H2 — clamp(36px, 5vw, 64px) / 500 / -0.03em
H3 — 28px / 500 / -0.02em
```

### Inter (Body)

Para párrafos y UI. Pesos 400 y 500. Line-height 1.5 a 1.6.

```
Body L — 18px / 400 / 1.6
Body  — 16px / 400 / 1.5
Caption — 14px / 500 / 1.5
```

### JetBrains Mono (Mono)

Marca registrada del proyecto. Para precios, datos técnicos, eyebrows tipo "— ABIERTO", labels "x1 / x5 / x10", direcciones, horarios.

```
Price L — 24px / 500
Price   — 18px / 500
Eyebrow — 13px / 500 / +0.05em / uppercase permitido aquí
Label   — 12px / 400
```

### Reglas

- **Sentence case en todo.** Excepto eyebrows en mono, que pueden ir en uppercase.
- **Bolds en 500 o 600.** Nunca 700. La marca pesa por contenido, no por grosor.
- **Precios siempre en mono.** No negociable. Es parte del lenguaje visual.
- **Tabular nums en precios.** Activar `font-variant-numeric: tabular-nums` para que las cifras alineen al toggle USD/ARS.
- **Sin itálicas.** No las usamos. Si necesitás énfasis, cambiá el peso o la familia.

---

## 5. Tono de voz

Tres principios. Los tres tienen que estar siempre.

### 5.1. Decir lo justo

Una idea por oración. Un dato por línea. Si una frase puede acortarse sin perder información, acortala.

| Decir esto                                | No decir esto                                              |
|-------------------------------------------|------------------------------------------------------------|
| "iPhone 15 128GB. 520 USD."               | "¡INCREÍBLE! iPhone 15 de 128GB a solo USD 520!! 🔥🔥"     |
| "Trade-in en el día."                     | "Hacemos el mejor plan canje del mercado, súper rápido."   |
| "Abrimos todos los días, 9 a 22."         | "Estamos a tu disposición de lunes a domingo en horario corrido." |

### 5.2. Ser técnico sin ser denso

Hablamos como alguien que sabe del producto. Decimos "100% de batería" en lugar de "batería como nueva". Decimos "sellado" en lugar de "0km". Decimos "trade-in" porque así se llama, y al lado aclaramos "plan canje" si hace falta.

| Decir esto                                | No decir esto                                              |
|-------------------------------------------|------------------------------------------------------------|
| "Usado premium · 100% batería · garantía 30 días tienda." | "Casi nuevo, anda bárbaro, te aseguramos un mes." |
| "iPhone 14 Pro 128GB."                    | "El último iPhone Pro con cámara espectacular."            |

### 5.3. No prometer lo que no controlamos

Stock, tipo de cambio, plazos de envío. Si depende de algo externo, lo aclaramos. No improvisamos disponibilidad.

| Decir esto                                | No decir esto                                              |
|-------------------------------------------|------------------------------------------------------------|
| "Stock al día. Confirmamos por WhatsApp." | "Tenemos todos los modelos siempre."                       |
| "ARS aprox. al dólar del día."            | "Precio fijo en pesos, sin sorpresas."                     |

---

## 6. Aplicaciones

### 6.1. Web (landing)

- Fondo Bone, mucho whitespace, hero a 90vh con el render del producto al lado del headline.
- Pulse aparece dos veces por scroll: en el CTA primario y en un eyebrow o numeral. No más.
- Mono para precios, eyebrows y labels. Inter Tight para titulares. Inter para body.
- Animaciones discretas: fades y translates de 8px a 16px, nunca más.

### 6.2. Instagram (posts)

- Formato 1:1 o 4:5. Fondo Bone o Ink (alternar).
- Composición editorial: producto centrado, pero descentrado del frame (asimetría). Texto al margen, no sobre el producto.
- Caption corto. Una frase, un dato, un CTA. "iPhone 15 128GB. 520 USD. WhatsApp en bio."
- Nunca usar plantillas con marcos, banderines ni "OFERTAS".

### 6.3. Instagram (stories)

- 9:16, fondo Bone o Ink.
- Una idea por story. Nunca apilar 4 productos en una sola story.
- Si es novedad de stock, usar eyebrow mono "— RECIÉN LLEGADO" en Pulse.
- Si es trade-in, usar la numeración 01 / 02 / 03 en mono grande.

### 6.4. Packaging

- Bolsa de papel kraft sin laminar, con sello tipográfico (no impresión a todo color).
- Sticker de cierre: Ink sobre Bone, con el isotipo y la frase "Apple sin vueltas." en mono.
- Caja interna: white box minimalista, sticker en una esquina con número de serie y modelo en mono.

### 6.5. Ticket de venta

- Papel térmico estándar, layout de monoespaciada.
- Header: lockup en alto contraste.
- Cuerpo: modelo, capacidad, IMEI, precio, forma de pago, garantía. Cada línea con label en mayúscula mono y valor al lado.
- Footer: dirección, horario, IG @iphoneuno_palermo. Nada más.
- "Gracias" sin signos de exclamación.

### 6.6. WhatsApp Business

- Foto de perfil: isotipo sobre Bone.
- Mensaje de bienvenida: "Hola. Decinos qué modelo buscás y te pasamos disponibilidad y precio. 9 a 22, todos los días."
- Sin emojis en respuestas comerciales. Sí en confirmaciones de envío (un emoji máximo, tipo 📦).

---

## 7. Mockups conceptuales

Descripciones para guiar al fotógrafo o al diseñador. No son piezas finales, son la dirección.

### 7.1. Hero web
iPhone 15 fotografiado de tres cuartos, sobre fondo Bone uniforme. Sombra suave proyectada hacia abajo-izquierda. El equipo ocupa el 40% derecho del frame, el resto es aire. A la izquierda, headline "Apple sin vueltas." en Inter Tight 600, sentence case, color Ink.

### 7.2. Card de producto
Render del modelo centrado en card White, sin fondo, con sombra sutil bajo el equipo. Arriba, nombre del modelo en Inter Tight 500. Debajo, capacidad en Steel mono. Tabla de precios en mono al pie con divisores Steel a 1px.

### 7.3. Post de stock nuevo
Foto cenital de iPhones alineados sobre superficie Bone, vista parcial (se cortan en el margen). Eyebrow superior en Pulse mono "— RECIÉN LLEGADO". Caption tipográfico ocupando la mitad inferior del frame en Ink.

### 7.4. Story de trade-in
Fondo Ink. Numeral "01" gigante en Pulse mono ocupando un cuarto del frame. Al lado, instrucción corta "Mandanos fotos del equipo." en Bone Inter Tight 500. Slide a la siguiente para ver "02".

### 7.5. Sticker de bolsa
Círculo Ink de 6 cm. Isotipo centrado. En el borde inferior, en mono Bone uppercase: "— APPLE SIN VUELTAS · PALERMO".

### 7.6. Tarjeta personal del vendedor
Cartón texturado Bone. Lockup arriba. Nombre y rol en Inter Tight 500 al medio. WhatsApp e Instagram en mono al pie. Reverso liso, sin nada. La ausencia es la decisión.

---

## Checklist antes de publicar cualquier pieza

- [ ] ¿El fondo es Bone, Ink o White (no otro)?
- [ ] ¿Pulse aparece como mucho dos o tres veces?
- [ ] ¿Los precios están en JetBrains Mono?
- [ ] ¿El texto está en sentence case (salvo eyebrows)?
- [ ] ¿No hay emojis en mensajes comerciales?
- [ ] ¿El logo respeta el espacio de respiro?
- [ ] ¿Si esto saliera mañana en una cuenta de Behance de un estudio top, sentiría vergüenza?

Si la última respuesta es "sí, un poco", volver al principio.
