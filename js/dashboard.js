// Vendas x Mês
new Chart(document.getElementById('salesChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Vendas',
            data: [120, 150, 170, 160, 200, 230],
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13,110,253,0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
});

// Recompensas no último mês
new Chart(document.getElementById('rewardsMonthChart'), {
    type: 'bar',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Recompensas',
            data: [2, 3, 4, 3],
            backgroundColor: '#ffc107'
        }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
});

// Rating x Mês
new Chart(document.getElementById('ratingChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Rating',
            data: [4.5, 4.7, 4.8, 4.6, 4.9, 4.8],
            borderColor: '#198754',
            backgroundColor: 'rgba(25,135,84,0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { min: 4, max: 5 } } }
});

// Progresso no Ranking no Último Mês
new Chart(document.getElementById('rankingChart'), {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Ranking',
            data: [15, 14, 13, 12],
            borderColor: '#fd7e14',
            backgroundColor: 'rgba(253,126,20,0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: { plugins: { legend: { display: false } }, scales: { y: { reverse: true, beginAtZero: false } } }
});

// Total de Missões Concluídas Durante Todo o Tempo
new Chart(document.getElementById('missionsChart'), {
    type: 'doughnut',
    data: {
        labels: ['Concluídas', 'Restantes'],
        datasets: [{
            data: [85, 15],
            backgroundColor: ['#0dcaf0', '#dee2e6']
        }]
    },
    options: { plugins: { legend: { display: false } } }
});

// Total de Recompensas Ganhas durante todo o Tempo
new Chart(document.getElementById('rewardsTotalChart'), {
    type: 'doughnut',
    data: {
        labels: ['Ganhas', 'Restantes'],
        datasets: [{
            data: [54, 6],
            backgroundColor: ['#6f42c1', '#dee2e6']
        }]
    },
    options: { plugins: { legend: { display: false } } }
});