// Fonction pour afficher la légende et zoomer sur la carte centrée sur le marqueur cliqué
function zoomOnPoint(marker) {
    // Masquer tous les popups
    const legends = document.querySelectorAll('.legend-popup');
    legends.forEach(legend => legend.style.display = 'none');

    // Récupérer l'ID du popup de la légende associée
    const legendId = marker.getAttribute('data-legend');
    const legend = document.getElementById(legendId);

    // Positionner le popup près du marqueur
    const rect = marker.getBoundingClientRect();
    legend.style.top = `${rect.top - 120}px`;           // Ajuste la position verticale
    legend.style.left = `${rect.left + rect.width + 10}px`; // Ajuste la position horizontale

    // Afficher le popup de la légende
    legend.style.display = 'block';

    // Zoomer sur la carte en recentrant sur le marqueur
    const map = document.getElementById('map');

    // Calculer le centre du marqueur par rapport au conteneur de la carte.
    // On suppose ici que les marqueurs sont des enfants directs de #map.
    const markerCenterX = marker.offsetLeft + marker.offsetWidth / 2;
    const markerCenterY = marker.offsetTop + marker.offsetHeight / 2;

    // Définir l'origine de transformation sur le centre du marqueur
    map.style.transformOrigin = `${markerCenterX}px ${markerCenterY}px`;

    // Appliquer le zoom sur la carte (ici, un zoom 2x; vous pouvez ajuster la valeur)
    map.style.transform = "scale(6)";

    // Masquer les autres marqueurs
    const markers = document.querySelectorAll('.marker');
    markers.forEach(m => {
        if (m !== marker) {
            m.style.display = 'none';
        }
    });
}

// Fonction pour fermer une légende et réinitialiser le zoom de la carte
function closePopup(legendId) {
    const legend = document.getElementById(legendId);
    legend.style.display = 'none';

    // Réinitialiser le zoom de la carte
    const map = document.getElementById('map');
    map.style.transform = "scale(1)";
    map.style.transformOrigin = "center center";

    // Réafficher tous les marqueurs
    const markers = document.querySelectorAll('.marker');
    markers.forEach(m => {
        m.style.display = 'block';
    });
}

// Ajout des événements au chargement de la page
window.onload = () => {
    const markers = document.querySelectorAll('.marker');

    markers.forEach(marker => {
        // Lors du clic sur un marqueur, afficher la légende et zoomer sur la carte centrée sur ce marqueur
        marker.addEventListener('click', () => zoomOnPoint(marker));
    });
};
