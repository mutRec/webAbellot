document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const buttonsContainer = document.querySelector(".buttons-container");
  const body = document.body;

  // Quin panell de menú s'ha d'obrir/tancar
  function getMenuPanel() {
    return mobileMenu || buttonsContainer;
  }

  // Funció per obrir/tancar el menú hamburguesa
  function toggleMenu() {
    const panel = getMenuPanel();
    if (!panel) return;
    burgerMenu.classList.toggle("active");
    panel.classList.toggle("active");
    body.classList.toggle("menu-open");
  }

  if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Tancar menú quan es clica fora d'ell (només en mòbils)
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      const panel = getMenuPanel();
      if (!panel) return;
      if (!burgerMenu.contains(e.target) && !panel.contains(e.target)) {
        burgerMenu.classList.remove("active");
        panel.classList.remove("active");
        body.classList.remove("menu-open");
      }
    }
  });

  function showSection(sectionId) {
    let description = "";
    let appUrl = "";
    let appText = "";

    switch (sectionId) {
      case "section-1":
        description =
          "<h2>Correu</h2><p>El correu electrònic d'Abellot.<br><br> Des d'aquest punt, podrem obrir l'accés al correu electrònic d'Abellot utilitzant el programari lliure Roundcube.<br><br>Roundcube està escrit en PHP. És un client de correu electrònic (MUA) en format web.<br><br>Roundcube disposa d'alguns plugins per poder afegir-hi funcionalitats. Es pot arribar a fer servir com a Agenda o Calendari.</p>";
        appUrl = "https://correu.abellot.net";
        appText = "Accedeix al correu";
        break;
      case "section-2":
        description =
          "<h2>Núvol</h2><p>És el núvol dels Abellots!<br><br>NextCloud ens ofereix un servei d'accés i sincronització dels nostres fitxers (Documents, Fotos, Audios,…).<br><br>Mitjançant l'aplicatiu NextCloud (d'escriptori o de mòbil) podrem mantenir una còpia de seguretat dels nostres fitxers al núvol.<br><br> D'altra banda, també hi podrem accedir mitjançant un navegador.</p>";
        appUrl = "https://nuvol.abellot.net";
        appText = "Accedeix al núvol";
        break;
      case "section-3":
        description =
          "<h2>Apps</h2><p>Mitjançant un panell (dashboard), accedirem a totes les aplicacions disponibles mitjançant ús de contenidors docker.<br><br>Utilitzant aquesta tecnologia, l'aplicatiu del panell és homepage. Desde aquest, podrem accedir també a enllaços interessants. </p>";
        appUrl = "https://homepage.abellot.net";
        appText = "Accedeix a les Apps";
        break;
      case "section-4":
        description =
          "<h2>Docs</h2><p>La Wiki d'Abellot.<br><br>Actualment administrada i gestionada sota el programari lliure flatnotes.<br><br> Conjunt d'articles, mini-howtos, faqs i enllaços on s'explica l'infraestructura actual dels serveis d'Abellot amb les configuracions i enllaços al programari utilitzat.<br><br>La Wiki ens haurà de servir per conèixer les tecnologies de programari lliure usades per servir pàgines web o gestionar serveis de correu electrònic.</p>";
        appUrl = "https://docs.abellot.net";
        appText = "Accedeix als Docs";
        break;
    }

    if (appUrl && appText) {
      description += `<a href="${appUrl}" class="app-link" target="_blank" rel="noopener">${appText}</a>`;
    }

    description += '<button class="back-button">Tornar</button>';
    const aside = document.querySelector(".section-description");
    aside.innerHTML = description;
    aside.classList.add("visible");

    document
      .querySelector(".back-button")
      .addEventListener("click", function () {
        if (window.innerWidth > 768) {
          document
            .querySelector(".main-content")
            .classList.remove("shift-left");
        }
        aside.classList.remove("visible");
        aside.innerHTML = "";
      });
  }

  // Clics dels botons (desktop)
  document.querySelectorAll(".menu-button").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (window.innerWidth > 768) {
        document.querySelector(".main-content").classList.add("shift-left");
      }
      const sectionId = btn.getAttribute("data-section");
      showSection(sectionId);
    });
  });

  // Clics del menú mòbil (links)
  document.querySelectorAll(".mobile-menu a[data-section]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Tancar menú abans de mostrar secció
      if (mobileMenu) {
        burgerMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
        body.classList.remove("menu-open");
      }
      const sectionId = link.getAttribute("data-section");
      showSection(sectionId);
    });
  });

  // Gestió del redimensionament de la finestra
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burgerMenu && burgerMenu.classList.remove("active");
      mobileMenu && mobileMenu.classList.remove("active");
      buttonsContainer && buttonsContainer.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // Tancar menú amb la tecla Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      burgerMenu && burgerMenu.classList.remove("active");
      mobileMenu && mobileMenu.classList.remove("active");
      buttonsContainer && buttonsContainer.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });
});
