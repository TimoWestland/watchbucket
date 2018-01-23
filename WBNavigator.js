import React from 'react';
import LoginScreen from './login/LoginScreen';
import WatchList from './watchlist/WatchList';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  WatchList: { screen: WatchList }
});

class WBNavigator extends React.Component {
  props: {
    dispatch: Function,
    nav: Object
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <AppNavigator navigation={navigation}/>;
  }
}

const select = state => ({
  nav: state.navigation,
});

export default connect(select)(WBNavigator);
