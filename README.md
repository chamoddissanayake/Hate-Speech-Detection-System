
# Hate Speech Detection System


This Hate Speech Detection application leverages machine learning to analyze and classify text for hate speech content. Built using Flask, it features a user-friendly API that accepts sentences and returns predictions on whether they contain hate speech. The underlying model is trained on a comprehensive dataset, employing techniques like Count Vectorization and Naive Bayes classification. This tool aims to promote safer online interactions by identifying and flagging harmful language.
## Run Locally

Install Python 3.10.0


  https://www.python.org/downloads/release/python-3100/

Install Node 21.6.2


  https://nodejs.org/en/blog/release/v21.6.2


Clone the project

```bash
  git clone https://github.com/chamoddissanayake/Hate-Speech-Detection-System.git
```

Go to Frontend Folder

```bash
  Frontend > hate-speech-detection
```

Install dependencies

```bash
  npm install
```

Start the Frontend

```bash
  npm start
```

Go to Frontend Web App

```bash
  http://localhost:3000/
```

Go to Backend Folder

```bash
  Backend >
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the Backend

```bash
  python app.py
```
## Tech Stack

**Programming Language:**

  * Python, Typescript

**Web Framework:**

  * Flask, React

**Machine Learning Libraries:**

  * Scikit-learn (for model training and prediction)
  * Pandas (for data manipulation)
  * Pickle (for model serialization)

**Text Processing:**

  * CountVectorizer (for text feature extraction)

**Modeling:**

  * Multinomial Naive Bayes (for classification)
## Usage/Examples


POST Method

```bash
http://127.0.0.1:5003/predict
```

Request
```javascript
{
   "sentences": [
       "I kill you",
       "I love you"
   ]
}

```
Response
```javascript
{
    "predictions": [
        {
            "is_hate": true,
            "predict": 0.6998731147266044,
            "sentence": "I kill you"
        },
        {
            "is_hate": false,
            "predict": 0.42100000413619987,
            "sentence": "I love you"
        }
    ]
}
```
