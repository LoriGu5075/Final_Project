import matplotlib
matplotlib.use('Agg')  # Use a non-GUI backend like 'Agg' for headless environments

import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
from io import BytesIO
import base64



def train_and_evaluate_model(stock_data):
    # Add target variable
    stock_data['Target'] = (stock_data['Close'].shift(-1) > stock_data['Close']).astype(int)

    # Prepare features and target
    features = stock_data[['MACD', 'K', 'D', 'RSI']].dropna()
    target = stock_data['Target'].loc[features.index]

    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42, shuffle=False)

    # Train Random Forest
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    rf_predictions = rf_model.predict(X_test)

    # Evaluate model
    metrics = {
        "accuracy": accuracy_score(y_test, rf_predictions),
        "classification_report": classification_report(y_test, rf_predictions, output_dict=True)
    }

    # Confusion Matrix Plot
    plt.figure(figsize=(6, 6))
    sns.heatmap(confusion_matrix(y_test, rf_predictions), annot=True, fmt='d', cmap='Greens')
    plt.title("Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    buf = BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    confusion_matrix_image = base64.b64encode(buf.getvalue()).decode('utf-8')
    buf.close()
    plt.close()

    # Backtesting Strategy
    test_data = stock_data.loc[X_test.index].copy()
    test_data['Prediction'] = rf_predictions
    test_data['Strategy'] = test_data['Prediction'].shift(1)
    test_data['Daily_Return'] = test_data['Close'].pct_change()
    test_data['Strategy_Return'] = test_data['Daily_Return'] * test_data['Strategy']

    # Cumulative Returns Plot
    test_data[['Daily_Return', 'Strategy_Return']].dropna().cumsum().plot(figsize=(10, 6))
    plt.title("Cumulative Returns: Buy-and-Hold vs Strategy")
    plt.xlabel("Date")
    plt.ylabel("Cumulative Returns")
    plt.legend(['Buy-and-Hold', 'Strategy'])
    buf = BytesIO()
    plt.savefig(buf, format="png")
    buf.seek(0)
    strategy_plot_image = base64.b64encode(buf.getvalue()).decode('utf-8')
    buf.close()
    plt.close()

    return {
        "metrics": metrics,
        "confusion_matrix_image": confusion_matrix_image,
        "strategy_plot_image": strategy_plot_image
    }
