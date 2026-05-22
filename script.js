// DOM Element Targets
// Locates the HTML grid where your street food cards will be injected dynamically
const cardGridContainer = document.getElementById("card-grid-container");
// Locates the Bootstrap modal element popup wrapper structure in your document
const infoModalElement = document.getElementById("infoModal");

// UI Generator Loop Function
// Takes an array of food objects and builds the responsive HTML visual interfaces
function render(list) {
  if (!cardGridContainer) return; // Guard clause: stops script execution if container is missing on current page
  cardGridContainer.innerHTML = ""; // Wipes out all old card nodes to prepare for fresh filtered collections

  list.forEach(function(item) {
    // Generates a parent grid column cell block via JavaScript memory mapping
    const colDiv = document.createElement("div");
    // Assigns responsive Bootstrap sizing values and equal height matching mechanics
    colDiv.className = "col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch";

    // Blueprint string template representing individual interactive card items
    let cardHtml = `
      <div class="card w-100 food-card border-0 shadow-sm d-flex flex-column">
        <div class="position-relative">
          <img src="${item.image}" class="card-img-top food-card-img" alt="${item.name}">
          <span class="badge region-badge position-absolute top-0 end-0 m-2 bg-dark text-white opacity-75">${item.region}</span>
        </div>
        <div class="card-body p-3 d-flex flex-column flex-grow-1 justify-content-between">
          <div>
            <div class="d-flex align-items-center justify-content-between mb-1">
              <span class="badge bg-secondary text-uppercase px-2 style-type-tag">${item.type}</span>
              <div class="conditional-badge-slot"></div> </div>
            <h4 class="h5 card-title fw-bold text-dark mb-2">${item.name}</h4>
          </div>
          <button class="btn btn-custom-action w-100 rounded-pill mt-3 more-info-btn">
            More Info
          </button>
        </div>
      </div>
    `;

    colDiv.innerHTML = cardHtml; // Parses raw template string logic directly into valid active DOM structures

    // Query targeting elements inside the newly built block memory instance
    const badgeSlot = colDiv.querySelector(".conditional-badge-slot");
    const structuralCardElement = colDiv.querySelector(".food-card");

    // Evaluates item flags to dynamically append spicy assets and specialized CSS animations
    if (item.isSpicy === true) {
      badgeSlot.innerHTML = `<span class="badge bg-danger animate-pulse">Spicy 🔥</span>`;
      structuralCardElement.classList.add("spicy-card-highlight");
    }

    // Modal Trigger Configuration
    const detailsButton = colDiv.querySelector(".more-info-btn");
    detailsButton.addEventListener("click", function() {
      // populates matching detail keys straight from our list parameters into the popup nodes
      document.getElementById("modalFoodName").innerText = item.name;
      document.getElementById("modalFoodImage").src = item.image;
      document.getElementById("modalFoodImage").alt = item.name;
      document.getElementById("modalFoodRegion").innerText = item.region;
      document.getElementById("modalFoodType").innerText = item.type;
      document.getElementById("modalFoodDetail").innerText = item.detail;
      
      // Selectively color conditions labels based on boolean states
      const modalSpiceSlot = document.getElementById("modalFoodSpice");
      if (item.isSpicy) {
        modalSpiceSlot.innerHTML = "Spicy";
        modalSpiceSlot.className = "text-danger fw-bold";
      } else {
        modalSpiceSlot.innerHTML = "Mild / Savory ";
        modalSpiceSlot.className = "text-success fw-bold";
      }

      // Calls Bootstrap's internal modal constructor to pop open the interface panel over the content view
      const instance = new bootstrap.Modal(infoModalElement);
      instance.show();
    });

    // Injects completed, fully rigged responsive column nodes directly into your live web document layout container
    cardGridContainer.appendChild(colDiv);
  });
}

// In-Page Filter Buttons Logic
// Gathers an active nodelist array matching all page navigation filter components
const filterControlButtons = document.querySelectorAll(".filter-btn");
filterControlButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Resets styling state flags on alternative components across active selection events
    filterControlButtons.forEach(btn => btn.classList.replace("btn-primary-custom", "btn-outline-primary-custom"));
    button.classList.replace("btn-outline-primary-custom", "btn-primary-custom"); // Actively highlights current click choice

    const selectedRegion = button.getAttribute("data-region"); // Captures sorting parameters from dataset tags

    // Core collection logic router
    if (selectedRegion === "All") {
      render(streetFoods); // Repopulates complete array sets natively
    } else {
      // Filters down source items by targeting strict geographical variable matches
      const filteredList = streetFoods.filter(function(item) {
        return item.region === selectedRegion;
      });
      render(filteredList); // Renders only items that passed the regional criteria filter loop
    }
  });
});

// Deep Linking Home-to-Showcase Sync Processor
// Listens for structural window layout readiness cycles to look for custom incoming address indicators
document.addEventListener("DOMContentLoaded", function() {
  if (typeof streetFoods !== "undefined") { // Safety wrapper ensuring external datasets loaded completely first
    // Inspects your current website URL structure for specific search queries (e.g., '?region=South India')
    const urlParams = new URLSearchParams(window.location.search);
    const targetRegion = urlParams.get('region');

    // Routing operations matching remote selection updates
    if (targetRegion) {
      // Matches content sets relative to parameters specified directly inside URL queries
      const preFilteredList = streetFoods.filter(function(item) {
        return item.region === targetRegion;
      });
      render(preFilteredList); // Builds only targeted elements matching data expectations

      // Sync filter button visuals on active state load
      const filterControlButtons = document.querySelectorAll(".filter-btn");
      filterControlButtons.forEach(function(button) {
        if (button.getAttribute("data-region") === targetRegion) {
          button.classList.replace("btn-outline-primary-custom", "btn-primary-custom");
        } else {
          button.classList.replace("btn-primary-custom", "btn-outline-primary-custom");
        }
      });
    } else {
      render(streetFoods); // Default behavior fallback initializes complete collections if no parameters exist
    }
  }
});