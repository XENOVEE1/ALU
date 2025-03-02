// Fonction pour afficher la légende associée à un marqueur
function showLegend(marker) {
    const id = marker.getAttribute('data-id');
    const popup = document.getElementById(`${id}-legend`);
    if (popup) {
        popup.style.display = 'block';
    }
}

// Fonction pour fermer une popup spécifique
function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Fonction pour gérer le zoom sur un marqueur et afficher ses légendes secondaires
function zoomOnPoint(marker) {
    const map = document.getElementById('map');
    if (!map) {
        console.error('Carte non trouvée.');
        return;
    }

    // Calcul du centre du marqueur
    const markerCenterX = marker.offsetLeft + marker.offsetWidth / 2;
    const markerCenterY = marker.offsetTop + marker.offsetHeight / 2;
    map.style.transformOrigin = `${markerCenterX}px ${markerCenterY}px`;
    map.style.transform = "scale(6)";

    // Crée un conteneur pour les marqueurs secondaires
    const markersContainer = document.createElement('div');
    markersContainer.classList.add('markers-container');
    map.parentElement.appendChild(markersContainer);

    // Définir les marqueurs secondaires en fonction de l'ID du marqueur principal
    let newMarkers = [];
    if (marker.id === "marker1") {
        newMarkers = [
            { top: marker.offsetTop + 100, left: marker.offsetLeft + 100, id: 'new1', legendTitle: 'LA DAME BLANCHE', legendText: ' Un fantôme féminin vêtu de blanc, souvent aperçu sur les routes rurales, demandant de l"aide ou offrant des avertissements.', image: 'dame blanche.jpg' },
            { top: marker.offsetTop - 100, left: marker.offsetLeft - 100, id: 'new2', legendTitle: 'Légende secondaire 2', legendText: 'Description détaillée de la légende secondaire 2.', image: 'image2.png' }
        ];
    } else if (marker.id === "marker2") {
        newMarkers = [
            { top: marker.offsetTop + 50, left: marker.offsetLeft + 150, id: 'new3', legendTitle: 'Légende secondaire 3', legendText: 'Description secondaire 3.', image: 'image3.png' },
            { top: marker.offsetTop - 50, left: marker.offsetLeft - 150, id: 'new4', legendTitle: 'Légende secondaire 4', legendText: 'Description secondaire 4.', image: 'image4.png' }
        ];
    } else if (marker.id === "marker3") {
        newMarkers = [
            { top: marker.offsetTop + 150, left: marker.offsetLeft - 50, id: 'new5', legendTitle: 'Légende secondaire 5', legendText: 'Description secondaire 5.', image: 'image5.png' }
        ];
    } else if (marker.id === "marker4") {
        newMarkers = [
            { top: marker.offsetTop + 40, left: marker.offsetLeft - 150, id: 'new6', legendTitle: 'KUCHISAKE-ONNA', legendText: 'Une femme masquée qui interroge ses victimes sur son apparence, leur offrant une mort violente en fonction de leur réponse.', image: 'Kuchisake-onna.png' },
            { top: marker.offsetTop + 100, left: marker.offsetLeft - 180, id: 'new7', legendTitle: 'La femme à la bouche fendue', legendText: 'Une femme masquée qui interroge ses victimes sur son apparence, leur offrant une mort violente en fonction de leur réponse.', image: 'Kuchisake-onna.png' }

        ];
    } else if (marker.id === "marker5") {
        newMarkers = [
            { top: marker.offsetTop - 120, left: marker.offsetLeft + 800, id: 'new8', legendTitle: 'SLENDER MAN', legendText: 'Slender Man est une créature sans visage, traquant et enlevant des enfants, née sur Internet en 2009.', image: 'slenderman.png' },
            { top: marker.offsetTop + 50, left: marker.offsetLeft + 1170, id: 'new9', legendTitle: 'BLODDY MARY', legendText: 'Bloody Mary est un esprit vengeur, invoqué en répétant son nom devant un miroir.', image: 'bloody mary.png' },
            { top: marker.offsetTop - 300, left: marker.offsetLeft - 200, id: 'new10', legendTitle: 'WENDIGO', legendText: 'Créature cannibale, souvent décrite comme un humain défiguré et affamé, pris par la faim insatiable de chair humaine.', image: 'wendigo.png' },
            { top: marker.offsetTop + 50, left: marker.offsetLeft - 200, id: 'new11', legendTitle: 'HATMAN', legendText: 'Créature cannibale, souvent décrite comme un humain défiguré et affamé, pris par la faim insatiable de chair humaine.', image: 'wendigo.png' }

        ];
    } else if (marker.id === "marker6") {
        newMarkers = [
            { top: marker.offsetTop + 100, left: marker.offsetLeft + 60, id: 'new12', legendTitle: 'LLORONA', legendText: 'La Llorona est l’esprit d’une femme en pleurs, condamnée à errer pour avoir noyé ses enfants.', image: 'la llorona.jpg' }
        ];
    } else if (marker.id === "marker7") {
        newMarkers = [
            { top: marker.offsetTop + 50, left: marker.offsetLeft - 60, id: 'new13', legendTitle: 'BANSHEE', legendText: 'Esprit féminin, souvent une vieille femme, qui crie avant la mort imminente d"un membre de la famille.', image: 'banshee.png' }
        ];
    } else if (marker.id === "marker8") {
        newMarkers = [
            { top: marker.offsetTop - 180, left: marker.offsetLeft - 20, id: 'new14', legendTitle: 'ASWANG', legendText: ' Un monstre mi-humain, mi-animal, qui se nourrit de sang et de chair, souvent d"enfants ou de femmes enceintes.', image: 'aswang.png' }
        ];

    } else if (marker.id === "marker9") {
        newMarkers = [
            { top: marker.offsetTop - 150, left: marker.offsetLeft + 50, id: 'new15', legendTitle: 'GROOTSLANG', legendText: 'Serpent géant avec une intelligence maléfique, habitant des cavernes profondes.', image: 'Grootslang.png' }
        ];
    } else if (marker.id === "marker10") {
        newMarkers = [
            { top: marker.offsetTop - 80, left: marker.offsetLeft + 50, id: 'new16', legendTitle: 'AICHA KANDICHA', legendText: 'Aïcha Kandicha, femme mythologique marocaine, séduit les hommes pour les entraîner dans des lieux isolés, où elle les tue.', image: 'aicha.png' }
        ];
    } else if (marker.id === "marker11") {
        newMarkers = [
            { top: marker.offsetTop - 75, left: marker.offsetLeft - 60, id: 'new17', legendTitle: 'MONSTRE DU LOCH NESS', legendText: 'Le monstre du Loch Ness, "Nessie", est une créature aquatique légendaire, souvent décrite comme un serpent géant.', image: 'loch ness.jpg' }
        ];


    }
    

    // Crée les marqueurs secondaires et les popups associées
    newMarkers.forEach(({ top, left, id, legendTitle, legendText, image }) => {
        const newMarker = document.createElement('div');
        newMarker.classList.add('marker');
        newMarker.style.position = 'absolute';
        newMarker.style.top = `${top}px`;
        newMarker.style.left = `${left}px`;
        newMarker.style.pointerEvents = 'auto';
        newMarker.setAttribute('data-id', id);
        newMarker.addEventListener('click', (e) => {
            e.stopPropagation();
            showLegend(newMarker);
        });
        markersContainer.appendChild(newMarker);

        const legendDiv = document.createElement('div');
        legendDiv.classList.add('legend-popup');
        legendDiv.id = `${id}-legend`;

        const legendTitleElement = document.createElement('h2');
        legendTitleElement.textContent = legendTitle;

        const legendTextElement = document.createElement('p');
        legendTextElement.textContent = legendText;

        const legendImage = document.createElement('img');
        legendImage.src = image;
        legendImage.alt = legendTitle;
        legendImage.classList.add('legend-image');

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Fermer';
        closeButton.classList.add('close-btn');
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            closePopup(`${id}-legend`);
        });

        legendDiv.appendChild(legendTitleElement);
        legendDiv.appendChild(legendTextElement);
        legendDiv.appendChild(legendImage);
        legendDiv.appendChild(closeButton);

        legendDiv.style.top = `${top - 30}px`;
        legendDiv.style.left = `${left + 30}px`;
        map.parentElement.appendChild(legendDiv);
        
        const rectangle = document.createElement('div');
        rectangle.classList.add('marker-rectangle');
        rectangle.style.position = 'absolute';
        rectangle.style.top = `${top - 5}px`;
        rectangle.style.left = `${left + 40}px`; // Ajoute un léger décalage pour le texte à droite du marqueur
        rectangle.style.padding = '10px';
        rectangle.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        rectangle.style.color = 'black';
        rectangle.style.borderRadius = '25px';
        rectangle.style.fontFamily = 'Spacethink, sans-serif'; // Appliquer la police Spacethink
        rectangle.textContent = legendTitle;
        rectangle.style.boxShadow = '3px 3px 8px rgba(0, 0, 0, 0.3)'

        markersContainer.appendChild(rectangle);
    });

    

    // Masquer les marqueurs principaux
    const mainMarkers = document.querySelectorAll('.map-container > .marker');
    mainMarkers.forEach(m => {
        if (m !== marker) {
            m.style.display = 'none';
        }
    });
}

