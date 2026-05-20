window.addEventListener("load", () => {
  window.setTimeout(() => document.body.classList.add("loaded"), 280);
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const demoButtons = document.querySelectorAll("[data-demo]");
const demoPanels = document.querySelectorAll("[data-panel]");
demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.demo;
    demoButtons.forEach((item) => item.classList.toggle("active", item === button));
    demoPanels.forEach((panel) => panel.classList.toggle("hidden", panel.dataset.panel !== target));
  });
});
