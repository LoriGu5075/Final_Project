# Final_Project

**Project title: Analysis and Prediction of MACD Index's influence on stock price movements**

**1. Project Description:**

The purpose of this project is to study the influence of MACD (Moving average convergence/divergences) as an indicator on stock price movements. MACD is a common technical analysis tool used in stock trading to measure changes in stock price momentum. This project will explore the relationship between MACD and future stock prices, analyze whether it can help predict stock price trends, and establish relevant forecasting models.

The core objective of the project is to examine the impact of MACD signals (e.g., gold crosses, death crosses) on stock price movements by analyzing historical stock data, and to build predictive models combined with other characteristics.

**2. Project objectives:**

The main goal is to successfully predict the direction of stock price movements based on the MACD indicator. Specifically, we want to:

Study the effect of MACD signals (such as gold and dead crosses) on the rise and fall of stock prices.
Build a model based on MACD and other characteristics (such as volume, opening price, closing price) to predict stock price movements over a future period of time.
Explore whether MACD can provide an effective short - or medium-term trend prediction signal.

**3. Data collection plan:**

Data will be obtained from publicly available financial market data sources or apis, including, but not limited to, the following:

Stock history data: Get a stock's daily opening, closing, high, low, and volume data from Yahoo Finance API, Alpha Vantage, or Quandl.
MACD Calculation: Using a technical analysis library such as TA-Lib or pandas_ta, calculate the MACD indicator of the stock, including its 12-day, 26-day moving average (EMA), as well as the MACD line and signal line.

**4. Modeling Approach:**

We will explore different modeling techniques to analyze and predict stock price movements based on MACD and other relevant features:

Classification Models: Initially, models like logistic regression, random forest, and XGBoost will be used to classify stock price movements (up or down) based on MACD signals.
Regression Models: Linear regression or time-series models will be employed to predict the magnitude of stock price changes following specific MACD signals.
Time-Series Models: Models such as ARIMA or LSTM will be used to capture the temporal dependencies between MACD and stock prices for short-term trend forecasting.
We will evaluate models using metrics such as accuracy and F1 score for classification tasks, and Mean Squared Error (MSE) for regression tasks.

**5. Data Visualization Plan:**

To clearly illustrate the relationship between MACD and stock price movements, we will use the following visualizations:

Time-Series Plots: Plot stock prices, MACD, and signal lines over time, with markers for key signals (e.g., golden cross, death cross).
Scatter Plots: Visualize the relationship between MACD histogram values and future stock price changes.
Interactive Charts: Use Plotly to create interactive charts that allow users to explore how MACD correlates with stock price trends over different time periods.
These visualizations will help in understanding the connection between MACD and price movements, making patterns easier to detect.

**6. Test Plan:**

Our test plan will follow a structured approach:

Data Split: We will split the dataset into 80% for training and 20% for testing the model’s performance.
Time-Based Split: Given the time-series nature of stock data, we will train the model on earlier data (e.g., from 2015-2020) and test it on more recent data (e.g., 2021-2022) to assess how well the model generalizes.
Cross-Validation: Cross-validation will be used during model training to avoid overfitting and to ensure robust model performance across different subsets of the data.
