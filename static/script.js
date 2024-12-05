document.getElementById('stock-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const ticker = document.getElementById('ticker').value;

    fetch('/get_stock_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker })
    })
        .then(response => response.json())
        .then(data => visualizeData(data))
        .catch(error => console.error('Error:', error));
});

function visualizeData(data) {
    const dates = data.Date;
    const closePrices = data.Close;
    const macd = data.MACD;
    const macdSignal = data.MACD_Signal;
    const rsi = data.RSI;
    const k = data.K;
    const d = data.D;
    const j = data.J;

    // Stock Price Chart
    Plotly.newPlot('stock-price-chart', [
        { x: dates, y: closePrices, type: 'scatter', name: 'Close Price' }
    ], { title: 'Stock Price' });

    // MACD Chart
    Plotly.newPlot('macd-chart', [
        { x: dates, y: macd, type: 'scatter', name: 'MACD' },
        { x: dates, y: macdSignal, type: 'scatter', name: 'MACD Signal' }
    ], { title: 'MACD Indicator' });

    // RSI Chart
    Plotly.newPlot('rsi-chart', [
        { x: dates, y: rsi, type: 'scatter', name: 'RSI' },
        { x: dates, y: Array(dates.length).fill(70), type: 'line', name: 'Overbought', line: { dash: 'dash' } },
        { x: dates, y: Array(dates.length).fill(30), type: 'line', name: 'Oversold', line: { dash: 'dash' } }
    ], { title: 'RSI Indicator' });

    // KDJ Chart
    Plotly.newPlot('kdj-chart', [
        { x: dates, y: k, type: 'scatter', name: 'K' },
        { x: dates, y: d, type: 'scatter', name: 'D' },
        { x: dates, y: j, type: 'scatter', name: 'J' }
    ], { title: 'KDJ Indicator' });
}


document.getElementById('predict-button').addEventListener('click', () => {
    const ticker = document.getElementById('ticker').value;

    fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker })
    })
    .then(response => response.json())
    .then(data => {
        // Populate Metrics
        const metricsTable = document.getElementById('metrics-table');
        metricsTable.innerHTML = '';
        for (const [metric, value] of Object.entries(data.metrics.classification_report)) {
            if (typeof value === 'object') {
                // Format nested objects into key-value pairs
                let nestedValues = Object.entries(value)
                    .map(([subMetric, subValue]) => `${subMetric}: ${subValue}`)
                    .join('<br>');
                metricsTable.innerHTML += `<tr><td>${metric}</td><td>${nestedValues}</td></tr>`;
            } else {
                // Handle non-object values directly
                metricsTable.innerHTML += `<tr><td>${metric}</td><td>${value}</td></tr>`;
            }
        }
        

        // Update Plots
        document.getElementById('confusion-matrix').src = `data:image/png;base64,${data.confusion_matrix_image}`;
        document.getElementById('strategy-plot').src = `data:image/png;base64,${data.strategy_plot_image}`;
    })
    .catch(error => console.error('Error:', error));
});
