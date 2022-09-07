
const ctx = document.getElementById('grafico').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Entrega de Valor', 'Servicio', 'Valor de Un servicio', 'Utilidad', 'Garantia del Servcio'],
        datasets: [{
            label: '# of Votes',
            data: [3, 5, 3, 5, 8, 3],
            backgroundColor: [
                'rgba(250, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth:1
        }]

        
        
        










    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
