import { projectCard } from './ProjectCard.js';

export async function projectGallery() {
  const container = document.getElementById('galleryContainer');

  const response = await fetch('./data/proyectos.json');
  const proyectos = await response.json();

const titulo = `<h3 class="section-title">Proyectos destacados</h3>`;;
  let html = '<div class="project-grid d-flex flex-wrap justify-content-center">';

  proyectos.forEach((proyecto) => {
    html += projectCard(proyecto);
  });

  html += '</div>';

  container.innerHTML = titulo + html;
}
