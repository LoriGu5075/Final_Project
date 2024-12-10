**[video DEMO link](https://drive.google.com/file/d/1HygFcnY82EluTzqGdmsqsonI6uRtdZVJ/view?usp=sharing)**

**Final Report: Analysis and Prediction of Stock Price Movements**

******1. How to Build and Run the Code******

**********************（你来写）

******2. Visualizations of Data******

Data Download: We downloaded stock data from Yahoo Finance using yfinance API, covering the period from whatever time range that people want to choose.
Date Parsing and Indexing: A date range was created, and the date column was set as the index.
Data Cleaning: Ensured that all key columns (Open, High, Low, Close, Volume) are of numeric types and removed rows with any missing values.
Feature Engineering: Computed technical indicators (MACD, RSI, KDJ) using pandas_ta library.
MACD: Calculated with a 12-day and 26-day exponential moving average.
RSI: Calculated over a 14-day period to determine overbought/oversold conditions.
KDJ: Derived using high, low, and close prices to capture momentum and potential trend reversals.
Buy/Sell Signal Generation: Based on MACD crossovers, generated preliminary buy and sell signals to explore trading opportunities.

We enhanced the visualizations compared to the midterm project by making them more interactive and customizable:
Comparison of Strategies:
Side-by-side cumulative return plots for the prediction-based strategy and a simple Buy-and-Hold strategy.
Custom Ticker Analysis:
Users can now select any stock ticker (e.g., TSLA, AMZN) to generate predictions and visualizations, providing greater flexibility and usability.

******3. Data Modeling Methodology And Improvements******

****Data Modeling Enhancements****
**Initial Model:**
In the midterm report, we employed a logistic regression model as a baseline, which achieved ~48% accuracy on the test set.
While simple and interpretable, it struggled to capture the non-linear relationships inherent in stock price movements.
**Final Model:**
We replaced logistic regression with a Random Forest Classifier, a more robust ensemble-based algorithm capable of handling non-linear patterns.
After hyperparameter tuning and feature selection, the Random Forest model achieved ~65% accuracy, a significant improvement.
Feature Engineering and Selection
Compared to the midterm, we significantly expanded the feature set, introducing multiple new indicators:

Log Returns: Mitigated the non-stationarity of raw price data, allowing the model to better identify trends.
Short-term (SMA_5) and Medium-term (SMA_20) Moving Averages: Captured momentum and mean-reversion patterns.
Bollinger Bands: Provided insight into overbought or oversold conditions by framing price movement within statistically expected ranges.
Rolling Standard Deviation (Rolling_STD_5): Captured short-term volatility.
High_Low_Spread and Close_Open_Change: Highlighted daily price range and intraday sentiment shifts.
Final Feature Selection:

After extensive testing, we observed that some features (e.g., Bollinger Bands and High_Low_Spread) did not significantly improve the model's accuracy. Thus, we streamlined the feature set to include the most predictive indicators:
MACD / RSI / K and D (from the KDJ indicator)
This decision reduced computational complexity while retaining predictive power.

**Model Performance**
The Random Forest model achieved:
Accuracy: ~65% on the test set, outperforming the midterm logistic regression model by 17%.
**Classification Report:**
Precision and Recall for price increases (Target=1) improved significantly, showcasing the model's ability to capture upward price trends.
Backtesting and Strategy Comparison
To validate the model's practical application, we compared two strategies:
**Prediction-Based Strategy:** Using the model's buy/sell predictions.
Buy-and-Hold Strategy: Holding the stock throughout the test period.


******4. Final Results******

****Model Performance****
         Metric	            Midterm Logistic Regression	      Final Random Forest
         Accuracy	                    ~48%	                           ~65%
         Precision (1)	              ~50%	                           ~67%
         Recall (1)	                 ~47%	                           ~64%
         F1 Score (1)	              ~48%	                           ~65%

****Key Observations:****

**Improved Accuracy:** The Random Forest model achieved ~65% accuracy, a significant improvement over the ~48% baseline.
**Enhanced Recall for Price Increases:** Improved recall for Target=1 (price increase) suggests the model is better at identifying upward trends, crucial for profitable buy signals.
**Simplified Features:** Retaining only the most predictive indicators (MACD, RSI, K, D) allowed the model to balance complexity and interpretability.

****Backtesting and Strategy Comparison****
To validate the model's practical utility, we compared the prediction-based strategy with a simple Buy-and-Hold strategy on the test dataset.

****Key Results:****
**Supergiant Companies (e.g., AAPL):**

Buy-and-Hold: Demonstrated excellent returns due to AAPL's long-term upward trajectory.
Prediction-Based Strategy: Outperformed Buy-and-Hold during medium-term corrections, generating higher returns in periods of price decline.
**Smaller or Volatile Companies:**

The prediction-based strategy showed a consistent edge, leveraging price reversals to achieve higher cumulative returns.
Cumulative Returns Example:
The figure below compares cumulative returns for the prediction-based strategy and Buy-and-Hold:


******5. Conclusion******
**Model Improvement:**

Transitioned from Logistic Regression to Random Forest, achieving a significant accuracy boost (~17% improvement).
Streamlined the feature set to include only MACD, RSI, and KDJ components, simplifying the model without sacrificing predictive power.
Comprehensive Feature Exploration:

Introduced features like Bollinger Bands, SMA, Rolling Standard Deviation, and High-Low Spread.
While some features were excluded due to limited contribution to accuracy, this exploratory work deepened our understanding of price dynamics.
**Practical Utility:**

The prediction-based strategy offers a viable alternative to Buy-and-Hold, particularly in volatile markets or during price corrections.
Demonstrated the potential for profitable application across various stock types, from supergiants like AAPL to smaller, more volatile companies.

****Key Insights****
Market Adaptability:

Buy-and-Hold is effective for supergiant companies, but our model's strategy outshines it during market corrections.
For smaller companies, the prediction-based strategy consistently captures opportunities missed by passive approaches.
Strategic Application:

While the model achieves a ~65% accuracy, its utility lies in generating actionable trading signals, especially in identifying short-term opportunities.

****In The Future...Maybe...****
Expand testing to a broader range of stocks across different sectors to validate model generalizability.
Incorporate transaction costs and risk-adjusted metrics (e.g., Sharpe Ratio) for a more realistic evaluation of profitability.
Experiment with advanced models like LSTM to capture temporal dependencies in price movements.


