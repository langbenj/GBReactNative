

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
  FlatList,ImageBackground
} from 'react-native';

import Modal from 'react-native-modalbox';
import { StackNavigator } from 'react-navigation';
import {isPortrait,isTablet} from './PlatformInfo';
import {getLoadedImage} from './ImageHandler';

export default class GameClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape', 
      platformType: isTablet() ? 'tablet' : 'landscape',
      teamName:'',
      playerOneTime:2700,
      playerTwoTime:2700,
      playerOneTimeOut:false,
      playerTwoTimeOut:false,
      currentPlayer:'',
      timer:0,
      isOpen: false,
      isDisabled: false,
      };
    
      
     // Add a listener to determine if the orientation of the phone changes
  
    Dimensions.addEventListener('change', () => {
      this.setState({
          orientation: isPortrait() ? 'portrait' : 'landscape',
          platformType: isTablet() ? 'tablet' : 'landscape',
         });
  });
  
}

componentDidMount() {
   this.startTimer();
}

//Not currently being called. Potential memory leak to look into
componentWillUnmount() {
    clearInterval(this.state.timer);
}

startTimer = () => {
        var timerID=setInterval(() =>{ 
           if (this.state.currentPlayer==='player1') {
            this.setState({
                playerOneTime: this.state.playerOneTime-1,
                timer:timerID
            });
            if (this.state.playerOneTime===0) {
                this.setState({
                    playerOneTimeOut: true,
                    playerOneTime:60,
                    currentPlayer:''
                });
            }
           }
           else if (this.state.currentPlayer==='player2'){
            this.setState({
                playerTwoTime: this.state.playerTwoTime-1,
                timer:timerID
            });
            if (this.state.playerTwoTime===0) {
                this.setState({
                    playerTwoTimeOut: true,
                    playerTwoTime:60,
                    currentPlayer:''
                });
            }
           }
           
        }, 1000);
}



clickPlayerOne = () =>  {
    let currPlayer=this.state.currentPlayer==='' ? 'player1' : 'player2'
    this.setState({
        currentPlayer:currPlayer
    });
    if (this.state.playerOneTimeOut) {
        this.setState({
        playerOneTime:60,
    });
    }
}

clickPlayerTwo = () =>  {
    let currPlayer=this.state.currentPlayer==='' ? 'player2' : 'player1'
    
    this.setState({
        currentPlayer:currPlayer
    });
    if (this.state.playerTwoTimeOut) {
        this.setState({
        playerTwoTime:60,
        });
    }
    }

pauseClock = () =>  {
    this.setState({
        currentPlayer:''
    });
}

formatTime = (currentSeconds) =>  {
   if (Number.isInteger(currentSeconds)) {
        minutes=parseInt(currentSeconds/60);
        seconds=currentSeconds%60;
        seconds = seconds<10 ? '0'+seconds : seconds
        remainingTime=minutes+":"+seconds;
    }
    else {
        remainingTime='Number Please!'
    }
    return remainingTime;
}

closeModal = (newTime) =>  {
    this.setState({
        playerOneTime: parseInt(newTime)*60,
        playerTwoTime: parseInt(newTime)*60
    });
    this.refs.modal.close();
    }

  render() {
    return (
        <View style={styles.container}>
        <ImageBackground source={getLoadedImage('grass',this.state.orientation)} style={{width: '100%', height: '100%'}}>    
        <View style={styles.rowContainer}>
                <View style={styles.oneBox}>
                    
                </View>
                <View style={styles.twoBox}>
                <TouchableHighlight
                     underlayColor="rgba(0,0,0,0.4)"
                     onPress={this.clickPlayerOne}>
                    <Image source={getLoadedImage('chibihonor',this.state.orientation)}
                         style={{width: this.state.orientation==='portrait' ? 150 : 100, height: this.state.orientation==='portrait' ? 150 : 100, transform: [{ rotate: '180deg'}]}}/>
                 </TouchableHighlight>
                </View>
                <View style={styles.oneBox}>
                    <View style={styles.xBox}>
                    <TouchableHighlight
                        underlayColor="rgba(0,0,0,0.4)"
                        onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{textAlign:'right',paddingRight:10,fontSize: 36, color: "white",textShadowColor:"black",textShadowOffset: {width:2,height:2}}}>
                                X 
                            </Text>
                    </TouchableHighlight>
                    </View>
                </View>

            </View>
            <View style={styles.rowContainer}>
                <View style={styles.oneBox}>

                </View>
                <View style={styles.threeBox}>
                    <Text style={styles.upsideDownText}>
                        {this.formatTime(this.state.playerOneTime)}
                    </Text>
                </View>
                <View style={styles.oneBox}>
                <View style={styles.settingsBox}>
                    <TouchableHighlight
                        underlayColor="rgba(0,0,0,0.4)"
                        onPress={() => this.pauseClock()} style={styles.btn}>
                            <Image source={getLoadedImage('pause',this.state.orientation)}
                        style={{width: 40, height: 40}}/>
                    
                    </TouchableHighlight>
                    </View>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.oneBox}>

                </View>
                <View style={styles.threeBox}>
                    <Text style={styles.titleText}>
                    {this.formatTime(this.state.playerTwoTime)}
                    </Text>
                </View>
                <View style={styles.oneBox}>

                </View>
            </View>
            <View style={styles.rowContainer}>
                <View style={styles.oneBox}>

                </View>
                
                <View style={styles.twoBox}>
                <TouchableHighlight
                     underlayColor="rgba(0,0,0,0.4)"
                     onPress={this.clickPlayerTwo}>
                    <Image source={getLoadedImage('chibiox',this.state.orientation)}
                        style={{width: this.state.orientation==='portrait' ? 150 : 100, height: this.state.orientation==='portrait' ? 150 : 100}}/>
                    
                 </TouchableHighlight>
                </View>
               
                <View style={styles.oneBox}>
                <View style={styles.settingsBox}>
                    <TouchableHighlight
                        underlayColor="rgba(0,0,0,0.4)"
                        onPress={() => this.refs.modal.open()} style={styles.btn}>
                            <Image source={getLoadedImage('cog',this.state.orientation)}
                        style={{width: 50, height: 50}}/>
                    
                    </TouchableHighlight>
                    </View>
            </View>

        </View>
        </ImageBackground>
        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal"} isDisabled={this.state.isDisabled}>
          <View style={[styles.container]}>
          <View style={[styles.oxBox]}>
              <Text style={[styles.modalText]}>
                  Timer Length:
                  </Text>
              </View>
              <View style={[styles.oxBox]}>
              <TextInput
                style={{height: 50,width:50,fontSize: 24, borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                />
              </View>
              <View style={[styles.oxBox]}>
              <Button onPress={() => this.closeModal(this.state.text)}  title='SUBMIT'> </Button>
              </View>
              </View>
         </Modal>
    </View>
      );
  
}}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top:0,
    left:0,
    right:0,
    bottom:0
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
  },
  xBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding:10
    },
settingsBox: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding:10,
    
    },
  oneBox: {
      flex: 1, 
  },
  twoBox: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
},
threeBox: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    backgroundColor: 'white'
},
  oxBox: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
},
 
titleText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black'
},
upsideDownText: {
    fontSize: 64,
    fontWeight: 'bold',
    transform: [{ rotate: '180deg'}],
    color: 'black'
},

modal: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2
  },
  modal3: {
    height: 200,
    width: 300
  },
  modalText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black'
},
});
