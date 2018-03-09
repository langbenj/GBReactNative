

import React, { Component } from 'react';
import {
  Dimensions,
  Alert,
  NetInfo,
  Platform
} from 'react-native';


//Code to check for connectivity

function handleFirstConnectivityChange(isConnected) {
    console.log('Then, is ' + (isConnected ? 'online' : 'offline'))
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      handleFirstConnectivityChange,
    )
  }
  
  if (Platform.OS === 'android') {
      NetInfo.isConnected.fetch().then(isConnected => {
      })
    } else {
      NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange,
      )
    }

//Code mostly from https://shellmonger.com/2017/07/26/handling-orientation-changes-in-react-native/

const msp = (dim, limit) => {
    return (dim.scale * dim.width) >= limit || (dim.scale * dim.height) >= limit;
};

/**
 * Returns true if the screen is in portrait mode
 */
export const  isPortrait = () => {
    const dim = Dimensions.get('screen');
    
    return dim.height >= dim.width;   
};

/**
 * Returns true of the screen is in landscape mode
 */
export const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};

/**
 * Returns true if the device is a tablet
 */
export const isTablet = () => {
    const dim = Dimensions.get('screen');
    return ((dim.scale < 2 && msp(dim, 1000)) || (dim.scale >= 2 && msp(dim, 1900)));
};
 
/**
 * Returns true if the device is a phone
 */
export const isPhone = () => { return !isTablet(); }
