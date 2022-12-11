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
from flask import Flask, render_template, url_for, request, jsonify
from flask_cors import CORS
import pickle
import csv
import pandas as pd
# utilities
import re
import numpy as np
# plotting
import seaborn as sns
sns.set_style('white')
import cufflinks as cf
cf.go_offline()
cf.set_config_file(offline=False, world_readable=True)
import plotly
import plotly.express as px
# stopwords
from nltk.corpus import stopwords
stop_words = set(stopwords.words('english'))
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

app = Flask(__name__)
CORS(app)

# Lemmatization process
'''
Words in the third person are changed to first person and verbs in past and future tenses are changed into the present by the
lemmatization process.
'''
lemmatizer = WordNetLemmatizer()
STOPWORDS = set(stopwords.words('english'))
MIN_WORDS = 4
MAX_WORDS = 400
PATTERN_S = re.compile("\'s")  # matches `'s` from text  
PATTERN_RN = re.compile("\\r\\n") #matches `\r` and `\n`
PATTERN_PUNC = re.compile(r"[^\w\s]") # matches all non 0-9 A-z whitespace 

def clean_text3(text):
    """
    Series of cleaning. String to lower case, remove non words characters and numbers.
        text (str): input text
    return (str): modified initial text
    """
    text = text.lower()  # lowercase text
    text = re.sub(PATTERN_S, ' ', text)
    text = re.sub(PATTERN_RN, ' ', text)
    text = re.sub(PATTERN_PUNC, ' ', text)
    return text
def tokenizer(sentence, min_words=MIN_WORDS, max_words=MAX_WORDS, stopwords=STOPWORDS, lemmatize=True):
    """
    Lemmatize, tokenize, crop and remove stop words.
    """
    if lemmatize:
        stemmer = WordNetLemmatizer()
        tokens = [stemmer.lemmatize(w) for w in word_tokenize(sentence)]
    else:
        tokens = [w for w in word_tokenize(sentence)]
    token = [w for w in tokens if (len(w) > min_words and len(w) < max_words
                                                        and w not in stopwords)]
    return tokens
def clean_sentences(df):
    """
    Remove irrelavant characters (in new column clean_sentence).
    Lemmatize, tokenize words into list of words (in new column tok_lem_sentence).
    """
    print('Cleaning sentences...')
    df['clean_sentence'] = df['sentence'].apply(clean_text3)
    df['tok_lem_sentence'] = df['clean_sentence'].apply(
        lambda x: tokenizer(x, min_words=MIN_WORDS, max_words=MAX_WORDS, stopwords=STOPWORDS, lemmatize=True))
    return df
def extract_best_indices(m, topk, mask=None):
    """
    Use sum of the cosine distance over all tokens.
    m (np.array): cos matrix of shape (nb_in_tokens, nb_dict_tokens)
    topk (int): number of indices to return (from high to lowest in order)
    """
    # return the sum on all tokens of cosinus for each sentence
    if len(m.shape) > 1:
        cos_sim = np.mean(m, axis=0) 
    else: 
        cos_sim = m
    index = np.argsort(cos_sim)[::-1] # from highest idx to smallest score 
    if mask is not None:
        assert mask.shape == m.shape
        mask = mask[index]
    else:
        mask = np.ones(len(cos_sim))
    mask = np.logical_or(cos_sim[index] != 0, mask) #eliminate 0 cosine distance
    best_index = index[mask][:topk]  
    return best_index


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
    # Data Cleaning
def clean_textt(text):
    # remove everything except alphabets
    text = re.sub("[^a-zA-Z]", " ", text)
    # remove whitespaces
    text = ' '.join(text.split())
    text = text.lower()
    
    return text

def remove_stopwords(text):
    no_stopword_text = [w for w in text.split() if not w in stop_words]
    return ' '.join(no_stopword_text)

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
    ovr = OneVsRestClassifier(Grid_linear_svc)
    ovr.fit(xtrain_tfidf, y_train)
    y_pred = ovr.predict(xtest_tfidf)

    if request.method == 'POST':
        formData = request.json #request.form['formData'] #request.get_json() works request.get_json(silent=True)
        #data = [message]
        text = clean_text(formData)
        text_vec = tfidf_vec.transform([text])
        y_pred = ovr.predict(text_vec)
        Prediction = mb.inverse_transform(y_pred)
    # return render_template('result.html', prediction=my_prediction)
    # return jsonify ({"prediction": my_prediction})
    # return Prediction
        response = jsonify({
        "statusCode": 200,
        "status": "Prediction made",
        "result": "Prediction: " + str(Prediction)
        })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/plot')
def plot_test():
    df = pd.DataFrame({
        "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],
        "Amount": [4, 1, 2, 2, 4, 5],
        "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]
    })
    fig = px.bar(df, x="Fruit", y="Amount", color="City", barmode="group")
    graphJSON = plotly.io.to_json(fig, pretty=True)
    return graphJSON        
