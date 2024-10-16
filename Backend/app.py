from flask import Flask, request, jsonify
from model import HateSpeechModel
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

# Initialize the model (train if not already trained)
model = HateSpeechModel('HateSpeechNewDataset.csv')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    sentences = data.get('sentences', [])

    if not sentences:
        return jsonify({"error": "No sentences provided"}), 400

    predictions = []
    
    for sentence in sentences:
        prediction_value, is_hate = model.predict(sentence)
        predictions.append({
            "sentence": sentence,
            "predict": prediction_value,
            "is_hate": is_hate
        })
    
    return jsonify({"predictions": predictions})

if __name__ == "__main__":
    app.run(debug=True, port=5003)
