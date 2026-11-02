/* =============================================
   OROMIA INVEST — Full JavaScript
   Addresses weaknesses: #1,#2,#3,#4,#5,#6,#7,#8,#9
   ============================================= */

'use strict';

/* ===== TRANSLATIONS (Weakness #6 — Multi-language) ===== */
const TRANSLATIONS = {
  en: {},  // English is the default; keys in HTML already in English
  om: {
    logo_main: 'Oromiyaatti Maali',
    hero_badge: '🏆 Bakka Invastimentii Oromiyaa',
    hero_title: 'Oromiyaatti <span class="gradient-text">Maali</span> —<br>Carraa Invastimentii',
    hero_subtitle: 'Tajaajila tokkoo · Mootummaa ifa · Carraalee gurguddaa',
    nav_home: 'Mana', nav_why: 'Maaliif Oromiyaa', nav_opps: 'Carraalee',
    nav_news: 'Oduu', nav_contact: 'Nu Quunnamaa',
    qa_tag: 'Seensa Hatattama', qa_title: 'Maal Barbaadda?',
    stat1: 'Invastara Haaraa (2025)', stat2: 'Birr Invastimeentii', stat3: 'Carraa Hojii',
    why_title: 'Dachee Carraa Itoophiyaa', val_title: 'Gatii Keenya',
    sec_tag: 'Turjumaana', sec_title: 'Sekteroota Cimaa',
    form_submit: 'Gaaffii Ergi',
  },
  am: {
    logo_main: 'ኦሮሚያ ኢንቨስት',
    hero_badge: '🏆 ቀዳሚ የኢንቨስትመንት መዳረሻ',
    hero_title: 'በ<span class="gradient-text">ኦሮሚያ</span> ኢንቨስት ያድርጉ —<br>ዕድሎች ያብቡበት',
    hero_subtitle: 'አንድ ቦታ አገልግሎቶች · ግልፅ አስተዳደር · ዓለም አቀፍ ዕድሎች',
    nav_home: 'መነሻ', nav_why: 'ለምን ኦሮሚያ', nav_opps: 'ዕድሎች',
    nav_news: 'ዜናዎች', nav_contact: 'ያግኙን',
    qa_tag: 'ፈጣን መዳረሻ', qa_title: 'ምን ማድረግ ይፈልጋሉ?',
    stat1: 'አዲስ ባለሀብቶች (2025)', stat2: 'ብር ዋና ከተማ', stat3: 'የሥራ ዕድሎች',
    form_submit: 'ማቅረቢያ ላኩ',
  },
  fr: {
    logo_main: 'InvestOromia',
    hero_badge: '🏆 Première Destination d\'Investissement',
    hero_title: 'Investissez en <span class="gradient-text">Oromia</span> —<br>Où les Opportunités Fleurissent',
    hero_subtitle: 'Services guichet unique · Gouvernance transparente · Opportunités mondiales',
    nav_home: 'Accueil', nav_why: 'Pourquoi Oromia', nav_opps: 'Opportunités',
    nav_news: 'Actualités', nav_contact: 'Contactez-nous',
    qa_tag: 'Accès Rapide', qa_title: 'Que souhaitez-vous faire?',
    stat1: 'Nouveaux Investisseurs (2025)', stat2: 'Birr de Capital Investi', stat3: 'Emplois Créés',
    form_submit: 'Soumettre la Candidature',
    data_fresh: 'Données vérifiées: Octobre 2025',
  },
  zh: {
    logo_main: '投资奥罗米亚',
    hero_badge: '🏆 埃塞俄比亚首选投资目的地',
    hero_title: '在<span class="gradient-text">奥罗米亚</span>投资 —<br>机遇之地',
    hero_subtitle: '一站式服务 · 透明治理 · 世界级机遇',
    nav_home: '首页', nav_why: '为什么选择奥罗米亚', nav_opps: '投资机会',
    nav_news: '新闻', nav_contact: '联系我们',
    qa_tag: '快速通道', qa_title: '您想做什么？',
    stat1: '新投资者（2025年）', stat2: '比尔投资资本', stat3: '创造就业',
    form_submit: '提交申请',
    data_fresh: '数据最新验证：2025年10月',
  },
  ar: {
    logo_main: 'استثمر في أوروميا',
    hero_badge: '🏆 وجهة الاستثمار الرائدة',
    hero_title: 'استثمر في <span class="gradient-text">أوروميا</span> —<br>حيث تزدهر الفرص',
    hero_subtitle: 'خدمة الشباك الواحد · حوكمة شفافة · فرص عالمية',
    nav_home: 'الرئيسية', nav_why: 'لماذا أوروميا', nav_opps: 'الفرص',
    nav_news: 'الأخبار', nav_contact: 'تواصل معنا',
    qa_tag: 'الوصول السريع', qa_title: 'ماذا تريد أن تفعل؟',
    stat1: 'مستثمرون جدد (2025)', stat2: 'بير رأس المال المستثمر', stat3: 'وظائف مُنشأة',
    form_submit: 'إرسال الطلب',
    data_fresh: 'آخر تحديث للبيانات: أكتوبر 2025',
  },
};

