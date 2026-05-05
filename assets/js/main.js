const projects = {
  trama: {
    name: 'TRAMA App',
    tag: 'Plataforma SaaS', tagClass: 'tag-dev',
    kpis: [{n:'6',l:'Módulos IA activos'},{n:'LATAM',l:'Mercado objetivo'},{n:'Full stack',l:'Desarrollo propio'}],
    desc: 'Plataforma SaaS B2B para MYPEs (micro y pequeñas empresas) peruanas. Integra diagnóstico comercial por IA, generador de landing pages con un click, CRM de leads con seguimiento automatizado, agentes de marketing que redactan campañas, análisis de rentabilidad por producto y canal, e integración con Meta Ads y WhatsApp vía Twilio.',
    tech: ['Node.js','Express','Supabase (PostgreSQL)','Railway','Claude API','Meta Ads API','Twilio','Brevo','Google Places API','Netlify'],
    highlights: ['Sistema multirol: admin, usuario emprendedor y agente prospector interno','Agente Prospector con scraping de Google Places, validación SUNAT y outreach automático por email y WhatsApp','Generación de imágenes de producto con IA y landing pages personalizadas','Dashboard de rentabilidad por canal con proyecciones de crecimiento','Arquitectura con RLS en Supabase y deployment continuo en Railway']
  },
  flexwork: {
    name: 'FlexWork Microprojects',
    tag: 'Marketplace · Freelancers', tagClass: 'tag-dev',
    kpis: [{n:'4 roles',l:'Admin, RRHH, Empresa, Profesional'},{n:'Escrow',l:'Pagos protegidos'},{n:'MVP',l:'Arquitectura completa'}],
    desc: 'Plataforma marketplace B2B/B2C que conecta empresas con profesionales independientes mediante microproyectos. El modelo opera con cuatro actores: Administrador, RRHH de FlexWork, Empresa y Profesional. Cada actor sigue flujos diferenciados con onboarding personalizado, perfiles detallados y sistema de matching por habilidades y rubro.',
    tech: ['React','Node.js','PostgreSQL','MercadoPago Perú','PayPal','JWT Auth','WebSockets','AWS S3'],
    highlights: ['Registro diferenciado: Profesionales con portafolio, habilidades técnicas y blandas; Empresas con rubro, urgencia y beneficios','Sistema de microproyectos con propuestas, negociación y entrega verificada','Pagos con escrow: el dinero se libera al aprobar el entregable — MercadoPago Perú y PayPal','RRHH interno como mediador en conflictos durante negociación y pagos','Membresías diferenciadas por tipo de usuario con funcionalidades exclusivas','Notificaciones en tiempo real y comunicación integrada entre empresa y profesional']
  },
  property: {
    name: 'Property Check',
    tag: 'PropTech · IA', tagClass: 'tag-sys',
    kpis: [{n:'IA',l:'Validación auto.'},{n:'B2B',l:'Modelo'},{n:'Tiempo real',l:'Consulta registros'}],
    desc: 'Sistema de validación legal e inmobiliaria con IA para el mercado peruano. Permite a brokers, notarías y compradores verificar el estado legal de una propiedad en minutos. Integra consulta a registros públicos de SUNARP, análisis de cargas y gravámenes, historial de titularidad y análisis de riesgo generado por IA con recomendación de acción.',
    tech: ['Python','FastAPI','Claude API','SUNARP API','PostgreSQL','React','PDF generation'],
    highlights: ['Extracción automática de datos de registros públicos de SUNARP','Análisis de riesgo legal generado por IA con score 0–100','Reporte PDF profesional generado en segundos','Historial completo de titularidad y cargas hipotecarias','Integración con bases de datos judiciales para litigios pendientes']
  },
  dominga: {
    name: 'La Dominga',
    tag: 'Sistema interno · RRHH', tagClass: 'tag-sys',
    kpis: [{n:'RRHH',l:'Gestión completa'},{n:'Nómina',l:'Automatizada'},{n:'Turnos',l:'Control digital'}],
    desc: 'Sistema interno personalizado para cadena de pastelerías. Reemplazó procesos manuales en papel con un sistema digital centralizado que gestiona todo el ciclo de RRHH: contratación, onboarding, control de asistencia biométrico, gestión de turnos por local, cálculo automático de nómina según régimen laboral peruano, y reportes para gerencia.',
    tech: ['Node.js','Supabase','React','Biometría API','Excel export','WhatsApp Twilio'],
    highlights: ['Control de asistencia integrado con dispositivo biométrico por local','Cálculo automático de gratificaciones, CTS y horas extra según ley peruana','Sistema de turnos con alertas por WhatsApp al personal','Dashboard gerencial con costo de mano de obra por producto y local','Módulo de incidencias y sanciones con flujo de aprobación']
  },
  circuclaje: {
    name: 'Circuclaje',
    tag: 'Marketplace · Economía circular', tagClass: 'tag-dev',
    kpis: [{n:'B2C',l:'Modelo validado'},{n:'MVP',l:'Lanzado'},{n:'Impacto',l:'CO₂ medido'}],
    desc: 'Marketplace de compra-venta de productos de segunda mano enfocado en economía circular para el mercado peruano. Cada transacción calcula el impacto ambiental evitado (CO₂, agua, residuos) y lo muestra al usuario. Incluye sistema de reputación, moderación de listings, pagos integrados y programa de puntos por impacto generado.',
    tech: ['React Native','Node.js','PostgreSQL','Culqi (pagos Perú)','AWS','Carbon API'],
    highlights: ['Calculadora de impacto ambiental por categoría de producto vendido','Sistema de reputación con verificación de entrega y reseñas','Programa de "Puntos Verdes" canjeables por descuentos','Moderación automática de listings con detección de contenido prohibido','App móvil iOS y Android con cámara para fotografiar productos']
  },
  cisa: {
    name: 'CISA USA',
    tag: 'Marketing digital · USA', tagClass: 'tag-mkt',
    kpis: [{n:'$8.4K',l:'Valor cliente 20 años'},{n:'7–8x',l:'ROI estimado'},{n:'0→1',l:'Presencia digital'}],
    desc: 'Broker de seguros de vida y salud con 35 años de trayectoria en el mercado hispanohablante de Estados Unidos. Con cero presencia digital, construimos toda la estrategia desde cero: identidad de marca digital, web profesional, estrategia de contenido en video (2 formatos: autoridad y cercanía), pauta en Meta, TikTok y Google, y sistema de captación de leads con seguimiento automatizado.',
    tech: ['WordPress','Meta Ads','Google Ads','TikTok Ads','Email automation','CRM HubSpot'],
    highlights: ['Posicionamiento como "broker boutique" vs. aseguradoras masivas','Estrategia de contenido en video: la broker como cara de la marca','Segmentación hispana en Florida con pauta geolocalizada','Sistema de lead magnet + nurturing automatizado por email','Reporte mensual con costo por lead, tasa de cierre y LTV proyectado']
  },
  seguros: {
    name: 'CRM para Brokers de Seguros',
    tag: 'Sistema interno · Seguros', tagClass: 'tag-sys',
    kpis: [{n:'360°',l:'Vista del asegurado'},{n:'Auto',l:'Seguimiento de pólizas'},{n:'B2B',l:'Para brokers y agencias'}],
    desc: 'Sistema interno diseñado para empresas que venden seguros de vida y salud. Centraliza la gestión de clientes, pólizas, vencimientos y comisiones en un solo lugar. Automatiza el seguimiento de renovaciones, alertas de vencimiento y cálculo de comisiones por agente. Incluye dashboard de cartera con KPIs en tiempo real y módulo de cotización rápida.',
    tech: ['Node.js','Supabase','Claude API','WhatsApp Twilio','PDF generation','Dashboard analytics'],
    highlights: ['Vista 360° del cliente: pólizas activas, historial de reclamos y valor de cartera','Alertas automáticas por WhatsApp 30, 15 y 7 días antes del vencimiento de cada póliza','Cálculo automático de comisiones por agente con reporte mensual exportable','Módulo de cotización rápida con comparativa de coberturas','Pipeline de prospectos con scoring por probabilidad de cierre','Integración con aseguradoras para actualización automática de estados de póliza']
  },
  zano: {
    name: 'Zano Cafetería',
    tag: 'Marketing estratégico · Lima', tagClass: 'tag-mkt',
    kpis: [{n:'S/87K',l:'Pico ventas mensual'},{n:'+30%',l:'Recuperación'},{n:'4%',l:'Caída mensual revertida'}],
    desc: 'Negocio gastronómico con hasta S/87,000 en ventas mensuales que experimentaba una caída progresiva de 4% mensual por falta de gestión estratégica. El problema no era el producto, era la ausencia de sistema. Analizamos datos de ventas semana a semana, identificamos la caída de tickets (no de precios), diseñamos un plan de acción concreto y revertimos la tendencia en 90 días.',
    tech: ['Restaurant.pe','Meta Ads','Google Analytics','Sheets + Data Studio','WhatsApp Business'],
    highlights: ['Análisis de datos históricos mes a mes para identificar causa raíz','Identificación de caída de tickets (tráfico) como driver principal, no precios','Plan de activación por canal: delivery, punto físico y pedidos anticipados','Seguimiento semanal con dashboard de tickets, ticket promedio y canal','Proyecciones de escenarios pesimista/base/optimista con supuestos explícitos']
  }
};

