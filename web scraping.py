import requests
from bs4 import BeautifulSoup

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('http://www.baskinrobbins.co.kr/menu/list.php?top=A', headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

trs = soup.select('#slider > div > ul > li')

for tr in trs:
    rank_tag = tr.select_one('a > div > strong').text
    name_tag = tr.select_one('a > span').text
    print(rank_tag, name_tag)