/* ===== SEARCH DATA (Weakness #1) ===== */
const SEARCH_DATA = [
  { label: 'Agriculture Investment', href: '#sectors', icon: 'fa-seedling' },
  { label: 'Manufacturing Sector', href: '#sectors', icon: 'fa-industry' },
  { label: 'Tourism Opportunities', href: '#sectors', icon: 'fa-mountain' },
  { label: 'ICT & Innovation', href: '#sectors', icon: 'fa-microchip' },
  { label: 'Mining & Minerals', href: '#sectors', icon: 'fa-gem' },
  { label: 'Tax Holiday Incentives', href: '#incentives', icon: 'fa-piggy-bank' },
  { label: 'Land Access', href: '#incentives', icon: 'fa-map-marked-alt' },
  { label: 'Apply for Investment License', href: '#apply', icon: 'fa-file-signature' },
  { label: 'Track Application Status', href: '#track', icon: 'fa-search' },
  { label: 'Download Investment Guide', href: '#resources', icon: 'fa-download' },
  { label: 'Contact Investment Advisor', href: '#contact', icon: 'fa-phone' },
  { label: 'Investment Regulations', href: '#resources', icon: 'fa-file-lines' },
  { label: 'FAQ — How to Register', href: '#faq', icon: 'fa-circle-question' },
  { label: 'Security & Privacy', href: '#security', icon: 'fa-shield-halved' },
  { label: 'Partner Organizations', href: '#partners', icon: 'fa-handshake' },
  { label: 'Why Invest in Oromia', href: '#why', icon: 'fa-star' },
  { label: 'News & Announcements', href: '#news', icon: 'fa-newspaper' },
  { label: 'Live Chat Support', href: '#chat', icon: 'fa-comments' },
];

/* ===== CHATBOT RESPONSES (Weakness #4) ===== */
const CHAT_RESPONSES = {
  incentive: 'Great question! 🎯 Oromia offers **tax holidays up to 7 years**, priority land access, duty-free import of capital goods, and dedicated investment advisor support. Would you like me to explain any specific incentive in detail?',
  apply: '📋 Applying is simple:\n1. Fill the form on this page\n2. Upload documents (passport, business plan)\n3. Submit and get your reference number\n4. Track progress in real time\n\nThe whole process takes less than 15 minutes online!',
  sector: '🌱 Oromia\'s top investment sectors are:\n• Agriculture & Agro-Processing\n• Manufacturing (Textiles, Leather)\n• Tourism & Eco-Tourism\n• ICT & Innovation\n• Mining & Minerals\n\nWhich sector interests you most?',
  agriculture: '☕ Oromia is the coffee heartland of Africa! Investors in agriculture get land access, irrigation support, and export incentives. Minimum capital: ~USD 200,000 for foreign investors.',
  manufacturing: '🏭 Oromia has several industrial parks (Adama, Jimma) with ready infrastructure. Tax holidays, duty-free machinery import, and a skilled workforce await you!',
  tourism: '🏔️ Bale Mountains, Sof Omar Caves, Lake Langano — Oromia is a tourism goldmine. Lodge and resort investments qualify for generous incentives.',
  ict: '💻 The ICT sector is booming! Tech parks, software hubs, and a young workforce make Oromia perfect for digital innovation. Government e-governance initiatives create enormous demand.',
  mining: '💎 Oromia has gold (Shakiso), tantalum, gemstones, and limestone. Streamlined licensing and transparent regulations make it Africa\'s next mining frontier.',
  contact: '📞 Reach us at:\n• Phone: +251 188 325 987\n• Email: contact@investinoromia.et\n• Address: Sarbet, Finfine, Oromia\n• Working hours: Mon–Fri, 8am–5pm EAT',
  security: '🔒 Your data is protected by:\n• 256-bit SSL encryption\n• GDPR-aligned data handling\n• Regular independent security audits\n• Strict access controls\n\nYour information is never shared without consent.',
  default: '👋 Thank you for your message! One of our investment advisors will respond shortly. For urgent inquiries, please call +251 188 325 987 or email contact@investinoromia.et',
};

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSearch();
  initSectorTabs();
  initStatCounters();
  initChat();
  initForms();
  initApplicationTracker();
  initLanguageSwitcher();
  initOfflineDetection();
  initScrollReveal();
  initParticles();
  initLiveClock();
  initNavHighlight();
  initHamburger();
  initFaqModal();
  initResources();
});

