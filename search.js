function initSearch() {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".card-item");

    cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();

      if (!query || title.includes(query)) {
        card.parentElement.style.display = "";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
}

