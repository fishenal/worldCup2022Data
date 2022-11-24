const axios = require('axios');
const fs = require('fs');
const idCompetition = '17';
const idSeason = '255711';
// const teamId = '43922';
// const getTeamUrl = `https://api.fifa.com/api/v3/teams/${teamId}`;

function getSquadByTeamId(teamId) {
    const getSquadUrl = `https://api.fifa.com/api/v3/teams/${teamId}/squad?idCompetition=${idCompetition}&idSeason=${idSeason}`;
    axios.get(getSquadUrl).then(function (res) {
        console.log('%c [ res ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', res)
        // handle success
        const data = JSON.stringify(res.data);
        console.log('%c [ data ]-16', 'font-size:13px; background:pink; color:#bf2c9f;', data)
        fs.writeFileSync('test.json', data, {
            encoding: 'utf8'
        });
    })
    .catch(function (error) {
        // handle error
        console.error(error);
    })
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function shrinkPlayer(player) {
    // console.log('%c [ player ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', player)
    return {
        position: player.PositionLocalized[0].Description,
        birthDate: player.BirthDate,
        jerseyNum: player.JerseyNum,
        name: player.PlayerName[0].Description,
        picture: player.PlayerPicture.PictureUrl,
        weight: player.Weight,
        height: player.Height,
        country: player.IdCountry
    }
}
// getSquadByTeamId('43922');
fs.readFile("./worldcup.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const teams = JSON.parse(jsonString);
    const averageData = {};
    const players = {
        maxHeight: [],
        minHeight: [],
        minWeight: [],
        maxWeight: [],
        minAge: [],
        maxAge: []
    }
    let minHeight = Infinity;
    let maxHeight = 0;
    let minWeight = Infinity;
    let maxWeight = 0;
    let minAge = Infinity;
    let maxAge = 0;

    teams.forEach(item => {
        let totalHeight = 0;
        let totalWeight = 0;
        let totalAge = 0;
        let playerNum = item.Players.length;
        item.Players.forEach((player) => {
            totalHeight += player.Height;
            totalWeight += player.Weight;
            const age = getAge(player.BirthDate);
            totalAge += age;
            if (player.Height >= maxHeight) {
                if (player.Height === maxHeight) {
                    players.maxHeight.push(shrinkPlayer(player))
                } else {
                    maxHeight = player.Height;
                    players.maxHeight = [shrinkPlayer(player)]
                }
            }
            if (player.Height <= minHeight) {
                if (player.Height === minHeight) {
                    players.minHeight.push(shrinkPlayer(player))
                } else {
                    minHeight = player.Height;
                    players.minHeight = [shrinkPlayer(player)]
                }
            }
            if (player.Weight >= maxWeight) {
                if (player.Weight === maxWeight) {
                    players.maxWeight.push(shrinkPlayer(player))
                } else {
                    maxWeight = player.Weight;
                    players.maxWeight = [shrinkPlayer(player)]
                }
            }
            if (player.Weight <= minWeight) {
                if (player.Weight === minWeight) {
                    players.minWeight.push(shrinkPlayer(player))
                } else {
                    minWeight = player.Weight;
                    players.minWeight = [shrinkPlayer(player)]
                }
            }
            if (age >= maxAge) {
                if (age === maxAge) {
                    players.maxAge.push(shrinkPlayer(player))
                } else {
                    maxAge = age;
                    players.maxAge = [shrinkPlayer(player)]
                }
            }
            if (age <= minAge) {
                if (age === minAge) {
                    players.minAge.push(shrinkPlayer(player))
                } else {
                    minAge = age;
                    players.minAge = [shrinkPlayer(player)]
                }
            }
        });
        averageData[item.IdCountry] = {
            averageHeight: (totalHeight / playerNum).toFixed(2),
            averageWeight: (totalWeight / playerNum).toFixed(2),
            averageAge: (totalAge / playerNum).toFixed(2),
        }
    });
    const sortByHeight = [];
    const sortByWeight = [];
    const sortByAge = [];
    for (const v in averageData) {
        sortByHeight.push([v, averageData[v]]);
        sortByWeight.push([v, averageData[v]]);
        sortByAge.push([v, averageData[v]]);
    }

    sortByHeight.sort(function(a, b) {
        return Number(a[1].averageHeight) - Number(b[1].averageHeight);
    });
    sortByWeight.sort(function(a, b) {
        return Number(a[1].averageWeight) - Number(b[1].averageWeight);
    });
    sortByAge.sort(function(a, b) {
        return Number(a[1].averageAge) - Number(b[1].averageAge);
    });
    // console.log("Average data:", averageData);
    console.log("Edge players data:", players);
    // console.log('%c [ sortByHeight ]-54', 'font-size:13px; background:pink; color:#bf2c9f;', sortByHeight)
    // console.log('%c [ sortByWeight ]-58', 'font-size:13px; background:pink; color:#bf2c9f;', sortByWeight)
    // console.log('%c [ sortByAge ]-77', 'font-size:13px; background:pink; color:#bf2c9f;', sortByAge)
});