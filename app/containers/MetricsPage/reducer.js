import { fromJS } from 'immutable';
import {
  MEASUREMENTS,
} from './constants';

const BUFFER_SIZE = 500;
const initialState = fromJS({
  data: [],
});

function metricsPageReducer(state = initialState, action) {
  switch (action.type) {
    case MEASUREMENTS:
      return state
        .update('data', (data) => (
          data
            .concat(action.payload.data)
            .takeLast(BUFFER_SIZE)
        ));
    default:
      return state;
  }
}

export default metricsPageReducer;
