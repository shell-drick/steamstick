import csv
import json

games = []

with open('games.csv') as fp:
    reader = csv.reader(fp, delimiter=',')
    for row in reader:
        game_object = {
            "Name": row[0],
            "Id": row[1],
            "has_steamcmd_client": (row[2] == "Yes"),
            "has_steam_client": (row[3] == "Yes"),
            "has_anonymous_login": (row[4] == "Yes"),
            "note": row[5]
        }

        games += [ game_object ]

    print(games)

out_games = list(filter(lambda g : g["has_anonymous_login"], games))

with open('games.json', 'w') as fp:
    fp.write(json.dumps(out_games, indent=4))
