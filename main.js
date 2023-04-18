import './style.css'

document.getElementById('share-btn').addEventListener('click', function() {
  if (navigator.share) { // Verifica si la API de Web Share es compatible con el navegador
    navigator.share({
      title: document.title, // Título de la página web
      url: window.location.href // URL de la página web actual
    })
  } else {
    console.error('La API de Web Share no es compatible con este navegador');
  }
});