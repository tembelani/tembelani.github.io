// Observe when the progress bars come into view
const progressBars = document.querySelectorAll('.progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const progressValue = bar.getAttribute('data-progress');
      bar.style.width = progressValue;
      observer.unobserve(bar); // run animation only once
    }
  });
}, { threshold: 0.6 });

progressBars.forEach(bar => observer.observe(bar));
