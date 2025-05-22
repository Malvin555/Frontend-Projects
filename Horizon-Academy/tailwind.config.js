 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js}", "./index.html"],
   darkMode: 'class',
   theme: {
     extend: {
       colors: {
         primary: {
           DEFAULT: '#2563eb', // Blue
           light: '#3b82f6',
           dark: '#1d4ed8',
         },
         secondary: {
           DEFAULT: '#ffffff',
           muted: '#f8fafc',
         },
         accent: {
           DEFAULT: '#fbbf24', // Amber
           dark: '#f59e0b',
         },
         dark: {
           DEFAULT: '#0f172a',
           light: '#1e293b',
         }
       },
       animation: {
         'fade-in': 'fadeIn 0.5s ease-in-out',
         'slide-up': 'slideUp 0.6s ease-out',
         'scale-in': 'scaleIn 0.4s ease-out',
         'bounce-slow': 'bounce 3s infinite',
       },
       keyframes: {
         fadeIn: {
           '0%': {
             opacity: '0'
           },
           '100%': {
             opacity: '1'
           },
         },
         slideUp: {
           '0%': {
             transform: 'translateY(20px)',
             opacity: '0'
           },
           '100%': {
             transform: 'translateY(0)',
             opacity: '1'
           },
         },
         scaleIn: {
           '0%': {
             transform: 'scale(0.95)',
             opacity: '0'
           },
           '100%': {
             transform: 'scale(1)',
             opacity: '1'
           },
         },
       },
       fontFamily: {
         sans: ['Poppins', 'sans-serif'],
         display: ['Montserrat', 'sans-serif'],
       },
     },
   },

   plugins: [],
 }