import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import React from 'react';

const header = () => {
  return (
      <View style={styles.container}>
         <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/header-logo.png')} />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/plus-2-math.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/like--v1.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={require('../../assets/facebook-messenger.png')}/>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  logo : {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconContainer : {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain'
  }
})

export default header;

