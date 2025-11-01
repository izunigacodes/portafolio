// Cargar componentes comunes
async function loadComponent(id, file) {
  const response = await fetch(file);
  const content = await response.text();
  document.getElementById(id).innerHTML = content;
}

// Inicializar
async function init() {
  await loadComponent("header", "components/header.html");
  await loadComponent("footer", "components/footer.html");
  await loadPage("home");

  
}

// Cargar contenido dinámico
/*async function loadPage(page) {
  try {
    const response = await fetch(`components/${page}.html`);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
  } catch (error) {
    document.getElementById("content").innerHTML = "<p>Error al cargar la página.</p>";
  }
}*/

document.addEventListener("DOMContentLoaded", init);
