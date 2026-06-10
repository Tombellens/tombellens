// ── Navbar: transparent over hero, solid when scrolled ──────
const navbar = document.querySelector('.navbar');

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Scroll animations (IntersectionObserver) ─────────────────
const animateObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animateObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => {
  animateObserver.observe(el);
});

// ── Mobile hamburger menu ────────────────────────────────────
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('active');
    });
  });
}

// ── Smooth scrolling ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target   = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
