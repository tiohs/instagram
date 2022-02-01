import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const header = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image style={styles.logo} source={require('../../assets/header-logo.png')} />
      </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  container: {

  },
  logo : {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  }
})

export default header;

