

import React, { Component } from 'react';
import {} from 'react-native';

const images = [
    
    {key:'menu',
    imageLandscape: require('./images/menu_landscape.png'),
    imagePortrait: require('./images/menu_portrait.png')
    },
    {key:'grass',
    imageLandscape: require('./images/grass.png'),
    imagePortrait: require('./images/grass.png')
    },
    {key:'cog',
    imageLandscape: require('./images/cog.png'),
    imagePortrait: require('./images/cog.png')
    },
    {key:'pause',
    imageLandscape: require('./images/pause.png'),
    imagePortrait: require('./images/pause.png')
    },
    {key:'chibiox',
    imageLandscape: require('./images/chibiox.png'),
    imagePortrait: require('./images/chibiox.png')
    },
    {key:'chibihonor',
    imageLandscape: require('./images/chibihonor.png'),
    imagePortrait: require('./images/chibihonor.png')
    },
    {key:'alchemists',
    imageLandscape: require('./images/alchemists.png'),
    imagePortrait: require('./images/alchemists.png')
    },
    {key:'blacksmiths',
    imageLandscape: require('./images/blacksmiths.png'),
    imagePortrait: require('./images/blacksmiths.png')
    },
    {key:'brewers',
    imageLandscape: require('./images/brewers.png'),
    imagePortrait: require('./images/brewers.png')
    },
    {key:'butchers',
    imageLandscape: require('./images/butchers.png'),
    imagePortrait: require('./images/butchers.png')
    },
    {key:'engineers',
    imageLandscape: require('./images/engineers.png'),
    imagePortrait: require('./images/engineers.png')
    },
    {key:'farmers',
    imageLandscape: require('./images/farmers.png'),
    imagePortrait: require('./images/farmers.png')
    },
    {key:'fishermen',
    imageLandscape: require('./images/fishermen.png'),
    imagePortrait: require('./images/fishermen.png')
    },
    {key:'hunters',
    imageLandscape: require('./images/hunters.png'),
    imagePortrait: require('./images/hunters.png')
    },
    {key:'masons',
    imageLandscape: require('./images/masons.png'),
    imagePortrait: require('./images/masons.png')
    },
    {key:'morticians',
    imageLandscape: require('./images/morticians.png'),
    imagePortrait: require('./images/morticians.png')
    },
    {key:'union',
    imageLandscape: require('./images/union.png'),
    imagePortrait: require('./images/union.png')
    },

];

  

export const  getLoadedImage = (keyName,orientation) => {
    for (var i=0; i < images.length; i++) {
        if (images[i].key===keyName) {
            if (orientation==="portrait") {
                return images[i].imagePortrait;
            }
            else if (orientation==="landscape") {
                return images[i].imageLandscape;
            }
            
        }
    }
    return null;   
};