/* ===== NAVBAR SCROLL ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);
    lastScroll = y;
  }, { passive: true });
}

/* ===== HAMBURGER (Mobile) ===== */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav-links');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ===== SEARCH (Weakness #1) ===== */
function initSearch() {
  const input = document.getElementById('global-search');
  const dropdown = document.getElementById('search-dropdown');
  const btn = document.getElementById('search-btn');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { dropdown.classList.remove('show'); return; }
    const results = SEARCH_DATA.filter(d => d.label.toLowerCase().includes(q)).slice(0, 6);
    if (!results.length) { dropdown.classList.remove('show'); return; }
    dropdown.innerHTML = results.map(r =>
      `<div class="search-item" role="option" data-href="${r.href}" tabindex="0">
        <i class="fas ${r.icon}"></i>${r.label}
      </div>`
    ).join('');
    dropdown.classList.add('show');
    dropdown.querySelectorAll('.search-item').forEach(item => {
      item.addEventListener('click', () => {
        const href = item.dataset.href;
        if (href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        dropdown.classList.remove('show');
        input.value = '';
      });
      item.addEventListener('keydown', e => { if (e.key === 'Enter') item.click(); });
    });
  });

  btn.addEventListener('click', () => {
    if (input.value.trim().length >= 2) dropdown.querySelector('.search-item')?.click();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-search')) dropdown.classList.remove('show');
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dropdown.classList.remove('show'); input.value = ''; }
  });
}

/* ===== SECTOR TABS (Weakness #1) ===== */
function initSectorTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.sector-panel');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const target = document.getElementById('tab-' + btn.dataset.sector);
      if (target) target.classList.add('active');
    });
  });
}

/* ===== STAT COUNTERS (Weakness #3) ===== */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const startTime = performance.now();
      const animate = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
  }, { threshold: 0.3 });
  stats.forEach(s => observer.observe(s));
}

/* ===== LIVE CHAT (Weakness #4) ===== */
function initChat() {
  const fab = document.getElementById('chat-fab');
  const win = document.getElementById('chat-window');
  const close = document.getElementById('chat-close');
  const input = document.getElementById('chat-input');
  const send = document.getElementById('chat-send');
  const msgs = document.getElementById('chat-messages');
  const badge = document.getElementById('chat-badge');
  const quickReplies = document.querySelectorAll('.quick-reply');
  if (!fab || !win) return;

  // Toggle chat
  const openChat = () => {
    win.classList.add('open');
    win.setAttribute('aria-hidden', 'false');
    badge.style.display = 'none';
    setTimeout(() => input.focus(), 300);
  };
  const closeChat = () => { win.classList.remove('open'); win.setAttribute('aria-hidden', 'true'); };

  fab.addEventListener('click', openChat);
  fab.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openChat(); });
  close.addEventListener('click', closeChat);

  // Send message
  const sendMessage = (text) => {
    text = text.trim();
    if (!text) return;
    appendMsg(text, 'user');
    input.value = '';
    setTimeout(() => {
      const reply = getBotReply(text.toLowerCase());
      appendMsg(reply, 'agent');
    }, 900 + Math.random() * 600);
  };

  send.addEventListener('click', () => sendMessage(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(input.value); });
  quickReplies.forEach(btn => btn.addEventListener('click', () => sendMessage(btn.dataset.msg)));

  function appendMsg(text, type) {
    const el = document.createElement('div');
    el.className = 'chat-msg ' + type;
    el.innerHTML = `<div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div><div class="msg-time">${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>`;
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function getBotReply(text) {
    if (text.includes('incentiv') || text.includes('tax') || text.includes('benefit')) return CHAT_RESPONSES.incentive;
    if (text.includes('apply') || text.includes('how') || text.includes('register') || text.includes('start')) return CHAT_RESPONSES.apply;
    if (text.includes('sector') || text.includes('opportunit')) return CHAT_RESPONSES.sector;
    if (text.includes('agri') || text.includes('coffee') || text.includes('farm')) return CHAT_RESPONSES.agriculture;
    if (text.includes('manufactur') || text.includes('factory') || text.includes('industri')) return CHAT_RESPONSES.manufacturing;
    if (text.includes('tour') || text.includes('hotel') || text.includes('lodge')) return CHAT_RESPONSES.tourism;
    if (text.includes('ict') || text.includes('tech') || text.includes('software') || text.includes('digital')) return CHAT_RESPONSES.ict;
    if (text.includes('min') || text.includes('gold') || text.includes('mineral')) return CHAT_RESPONSES.mining;
    if (text.includes('contact') || text.includes('phone') || text.includes('address') || text.includes('email')) return CHAT_RESPONSES.contact;
    if (text.includes('secur') || text.includes('safe') || text.includes('privacy') || text.includes('data')) return CHAT_RESPONSES.security;
    return CHAT_RESPONSES.default;
  }
}

