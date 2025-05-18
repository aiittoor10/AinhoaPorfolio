export function projectCard({ title, image, category, description }) {
  const modalId = `modal-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return `
    <!-- Tarjeta del proyecto -->
    <div class="project-card-wrapper">
      <div class="project-card" onclick="document.getElementById('${modalId}').style.display = 'flex'">
        <div class="project-img-wrapper">
          <img src="${image}" alt="${title}" class="project-img" />
        </div>
        <div class="project-info">
          <h5 class="project-title">${title}</h5>
          <p class="project-category">${category}</p>
        </div>
      </div>

      <!-- Modal (solo se muestra al hacer clic) -->
      <div id="${modalId}" class="modal-overlay">
        <div class="modal-contenido">
          <button class="cerrar-modal" onclick="document.getElementById('${modalId}').style.display = 'none'">×</button>
          <h2>${title}</h2>
          <p><strong>Categoría:</strong> ${category}</p>
          <p class="modal-descripcion">${description}</p>

          <!-- Galería (se pueden usar imágenes distintas si lo necesitas) -->
          <div class="modal-galeria">
            <img src="${image}" alt="${title} imagen 1" />
            <img src="${image}" alt="${title} imagen 2" />
            <img src="${image}" alt="${title} imagen 3" />
          </div>
        </div>
      </div>
    </div>
  `;
}
