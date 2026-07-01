const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const liveCards = document.querySelectorAll(".app-card.is-live[data-url]");

liveCards.forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-url");

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });

  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "link");
  card.setAttribute("aria-label", "Abrir site do Campori Online");
});
