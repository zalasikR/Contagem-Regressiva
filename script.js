document.addEventListener('DOMContentLoaded', function () {
  // Define o tempo inicial de 1 hora (60 minutos)
  let tempoRestante = 10 * 10; // 1 hora em segundos

  // Função para atualizar a contagem regressiva
  function atualizarContagemRegressiva() {
    // Calcula as horas, minutos e segundos restantes
    const horas = Math.floor(tempoRestante / 3600);
    const minutos = Math.floor((tempoRestante % 3600) / 60);
    const segundos = tempoRestante % 60;

    // Atualiza os elementos HTML com os valores e adiciona a animação
    atualizarElemento('horas', horas);
    atualizarElemento('minutos', minutos);
    atualizarElemento('segundos', segundos);

    // Se o tempo acabar, mostra a mensagem de fim
    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      document.getElementById('titulo').innerText = 'A contagem terminou!';
      // Adiciona a animação de fim de contagem
      document.getElementById('titulo').classList.add('animate');
    } else {
      // Decrementa o tempo restante a cada segundo
      tempoRestante--;
    }
  }

  // Função para atualizar o valor e animar o número
  function atualizarElemento(id, valor) {
    const elemento = document.getElementById(id);
    elemento.innerText = valor.toString().padStart(2, '0');
    elemento.classList.add('animate'); // Adiciona animação de movimento

    // Remove a classe de animação após a conclusão para reusá-la
    setTimeout(() => {
      elemento.classList.remove('animate');
    }, 1000);
  }

  // Atualiza a contagem a cada segundo
  const intervalo = setInterval(atualizarContagemRegressiva, 1000);
});
// Define a data final da contagem regressiva
const dataFinal = new Date(new Date().getTime() + 60 * 60 * 1000).getTime(); // 1 hora a partir de agora

// Função para atualizar a contagem regressiva
function atualizarContagemRegressiva() {
  const agora = new Date().getTime();
  const diferenca = dataFinal - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;

  if (diferenca < 0) {
    clearInterval(intervalo);
    document.getElementById('titulo').innerText = 'A contagem terminou!';
  }
}

// Atualiza a contagem regressiva a cada segundo
const intervalo = setInterval(atualizarContagemRegressiva, 1000);
document.addEventListener('DOMContentLoaded', function () {
  const formConfiguracao = document.getElementById('form-configuracao');
  const contagemContainer = document.getElementById('contagem');
  const configuracaoContainer = document.getElementById('configuracao');
  let tempoRestante;

  // Função para iniciar a contagem regressiva
  function iniciarContagem() {
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const minutos = parseInt(document.getElementById('minutos').value) || 0;
    const segundos = parseInt(document.getElementById('segundos').value) || 0;

    // Converte o tempo total para segundos
    tempoRestante = horas * 3600 + minutos * 60 + segundos;

    // Esconde o formulário e mostra a contagem regressiva
    configuracaoContainer.style.display = 'none';
    contagemContainer.style.display = 'block';

    // Atualiza a contagem regressiva a cada segundo
    const intervalo = setInterval(function () {
      if (tempoRestante <= 0) {
        clearInterval(intervalo);
        document.getElementById('titulo').innerText = 'A contagem terminou!';
      } else {
        atualizarContagemRegressiva();
        tempoRestante--;
      }
    }, 1000);
  }

  // Função para atualizar a contagem regressiva
  function atualizarContagemRegressiva() {
    const horas = Math.floor(tempoRestante / 3600);
    const minutos = Math.floor((tempoRestante % 3600) / 60);
    const segundos = tempoRestante % 60;

    document.getElementById('horas-contagem').innerText = horas.toString().padStart(2, '0');
    document.getElementById('minutos-contagem').innerText = minutos.toString().padStart(2, '0');
    document.getElementById('segundos-contagem').innerText = segundos.toString().padStart(2, '0');
  }

  // Escuta o envio do formulário
  formConfiguracao.addEventListener('submit', function (e) {
    e.preventDefault();
    iniciarContagem();
  });
});
