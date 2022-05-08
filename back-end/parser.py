from difflib import context_diff
from konlpy.tag import Kkma
from konlpy.tag import Komoran
from konlpy.tag import Hannanum
from konlpy.tag import Okt
import re

def parse_context(context_list):
    komoran = Komoran()
    hangeul = re.compile('[^ ㄱ-ㅣ가-힣|]+')
    context_list = hangeul.sub("",context_list)

    context_list = [word for word in komoran.nouns(context_list) if len(word) > 1]
    context_list = sorted(context_list, key=lambda x: (-context_list.count(x), context_list.index(x)))
    return context_list