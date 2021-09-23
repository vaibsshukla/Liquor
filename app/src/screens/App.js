import React, {Component} from 'react';
import {View, Keyboard} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from '../navigation/MainStackNavigator';
import ProgressView from '../components/ProgressView';
import {Utility} from '../utils/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    Utility.sharedInstance.HOC = this;
    this.state = {
      isOverlayVisible: false,
      showProgressBar: false,
    };
  }

  showHideProgressBar = status => {
    Keyboard.dismiss();
    this.setState({
      showProgressBar: status,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <MainStackNavigator routeName={'LandingScreen'} />
        </NavigationContainer>
        <ProgressView animate={this.state.showProgressBar} />
      </View>
    );
  }
}
