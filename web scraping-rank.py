import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('http://www.baskinrobbins.co.kr/menu/list.php?top=A', headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

rank_trs = soup.select('#slider > div > ul > li')

for rank_tr in rank_trs:
    rank_tag = rank_tr.select_one('a > div > strong').text
    name_tag = rank_tr.select_one('a > span').text
    print(rank_tag, name_tag)
