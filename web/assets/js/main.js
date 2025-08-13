document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu-button').forEach(btn => {
        btn.addEventListener('click', function() {
            // Mou el contingut cap a l'esquerra
            document.querySelector('.main-content').classList.add('shift-left');
            // Mostra la descripció corresponent
            const sectionId = btn.getAttribute('data-section');
            let description = '';
            let appUrl = '';
            let appText = '';
            switch(sectionId) {
                case 'section-1':
                    description = '<h2>Correu</h2><p>El correu electrònic d’Abellot.<br><br> Des d’aquest punt, podrem obrir l’accés al correu electrònic d’Abellot utilitzant el programari lliure Roundcube.<br><br>Roundcube està escrit en PHP. És un client de correu electrònic (MUA) en format web.<br><br>Roundcube disposa d’alguns plugins per poder afegir-hi funcionalitats. Es pot arribar a fer servir com a Agenda o Calendari.</p>';
                    appUrl = 'https://correu.abellot.net'; 
                    appText = 'Accedeix al correu';
                    break;
                case 'section-2':
                    description = '<h2>Núvol</h2><p>És el núvol dels Abellots!<br><br>NextCloud ens ofereix un servei d’accés i sincronització dels nostres fitxers (Documents, Fotos, Audios,…).<br><br>Mitjançant l’aplicatiu NextCloud (d’escriptori o de mòbil) podrem mantenir una còpia de seguretat dels nostres fitxers al núvol.<br><br> D’altra banda, també hi podrem accedir mitjançant un navegador.</p>';
                    break;
                case 'section-3':
                    description = '<h2>Apps</h2><p>Mitjançant un panell (dashboard), accedirem a totes les aplicacions disponibles mitjançant ús de contenidors docker.<br><br>Utilitzant aquesta tecnologia, l\'aplicatiu del panell és homepage. Desde aquest, podrem accedir també a enllaços interessants. </p>';
                    break;
                case 'section-4':
                    description = '<h2>Docs</h2><p>La Wiki d’Abellot.<br><br>Actualment administrada i gestionada sota el programari lliure flatnotes.<br><br> Conjunt d’articles, mini-howtos, faqs i enllaços on s’explica l’infraestructura actual dels serveis d’Abellot amb les configuracions i enllaços al programari utilitzat.<br><br>La Wiki ens haurà de servir per conèixer les tecnologies de programari lliure usades per servir pàgines web o gestionar serveis de correu electrònic.</p>';
                    break;
            }
           
            // Afegim l'enllaç estilitzat com a botó
            if(appUrl && appText) {
                description += `<a href="${appUrl}" class="app-link" target="_blank" rel="noopener">${appText}</a>`;
            }

            // Afegim el botó de tornar
            description += '<button class="back-button">Tornar</button>';
            const aside = document.querySelector('.section-description');
            aside.innerHTML = description;
            aside.classList.add('visible');

            // Event pel botó de tornar
            document.querySelector('.back-button').addEventListener('click', function() {
                document.querySelector('.main-content').classList.remove('shift-left');
                aside.classList.remove('visible');
                aside.innerHTML = '';
         });

        });
    });
});