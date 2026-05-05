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