// Réinitialiser le zoom de la carte et réafficher les marqueurs principaux
function resetMap() {
    const map = document.getElementById('map');
    if (!map) {
        console.error('Carte non trouvée.');
        return;
    }
    map.style.transform = "scale(1)";
    map.style.transformOrigin = "center center";

    // Réafficher les marqueurs principaux
    const mainMarkers = document.querySelectorAll('.map-container > .marker');
    mainMarkers.forEach(marker => {
        marker.style.display = 'block';
    });

    // Supprimer les marqueurs secondaires
    const markersContainer = document.querySelector('.markers-container');
    if (markersContainer) {
        markersContainer.remove();
    }

    // Fermer toutes les popups
    const popups = document.querySelectorAll('.legend-popup');
    popups.forEach(popup => popup.style.display = 'none');
}

// Ajouter un écouteur d'événements pour fermer les popups quand l'utilisateur clique en dehors
document.addEventListener('click', (e) => {
    const popup = document.querySelector('.legend-popup');
    const marker = e.target.closest('.marker');
    
    // Si l'utilisateur clique en dehors d'un marqueur ou d'une légende, réinitialiser la carte
    if (!marker && popup) {
        resetMap();
    }
});

// Ajout des événements de zoom sur les marqueurs
document.getElementById('marker1').addEventListener('click', () => zoomOnPoint(document.getElementById('marker1')));
document.getElementById('marker2').addEventListener('click', () => zoomOnPoint(document.getElementById('marker2')));
document.getElementById('marker3').addEventListener('click', () => zoomOnPoint(document.getElementById('marker3')));
document.getElementById('marker4').addEventListener('click', () => zoomOnPoint(document.getElementById('marker4')));
document.getElementById('marker5').addEventListener('click', () => zoomOnPoint(document.getElementById('marker5')));
document.getElementById('marker6').addEventListener('click', () => zoomOnPoint(document.getElementById('marker6')));
document.getElementById('marker7').addEventListener('click', () => zoomOnPoint(document.getElementById('marker7')));
document.getElementById('marker8').addEventListener('click', () => zoomOnPoint(document.getElementById('marker8')));
document.getElementById('marker9').addEventListener('click', () => zoomOnPoint(document.getElementById('marker9')));
document.getElementById('marker10').addEventListener('click', () => zoomOnPoint(document.getElementById('marker10')));
document.getElementById('marker11').addEventListener('click', () => zoomOnPoint(document.getElementById('marker11')));



