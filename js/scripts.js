document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.getElementById("exploreBtn");
  const vehiclesSection = document.querySelector(".vehicles");

  exploreBtn.addEventListener("click", () => {
    vehiclesSection.classList.remove("hidden");
    vehiclesSection.classList.add("visible");

    vehiclesSection.scrollIntoView({ behavior: "smooth" });
  });

  // Your existing form validation & fade-in on scroll code can stay here if needed
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent real submission

      const inputs = this.querySelectorAll("input");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red";
          valid = false;
        } else {
          input.style.border = "none";
        }
      });

      if (valid) {
        const message = document.createElement("p");
        message.innerText = "✅ Form submitted successfully!";
        message.style.color = "#00ff88";
        message.style.marginTop = "1em";
        this.appendChild(message);

        setTimeout(() => {
          form.reset();
          message.remove();
        }, 3000);
      }
    });
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
