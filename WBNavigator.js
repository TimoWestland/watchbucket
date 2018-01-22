import React from 'react';
import { connect } from 'react-redux';
import LoginScreen from './login/LoginScreen';
import WatchList from './watchlist/WatchList';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  WatchList: { screen: WatchList }
});

class WBNavigator extends React.Component {
  props: {
    dispatch: Function,
    nav: Object
  };

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })}/>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.navigation,
});

export default connect(mapStateToProps)(WBNavigator);
