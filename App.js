import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CardDisplay from './CardDisplay';
import MainMenu from './MainMenu';
import TeamDisplay from './TeamDisplay';
import GameClock from './GameClock';

export default StackNavigator({
  Home: {
    screen: MainMenu
  },
  Teams: { 
    screen:TeamDisplay
  },
  Cards: { 
    screen:CardDisplay
  },
  Clock: { 
    screen:GameClock
  }
},
  {
    initialRouteName: 'Home',
    //Pushes the navigation bar off the top of the screen hiding it
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
        position: 'absolute', 
        backgroundColor: 'transparent', 
        zIndex: 100, top: -50, left: 0, right: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
