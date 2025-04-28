document.addEventListener('DOMContentLoaded', () => {
    fetch('https://mauricio.inf.br/p6/api/list/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro HTTP, status ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Resposta da API:', data); // 👈 VEJA O QUE ESTÁ VINDO
  
        // Se for um objeto que contém um array, adapte aqui
        let lista = data;
        if (data.veiculos) {  // Exemplo de adaptação se for { veiculos: [...] }
          lista = data.veiculos;
        }
  
        if (!Array.isArray(lista)) {
          throw new Error('Resposta inesperada da API.');
        }
  
        const tbody = document.getElementById('veiculosTableBody');
        lista.forEach(veiculo => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${veiculo.marca}</td>
            <td>${veiculo.modelo}</td>
            <td>${veiculo.ano_fabric}</td>
            <td>${veiculo.cor}</td>
            <td>${veiculo.placa}</td>
          `;
          tbody.appendChild(tr);
        });
      })
      .catch(error => {
        console.error('Erro ao buscar veículos:', error.message);
        alert('Erro ao buscar veículos: ' + error.message);
      });
  });
  