# TRAMA Consultoría — Web Site
> Handoff para Claude Code · Mayo 2026

---

## Contexto del proyecto

TRAMA Consultoría es la rama de agencia de TRAMA: marketing estratégico, automatización con IA y desarrollo de plataformas digitales para empresas medianas en Perú y Latinoamérica.

Este repositorio contiene el sitio web institucional de TRAMA Consultoría. El diseño completo y aprobado está en `index.html` (mockup funcional en HTML/CSS/JS vanilla). Tu trabajo es convertirlo en un sitio de producción limpio, rápido y mantenible.

---

## Stack objetivo

- **Frontend:** HTML + CSS + JS vanilla (sin frameworks — mantener simplicidad)
- **Hosting:** Netlify (drag-and-drop o CLI)
- **Dominio:** tramaconsultora.com (actualmente apunta a Railway — se redirigirá a Netlify)
- **NO usar:** React, Vue, Node.js, bundlers. El sitio es estático.

---

## Sistema de diseño

### Colores
```css
--dark:    #0F1117   /* fondo principal */
--dark-2:  #161820   /* fondo secciones alternas */
--dark-3:  #1D2030
--coral:   #BB442A   /* acento principal */
--coral-h: #D04F30   /* hover coral */
--ivory:   #F8F7F4   /* texto principal */
--gray-2:  #9A9A9F   /* texto secundario */
--border:  rgba(248,247,244,0.07)
```

### Tipografías (Google Fonts — ya importadas)
- **Sora 800** → headings, hero, nombres de proyectos
- **Inter 300/400/500** → body, descripciones
- **JetBrains Mono 400/500** → etiquetas, tags, datos

### Espaciado base
- Padding de secciones: `100px 60px` desktop / `60px 24px` mobile
- Breakpoint mobile: `768px`

---

## Estructura del sitio

```
index.html
assets/
  images/
    trama-app.jpg        ← screenshot Agente TRAMA (dashboard)
    flexwork.jpg         ← plataforma FlexWork
    property-check.jpg  ← propertycheck.lat
    la-dominga.jpg       ← mockup RRHH
    circuclaje.jpg       ← marketplace residuos
    cisa-usa.jpg         ← hero CISA USA web
    zano.jpg             ← logo Zano Cafetería
    crm-seguros.jpg      ← dashboard CRM pólizas
  icons/
    favicon.svg
    logo-trama.svg
```

---

## Secciones (en orden)

| # | ID | Componente |
|---|-----|------------|
| 1 | — | `<nav>` fija con logo SVG + links + CTA WhatsApp |
| 2 | `#top` | Hero: headline 3 líneas + red de puntos SVG + 2 botones |
| 3 | — | Metrics strip: 5 KPIs en fila horizontal |
| 4 | — | Logos strip: empresas clientes |
| 5 | `#casos` | Proyectos: 1 card featured grande + grilla 8 mini-cards |
| 6 | `#servicios` | 2 cards de servicios (Sistemas & Automatización / Marketing) |
| 7 | `#metodologia` | 4 pasos en grilla horizontal |
| 8 | `#blog` | 3 artículos con ilustraciones SVG |
| 9 | — | CTA final + fondo coral |
| 10 | — | Footer |
| — | — | Botón flotante WhatsApp (fixed, bottom-right) |
| — | — | Modal de proyectos (overlay con detalles + KPIs) |

---

## Componentes clave

### Mini-cards de proyectos
Cada mini-card tiene:
- `mini-visual`: zona de imagen (170px alto) — **las imágenes van en `assets/images/`**
- `mini-tipo`: etiqueta de categoría (ej: "Sistema Interno · Brokers de Seguros")
- `mini-name`: nombre del proyecto
- `mini-desc`: descripción corta
- `mini-tags`: chips de tecnologías

**Asignación imagen → card:**
```
trama-app.jpg      → card TRAMA App (featured, card grande)
flexwork.jpg       → card FlexWork
property-check.jpg → card Property Check
la-dominga.jpg     → card La Dominga
circuclaje.jpg     → card Circuclaje
cisa-usa.jpg       → card CISA USA
zano.jpg           → card Zano Cafetería
crm-seguros.jpg    → card CRM Seguros
```

### Modal de proyectos
- Se abre al hacer click en cualquier card
- Muestra: tag, nombre, KPIs, descripción completa, stack tecnológico, highlights
- Cierra con ESC o click fuera del modal
- Datos en objeto JS `projects{}` dentro del HTML

### Animaciones
- Scroll reveal: clase `.reveal` → `.vis` via `IntersectionObserver`
- Hero: `fadeUp` con `animation-delay` escalonado
- Mockup TRAMA App: `@keyframes float` (perspectiva 3D animada)
- Hover en cards: `translateY(-6px)` + borde coral

---

## Primeras tareas para Claude Code

1. **Separar CSS** → extraer `<style>` a `assets/css/main.css`
2. **Separar JS** → extraer `<script>` a `assets/js/main.js`
3. **Conectar imágenes** → reemplazar fondos de color en mini-visuals con `<img src="assets/images/...">` usando `object-fit: cover`
4. **Responsive** → revisar y ajustar breakpoint 768px (nav colapsable, grilla de cards a 1 col)
5. **Favicon** → agregar favicon coral con triángulo TRAMA
6. **Meta tags** → OG tags para compartir en redes (título, descripción, imagen preview)
7. **Deploy** → subir a Netlify y apuntar tramaconsultora.com

---

## Contacto y CTAs

- **WhatsApp principal:** `https://wa.me/51933448692`
  - Mensaje pre-escrito: `Hola TRAMA, quiero una cotización`
- **Calendly:** `https://calendly.com/kwoodman-tramaconsultora/30min`
- **Email:** kwoodman@tramaconsultora.com
- **YouTube:** @TRAMALATAM

---

## Lo que NO tocar

- La lógica del modal (`openModal`, `closeModal`, objeto `projects{}`) — está completa y funcional
- El logo SVG inline (triángulo coral que reemplaza la "A") — es la identidad de marca
- Los colores del sistema de diseño — aprobados por el fundador
- El copy de todas las secciones — aprobado

---

## Notas de marca

- TRAMA tiene tres productos: **Consultoría** (este sitio), **Emprende** (SaaS para MYPEs), **Aprende** (comunidad educativa)
- El acento coral `#BB442A` es exclusivo de Consultoría
- Verde `#1D9E75` es de Emprende, no usar aquí
- Tono: directo, sin adornos, orientado a resultados — no cambiar el copy
