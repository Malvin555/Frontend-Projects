
   document.addEventListener('DOMContentLoaded', function() {
       // Mobile menu toggle
       const mobileMenuButton = document.getElementById('mobile-menu-button');
       const mobileMenu = document.getElementById('mobile-menu');
       
       mobileMenuButton.addEventListener('click', function() {
           mobileMenu.classList.toggle('hidden');
       });
       
       // Sticky navbar with scroll effect
       const navbar = document.getElementById('navbar');
       let lastScrollTop = 0;
       
       window.addEventListener('scroll', function() {
           const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
           
           if (scrollTop > 100) {
               navbar.classList.add('bg-white', 'shadow-md');
               navbar.classList.remove('bg-transparent');
               
               if (scrollTop > lastScrollTop) {
                   // Scrolling down
                   navbar.classList.add('-translate-y-full');
               } else {
                   // Scrolling up
                   navbar.classList.remove('-translate-y-full');
               }
           } else {
               navbar.classList.add('bg-transparent');
               navbar.classList.remove('shadow-md', '-translate-y-full');
           }
           
           lastScrollTop = scrollTop;
       });
       
       // Smooth scrolling for anchor links
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
           anchor.addEventListener('click', function(e) {
               e.preventDefault();
               
               const targetId = this.getAttribute('href');
               const targetElement = document.querySelector(targetId);
               
               if (targetElement) {
                   window.scrollTo({
                       top: targetElement.offsetTop - 80,
                       behavior: 'smooth'
                   });
                   
                   // Close mobile menu if open
                   if (!mobileMenu.classList.contains('hidden')) {
                       mobileMenu.classList.add('hidden');
                   }
               }
           });
       });
       
       // Intersection Observer for scroll animations
       const animateOnScroll = function() {
           const elements = document.querySelectorAll('.animate-on-scroll');
           
           const observer = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                   if (entry.isIntersecting) {
                       entry.target.classList.add('animate-fade-in', 'opacity-100', 'translate-y-0');
                       observer.unobserve(entry.target);
                   }
               });
           }, {
               threshold: 0.1
           });
           
           elements.forEach(element => {
               observer.observe(element);
           });
       };
       
       // Initialize animations
       animateOnScroll();
       
       // Program card hover effect enhancement
       const programCards = document.querySelectorAll('.group.overflow-hidden.rounded-xl');
       
       programCards.forEach(card => {
           const img = card.querySelector('img');
           const content = card.querySelector('.p-6');
           
           card.addEventListener('mouseenter', function() {
               img.style.transform = 'scale(1.05)';
               content.classList.add('bg-gray-50');
           });
           
           card.addEventListener('mouseleave', function() {
               img.style.transform = 'scale(1)';
               content.classList.remove('bg-gray-50');
           });
       });
       
       // Form validation for admissions form
       const admissionsForm = document.querySelector('#admissions form');
       
       if (admissionsForm) {
           admissionsForm.addEventListener('submit', function(e) {
               e.preventDefault();
               
               const studentName = document.getElementById('student-name').value;
               const gradeLevel = document.getElementById('grade-level').value;
               
               if (!studentName || !gradeLevel) {
                   alert('Please fill in all required fields.');
                   return;
               }
               
               // Here you would typically send the form data to a server
               alert('Your application has been submitted. Our admissions team will contact you shortly.');
               this.reset();
           });
       }
       
       // Current year for footer
       document.getElementById('current-year').textContent = new Date().getFullYear();
   });