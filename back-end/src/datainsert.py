from asyncio.windows_events import NULL
from itertools import count
from neo4j import GraphDatabase
import pandas as pd

dic_list = [{'A': {'a1': 32, 'a2': 15}}, {'B':{'b1': 45, 'b2': 91, 'b3': 11, 'b4': 19}}, {'C':{'c1': 21, 'c2': 33, 'c3': 45}}]

for i in dic_list:
  for j in i.values():
    weight_max = max(j.values())
    for k in j:
      j[k] = round(j[k] / weight_max, 3)

def add_context(tx, title, tag, weight):
  tx.run("MERGE (a:Tag {title: $title, tag: $tag, weight: $weight}) ", title=title, tag=tag, weight=weight)

def add_tag(tx):
  tx.run("MATCH (a:Tag) "
  "UNWIND a.weight as w " 
  "UNWIND a.title as k "
  "MERGE (b:Context {title:k}) " 
  "MERGE (a)<-[r:Contain {weight:w}]-(b) ")

greeter = GraphDatabase.driver("bolt://localhost:7687", auth=("pgrgrgrgr", "ossptest"))

with greeter.session() as session:
  for dic in dic_list:
    for key in dic:
      for i in range(len(dic[key].values())):
        session.write_transaction(add_context, title = key, tag = list(dic[key])[i], weight = list(dic[key].values())[i])
  session.write_transaction(add_tag)