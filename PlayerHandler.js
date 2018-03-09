export const  getPlayerImage = (keyName,orientation,side) => {
    for (var i=0; i < playerImages.length; i++) {
        if (playerImages[i].key===keyName) {
            if (orientation==="portrait") {
                if (side==="front") {
                    return playerImages[i].imageFront;
                }
                else {
                    return playerImages[i].imageBack;
                }
            }
            else if (orientation==="landscape") {
                return playerImages[i].imageLandscape;
            }
            
        }
    }
    return null;   
};


export const getPlayerList = (team) => {
    returnArray=[];
    for (var i=0; i < playerImages.length; i++) {
        if (playerImages[i].team1===team || playerImages[i].team2===team) {
          returnArray.push(playerImages[i]);
        }
    }
    return returnArray;
}

export const swipeCard = (playerList,current,direction) => {
    if (direction==='left') {
        if (current===0) {
            current=playerList.length-1;
            
        }
        else {
            current--;
        }
    }
    else if (direction==='right') {
     
        if (current===playerList.length-1) {
            current=0;
        }
        else {
            current++;
        }
    }
    
    return current;
}


const playerImages = [
    {key:'esters',
    name:'Esters',
    imageLandscape: require('./images/lucky.png'),
    imageFront: require('./images/esters_front.png'),
    imageBack: require('./images/esters_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'tapper',
    name:'Tapper',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/tapper_front.png'),
    imageBack: require('./images/tapper_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'quaff',
    name:'Quaff',
    imageLandscape: require('./images/lucky.png'),
    imageFront: require('./images/quaff_front.png'),
    imageBack: require('./images/quaff_back.png'),
    team1:'brewers',
    team2:''},
    {key:'scum',
    name:'Scum',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/scum_front.png'),
    imageBack: require('./images/scum_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'friday',
    name:'Friday',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/friday_front.png'),
    imageBack: require('./images/friday_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'hooper',
    name:'Hooper',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/hooper_front.png'),
    imageBack: require('./images/hooper_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'lucky',
    name:'Lucky',
    imageLandscape: require('./images/lucky.png'),
    imageFront: require('./images/lucky_front.png'),
    imageBack: require('./images/lucky_back.png'),
    team1:'brewers',
    team2:'masons'
    },
    {key:'mash',
    name:'Mash',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/mash_front.png'),
    imageBack: require('./images/mash_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'pintpot',
    name:'PintPot',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/pintpot_front.png'),
    imageBack: require('./images/pintpot_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'spigot',
    name:'Spigot',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/spigot_front.png'),
    imageBack: require('./images/spigot_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'vetspigot',
    name:'Veteran Spigot',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/vetspigot_front.png'),
    imageBack: require('./images/vetspigot_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'stave',
    name:'Stave',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/stave_front.png'),
    imageBack: require('./images/stave_back.png'),
    team1:'brewers',
    team2:''
    },
    {key:'stoker',
    name:'Stoker',
    imageLandscape: require('./images/menu_portrait.png'),
    imageFront: require('./images/stoker_front.png'),
    imageBack: require('./images/stoker_back.png'),
    team1:'brewers',
    team2:''
    }
];
