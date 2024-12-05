from flask import Flask, render_template, request, jsonify
import yfinance as yf
import pandas_ta as ta
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_stock_data', methods=['POST'])
def get_stock_data():
    data = request.json
    stock_ticker = data.get('ticker', 'AAPL')
    
    # Fetch stock data
    stock_data = yf.download(stock_ticker, start="2020-01-01", end="2023-01-01")
    stock_data['Date'] = stock_data.index

    # Ensure numeric columns
    stock_data[['Open', 'High', 'Low', 'Close', 'Volume']] = stock_data[['Open', 'High', 'Low', 'Close', 'Volume']].apply(pd.to_numeric, errors='coerce')
    stock_data.dropna(inplace=True)

    # Calculate Indicators
    macd = ta.macd(stock_data['Close'], fast=12, slow=26, signal=9)
    kdj = ta.stoch(stock_data['High'], stock_data['Low'], stock_data['Close'], k=14, d=3)
    
    stock_data['RSI'] = ta.rsi(stock_data['Close'], length=14)
    
    print(stock_data['Close'].head())

    stock_data['MACD'] = macd['MACD_12_26_9']
    stock_data['MACD_Signal'] = macd['MACDs_12_26_9']
    stock_data['MACD_Hist'] = macd['MACDh_12_26_9']
    stock_data['K'] = kdj['STOCHk_14_3_3']
    stock_data['D'] = kdj['STOCHd_14_3_3']
    stock_data['J'] = 3 * stock_data['K'] - 2 * stock_data['D']
    
    stock_data = stock_data.replace({pd.NA: None, float('nan'): None, float('inf'): None, -float('inf'): None})

    # Convert to JSON for JavaScript visualization
    response_data = stock_data[['Date', 'Close', 'MACD', 'MACD_Signal', 'MACD_Hist', 'RSI', 'K', 'D', 'J']].reset_index(drop=True).to_dict(orient='list')
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
