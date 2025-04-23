// Funksioni për hapjen e modalit
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }
  
  // Funksioni për mbylljen e modalit
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Mbyll modalin nëse klikoni jashtë tij
  window.onclick = function(event) {
    if (event.target.className === "modal") {
      closeModal(event.target.id);
    }
  }
  