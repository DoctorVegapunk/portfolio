from flask import Flask,send_file,jsonify
import requests
import json
import urllib.parse

app = Flask(__name__)

def get_chapters(manga_name):
    filename = 'websites/manga reader.json'
    with open(filename) as f:
        data = json.load(f)
    manga_link = data[manga_name]["link"]
    url = f'http://127.0.0.1:9080/crawl.json?spider_name=get_chapters&url={manga_link}'
    response = requests.get(url)
    chapter_list = response.json()
    return chapter_list["items"],200

@app.get('/mangareader')
def get_mangas_list():
    filename = 'websites/manga reader.json'
    return send_file(filename, mimetype='application/json'),200

@app.get('/mangareader/<string:manga_name>')
def get_manga_chapter_list(manga_name):
    chapters = get_chapters(manga_name)
    return jsonify(chapters),200

@app.get('/mangareader/<string:manga_name>/download/all')
def get_manga_download_list(manga_name):
    chapters = get_chapters(manga_name)
    download_list = []
    for chapter in chapters:
        title = chapter["title"]
        link = chapter["link"]
        encoded_link = '{"url"%3A"' + urllib.parse.quote( link ) + '"}'
        url  =f'http://127.0.0.1:9080/crawl.json?spider_name=get_images&crawl_args={encoded_link}&start_requests=True'
        response = requests.get(url)
        chapter_list_response = response.json()
        chapter_list = {
            "title":title,
            "images":chapter_list_response["items"]
        }
        download_list.append(chapter_list)
    return jsonify(download_list),200
    
@app.get('/mangareader/<string:manga_name>/download/<string:chapter_title>')
def get_chapter_download_list(manga_name,chapter_title):
    chapters = get_chapters(manga_name)
    for chapter in chapters:
        if chapter["title"] == chapter_title:
            link = chapter["link"]
            encoded_link = '{"url"%3A"' + urllib.parse.quote( link ) + '"}'
            url  =f'http://127.0.0.1:9080/crawl.json?spider_name=get_images&crawl_args={encoded_link}&start_requests=True'
            response = requests.get(url)     
            chapter_list_response = response.json()
            print(chapter_list_response)
            chapter_list = {
                "title":chapter["title"] ,
                "images":chapter_list_response["items"]
            }
            return jsonify(chapter_list),200
    return "Chapter not found",400