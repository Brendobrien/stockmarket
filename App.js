import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryLine } from "victory-native";

export default class App extends React.Component {
  render() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);

    return (
      <View style={styles.container}>
        <VictoryLine />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
  },
});
