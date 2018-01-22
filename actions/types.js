export type Action =
  | { type: 'LOGGED_IN', data: any }
  | { type: 'LOGGED_OUT' }
  | { type: 'REGISTERED', data: any }

export type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState, GetState) => any;
export type PromiseAction = Promise<Action>;
