let villasData = [];

// Load the JSON file
fetch("villas.json")
  .then(response => response.json())
  .then(data => {
      villasData = data.villas;
      loadVillaCards();
  });

// Create villa cards dynamically
function loadVillaCards() {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    villasData.forEach(villa => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.onclick = () => openModal(villa);

        card.innerHTML = `
            <img src="${villa.images[0]}" alt="">
            <h3>${villa.title}</h3>
            <p>${villa.location}</p>
            <button>View Details</button>
        `;

        container.appendChild(card);
    });
}

// Open modal with villa info
function openModal(villa) {
    document.getElementById("villaTitle").innerText = villa.title;
    document.getElementById("villaLocation").innerText = villa.location;
    document.getElementById("villaPrice").innerText = villa.price;
    document.getElementById("villaDescription").innerText = villa.description;

    const gallery = document.getElementById("villaGallery");
    gallery.innerHTML = "";

    villa.images.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        gallery.appendChild(image);
    });

    document.getElementById("villaModal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("villaModal").style.display = "none";
}
