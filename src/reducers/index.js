import * as actions from '../actions';

const initialState = {
  validToken: null,
  token: null,
  data: {
    completed: {},
    activity: {}
  }
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.INVALIDATE_TOKEN:
      return {
        ...state,
        validToken: false
      };
    case actions.SET_TOKEN:
      return {
        ...state,
        validToken: true,
        token: action.token
      };
    case actions.PARSE_COMPLETED:
      return {
        ...state,
        data: {
          completed: action.data
        }
      };
    case actions.PARSE_ACTIVITY:
      return {
        ...state,
        data: {
          activity: action.data
        }
      };
    default:
      return state;
  }
}
