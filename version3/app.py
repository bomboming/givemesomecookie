# from flask import Flask, render_template
# from pymongo import MongoClient
# import requests
# from bs4 import BeautifulSoup
#
# app = Flask(__name__)
#
# client = MongoClient('15.165.237.77', 27017, username="test", password="test")
# db = client.db_11days
#
# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# data = requests.get('http://www.baskinrobbins.co.kr/menu/list.php?top=A', headers=headers)
#
# soup = BeautifulSoup(data.text, 'html.parser')
#
# rank_trs = soup.select('#slider > div > ul > li')
# # 실시간 인기순위 스크래핑
# doc = []
# for rank_tr in rank_trs:
#     ranks = rank_tr.select_one('a > div > strong').text
#     names = rank_tr.select_one('a > span').text
#
#     dic = {'ranks': ranks,
#            'names': names}
#     doc.append(dic)
#
#
# @app.route('/')
# def main():
#     # 스크래핑 값과 영양성분 넘겨주기
#     nutrition = list(db.nutrition.find({}, {"_id": False}))
#     result = list(db.result.find({}, {"_id": False}))
#     return render_template("index.html", docs=doc, nutritions=nutrition, saving_results=result)
#
# if __name__ == '__main__':
#     app.run('0.0.0.0', port=5000, debug=True)
