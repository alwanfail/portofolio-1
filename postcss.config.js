module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  
  // tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        }
      },
      animation: {
        typing: 'typing 3s steps(30, end) forwards',
        blink: 'blink 0.7s step-end infinite',
      },
    },
  },
  plugins: [],
}

// const page = document.getElementById('page');
// const aboutSection = document.getElementById('about');
// const projectsSection = document.getElementById('projects');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.target.id === 'about' && entry.isIntersecting) {
//       page.style.backgroundColor = '#1e293b'; // slate-800
//     } else if (entry.target.id === 'projects' && entry.isIntersecting) {
//       page.style.backgroundColor = '#0f172a'; // slate-900
//     } else if (!entry.isIntersecting && entry.target.id === 'projects') {
//       page.style.backgroundColor = '#110F30'; // warna default kembali
//     }
//   });
// }, { threshold: 0.5 });

// observer.observe(aboutSection);
// observer.observe(projectsSection);
