

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import {isPortrait,isTablet} from './PlatformInfo';
import {getLoadedImage} from './ImageHandler';


export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape', 
      platformType: isTablet() ? 'tablet' : 'landscape',
      };

      
    
     // Add a listener to determine if the orientation of the phone changes
  
    Dimensions.addEventListener('change', () => {
      this.setState({
          orientation: isPortrait() ? 'portrait' : 'landscape',
          platformType: isTablet() ? 'tablet' : 'landscape',
         });
     
  });
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={getLoadedImage('menu',this.state.orientation)} style={{width: '100%', height: '100%'}}>
             <View style={styles.outlinedBox}>
             </View>
            <View style={styles.outlinedBox}>
                <View style={styles.bottomBox}>
                    <View style={styles.outlinedBox}>
                    <View style={styles.outlinedBox2}>
                    <View style={styles.outlinedBox}>
                    <Button
                     title="Teams"
                     onPress={() => this.props.navigation.navigate('Teams')}
                     />
                    </View>
                    <View style={styles.outlinedBox}>
                    <Button
                     title="Game Clock"
                     onPress={() => this.props.navigation.navigate('Clock')}
                     />
                    </View>
                    
                    </View>
                    </View>
                <View style={styles.outlinedBox}>
                </View>
                
            </View>
            </View>
       </ImageBackground >
      </View>
 
        );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: "column",
    position: "absolute",
    top:0,
    left:0,
    right:0,
    bottom:0
  },
  bottomBox: {
      flex:2,
      flexDirection:"row",
 
  },
  outlinedBox: {
    flex: 1
    
    
  },
  outlinedBox: {
    flex: 1,
    justifyContent:'center',
    height:150
  },
  outlinedBox2: {
    flex: 3,
   
    flexDirection: "column"
  }
});
