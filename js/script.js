// Função para alternar entre os temas claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  
  // Captura o botão de alternância de tema e adiciona um ouvinte de eventos
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('change', toggleTheme);
  