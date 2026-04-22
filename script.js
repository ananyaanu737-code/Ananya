// ── NAVBAR SCROLL ───────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER MENU ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── TYPED TEXT ───────────────────────────────────────────
const phrases = [
  'BTech CSE Student 🎓',
  'Full Stack Developer 💻',
  'Problem Solver 🧩',
  'Open Source Enthusiast 🌐',
  'Tech Enthusiast 🚀',
];
let pIndex = 0, cIndex = 0, deleting = false;
const typedEl = document.getElementById('typed');
function type() {
  const phrase = phrases[pIndex];
  if (!deleting) {
    typedEl.textContent = phrase.slice(0, ++cIndex);
    if (cIndex === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, --cIndex);
    if (cIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// ── SCROLL REVEAL ────────────────────────────────────────
const timelineItems = document.querySelectorAll('.timeline-item');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
timelineItems.forEach(item => revealObserver.observe(item));

// ── SKILL BAR ANIMATION ──────────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('animated');
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillFills.forEach(fill => skillObserver.observe(fill));

// ── FOOTER YEAR ──────────────────────────────────────────
document.getElementById('footer-year').textContent = new Date().getFullYear();

// ── CONTACT FORM SUBMIT ──────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('contact-form').reset();
    document.getElementById('form-success').style.display = 'block';
    btn.textContent = 'Send Message 🚀';
    btn.disabled = false;
    setTimeout(() => {
      document.getElementById('form-success').style.display = 'none';
    }, 4000);
  }, 1200);
}

// ── SMOOTH ACTIVE SECTION NAV ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => activeObserver.observe(s));
