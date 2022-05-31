const locationbutton = document.querySelector("#locationbutton");
const parent = document.querySelector(".parent");
// Placer un ecouteur d'evenement sur location

locationbutton.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    let malatitude = document.createElement("p");
    let malongitude = document.createElement("p");
    // Donner la valeur "position" à afficher
    malatitude.innerText = position.coords.latitude;
    malongitude.innerText = position.coords.longitude;
    //Faire apparaitre ma position
    parent.appendChild(malatitude);
    parent.appendChild(malongitude);

    // Sauvegarder les infos
    sauvegarder.addEventListener("click", function () {
      localStorage.setItem("maposition", position.coords.latitude);
      localStorage.setItem("maposition2", position.coords.longitude);

      malatitude.style.display = "none";
      malongitude.style.display = "none";

      // Récuperer les infos
      // Placer un ecouteur d'evenement sur le bouton Où étais je?
      lastloc.addEventListener("click", function () {
        let maposition = localStorage.getItem("maposition");
        let maposition2 = localStorage.getItem("maposition2");
        maposition = document.createElement("p");
        maposition2 = document.createElement("p");
        maposition.innerText = position.coords.latitude;
        maposition2.innerText = position.coords.longitude;
        parent.appendChild(maposition);
        parent.appendChild(maposition2);

        // Effacer les données

        effacer.addEventListener("click", function () {
          localStorage.removeItem("maposition");
          localStorage.removeItem("maposition2");

          maposition.style.display = "none";
          maposition2.style.display = "none";
        });
      });
    });
  });
});

ouvrircarte.addEventListener("click", function (malatitude, malongitude) {
  location.href = "https://www.openstreetmap.org/#map=50/43.7027/7.2761";
  navigator.geolocation.getCurrentPosition(function () {
    console.log(e.target.locationbutton);
    let monemplacement = createElement("");
  });
});
