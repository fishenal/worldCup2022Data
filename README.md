# WorldCup2022Data
Qatar world cup 2022 datas from FIFA official site

# Note
- rawData: raw data from FIFA official site API
- worldcup.json: combine rawData together
- index.js: node.js script to calculate teams; average height/weight/age

# Run
```javascript
npm run app // or node ./index.js
```

# Team average data calculate by this script
## 32 Teams Avarage Data
```javascript
{
  ARG: {
    averageHeight: '178.92',
    averageWeight: '76.04',
    averageAge: '27.77'
  },
  AUS: {
    averageHeight: '180.96',
    averageWeight: '77.08',
    averageAge: '27.15'
  },
  BEL: {
    averageHeight: '184.65',
    averageWeight: '78.46',
    averageAge: '27.81'
  },
  BRA: {
    averageHeight: '180.77',
    averageWeight: '74.85',
    averageAge: '27.88'
  },
  CAN: {
    averageHeight: '181.96',
    averageWeight: '78.15',
    averageAge: '26.92'
  },
  CMR: {
    averageHeight: '181.65',
    averageWeight: '76.19',
    averageAge: '26.31'
  },
  CRC: {
    averageHeight: '181.69',
    averageWeight: '76.92',
    averageAge: '27.15'
  },
  CRO: {
    averageHeight: '184.54',
    averageWeight: '77.81',
    averageAge: '27.38'
  },
  DEN: {
    averageHeight: '186.12',
    averageWeight: '82.00',
    averageAge: '27.15'
  },
  ECU: {
    averageHeight: '180.50',
    averageWeight: '77.54',
    averageAge: '25.62'
  },
  ENG: {
    averageHeight: '182.31',
    averageWeight: '76.81',
    averageAge: '26.46'
  },
  ESP: {
    averageHeight: '181.08',
    averageWeight: '77.50',
    averageAge: '25.35'
  },
  FRA: {
    averageHeight: '185.46',
    averageWeight: '82.54',
    averageAge: '26.54'
  },
  GER: {
    averageHeight: '184.73',
    averageWeight: '80.04',
    averageAge: '26.77'
  },
  GHA: {
    averageHeight: '179.46',
    averageWeight: '75.31',
    averageAge: '24.73'
  },
  IRN: {
    averageHeight: '183.72',
    averageWeight: '79.00',
    averageAge: '28.92'
  },
  JPN: {
    averageHeight: '179.88',
    averageWeight: '74.58',
    averageAge: '27.77'
  },
  KOR: {
    averageHeight: '181.12',
    averageWeight: '73.62',
    averageAge: '27.77'
  },
  KSA: {
    averageHeight: '179.04',
    averageWeight: '72.85',
    averageAge: '27.38'
  },
  MAR: {
    averageHeight: '183.00',
    averageWeight: '74.69',
    averageAge: '26.19'
  },
  MEX: {
    averageHeight: '178.81',
    averageWeight: '74.12',
    averageAge: '28.50'
  },
  NED: {
    averageHeight: '183.96',
    averageWeight: '77.31',
    averageAge: '26.62'
  },
  POL: {
    averageHeight: '184.04',
    averageWeight: '77.31',
    averageAge: '27.04'
  },
  POR: {
    averageHeight: '182.65',
    averageWeight: '75.46',
    averageAge: '26.85'
  },
  QAT: {
    averageHeight: '180.08',
    averageWeight: '73.65',
    averageAge: '26.96'
  },
  SEN: {
    averageHeight: '184.54',
    averageWeight: '75.77',
    averageAge: '25.92'
  },
  SRB: {
    averageHeight: '187.19',
    averageWeight: '78.46',
    averageAge: '26.88'
  },
  SUI: {
    averageHeight: '183.62',
    averageWeight: '78.35',
    averageAge: '27.00'
  },
  TUN: {
    averageHeight: '182.69',
    averageWeight: '76.96',
    averageAge: '27.92'
  },
  URU: {
    averageHeight: '181.50',
    averageWeight: '75.69',
    averageAge: '27.81'
  },
  USA: {
    averageHeight: '182.00',
    averageWeight: '76.88',
    averageAge: '25.15'
  },
  WAL: {
    averageHeight: '181.81',
    averageWeight: '75.54',
    averageAge: '26.42'
  }
}
```

