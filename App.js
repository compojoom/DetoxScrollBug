/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container} testID={"scroll"}>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <Text style={styles.welcome}>test</Text>
        <TextInput multiline={true} testID={"multilineInput"} placeholder={"Test"}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
