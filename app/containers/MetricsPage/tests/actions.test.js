
import {
  addMeasurements,
} from '../actions';
import {
  MEASUREMENTS,
} from '../constants';

describe('MetricsPage actions', () => {
  describe('addMeasurements action', () => {
    it('has a type of MEASUREMENTS', () => {
      const expected = {
        type: MEASUREMENTS,
        payload: {
          data: [{ id: 1 }],
        },
      };
      expect(addMeasurements([{ id: 1 }])).toEqual(expected);
    });
  });
});
