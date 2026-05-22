// 3. Define variables for important HTML elements
const cardGridContainer = document.getElementById("card-grid-container");
const infoModalElement = document.getElementById("infoModal");

// 4. Define render(list) Function
function render(list) {
  // 5a. Inside render(): clear the card container
  if (!cardGridContainer) return; // Safeguard if running on index or about pages
  cardGridContainer.innerHTML = "";

  // 5b. Inside render(): loop with forEach()
  list.forEach(function(item) {
    // 5c. Inside render(): create a card element
    const colDiv = document.createElement("div");
    colDiv.className = "col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch";

    // Establish card framework base layout
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
              <div class="conditional-badge-slot"></div>
            </div>
            <h4 class="h5 card-title fw-bold text-dark mb-2">${item.name}</h4>
          </div>
          <button class="btn btn-custom-action w-100 rounded-pill mt-3 more-info-btn">
            More Info
          </button>
        </div>
      </div>
    `;

    colDiv.innerHTML = cardHtml;

    // 5e. Inside render(): check the conditional
    const badgeSlot = colDiv.querySelector(".conditional-badge-slot");
    const structuralCardElement = colDiv.querySelector(".food-card");

    if (item.isSpicy === true) {
      // Apply wireframe specific conditional badge and border modifications
      badgeSlot.innerHTML = `<span class="badge bg-danger animate-pulse">Spicy 🔥</span>`;
      structuralCardElement.classList.add("spicy-card-highlight");
    }

    // 5f & 5g. Inside render(): Find button and connect it directly to the local scoped loop object
    const detailsButton = colDiv.querySelector(".more-info-btn");
    detailsButton.addEventListener("click", function() {
      // Connect UI elements inside the dynamic popup container directly to item values
      document.getElementById("modalFoodName").innerText = item.name;
      document.getElementById("modalFoodImage").src = item.image;
      document.getElementById("modalFoodImage").alt = item.name;
      document.getElementById("modalFoodRegion").innerText = item.region;
      document.getElementById("modalFoodType").innerText = item.type;
      document.getElementById("modalFoodDetail").innerText = item.detail;
      
      // Dynamic rendering of custom conditional property presentation inside the modal context
      const modalSpiceSlot = document.getElementById("modalFoodSpice");
      if (item.isSpicy) {
        modalSpiceSlot.innerHTML = "Spicy 🔥🔥🔥";
        modalSpiceSlot.className = "text-danger fw-bold";
      } else {
        modalSpiceSlot.innerHTML = "Mild / Savory 👍";
        modalSpiceSlot.className = "text-success fw-bold";
      }

      // Initialize and open the contextual Bootstrap Modal window object instance safely
      const instance = new bootstrap.Modal(infoModalElement);
      instance.show();
    });

    // 5h. Inside render(): append card to the container
    cardGridContainer.appendChild(colDiv);
  });
}

// 7. Create filter event listeners
const filterControlButtons = document.querySelectorAll(".filter-btn");
filterControlButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    
    // Toggle active visually selected styles across our filter button element nodes
    filterControlButtons.forEach(btn => btn.classList.replace("btn-primary-custom", "btn-outline-primary-custom"));
    button.classList.replace("btn-outline-primary-custom", "btn-primary-custom");

    // Read the targeted data property string defined on the element node template
    const selectedRegion = button.getAttribute("data-region");

    if (selectedRegion === "All") {
      // Reset full list array rendering loop tracking
      render(streetFoods);
    } else {
      // Apply exact case verification using standard functional filtering mechanisms
      const filteredList = streetFoods.filter(function(item) {
        return item.region === selectedRegion;
      });
      render(filteredList);
    }
  });
});

// 8. Call render(collection) as the program entry initialization sequence
document.addEventListener("DOMContentLoaded", function() {
  render(streetFoods);
});