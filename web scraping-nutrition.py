import requests
from bs4 import BeautifulSoup

num = 1
for i in range(1, 5):
    print(num)

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
    data = requests.get(
        f'http://www.baskinrobbins.co.kr/menu/nutrition_new.php?Page={num}&ScProd=&ScNutri=&ScAmount=&top=',
        headers=headers)

    soup = BeautifulSoup(data.text, 'html.parser')

    nutrition_trs = soup.select('#content > div > div > div > table > tbody > tr')

    for nutrition_tr in nutrition_trs:
        cream_tag = nutrition_tr.select_one('td:nth-child(1)').text
        size_tag = nutrition_tr.select_one('td:nth-child(2)').text
        kcal_tag = nutrition_tr.select_one('td:nth-child(3)').text
        sodium_tag = nutrition_tr.select_one('td:nth-child(4)').text
        sugars_tag = nutrition_tr.select_one('td:nth-child(5)').text
        fat_tag = nutrition_tr.select_one('td:nth-child(6)').text
        protein_tag = nutrition_tr.select_one('td:nth-child(7)').text
        caffeine_tag = nutrition_tr.select_one('td:nth-child(8)').text
        contain_tag = nutrition_tr.select_one('td:nth-child(9)').text

        print(cream_tag, size_tag, kcal_tag, sodium_tag, sugars_tag, fat_tag, protein_tag, caffeine_tag, contain_tag)

    num = num + 1
