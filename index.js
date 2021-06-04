const allowedPlayers = [2,4,6,8,12,24];
//2 players  = 12 teams each
//4 players  = 6 teams each
//6 players  = 4 teams each
//8 players  = 3 teams each
//12 players = 2 teams each
//24 players = 1 teams each

const numberOfTeams = 24;
let numberOfPlayers = 2;
let assingedTeams =[];
///GET THIS FROM AN INPUT//

const players = ['MarcusP','Chris','Chilli','Shelley'];

//const players = ['Player1','Player2','Player3','Player4','Player5','Player6'];
//const players = ['Player1','Player2','Player3','Player4','Player5','Player6','Player7','Player8'];
//const players = ['Player1','Player2','Player3','Player4','Player5','Player6','Player7','Player8','Player9','Player10','Player11','Player12'];

//const players = ['Marcus Powell','Player2','Player3','Player4','Player5','Player6','Player7','Player8','Player9','Player10','Player11','Player12','Player13','Player14','Player15','Player16',
//'Player17','Player18','Player19','Player20','Player21','Player22','Player23','Player24'];


const teams = [
  {
    'name': 'Turkey',
    'css': 'tr'
  },
  {
    'name': 'Italy',
    'css': 'tr'
  },
  {
    'name': 'Wales',
    'css': 'tr'
  },
  {
    'name': 'Switzerland',
    'css': 'tr'
  },
  {
    'name': 'Denmark',
    'css': 'tr'
  },
  {
    'name': 'Finland',
    'css': 'tr'
  },
  {
    'name': 'Belgium',
    'css': 'tr'
  },
  {
    'name': 'Russia',
    'css': ''
  },
  {
    'name': 'Netherlands',
    'css': 'Russia'
  },
  {
    'name': 'Ukraine',
    'css': 'Russia'
  },
  {
    'name': 'Austria',
    'css': 'Russia'
  },
  {
    'name': 'North Macedonia',
    'css': 'Russia'
  },
  {
    'name': 'England',
    'css': 'Russia'
  }, 
  {
    'name': 'Croatia',
    'css': 'Russia'
  }, 
  {
    'name': 'Scotland',
    'css': 'Russia'
  },
  {
    'name': 'Czech Republic',
    'css': 'Russia'
  },
  {
    'name': 'Spain',
    'css': 'Russia'
  },
  {
    'name': 'Sweden',
    'css': 'Russia'
  },
  {
    'name': 'Poland',
    'css': 'pol'
  },
  {
    'name': 'Slovakia',
    'css': 'Russia'
  },
  {
    'name': 'Hungary',
    'css': 'Russia'
  },
  {
    'name': 'Portugal',
    'css': 'Russia'
  },
  {
    'name': 'France',
    'css': 'Russia'
  },
  {
    'name': 'Germany',
    'css': 'Russia'
  },

]



/*const teams = ['Turkey','Italy','Wales','Switzerland',
'Denmark','Finland','Belgium','Russia',
'Netherlands','Ukraine','Austria','North Macedonia',
'England','Croatia','Scotland','Czech Republic',
'Spain','Sweden','Poland','Slovakia',
'Hungary','Portugal','France','Germany'];
*/



//RANDOMISE TEAMS//
let shuffle = teams
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)


//SPLIT TEAMS IF NUMBER OF PLAYERS NOT THE FULL AMOUNT//
const chunk = (arr, size) =>
   Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
);




const getSplitSize = function (noOfPlayers) {
  let splitsize;
  if (noOfPlayers ==2 ) {
    splitsize = 12;
  }

  if (noOfPlayers ==4 ) {
    splitsize = 6;
  }

  if (noOfPlayers ==6) {
    splitsize = 4;
  }

  if (noOfPlayers ==8) {
    splitsize = 3;
  }

  if (noOfPlayers ==12) {
    splitsize = 2;
  }

  if (noOfPlayers ==24) {
    splitsize = 1;
  }
  return splitsize;
}



if (allowedPlayers.includes(players.length)) {

 
  let split_teams = chunk(shuffle, getSplitSize(players.length));
  for(let i = 0; i < players.length; i++) {
        let draw = {
          'team': split_teams[i],
          'player': players[i],
        }
        assingedTeams.push(draw);
  }

} else {
  alert('Invalid Number of Player');
}


//Output Data
assingedTeams.forEach(function (arrayItem) {
  var x = arrayItem.prop1 + 2;
  console.log(arrayItem.player);

  arrayItem.team.forEach((element, index, array) => {
    console.log(element.name);
  });

});

console.log(assingedTeams);