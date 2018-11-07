import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import { colors, commonStyles } from '../utils/styles';

class LoginScreen extends Component {
  login = () => {
    this.props.navigation.replace('MainNavigation');
  };
  render() {
    return (
      <View style={[commonStyles.container, styles.container]}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            }}
          />
        </View>
        <View style={styles.inputsContainer}>
          <FormInput
            inputStyle={commonStyles.inputs}
            placeholder="Username"
            onFocus={this.resizeDownImage}
          />
          <FormInput
            inputStyle={commonStyles.inputs}
            placeholder="Password"
            onFocus={this.resizeDownImage}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            rounded
            containerViewStyle={styles.button}
            buttonStyle={styles.loginButton}
            title="Log in"
            onPress={this.login}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    resizeMode: 'contain'
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  button: {
    flex: 1
  },
  loginButton: {
    backgroundColor: colors.primary
  }
});

export default LoginScreen;