/* ===== INVESTMENT FORM (Weaknesses #1, #9) ===== */
function initForms() {
  // Investment application form
  const form = document.getElementById('investment-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById('inv-name');
      const email = document.getElementById('inv-email');
      const country = document.getElementById('inv-country');
      const sector = document.getElementById('inv-sector');

      clearError('err-name'); clearError('err-email'); clearError('err-country'); clearError('err-sector');

      if (!name.value.trim() || name.value.trim().length < 2) { setError('err-name', 'Please enter your full name'); valid = false; }
      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { setError('err-email', 'Please enter a valid email address'); valid = false; }
      if (!country.value) { setError('err-country', 'Please select your country'); valid = false; }
      if (!sector.value) { setError('err-sector', 'Please select an investment sector'); valid = false; }

      if (!valid) return;

      // Simulate submission
      const btn = document.getElementById('form-submit-btn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting…';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Application Submitted!';
        btn.style.background = 'linear-gradient(135deg, #059669, #047857)';
        showToast('Application submitted! Reference: OIIB-2025-' + Math.floor(Math.random()*9000+1000));
        form.reset();
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Application';
          btn.style.background = '';
        }, 5000);
      }, 2000);
    });
  }

  // Contact form
  const cf = document.getElementById('contact-form');
  if (cf) {
    cf.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('cf-submit');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
        showToast('Your message has been sent. We\'ll respond within 24 hours.');
        cf.reset();
        setTimeout(() => { btn.disabled = false; btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message'; }, 4000);
      }, 1500);
    });
  }
}

function setError(id, msg) { const el = document.getElementById(id); if (el) el.textContent = msg; }
function clearError(id) { const el = document.getElementById(id); if (el) el.textContent = ''; }

/* ===== APPLICATION TRACKER (Weakness #9) ===== */
function initApplicationTracker() {
  const btn = document.getElementById('track-btn');
  const input = document.getElementById('track-input');
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    const ref = input.value.trim();
    if (!ref) { showToast('Please enter your application reference number'); return; }
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Tracking…';
    setTimeout(() => {
      btn.innerHTML = 'Track Now';
      if (ref.toUpperCase().startsWith('OIIB')) {
        showToast('Application found: ' + ref.toUpperCase() + ' — Currently under review');
      } else {
        showToast('No application found with reference "' + ref + '". Please check and try again.');
      }
    }, 1500);
  });
}

/* ===== LANGUAGE DROPDOWN ===== */
function initLanguageSwitcher() {
  const dropdown = document.getElementById('lang-dropdown');
  const toggle = document.getElementById('lang-toggle');
  const menu = document.getElementById('lang-menu');
  const currentLabel = document.getElementById('lang-current');
  const options = document.querySelectorAll('.lang-option');
  if (!dropdown || !toggle) return;

  const langNames = { en: 'English', am: '\u12A0\u121B\u122D\u129B', om: 'Afaan Oromoo' };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => { o.classList.remove('active'); o.setAttribute('aria-selected', 'false'); });
      opt.classList.add('active');
      opt.setAttribute('aria-selected', 'true');
      const lang = opt.dataset.lang;
      currentLabel.textContent = langNames[lang] || 'English';
      applyLanguage(lang);
      document.documentElement.lang = lang;
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-dropdown')) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
    // else keep English default
  });
}

