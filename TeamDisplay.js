

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
  FlatList,ImageBackground
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import {isPortrait,isTablet} from './PlatformInfo';
import {getLoadedImage} from './ImageHandler';

export default class TeamDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape', 
      platformType: isTablet() ? 'tablet' : 'landscape',
      teamName:'',
      };
    
      
     // Add a listener to determine if the orientation of the phone changes
  
    Dimensions.addEventListener('change', () => {
      this.setState({
          orientation: isPortrait() ? 'portrait' : 'landscape',
          platformType: isTablet() ? 'tablet' : 'landscape',
         });
  });
  
}

returnLogo = (passedTeam) => {
    return <View style={styles.logoBox}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Cards', {team: passedTeam})}  underlayColor="rgba(0,0,0,0.1)">
                    <Image source={getLoadedImage(passedTeam,this.state.orientation)} style={{height: 100, width: 100}}/>
                </TouchableHighlight >
            </View>;
}

  render() {
    return (
        <View style={styles.container}>
         <View style={styles.outlinedBox}>
         <Text style={styles.titleText}>
           Teams 
           </Text>
         </View>
            <View style={styles.rows}>
                {this.returnLogo('alchemists')}
                {this.returnLogo('blacksmiths')}
                {this.returnLogo('brewers')}
                {this.returnLogo('butchers')}
                {this.returnLogo('engineers')}
                {this.returnLogo('farmers')}
                {this.returnLogo('fishermen')}
                {this.returnLogo('hunters')}
                {this.returnLogo('masons')}
                {this.returnLogo('morticians')}
                {this.returnLogo('union')}
            </View>
         </View>
      );
  
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"white",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor:"white"
  },
  rows: {
    flexWrap:'wrap',
    justifyContent:'space-between', 
    padding:10,
    flex: 6, 
    flexDirection: "row",
    
  },
  rowsText: {
    flex: 1, 
    flexDirection: "row",
  },
  outlinedBox: {
      flex:1,
     alignItems: 'center',
    justifyContent: 'center'
  },
  logoBox: {
    paddingVertical:10
   
},
  oxBox: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
},
  
  textBox: {
    flex:1,
    alignItems:'center',
},
  bottomBox: {
    flex: 7,
},
flatRow: {
    paddingHorizontal:10,
},
titleText: {
    fontSize: 36,
    fontWeight: 'bold'
}
  
});
