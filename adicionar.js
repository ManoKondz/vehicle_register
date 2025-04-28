document.getElementById('formVeiculo').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const veiculo = {
      marca: document.getElementById('marca').value.trim(),
      modelo: document.getElementById('modelo').value.trim(),
      ano_fabric: document.getElementById('ano_fabric').value.trim(),
      cor: document.getElementById('cor').value.trim(),
      placa: document.getElementById('placa').value.trim()
    };
  
    // Validação
    for (let campo in veiculo) {
      if (veiculo[campo].length < 3) {
        alert('Todos os campos devem ter pelo menos 3 caracteres.');
        return;
      }
    }
  
    fetch('https://mauricio.inf.br/p6/api/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(veiculo)
    })
    .then(response => response.json())
    .then(data => {
      alert('Veículo adicionado com sucesso!');
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error('Erro ao adicionar veículo:', error);
      alert('Erro ao adicionar o veículo.');
    });
  });
  