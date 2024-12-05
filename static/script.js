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
