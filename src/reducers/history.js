import { actionTypes } from '../actions/history';

const defaultState = {
  gamingHistory: [],
  temperatureUnit: 'C',
};

const historyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_RECORD: {
      return Object.assign({}, state, {
        gamingHistory: [action.record, ...state.gamingHistory],
      });
    }
    case actionTypes.SET_TEMPERATURE_UNIT: {
      return Object.assign({}, state, {
        temperatureUnit: action.unit,
      });
    }
    default:
      return state;
  }
};

export default historyReducer;