## Average Data Sorted
```javascript
[ sortByHeight ]: [
  [ 'MEX', '178.81' ],
  [ 'ARG', '178.92' ],
  [ 'KSA', '179.04' ],
  [ 'GHA', '179.46' ],
  [ 'JPN', '179.88' ],
  [ 'QAT', '180.08' ],
  [ 'ECU', '180.50' ],
  [ 'BRA', '180.77' ],
  [ 'AUS', '180.96' ],
  [ 'ESP', '181.08' ],
  [ 'KOR', '181.12' ],
  [ 'URU', '181.50' ],
  [ 'CMR', '181.65' ],
  [ 'CRC', '181.69' ],
  [ 'WAL', '181.81' ],
  [ 'CAN', '181.96' ],
  [ 'USA', '182.00' ],
  [ 'ENG', '182.31' ],
  [ 'POR', '182.65' ],
  [ 'TUN', '182.69' ],
  [ 'MAR', '183.00' ],
  [ 'SUI', '183.62' ],
  [ 'IRN', '183.72' ],
  [ 'NED', '183.96' ],
  [ 'POL', '184.04' ],
  [ 'CRO', '184.54' ],
  [ 'SEN', '184.54' ],
  [ 'BEL', '184.65' ],
  [ 'GER', '184.73' ],
  [ 'FRA', '185.46' ],
  [ 'DEN', '186.12' ],
  [ 'SRB', '187.19' ]
]
[ sortByWeight ]: [
  [ 'KSA', '72.85' ],
  [ 'KOR', '73.62' ],
  [ 'QAT', '73.65' ],
  [ 'MEX', '74.12' ],
  [ 'JPN', '74.58' ],
  [ 'MAR', '74.69' ],
  [ 'BRA', '74.85' ],
  [ 'GHA', '75.31' ],
  [ 'POR', '75.46' ],
  [ 'WAL', '75.54' ],
  [ 'URU', '75.69' ],
  [ 'SEN', '75.77' ],
  [ 'ARG', '76.04' ],
  [ 'CMR', '76.19' ],
  [ 'ENG', '76.81' ],
  [ 'USA', '76.88' ],
  [ 'CRC', '76.92' ],
  [ 'TUN', '76.96' ],
  [ 'AUS', '77.08' ],
  [ 'NED', '77.31' ],
  [ 'POL', '77.31' ],
  [ 'ESP', '77.50' ],
  [ 'ECU', '77.54' ],
  [ 'CRO', '77.81' ],
  [ 'CAN', '78.15' ],
  [ 'SUI', '78.35' ],
  [ 'BEL', '78.46' ],
  [ 'SRB', '78.46' ],
  [ 'IRN', '79.00' ],
  [ 'GER', '80.04' ],
  [ 'DEN', '82.00' ],
  [ 'FRA', '82.54' ]
]
[ sortByAge ]: [
  [ 'GHA', '24.73' ],
  [ 'USA', '25.15' ],
  [ 'ESP', '25.35' ],
  [ 'ECU', '25.62' ],
  [ 'SEN', '25.92' ],
  [ 'MAR', '26.19' ],
  [ 'CMR', '26.31' ],
  [ 'WAL', '26.42' ],
  [ 'ENG', '26.46' ],
  [ 'FRA', '26.54' ],
  [ 'NED', '26.62' ],
  [ 'GER', '26.77' ],
  [ 'POR', '26.85' ],
  [ 'SRB', '26.88' ],
  [ 'CAN', '26.92' ],
  [ 'QAT', '26.96' ],
  [ 'SUI', '27.00' ],
  [ 'POL', '27.04' ],
  [ 'AUS', '27.15' ],
  [ 'CRC', '27.15' ],
  [ 'DEN', '27.15' ],
  [ 'CRO', '27.38' ],
  [ 'KSA', '27.38' ],
  [ 'ARG', '27.77' ],
  [ 'JPN', '27.77' ],
  [ 'KOR', '27.77' ],
  [ 'BEL', '27.81' ],
  [ 'URU', '27.81' ],
  [ 'BRA', '27.88' ],
  [ 'TUN', '27.92' ],
  [ 'MEX', '28.50' ],
  [ 'IRN', '28.92' ]
]
```
## Max/Min players Data
```javascript
EdgePlayersData: {
  maxHeight: [
    {
      position: 'Goalkeeper',
      birthDate: '1994-04-07T00:00:00Z',
      jerseyNum: 23,
      name: 'Andries NOPPERT',
      picture: 'https://digitalhub.fifa.com/transform/da635e9a-bcf8-4d17-8213-0175293efe7c/1442167721',
      weight: 78,
      height: 203,
      country: 'NED'
    }
  ],
  minHeight: [
    {
      position: 'Midfielder',
      birthDate: '1997-10-30T00:00:00Z',
      jerseyNum: 13,
      name: 'Ilias CHAIR',
      picture: 'https://digitalhub.fifa.com/transform/02b330d8-ee72-471a-b822-eec280201d93/Morocco-Portraits-FIFA-World-Cup-Qatar-2022',
      weight: 64,
      height: 164,
      country: 'MAR'
    }
  ],
  minWeight: [
    {
      position: 'Forward',
      birthDate: '1995-10-18T00:00:00Z',
      jerseyNum: 11,
      name: 'Christian BASSOGOG',
      picture: 'https://digitalhub.fifa.com/transform/455f54f5-80f0-495c-bb03-5a4fdf188706/1443092549',
      weight: 58,
      height: 178,
      country: 'CMR'
    },
    {
      position: 'Midfielder',
      birthDate: '1999-05-10T00:00:00Z',
      jerseyNum: 19,
      name: 'Sebastian SZYMANSKI',
      picture: 'https://digitalhub.fifa.com/transform/46aa0a38-2fd4-4128-a3cf-07b65c3b1ddd/1442528061',
      weight: 58,
      height: 174,
      country: 'POL'
    }
  ],
  maxWeight: [
    {
      position: 'Forward',
      birthDate: '1993-05-13T00:00:00Z',
      jerseyNum: 9,
      name: 'Romelu LUKAKU',
      picture: 'https://digitalhub.fifa.com/transform/e637e01c-e572-4184-846c-88442174fa7e/1442831418',
      weight: 103,
      height: 190,
      country: 'BEL'
    },
    {
      position: 'Defender',
      birthDate: '1988-01-01T00:00:00Z',
      jerseyNum: 19,
      name: 'Kendall WASTON',
      picture: 'https://digitalhub.fifa.com/transform/51107113-925f-45cb-bea3-1e3fcc8022a6/1442776008',
      weight: 103,
      height: 196,
      country: 'CRC'
    }
  ],
  minAge: [
    {
      position: 'Forward',
      birthDate: '2004-09-15T00:00:00Z',
      jerseyNum: 21,
      name: 'Garang KUOL',
      picture: 'https://digitalhub.fifa.com/transform/f9d1ba76-fd8b-4c99-9b65-d89693f1374b/Australia-Portraits-FIFA-World-Cup-Qatar-2022',
      weight: 68,
      height: 175,
      country: 'AUS'
    },
    {
      position: 'Midfielder',
      birthDate: '2004-06-15T00:00:00Z',
      jerseyNum: 9,
      name: 'Jewison BENNETTE',
      picture: 'https://digitalhub.fifa.com/transform/2c407cb1-8c87-48a7-a447-8dc5a491903c/1442776774',
      weight: 65,
      height: 173,
      country: 'CRC'
    },
    {
      position: 'Midfielder',
      birthDate: '2004-08-05T00:00:00Z',
      jerseyNum: 9,
      name: 'GAVI',
      picture: 'https://digitalhub.fifa.com/transform/3accf767-b78f-4bf4-87f8-25ab808366c4/1442551912',
      weight: 70,
      height: 173,
      country: 'ESP'
    },
    {
      position: 'Forward',
      birthDate: '2004-11-20T00:00:00Z',
      jerseyNum: 26,
      name: 'Youssoufa MOUKOKO',
      picture: 'https://digitalhub.fifa.com/transform/35376ae6-3e53-4ded-bb6f-74781cf6fd2c/1442303673',
      weight: 72,
      height: 179,
      country: 'GER'
    },
    {
      position: 'Midfielder',
      birthDate: '2004-03-08T00:00:00Z',
      jerseyNum: 7,
      name: 'Abdul Fatawu ISSAHAKU',
      picture: 'https://digitalhub.fifa.com/transform/a1170cda-d5bd-4aed-8431-689b64d2cecc/1443098323',
      weight: 73,
      height: 177,
      country: 'GHA'
    },
    {
      position: 'Midfielder',
      birthDate: '2004-05-10T00:00:00Z',
      jerseyNum: 23,
      name: 'Bilal EL KHANNOUSS',
      picture: 'https://digitalhub.fifa.com/transform/73517f96-2f41-408a-b9c8-a2a85fc315bd/Morocco-Portraits-FIFA-World-Cup-Qatar-2022',
      weight: 70,
      height: 180,
      country: 'MAR'
    }
  ],
  maxAge: [
    {
      position: 'Goalkeeper',
      birthDate: '1982-09-18T00:00:00Z',
      jerseyNum: 1,
      name: 'Alfredo TALAVERA',
      picture: 'https://digitalhub.fifa.com/transform/b5ff7388-c2c0-45e1-ba1c-c1a4a13ab634/1442569767',
      weight: 84,
      height: 188,
      country: 'MEX'
    }
  ]
}
```
