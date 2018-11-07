import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { commonStyles } from '../utils/styles';

class HomeScreen extends Component {
  render() {
    return (
      <View style={[commonStyles.container]}>
        <View style={styles.content}>
          <Text h2>Home Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
