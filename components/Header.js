// Esta función se encarga de mostrar el encabezado (header) de la página con botones y un modal flotante
export function header() {

  // Seleccionamos el contenedor donde irá el header
  const container = document.getElementById('headerContainer');

  // Le insertamos todo el contenido HTML del header
  container.innerHTML = `

    <!-- Sección principal del encabezado -->
    <section class="header-section">
      <div class="container text-center">

        <!-- Título principal -->
        <h1 class="titulo">Kaixo! I'm Ainhoa</h1>

        <!-- Subtítulo descriptivo -->
        <h2 class="subtitulo">Art Director & Motion Grapher currently based in the Basque Country</h2>

        <!-- Botones de navegación -->
        <div class="botones mt-4">
          <a href="#galleryContainer" class="btn btn-ainhoa">Proyectos</a>

          <!-- Este botón abrirá el modal -->
          <a href="#" id="btnSobreMi" class="btn btn-ainhoa">Sobre mí</a>

          <!-- Otros botones de contacto/redes -->
          <a href="mailto:ainhoa@example.com" class="btn btn-ainhoa">Email</a>
          <a href="https://instagram.com/ainhoa_dsgn" target="_blank" class="btn btn-ainhoa">Instagram</a>
          <a href="https://behance.net/ainhoa" target="_blank" class="btn btn-ainhoa">Behance</a>
        </div>
      </div>
    </section>

    <!-- Modal flotante que se muestra al pulsar "Sobre mí" -->
    <div id="modalSobreMi" class="modal-overlay">
      <div class="modal-contenido">
        <!-- Botón para cerrar el modal -->
        <button class="cerrar-modal" id="cerrarModal">×</button>

        <!-- Contenido dentro del modal -->
        <h2>Sobre mí</h2>
        <p>Hola! Soy Ainhoa, directora de arte y motion grapher desde el País Vasco. Me encanta el diseño visual, el ritmo y las ideas que impactan.</p>

        <!-- Imagen personal dentro del modal -->
        <img src="assets/images/ainhoa_foto.jpg" alt="Ainhoa" class="foto-modal" />
      </div>
    </div>
  `;

  // === LÓGICA DEL MODAL ===

  // Seleccionamos el botón que abre el modal
  const btn = document.getElementById("btnSobreMi");

  // Seleccionamos el modal (ventana flotante)
  const modal = document.getElementById("modalSobreMi");

  // Seleccionamos el botón de cerrar (la X)
  const cerrar = document.getElementById("cerrarModal");

  // Cuando se hace clic en el botón "Sobre mí"
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que el enlace recargue la página
    modal.style.display = "flex"; // Muestra el modal
  });

  // Cuando se hace clic en la "X", se oculta el modal
  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cuando se hace clic fuera del contenido del modal, también se cierra
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
