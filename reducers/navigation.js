import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../WBNavigator';

const initialAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialRouterState = AppNavigator.router.getStateForAction(initialAction);
const initialState = AppNavigator.router.getStateForAction(
  initialAction,
  initialRouterState
);

function navigation(state = initialState, action) {
  switch(action.type) {
    case 'NAVIGATE':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.route }),
        state
      );

    default:
      return AppNavigator.router.getStateForAction(action, state) || state;
  }
}

export default navigation;
