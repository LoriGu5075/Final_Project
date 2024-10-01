**Final_Project**

**Project title: Analysis and Prediction of MACD, KDJ, and RSI Indicators' Influence on Stock Price Movements**

**1. Project Description:**

The purpose of this project is to study the influence of three widely used technical indicators—MACD (Moving Average Convergence/Divergence), KDJ (Stochastic Oscillator), and RSI (Relative Strength Index)—on stock price movements. These indicators are popular tools in technical analysis to measure stock price momentum and market trends. This project will explore the relationship between these indicators and future stock prices, analyzing whether they can help predict stock price trends, and establishing predictive models based on them.

The core objective of the project is to examine the impact of MACD signals (e.g., gold crosses, death crosses), KDJ (e.g., overbought, oversold conditions), and RSI (e.g., divergence signals) on stock price movements by analyzing historical stock data and building relevant forecasting models.

**2. Project objectives:**

The main goal is to successfully predict the direction of stock price movements based on the MACD, KDJ, and RSI indicators. Specifically, we want to:

Study the effect of MACD signals (such as gold and dead crosses) on the rise and fall of stock prices.
Analyze the influence of KDJ overbought/oversold signals on short-term stock price movements.
Investigate RSI's role in identifying potential trend reversals and divergences with stock price movements.
Build a model based on MACD, KDJ, RSI, and other features (such as volume, opening price, closing price) to predict stock price movements over a future period of time.
Explore whether MACD, KDJ, and RSI together can provide an effective short- or medium-term trend prediction signal.

**3. Data collection plan:**

Data will be obtained from publicly available financial market data sources or APIs, including, but not limited to, the following:

Stock history data: Daily opening, closing, high, low, and volume data from Yahoo Finance API, Alpha Vantage, or Quandl.
MACD Calculation: Using a technical analysis library such as TA-Lib or pandas_ta, calculate the MACD indicator, including its 12-day, 26-day EMAs, MACD line, and signal line.
KDJ Calculation: Calculate the KDJ (Stochastic Oscillator) indicator based on the stock’s high, low, and closing prices over a specific time period.
RSI Calculation: Calculate the Relative Strength Index (RSI) to measure momentum by comparing recent gains and losses in stock prices.

**4. Modeling Approach:**

We will explore different modeling techniques to analyze and predict stock price movements based on MACD, KDJ, RSI, and other relevant features:

Classification Models: Models like logistic regression, random forest, and XGBoost will be used to classify stock price movements (up or down) based on MACD, KDJ, and RSI signals.
Regression Models: Linear regression or time-series models will be employed to predict the magnitude of stock price changes following specific signals from the indicators.
Time-Series Models: Models such as ARIMA or LSTM will be used to capture the temporal dependencies between MACD, KDJ, RSI, and stock prices for short-term trend forecasting.
Evaluation metrics:

Classification Tasks: Accuracy, Precision, Recall, and F1 score will be used to assess the models' performance in predicting stock price directions.
Regression Tasks: Mean Squared Error (MSE) and Mean Absolute Error (MAE) will be used to evaluate the accuracy of predicting stock price changes.

**5. Data Visualization Plan:**

To clearly illustrate the relationship between MACD, KDJ, RSI, and stock price movements, we will use the following visualizations:

Time-Series Plots: Plot stock prices, MACD, KDJ, and RSI over time, with markers for key signals (e.g., golden cross, death cross, overbought/oversold levels).
Scatter Plots: Visualize the relationship between MACD, KDJ, RSI values, and future stock price changes.
Interactive Charts: Use Plotly to create interactive charts allowing users to explore how MACD, KDJ, and RSI correlate with stock price trends over different time periods.
These visualizations will help in understanding the connection between the indicators and price movements, making patterns easier to detect.

**6. Test Plan:**

Our test plan will follow a structured approach:

Data Split: Split the dataset into 80% for training and 20% for testing the model’s performance.
Time-Based Split: Given the time-series nature of stock data, train the model on earlier data (e.g., from 2017-2022) and test it on more recent data (e.g., 2022-2024) to assess how well the model generalizes.
Cross-Validation: Use cross-validation during model training to avoid overfitting and to ensure robust model performance across different subsets of the data.
By incorporating multiple indicators (MACD, KDJ, RSI), we aim to improve prediction accuracy and provide comprehensive insights into stock price trends.
