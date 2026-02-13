/**
 * Fade-in animations using Intersection Observer
 * Lightweight, no dependencies
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -100px 0px', // trigger slightly before element enters viewport
    threshold: 0.15 // trigger when 15% of element is visible
  };

  // Callback function for intersection
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add visible class to trigger animation
        entry.target.classList.add('is-visible');

        // Optional: Stop observing after animation (performance optimization)
        // observer.unobserve(entry.target);
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observe all sections with fade-in class
  const fadeInSections = document.querySelectorAll('.fade-in');
  fadeInSections.forEach(section => {
    observer.observe(section);
  });

  // Observe cards separately for staggered animation
  const cards = document.querySelectorAll('.scene-card, .price-card');
  cards.forEach(card => {
    observer.observe(card);
  });

  // Smooth scroll enhancement for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for #top (let native scroll work)
      if (href === '#top') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add subtle parallax effect to hero (optional, lightweight)
  const hero = document.querySelector('.hub-hero');
  if (hero) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * 0.3; // parallax speed

          // Only apply if user hasn't disabled motion
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (!prefersReducedMotion && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${rate}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Add fade-in to hero on page load
  setTimeout(() => {
    hero?.classList.add('is-visible');
  }, 100);
});