@app.route('/classify', methods=['POST'])
def classify():
    skills_df =pd.read_csv('Skills.csv')
    #Dropping irrelevent columns
    columns_to_delete2 = ['O*NET-SOC Code','Commodity Code']
    skills_df.drop(columns_to_delete2, inplace=True, axis=1)
    #Removing software from last sentence
    skills_df['Commodity Title']=skills_df['Commodity Title'].str.rsplit(' ',1).str[0]
    # creating clean text feature
    features = ['Title', 'Commodity Title','Example']
    for feature in features:
        skills_df['Clean_' + feature] = skills_df[feature].apply(clean_textt)
    skills_df['soup'] = skills_df['Clean_Title'] + skills_df['Clean_Commodity Title'] + skills_df['Clean_Example']
    skills_df['soup'] = skills_df['soup'].apply(lambda x: remove_stopwords(x))
    # Defining a Count Vectorizer object
    count_vec2 = CountVectorizer(stop_words='english', max_features=10000)
    # Defining a TF-IDF Vectorizer
    tfidf_vec2 = TfidfVectorizer(stop_words='english', ngram_range=(1, 2), tokenizer=tokenize_and_lemmatize, max_features=10000, use_idf=True)
    mb2 = MultiLabelBinarizer()
    y2=mb2.fit_transform(skills_df['Commodity Title'].dropna().str.split(', ')) 
    print (y2)
    print(mb2.classes_ )
    # Basic validation: splitting the data 80-20 train/test
    X_train2, X_test2, y_train2, y_test2 = train_test_split(skills_df['soup'], y2, test_size=0.2, random_state=55)
    # Tf-Idf transformation 
    xtrain_tfidf2 = tfidf_vec2.fit_transform(X_train2)
    xtest_tfidf2 = tfidf_vec2.transform(X_test2)
    xtrain_tfidf2.shape
    # Count Vectorizer transformation
    xtrain_cv2 = count_vec2.fit_transform(X_train2)
    xtest_cv2 = count_vec2.transform(X_test2)
    linear_svc2 = LinearSVC(C=10, penalty='l2')
    oneVsRest_svc2 = OneVsRestClassifier(linear_svc2)
    oneVsRest_svc2.fit(xtrain_tfidf2, y_train2)
    y_pred2 = oneVsRest_svc2.predict(xtest_tfidf2)
    # Inference funct to handle new data that will come in the future
    if request.method == 'POST':
        formData2 = request.json #request.form['formData'] #request.get_json() works request.get_json(silent=True)
        #data = [message]
        text2 = clean_text(formData2)
        text_vec2 = tfidf_vec2.transform([text2])
        y_pred2 = oneVsRest_svc2.predict(text_vec2)
        Prediction2 = mb2.inverse_transform(y_pred2)
    # return render_template('result.html', prediction=my_prediction)
    # return jsonify ({"prediction": my_prediction})
    # return Prediction
        response2 = jsonify({
        "statusCode": 200,
        "status": "Prediction made",
        "result2": "Prediction: " + str(Prediction2)
        })
    response2.headers.add('Access-Control-Allow-Origin', '*')
    return response2
@app.route('/recommend', methods=['POST'])
def recommend():
    recommender_df = pd.read_csv('Skills.csv')
    #Removing software from last sentence
    recommender_df['Commodity Title']=recommender_df['Commodity Title'].str.rsplit(' ',1).str[0]
    #dropping irrelevant columns
    columns_to_delete3 = ['O*NET-SOC Code','Commodity Code','Hot Technology']
    recommender_df.drop(columns_to_delete3, inplace=True, axis=1)
    recommender_df.rename(columns={'Commodity Title':'sentence'}, inplace=True)
    recommender_df = clean_sentences(recommender_df)
    if request.method == 'POST':
        formData3 = request.json #request.form['formData'] #request.get_json() works request.get_json(silent=True)
        # Adapt stop words
        token_stop = tokenizer(' '.join(STOPWORDS), lemmatize=False)

        # Fit TFIDF
        vectorizer = TfidfVectorizer(stop_words=token_stop, tokenizer=tokenizer) 
        tfidf_mat = vectorizer.fit_transform(recommender_df['sentence'].values) # -> (num_sentences, num_vocabulary)
        tfidf_mat.shape
        tokens = [str(tok) for tok in tokenizer(formData3)]
        vec = vectorizer.transform(tokens)
        # Create list with similarity between query and dataset
        mat = cosine_similarity(vec, tfidf_mat)
        # Best cosine distance for each token independantly
        print(mat.shape)
        best_index = extract_best_indices(mat, topk=10)
        Prediction3 = recommender_df[['Title', 'Example', 'sentence']].iloc[best_index]
        response3 = jsonify({
        "statusCode": 200,
        "status": "Prediction made",
        "result": "Prediction: " + str(Prediction3)
        })
    response3.headers.add('Access-Control-Allow-Origin', '*')
    return response3
    

if __name__ == '__main__':
    app.run(debug=True)
