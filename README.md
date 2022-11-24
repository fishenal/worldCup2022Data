# WorldCup2022Data
Qatar world cup 2022 data from FIFA official site

# Note
- rawData/: raw data from FIFA official site API
- worldcup.json: combined rawData
- solvedData/: data solved by this script
  - averageData.json
  - maxMinData.json highest/shortest, etc.
  - squadsData.json fine data to read from rawData
- index.js: node.js script to calculate teams; average height/weight/age, etc.

# Run
```javascript
npm run app // or node ./index.js
```

# Team average data calculate by this script
- [Visit Here / Docs folder](docs/index.md)

- [https://fishenal.github.io/worldCup2022Data/](https://fishenal.github.io/worldCup2022Data/)

# 32 Team Squads Data with fine page display
- [HTML page(without image)](https://fishenal.github.io/worldCup2022Data/docs/all_players.html)
- [HTML page(with image)](https://fishenal.github.io/worldCup2022Data/docs/all_players_with_image.html)
  - *WARNING: make sure using lastest version browser, otherwise it maybe cause your computer crash.
  - Capacity Check here: https://caniuse.com/loading-lazy-attr