function openModal(key) {
  const p = projects[key];
  if (!p) return;
  document.getElementById('modal-name').textContent = p.name;
  const tag = document.getElementById('modal-tag');
  tag.textContent = p.tag;
  tag.className = 'caso-tag ' + p.tagClass;

  const kpisEl = document.getElementById('modal-kpis');
  kpisEl.innerHTML = p.kpis.map(k => `<div class="mkpi"><div class="mkpi-n">${k.n}</div><div class="mkpi-l">${k.l}</div></div>`).join('');

  document.getElementById('modal-desc').textContent = p.desc;

  const techEl = document.getElementById('modal-tech');
  const techLabel = document.getElementById('modal-tech-label');
  if (p.tech && p.tech.length) {
    techLabel.style.display = 'block';
    techEl.innerHTML = p.tech.map(t => `<span class="modal-pill">${t}</span>`).join('');
  } else {
    techLabel.style.display = 'none';
    techEl.innerHTML = '';
  }

  document.getElementById('modal-highlights').innerHTML = p.highlights.map(h => `<div class="mhigh"><div class="mhigh-dot"></div>${h}</div>`).join('');

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('vis'), i * 70);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ─── HERO NETWORK CANVAS ──────────────────────────────────────────────────
(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CORAL = '#BB442A';
  const IVORY = '#F8F7F4';
  const BG    = '#0a0c10';
  const CR    = [187, 68, 42];
  const LABELS = ['Marketing', 'Automatización', 'Leads', 'Ventas', 'IA', 'CRM', 'Datos', 'WhatsApp', 'Meta Ads'];

  let cW = 0, cH = 0;
  let nodes = [], conns = [], pulses = [], parts = [], rings = [];
  let pkt = 0, sig = 0, lastPulse = 0, raf;

  // ── resize ──────────────────────────────────────────────────────────────
  function resize() {
    const dpr  = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    cW = rect.width; cH = rect.height;
    if (!cW || !cH) return;
    canvas.width  = Math.round(cW * dpr);
    canvas.height = Math.round(cH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initGraph();
  }

  // ── graph ───────────────────────────────────────────────────────────────
  function initGraph() {
    const cx = cW / 2, cy = cH / 2;
    const MARGIN = 48;
    const maxR = Math.min(Math.min(cW, cH) * 0.36, cW / 2 - MARGIN, cH / 2 - MARGIN);

    nodes = [{ x: cx, y: cy, bx: cx, by: cy, label: 'TRAMA', r: 22, central: true, phase: 0 }];

    LABELS.forEach((lbl, i) => {
      const offset = i % 2 ? 0.18 : -0.18;
      const a  = (i / LABELS.length) * Math.PI * 2 - Math.PI / 2 + offset;
      const r  = maxR * (0.74 + (i % 3) * 0.1);
      const bx = Math.max(MARGIN, Math.min(cW - MARGIN, cx + Math.cos(a) * r));
      const by = Math.max(MARGIN, Math.min(cH - MARGIN, cy + Math.sin(a) * r));
      nodes.push({ x: bx, y: by, bx, by, label: lbl, r: 6 + (i % 3) * 2, central: false, phase: i * 0.72 });
    });

    conns = [];
    for (let i = 1; i < nodes.length; i++) conns.push({ a: 0, b: i });
    for (let i = 1; i < nodes.length; i++) conns.push({ a: i, b: i < nodes.length - 1 ? i + 1 : 1 });
    [1, 3, 5, 7].forEach(i => { if (i + 2 < nodes.length) conns.push({ a: i, b: i + 2 }); });

    pulses = []; parts = []; rings = []; pkt = 0; sig = 0; lastPulse = 0;
  }

  // ── background layers ───────────────────────────────────────────────────
  function drawGrid() {
    ctx.strokeStyle = 'rgba(248,247,244,0.025)';
    ctx.lineWidth   = 0.5;
    const step = 36;
    for (let x = 0; x <= cW; x += step) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, cH); ctx.stroke(); }
    for (let y = 0; y <= cH; y += step) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(cW, y); ctx.stroke(); }
  }

  function drawHex() {
    const s = 52, hexH = s * Math.sqrt(3);
    ctx.strokeStyle = 'rgba(187,68,42,0.04)';
    ctx.lineWidth   = 0.5;
    for (let row = -1; row * hexH * 0.5 < cH + s; row++) {
      for (let col = -1; col * s * 1.5 < cW + s; col++) {
        const x = col * s * 1.5;
        const y = row * hexH + (col % 2 ? hexH / 2 : 0);
        ctx.beginPath();
        for (let k = 0; k < 6; k++) {
          const ang = k * Math.PI / 3 + Math.PI / 6;
          k === 0 ? ctx.moveTo(x + s * Math.cos(ang), y + s * Math.sin(ang))
                  : ctx.lineTo(x + s * Math.cos(ang), y + s * Math.sin(ang));
        }
        ctx.closePath(); ctx.stroke();
      }
    }
  }

  // ── scan line ────────────────────────────────────────────────────────────
  function drawScan(t) {
    const sx = (t * 0.038) % (cW + 40) - 20;
    const g  = ctx.createLinearGradient(sx - 22, 0, sx + 4, 0);
    g.addColorStop(0, 'rgba(187,68,42,0)');
    g.addColorStop(0.65, 'rgba(187,68,42,0.03)');
    g.addColorStop(1, 'rgba(187,68,42,0.09)');
    ctx.fillStyle = g;
    ctx.fillRect(sx - 22, 0, 26, cH);
  }

  // ── connections ──────────────────────────────────────────────────────────
  function drawConns() {
    conns.forEach(c => {
      const a = nodes[c.a], b = nodes[c.b];
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = c.a === 0 ? 'rgba(187,68,42,0.18)' : 'rgba(248,247,244,0.055)';
      ctx.lineWidth = 0.5; ctx.stroke();
    });
  }

  // ── nodes ────────────────────────────────────────────────────────────────
  function drawNodes(t) {
    nodes.forEach(n => {
      if (n.central) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3.5);
        g.addColorStop(0, 'rgba(187,68,42,0.28)'); g.addColorStop(1, 'rgba(187,68,42,0)');
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = CORAL; ctx.fill();

        const pr = n.r + 7 + 3 * Math.sin(t * 0.002);
        ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(187,68,42,0.35)'; ctx.lineWidth = 1; ctx.stroke();

        ctx.font = 'bold 10px "JetBrains Mono",monospace';
        ctx.fillStyle = IVORY; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('TRAMA', n.x, n.y);
      } else {
        const pulse = 0.55 + 0.2 * Math.sin(t * 0.001 + n.phase);
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
        g.addColorStop(0, `rgba(248,247,244,${pulse * 0.22})`); g.addColorStop(1, 'rgba(248,247,244,0)');
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248,247,244,${pulse})`; ctx.fill();
        ctx.strokeStyle = 'rgba(248,247,244,0.2)'; ctx.lineWidth = 0.5; ctx.stroke();

        ctx.font = '400 8px "JetBrains Mono",monospace';
        ctx.fillStyle = `rgba(248,247,244,${pulse * 0.9})`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'top';
        ctx.fillText(n.label, n.x, n.y + n.r + 4);
      }
    });
  }

  // ── node float ───────────────────────────────────────────────────────────
  function floatNodes(t) {
    nodes.forEach(n => {
      if (n.central) return;
      n.x = n.bx + Math.sin(t * 0.00075 + n.phase) * 7;
      n.y = n.by + Math.cos(t * 0.00060 + n.phase) * 5;
    });
  }

  // ── pulses ───────────────────────────────────────────────────────────────
  function spawnPulse() {
    const c = conns[Math.floor(Math.random() * conns.length)];
    pulses.push({ conn: c, t: 0, speed: 0.003 + Math.random() * 0.003, trail: [] });
    pkt++;
    sig = Math.min(9999, Math.floor(pkt * 0.28 + Math.random() * 15));
  }

  function updatePulses() {
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      p.t += p.speed;
      const na = nodes[p.conn.a], nb = nodes[p.conn.b];
      p.trail.unshift({ x: na.x + (nb.x - na.x) * p.t, y: na.y + (nb.y - na.y) * p.t, a: 1 });
      p.trail.forEach(pt => pt.a *= 0.82);
      while (p.trail.length > 20) p.trail.pop();
      if (p.t >= 1) { impact(nb.x, nb.y); pulses.splice(i, 1); }
    }
  }

  function drawPulses() {
    pulses.forEach(p => {
      p.trail.forEach(pt => {
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(187,68,42,${pt.a * 0.45})`; ctx.fill();
      });
      if (p.trail.length) {
        const h = p.trail[0];
        const g = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, 9);
        g.addColorStop(0, `rgba(${CR},0.85)`); g.addColorStop(1, 'rgba(187,68,42,0)');
        ctx.beginPath(); ctx.arc(h.x, h.y, 9, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(h.x, h.y, 2.5, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
      }
    });
  }

  // ── impact ───────────────────────────────────────────────────────────────
  function impact(x, y) {
    rings.push({ x, y, r: 3, alpha: 0.9, maxR: 30, spd: 0.65 });
    rings.push({ x, y, r: 2, alpha: 0.55, maxR: 18, spd: 1.1 });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const spd = 0.5 + Math.random() * 1.5;
      parts.push({ x, y, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd, a: 0.9, r: 1 + Math.random() * 2 });
    }
  }

  function updateRings() {
    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i];
      r.r += r.spd; r.alpha *= 0.91;
      ctx.beginPath(); ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(187,68,42,${r.alpha})`; ctx.lineWidth = 1; ctx.stroke();
      if (r.r >= r.maxR || r.alpha < 0.01) rings.splice(i, 1);
    }
  }

  function updateParts() {
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.x += p.vx; p.y += p.vy; p.vx *= 0.94; p.vy *= 0.94; p.a *= 0.87;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(187,68,42,${p.a})`; ctx.fill();
      if (p.a < 0.01) parts.splice(i, 1);
    }
  }

  // ── HUD ─────────────────────────────────────────────────────────────────
  function drawHUD() {
    const m = 14, bs = 14;
    ctx.strokeStyle = 'rgba(187,68,42,0.45)'; ctx.lineWidth = 1.5;
    [[m, m, 1, 1], [cW - m, m, -1, 1], [m, cH - m, 1, -1], [cW - m, cH - m, -1, -1]].forEach(([x, y, dx, dy]) => {
      ctx.beginPath(); ctx.moveTo(x + dx * bs, y); ctx.lineTo(x, y); ctx.lineTo(x, y + dy * bs); ctx.stroke();
    });
    ctx.font = '400 7.5px "JetBrains Mono",monospace';
    ctx.fillStyle = 'rgba(187,68,42,0.55)';
    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    ctx.fillText(`PKT · ${String(pkt).padStart(4, '0')}`, m + 4, cH - m - 16);
    ctx.fillText(`SIG · ${String(sig).padStart(4, '0')}`, m + 4, cH - m - 4);
    ctx.textAlign = 'right'; ctx.textBaseline = 'top';
    ctx.fillText('NET · LIVE', cW - m - 4, m + 4);
  }

  // ── loop ─────────────────────────────────────────────────────────────────
  function loop(t) {
    ctx.fillStyle = BG; ctx.fillRect(0, 0, cW, cH);
    drawGrid();
    drawHex();
    drawScan(t);
    floatNodes(t);
    drawConns();
    updatePulses();
    drawPulses();
    updateRings();
    updateParts();
    drawNodes(t);
    drawHUD();
    if (t - lastPulse > 420 + Math.random() * 480) { spawnPulse(); lastPulse = t; }
    raf = requestAnimationFrame(loop);
  }

  // ── boot ─────────────────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(raf);
    resize();
    raf = requestAnimationFrame(loop);
  });
  ro.observe(canvas);
  resize();
  raf = requestAnimationFrame(loop);
})();