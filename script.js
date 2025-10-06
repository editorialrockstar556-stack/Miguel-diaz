/* =======================================
   Lopson.in — MLBB Diamonds Store
   script.js
   Author: Coco Bird
   ======================================= */

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });

  // Floating WhatsApp button logic
  const whatsappBtn = document.querySelector(".whatsapp-float");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      window.open(
        "https://wa.me/919954151225?text=Hi!%20I%20want%20to%20buy%20MLBB%20Diamonds%20from%20Lopson.in",
        "_blank"
      );
    });
  }

  // Card entrance animation
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach(card => {
    observer.observe(card);
  });

  // Neon glow effect pulse
  setInterval(() => {
    document.querySelectorAll(".neon-text").forEach(el => {
      el.style.textShadow = Math.random() > 0.5
        ? "0 0 10px #ff4de3, 0 0 30px #ff4de3, 0 0 60px #ff4de3"
        : "0 0 5px #ff9be7, 0 0 15px #ff4de3, 0 0 40px #ff4de3";
    });
  }, 2000);
});

// Add CSS animation dynamically when card is visible
const style = document.createElement("style");
style.textContent = `
  .card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  .card.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
