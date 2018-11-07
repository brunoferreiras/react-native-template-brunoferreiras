import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { NavigationActions, StackActions, withNavigation } from 'react-navigation';
import { colors } from '../utils/styles';

class CustomHeader extends Component {
  resetTo = route => {
    const actionToDispatch = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: route })]
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

  logout = () => {
    this.resetTo('Login');
  };
  render() {
    return (
      <Header
        backgroundColor={colors.primary}
        leftComponent={
          <TouchableOpacity onPress={() => {}}>
            <Icon name="menu" color={colors.secondary} />
          </TouchableOpacity>
        }
        centerComponent={{
          text: 'APP TITLE',
          style: { color: colors.secondary }
        }}
        rightComponent={
          <TouchableOpacity onPress={this.logout}>
            <Icon name="exit-to-app" color={colors.secondary} />
          </TouchableOpacity>
        }
      />
    );
  }
}

export default withNavigation(CustomHeader);
