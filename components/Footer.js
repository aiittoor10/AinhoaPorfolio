export function footer() {
  const container = document.getElementById("footerContainer");

  container.innerHTML = `
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content">
          <p class="firma">&copy; ${new Date().getFullYear()} Ainhoa · Diseñadora gráfica</p>
          <div class="social-links">
            <a href="mailto:ainhoa@example.com" target="_blank" title="Email">
              <i class="fas fa-envelope"></i>
            </a>
            <a href="https://instagram.com/ainhoa_dsgn" target="_blank" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://behance.net/ainhoa" target="_blank" title="Behance">
              <i class="fab fa-behance"></i>
            </a>
            <a href="https://linkedin.com/in/ainhoa" target="_blank" title="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
