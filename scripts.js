const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Coding', 'Communication', 'Gaming', 'Entertainment', 'Research', 'Other'],
        datasets: [{
            data: [26, 41, 11, 13, 6, 3],
            backgroundColor: ['#00FF00', '#00CC00', '#009900', '#006600', '#003300', '#001100']
        }]
    }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['Coding', 'Communication', 'Gaming', 'Entertainment', 'Research', 'Other'],
        datasets: [{
            data: [26, 41, 11, 13, 6, 3],
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: '#00FF00'
        }]
    }
});
