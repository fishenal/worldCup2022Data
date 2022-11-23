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

// getSquadByTeamId('43922');
fs.readFile("./worldcup.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    const teams = JSON.parse(jsonString);
    const averageData = {};
    teams.forEach(item => {
        let totalHeight = 0;
        let totalWeight = 0;
        let totalAge = 0;
        let playerNum = item.Players.length;
        item.Players.forEach((player) => {
            totalHeight += player.Height;
            totalWeight += player.Weight;
            totalAge += getAge(player.BirthDate);
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
    console.log("Average data:", averageData);
    console.log('%c [ sortByHeight ]-54', 'font-size:13px; background:pink; color:#bf2c9f;', sortByHeight)
    console.log('%c [ sortByWeight ]-58', 'font-size:13px; background:pink; color:#bf2c9f;', sortByWeight)
    console.log('%c [ sortByAge ]-77', 'font-size:13px; background:pink; color:#bf2c9f;', sortByAge)
});