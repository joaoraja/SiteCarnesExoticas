document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('toggleTheme');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', current);
  });

  document.querySelectorAll('input[name="contactOption"]').forEach(elem => {
    elem.addEventListener("change", function (event) {
      const contactInput = document.getElementById("contact");
      if (event.target.value === "email") {
        contactInput.type = "email";
        contactInput.placeholder = "Digite seu Email";
        contactInput.pattern = "";
        contactInput.title = "";
      } else {
        contactInput.type = "text";
        contactInput.placeholder = "Digite seu CPF";
        contactInput.pattern = "\\d{11}";
        contactInput.title = "Digite um CPF válido com 11 dígitos.";
      }
    });
  });

  const form = document.getElementById('formReserva');
  const mensagemEnvio = document.getElementById('mensagemEnvio');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('name').value.trim();
    const contato = document.getElementById('contact').value.trim();
    const mensagem = document.getElementById('message').value.trim();
    if (!nome || !contato || !mensagem) {
      mensagemEnvio.textContent = "Por favor, preencha todos os campos corretamente.";
      mensagemEnvio.style.color = "red";
      mensagemEnvio.style.display = "block";
      return;
    }
    mensagemEnvio.textContent = "Reserva enviada com sucesso! Agradecemos o contato.";
    mensagemEnvio.style.color = "green";
    mensagemEnvio.style.display = "block";
    form.reset();
  });

  const faixa = document.getElementById("faixaProdutos");
  const btnPrev = document.querySelector(".btn-carrossel.prev");
  const btnNext = document.querySelector(".btn-carrossel.next");
  btnNext.addEventListener("click", () => {
    faixa.scrollBy({ left: 300, behavior: "smooth" });
  });
  btnPrev.addEventListener("click", () => {
    faixa.scrollBy({ left: -300, behavior: "smooth" });
  });
});
