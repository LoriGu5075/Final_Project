**Midterm Report: Analysis and Prediction of AAPL Stock Price Movements**

**1. Preliminary Visualizations**

Here are some initial visualizations of the AAPL stock price data and selected indicators:

AAPL Stock Price: Daily closing prices from January 2020 to January 2023.
MACD (Moving Average Convergence Divergence): Used to identify trends and potential buy/sell signals.
RSI (Relative Strength Index): Indicates overbought or oversold conditions.
KDJ Indicator: A stochastic oscillator that helps identify price reversals.

Sample Plots

AAPL Stock Price with MACD and Buy/Sell Signals
RSI Indicator with Overbought/Oversold Levels
KDJ Indicator Visualization

**2. Data Processing**

Data Download: We downloaded AAPL stock data from Yahoo Finance using yfinance API, covering the period from January 2020 to January 2023.
Date Parsing and Indexing: A date range was created, and the date column was set as the index.
Data Cleaning: Ensured that all key columns (Open, High, Low, Close, Volume) are of numeric types and removed rows with any missing values.
Feature Engineering: Computed technical indicators (MACD, RSI, KDJ) using pandas_ta library.
MACD: Calculated with a 12-day and 26-day exponential moving average.
RSI: Calculated over a 14-day period to determine overbought/oversold conditions.
KDJ: Derived using high, low, and close prices to capture momentum and potential trend reversals.
Buy/Sell Signal Generation: Based on MACD crossovers, generated preliminary buy and sell signals to explore trading opportunities.

**3. Data Modeling Methodology**

Our current model is a logistic regression classifier that predicts the direction of the next day’s price movement. Here’s a breakdown of the steps involved in the modeling process:

Target Variable: We created a binary target variable (Target), where 1 indicates that the closing price on the next day is higher than the current day's closing price, and 0 indicates a price decrease.
Feature Selection: We selected MACD, K, D, and RSI as the main features for the model.
Data Splitting: The data was split into training and testing sets using an 80/20 split without shuffling to maintain the time series order.
Model Training: We used LogisticRegression from the sklearn library to train the model on the selected features.
Evaluation Metrics: To evaluate the model, we used accuracy and a classification report, which includes precision, recall, and F1-score for both classes.

**4. Preliminary Results**
   
The preliminary results from the logistic regression model are promising. Here are some key takeaways:

Accuracy: The model achieved an accuracy of approximately 0.48299319727891155% on the test set, which is a promising start for a basic model.
Classification Report: The classification report shows precision, recall, and F1-scores for both classes (price increase and price decrease). The model performs reasonably well in predicting both classes, though additional tuning may improve these results.
Buy/Sell Signals: The buy and sell signals generated from MACD crossovers align well with some of the model’s predictions, indicating potential for further backtesting and optimization.

**5. Next Steps**

The main problem in our project is the accuracy is not good in enough, our final goal should make accuracy higher than 0.55~0.6. There are still many things to improve by change model. Also we can see a interesting thing that our buying signal and selling signal is extremely good in predicting stock price. I hope to incorporate these valuable features into the model to make more accurate predictions of stock price changes.

