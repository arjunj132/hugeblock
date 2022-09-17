from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests

app = Flask('app')


@app.route('/skipad.user.js')
def hello_world():
    URL = "https://greasyfork.org/en/scripts/386925-youtube-ad-cleaner-include-non-skippable-ads-works/code"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    return str(soup.find_all("div", class_="code-container")[0].text)


app.run(host='0.0.0.0', port=8080)
