

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
  FlatList,
  ImageBackground,
  PanResponder
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import {isPortrait,isTablet} from './PlatformInfo';
import {getLoadedImage} from './ImageHandler';
import {swipeCard,preLoadPlayers,getPlayerImage,getPlayerList,getPlayerWidth,getPlayerHeight} from './PlayerHandler';

export default class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape', 
      platformType: isTablet() ? 'tablet' : 'landscape',
      cardPosition:0,
      cardName:'lucky',
      cardSide:'front',
      swipeLock: false,
      teamName: this.props.navigation.state.params.team,
      };
     // Add a listener to determine if the orientation of the phone changes
  
    Dimensions.addEventListener('change', () => {
      this.setState({
          orientation: isPortrait() ? 'portrait' : 'landscape',
          platformType: isTablet() ? 'tablet' : 'landscape',
         });
     
  });
 
}

componentWillMount() {
    this._panResponder = PanResponder.create({
       
       
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            //Locks out other touch events if swiping
            direction = getDirection(gestureState);
            if (direction!='none') {
                this.setState({
                    swipeLock: false
                  });
                return true;                 
            }
            else {
                return false;
            }
        },
        onPanResponderMove: (evt, gestureState) => {
            if (!this.state.swipeLock) {
            direction = getDirection(gestureState);
              if (direction!='none') {
                this.setState({
                    swipeLock: true
                  });
                card=swipeCard(getPlayerList(this.state.teamName),this.state.cardPosition,direction)
                teamList=getPlayerList(this.state.teamName);
                currentPlayer=teamList[card];
                this.setState({
                  cardPosition: card,
                  cardName: currentPlayer.key,
                  cardSide:'front',
                  swipeEnabled:false
                });
            }
        }
    },
    
       
    });

    teamList=getPlayerList(this.state.teamName);
    currentPlayer=teamList[this.state.cardPosition];
    this.setState({
        cardName:currentPlayer.key
      });

    getDirection = ({ moveX, moveY, dx, dy}) => {
       
       draggedLeft = dx < -30;
       draggedRight = dx > 30;
       if (draggedLeft) return 'left';
       else if (draggedRight) return 'right';
       else return 'none';
      }
      
}



switchSide = () => {
    if (this.state.orientation==="portrait") {
        if (this.state.cardSide==="front") {
            this.setState({
              cardSide:"back"
            });
        }
        else {
            this.setState({
                cardSide:"front"
              });
        }
    }
}

switchPlayer = (playerKey) =>  {
    this.setState({
        cardSide:'front',
        cardName: playerKey
    });
}

_renderPlayerItem = data => {
        return <TouchableHighlight
        underlayColor="rgba(0,0,0,0.2)"
        onPress={()=>this.switchPlayer(data.item.key)}>
        <Text style={styles.flatRow}>{data.item.name}</Text> 
        </TouchableHighlight>;
}

  render() {
    if (this.state.orientation==='portrait') {
    return (
      <View style={styles.container} >
        <View style={styles.topBox}>
        <FlatList horizontal data={getPlayerList(this.state.teamName)} 
        renderItem={this._renderPlayerItem } />
        </View>
        <View style={styles.bottomBox} {...this._panResponder.panHandlers}>
          <TouchableHighlight
            underlayColor="rgba(0,0,0,0.4)"
            onPress={this.switchSide}>
            <ImageBackground source={getPlayerImage(this.state.cardName,this.state.orientation,this.state.cardSide)}
                style={{width: undefined, height: undefined}}
                resizeMode={'stretch'}>
                <View style={{height:'100%'}} >
               
                    <TouchableHighlight
                    underlayColor="rgba(0,0,0,0.4)"
                    onPress={() => this.props.navigation.navigate('Teams')}>
                        <Text style={{textAlign:'right',paddingRight:10,fontSize: 36, color: "white",textShadowColor:"black",textShadowOffset: {width:2,height:2}}}>
                            X 
                        </Text>
                    </TouchableHighlight>
                </View>
              </ImageBackground>  
            </TouchableHighlight>
            </View>
     
        </View>
 
    );
    }
    else {
        return (
            <View style={styles.container} >
               <View style={styles.topBox}>
        <FlatList horizontal data={getPlayerList(this.state.teamName)} 
        renderItem={this._renderPlayerItem } />
        </View>
              <View style={styles.bottomBoxLandscape} {...this._panResponder.panHandlers}>
                <View style={styles.simpleBox}>
                <TouchableHighlight
                  underlayColor="rgba(0,0,0,0.4)"
                  onPress={this.switchSide}>
                  
                <ImageBackground source={getPlayerImage(this.state.cardName,'portrait','front')}
                      style={{width: undefined, height: undefined}}
                      resizeMode={'stretch'}>
                      <View style={{height:'100%'}} >
                          
                      </View>
                    </ImageBackground>  
                </TouchableHighlight>
                </View>
                <View style={styles.simpleBox}>
                <TouchableHighlight
                  underlayColor="rgba(0,0,0,0.4)"
                  onPress={this.switchSide}>
                  
                <ImageBackground source={getPlayerImage(this.state.cardName,'portrait','back')}
                      style={{width: undefined, height: undefined}}
                      resizeMode={'stretch'}>
                      <View style={{height:'100%'}} >
                          <TouchableHighlight
                          underlayColor="rgba(0,0,0,0.1)"
                          onPress={() => this.props.navigation.navigate('Teams')}>
                              <Text style={{textAlign:'right',paddingRight:10,fontSize: 36, color: "white",textShadowColor:"black",textShadowOffset: {width:2,height:2}}}>
                                  X 
                              </Text>
                          </TouchableHighlight>
                      </View>
                    </ImageBackground>  
                </TouchableHighlight>
                </View>
            </View>
            
            </View>
       
              );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: "column",
  
  },
  topBox: {
    height:50,
 
  },
  bottomBox: {
    
    flex: 9,
},
bottomBoxLandscape: {
    flexDirection: "row",
    flex: 9,
    paddingLeft:50,
    paddingRight:50
},
flatRow: {
    padding:15,
},

xBox: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    borderWidth:3
},

outlinedBox2: {
    flex:8,

},
simpleBox: {
    flex:1
}

  
});
