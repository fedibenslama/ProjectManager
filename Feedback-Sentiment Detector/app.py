
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import WhitespaceTokenizer
from nltk import pos_tag
from nltk.corpus import wordnet
import joblib
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics import precision_recall_fscore_support as score
from sklearn.metrics import accuracy_score, make_scorer
from sklearn.model_selection import cross_val_score, KFold
from sklearn.metrics import confusion_matrix, f1_score
from sklearn.metrics import accuracy_score
from sklearn.model_selection import cross_validate, train_test_split
from sklearn.metrics.pairwise import linear_kernel
from sklearn.model_selection import GridSearchCV
from sklearn.neighbors import NearestNeighbors
from sklearn.ensemble import (
    RandomForestClassifier, GradientBoostingClassifier)
from sklearn.svm import SVC, LinearSVC
from sklearn.multiclass import OneVsRestClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from nltk.stem.porter import *
from nltk.stem import WordNetLemmatizer, SnowballStemmer
from nltk.corpus import stopwords
from gensim.utils import simple_preprocess
from textblob import Word
import gensim
import string
import nltk
import matplotlib.pyplot as plt
from wordcloud import WordCloud
from flask import Flask, render_template, url_for, request
import pickle
import csv
import pandas as pd
# utilities
import re
import numpy as np
# plotting
import seaborn as sns
sns.set_style('white')


app = Flask(__name__)


# Lemmatization process
'''
Words in the third person are changed to first person and verbs in past and future tenses are changed into the present by the
lemmatization process.
'''
lemmatizer = WordNetLemmatizer()


def tokenize_and_lemmatize(text):
    # tokenization to ensure that punctuation is caught as its own token
    tokens = [word.lower() for sent in nltk.sent_tokenize(text)
              for word in nltk.word_tokenize(sent)]
    filtered_tokens = []

    for token in tokens:
        if re.search('[a-zA-Z]', token):
            filtered_tokens.append(token)
    lem = [lemmatizer.lemmatize(t) for t in filtered_tokens]
    return lem

# return the wordnet object value corresponding to the POS tag


def get_wordnet_pos(pos_tag):
    if pos_tag.startswith('J'):
        return wordnet.ADJ
    elif pos_tag.startswith('V'):
        return wordnet.VERB
    elif pos_tag.startswith('N'):
        return wordnet.NOUN
    elif pos_tag.startswith('R'):
        return wordnet.ADV
    else:
        return wordnet.NOUN

import string
from nltk import pos_tag
from nltk.corpus import stopwords
from nltk.tokenize import WhitespaceTokenizer
from nltk.stem import WordNetLemmatizer

def clean_text(text):
    # lower text
    text = text.lower()
    # tokenize text and remove puncutation
    text = [word.strip(string.punctuation) for word in text.split(" ")]
    # remove words that contain numbers
    text = [word for word in text if not any(c.isdigit() for c in word)]
    # remove stop words
    stop = stopwords.words('english')
    text = [x for x in text if x not in stop]
    # remove empty tokens
    text = [t for t in text if len(t) > 0]
    # pos tag text
    pos_tags = pos_tag(text)
    # lemmatize text
    text = [WordNetLemmatizer().lemmatize(t[0], get_wordnet_pos(t[1]))
            for t in pos_tags]
    # remove words with only one letter
    text = [t for t in text if len(t) > 1]
    # join all
    text = " ".join(text)
    return(text)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/predict', methods=['POST'])
def predict():
    # Load the dataset
    employees = pd.read_csv('employees.csv')
    # Feedback Sentiment Function
    employees["feedback_sentiment"] = employees["nine_box_category"].apply(lambda x: "Good Feedback" if x == "Category 9: 'Star' (High performance, High potential)"
                                                                           or x == "Category 8: 'High Potential' (Moderate performance, High potential)"
                                                                           or x == "Category 6: 'High Performer' (High performance, Moderate potential)"
                                                                           or x == "Category 3: 'Solid Performer' (High performance, Low potential)"
                                                                           or x == "Category 5: 'Core Player' (Moderate performance, Moderate potential)"
                                                                           else "Bad Feedback")
    # Text Pre-processing
    # dropping irrelevant columns
    columns_to_delete = ['id', 'person_name',
                         'nine_box_category', 'adjusted', 'reviewed']
    employees.drop(columns_to_delete, inplace=True, axis=1)
    # clean text data
    employees["feedback_clean"] = employees["feedback"].apply(
        lambda x: clean_text(x))
    # add number of characters column
    employees["nb_chars"] = employees["feedback"].apply(lambda x: len(x))

    # add number of words column
    employees["nb_words"] = employees["feedback"].apply(
        lambda x: len(x.split(" ")))
    # Defining a Count Vectorizer object
    count_vec = CountVectorizer(stop_words='english', max_features=10000)
    # Defining a TF-IDF Vectorizer
    tfidf_vec = TfidfVectorizer(stop_words='english', ngram_range=(
        1, 2), tokenizer=tokenize_and_lemmatize, max_features=10000, use_idf=True)

    mb = MultiLabelBinarizer()
    y = mb.fit_transform(
        employees['feedback_sentiment'].dropna().str.split(', '))
    print(y)
    print(mb.classes_)

    X_train, X_test, y_train, y_test = train_test_split(
        employees['feedback_clean'], y, test_size=0.2, random_state=55)

    # Tf-Idf transformation
    xtrain_tfidf = tfidf_vec.fit_transform(X_train)
    xtest_tfidf = tfidf_vec.transform(X_test)
    xtrain_tfidf.shape
    # Count Vectorizer transformation
    xtrain_cv = count_vec.fit_transform(X_train)
    xtest_cv = count_vec.transform(X_test)
    # Optimized Linear SVC Model
    linear_svc = LinearSVC()
    Grid_linear_svc = LinearSVC(C=10, penalty='l2')
    ovr = OneVsRestClassifier(linear_svc)
    ovr.fit(xtrain_tfidf, y_train)
    y_pred = ovr.predict(xtest_tfidf)

    if request.method == 'POST':
        message = request.form['message']
        #data = [message]
        text = clean_text(message)
        text_vec = tfidf_vec.transform([text])
        y_pred = ovr.predict(text_vec)
        my_prediction = mb.inverse_transform(y_pred)
    return render_template('result.html', prediction=my_prediction)


if __name__ == '__main__':
    app.run(debug=True)
