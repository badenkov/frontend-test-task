import { fromJS } from 'immutable';
import metricsPageReducer from '../reducer';
import {
  MEASUREMENTS,
} from '../constants';

describe('metricsPageReducer', () => {
  it('returns the initial state', () => {
    expect(metricsPageReducer(undefined, {})).toEqual(fromJS({ data: [] }));
  });

  it('add metrics to data', () => {
    expect(metricsPageReducer(undefined, {
      type: MEASUREMENTS,
      payload: { data: [{ id: 1 }] }
    }).toJS()).toEqual({
      data: [
        { id: 1 },
      ],
    });
  });
});
