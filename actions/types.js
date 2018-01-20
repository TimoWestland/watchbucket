export type Action =
  | { type: 'LOGIN', credentials: Object }
  | { type: 'LOGIN_FAIL', error: any }
  | {
      type: 'LOGIN_SUCCESS',
      data: any
    }
  | { type: 'LOGGED_OUT' };

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState, GetState) => any;
export type PromiseAction = Promise<Action>;