/* ===== OFFLINE DETECTION (Weakness #2) ===== */
function initOfflineDetection() {
  const banner = document.getElementById('offline-banner');
  const dismiss = document.getElementById('dismiss-offline');
  if (!banner) return;

  const update = () => {
    if (!navigator.onLine) {
      banner.classList.remove('hidden');
    } else {
      banner.classList.add('hidden');
    }
  };
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();

  if (dismiss) dismiss.addEventListener('click', () => banner.classList.add('hidden'));

  // Service Worker registration (Weakness #2)
  if ('serviceWorker' in navigator) {
    // SW registration would go here in production
    // navigator.serviceWorker.register('/sw.js');
  }
}

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const els = document.querySelectorAll('.qa-card, .why-card, .incentive-card, .resource-card, .news-card, .value-card, .partner-card, .sector-tabs, .tracker-card, .security-card, .apply-form-card');
  els.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ===== PARTICLES (Hero) ===== */
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 4 + Math.random() * 8;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${8 + Math.random()*14}s;
      animation-delay:${Math.random()*12}s;
      opacity:0;
    `;
    container.appendChild(p);
  }
}

/* ===== LIVE CLOCK (Weakness #5) ===== */
function initLiveClock() {
  const el = document.getElementById('live-clock');
  if (!el) return;
  const update = () => {
    el.textContent = 'EAT ' + new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Addis_Ababa', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  update();
  setInterval(update, 1000);
}

/* ===== ACTIVE NAV ON SCROLL ===== */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const match = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

/* ===== FAQ MODAL ===== */
function initFaqModal() {
  const modal = document.getElementById('faq-modal');
  const closeBtn = document.getElementById('faq-close');
  if (!modal) return;
  // Open when clicking #faq links
  document.querySelectorAll('a[href="#faq"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });
  closeBtn?.addEventListener('click', () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); });
  modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); } });
}

/* ===== RESOURCES — Download simulation (Weakness #2) ===== */
function initResources() {
  document.querySelectorAll('.res-download').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const card = btn.closest('.resource-card');
      const title = card?.querySelector('h4')?.textContent || 'Resource';
      showToast(`"${title}" download started!`);
    });
  });
}

/* ===== TOAST ===== */
function showToast(msg, duration = 3500) {
  const toast = document.getElementById('toast');
  const span = document.getElementById('toast-msg');
  if (!toast || !span) return;
  span.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS ===== */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const href = a.getAttribute('href');
  if (href === '#') return;
  const target = document.querySelector(href);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

/* ===== BACK TO TOP BUTTON ===== */
(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
(function () {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(sec => observer.observe(sec));
})();

/* ===== FAQ MODAL OPEN VIA ANCHOR ===== */
(function () {
  document.querySelectorAll('a[href="#faq"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const modal = document.getElementById('faq-modal');
      if (modal) {
        modal.classList.add('open');
        modal.removeAttribute('aria-hidden');
      }
    });
  });
})();


/* ===== HERO SLIDER CONTROLLER (Screenshot Match) ===== */
(function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function goToSlide(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => goToSlide(current + 1), 6000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }

  prevBtn?.addEventListener('click', () => {
    goToSlide(current - 1);
    startAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    goToSlide(current + 1);
    startAutoplay();
  });

  startAutoplay();
})();

/* ===== SEARCH TOGGLE POPUP ===== */
(function initSearchToggle() {
  const toggleBtn = document.getElementById('search-toggle-btn');
  const searchBox = document.getElementById('nav-search-box');
  const searchInput = document.getElementById('global-search');
  if (!toggleBtn || !searchBox) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = searchBox.classList.toggle('open');
    if (isOpen) {
      setTimeout(() => searchInput?.focus(), 100);
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#nav-search-box') && !e.target.closest('#search-toggle-btn')) {
      searchBox.classList.remove('open');
    }
  });
})();


/* ===== VERTICAL BACK TO TOP BUTTON (Matching Image 2) ===== */
document.querySelectorAll('#vertical-back-to-top').forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* ===== WHY OROMIA INTERACTIVE CHECKLIST ===== */
document.querySelectorAll('.why-check-row').forEach(row => {
  row.addEventListener('click', () => {
    document.querySelectorAll('.why-check-badge').forEach(b => b.classList.remove('active'));
    const badge = row.querySelector('.why-check-badge');
    if (badge) badge.classList.add('active');
  });
});

