import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
import os
import pickle

class HateSpeechModel:
    def __init__(self, dataset_path):
        self.model_path = 'hate_speech_model.pkl'
        if os.path.exists(self.model_path):
            # Load the pre-trained model
            with open(self.model_path, 'rb') as f:
                self.model = pickle.load(f)
        else:
            # Train the model if not already trained
            self.model = self.train_model(dataset_path)
    
    def train_model(self, dataset_path):
        # Load the dataset
        print("Model is training. Please wait...")
        df = pd.read_csv(dataset_path)
        
        # Assuming the first column is the content and the second column is the label
        X = df.iloc[:, 0]
        y = df.iloc[:, 1]
        
        # Split the dataset
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        
        # Create a text processing and classification pipeline
        model = make_pipeline(CountVectorizer(), MultinomialNB())
        
        # Train the model
        model.fit(X_train, y_train)
        
        # Save the model for future use
        with open(self.model_path, 'wb') as f:
            pickle.dump(model, f)
        
        return model

    def predict(self, sentence):
        # Get the prediction
        prediction = self.model.predict([sentence])[0]
        prediction_value = self.model.predict_proba([sentence])[0][1]  # Probability of 'hate speech'
       
        is_hate = bool(int(prediction) == 1)
       
        print(prediction_value, is_hate)
        return prediction_value, is_hate
