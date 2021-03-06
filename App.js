/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput,Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component/*<Props>*/ {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <Button style={styles.button1}
           title="Login"
          />
        <Button  style={styles.button2}
           title="SIGN UP" />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input:{
    width:400,
    borderWidth:1, 
    borderColor: '#ffffff',
    backgroundColor:"#D91071",
    marginBottom:20
  },
 button1:{
    backgroundColor:"#D91071",
    width:200
  },
  button2:{
    backgroundColor:"white",
    width:200
  }
});
