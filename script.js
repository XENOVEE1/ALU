// Fonction pour afficher la légende au clic sur un marqueur
function zoomOnPoint(marker) {
    // Masquer tous les popups
    const legends = document.querySelectorAll('.legend-popup');
    legends.forEach(legend => legend.style.display = 'none');

    // Récupérer l'ID du popup de la légende associée
    const legendId = marker.getAttribute('data-legend');
    const legend = document.getElementById(legendId);

    // Positionner le popup près du marqueur
    const rect = marker.getBoundingClientRect();
    legend.style.top = `${rect.top - 120}px`; // Ajuste la position verticale
    legend.style.left = `${rect.left + rect.width + 10}px`; // Ajuste la position horizontale

    // Afficher le popup de la légende
    legend.style.display = 'block';
}

// Fonction pour fermer une légende
function closePopup(legendId) {
    const legend = document.getElementById(legendId);
    legend.style.display = 'none';
}

// Ajout des événements au chargement de la page
window.onload = () => {
    const markers = document.querySelectorAll('.marker');

    markers.forEach(marker => {
        // Ajouter un événement de clic sur chaque marqueur pour afficher la légende associée
        marker.addEventListener('click', () => zoomOnPoint(marker));
    });
};
