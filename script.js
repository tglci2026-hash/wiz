// AFFICHER / CACHER SOLDE

const boutonSolde = document.getElementById("toggle-solde");
const texteSolde = document.getElementById("texte-solde");

let visible = true;

boutonSolde.addEventListener("click", () => {

  if (visible) {

    texteSolde.innerHTML = "••••••";
    boutonSolde.innerHTML = "🙈";
    visible = false;

  } else {

    texteSolde.innerHTML = "0 BCC";
    boutonSolde.innerHTML = "👁";
    visible = true;

  }

});


// POPUP

const popup = document.getElementById("popup");

function afficherPopup() {

  popup.classList.add("show");

  setTimeout(() => {

    popup.classList.remove("show");

  }, 2000);

}

const boutonsPopup = document.querySelectorAll(".popup-btn");

boutonsPopup.forEach(bouton => {

  bouton.addEventListener("click", () => {

    afficherPopup();

  });

});


// NAVIGATION

const boutonsMenu = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");

boutonsMenu.forEach(bouton => {

  bouton.addEventListener("click", () => {

    boutonsMenu.forEach(btn => {
      btn.classList.remove("active");
    });

    bouton.classList.add("active");

    const pageId = bouton.getAttribute("data-page");

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    document.getElementById(pageId).classList.add("active-page");

  });

});


// MODE SOMBRE

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    themeToggle.innerHTML = "☀️";

  } else {

    themeToggle.innerHTML = "🌙";

  }

});
