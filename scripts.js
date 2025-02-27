// Typewriter Effect
const tagline = document.querySelector('.tagline');
const text = "Web Developer & Creative Technologist";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    tagline.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Floating Icons Click
document.querySelectorAll('.float-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const section = icon.getAttribute('data-section');
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  });
});

// Timeline Expansion
document.querySelectorAll('.timeline-event').forEach(event => {
  event.addEventListener('click', () => {
    event.classList.toggle('expanded');
  });
});

// Skill Circle Animation
document.addEventListener('DOMContentLoaded', () => {
  const skillCircles = document.querySelectorAll('.skill-circle');
  skillCircles.forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    const circlePath = circle.querySelector('circle:nth-child(2)');
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (progress / 100) * circumference;
    circlePath.style.strokeDashoffset = offset;
  });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
function slideTestimonials() {
  testimonials.forEach((t, i) => {
    t.style.transform = `translateX(${(i - currentTestimonial) * 100}%)`;
  });
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}
slideTestimonials();
setInterval(slideTestimonials, 5000);

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name && email && message) {
    const success = document.createElement('p');
    success.textContent = 'Thanks for your message!';
    success.style.color = '#27ae60';
    document.getElementById('contact-form').appendChild(success);
    setTimeout(() => success.remove(), 5000);
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill all fields!');
  }
});

// Section Fade-In on Scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));