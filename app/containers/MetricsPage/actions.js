/*
 *
 * MetricsPage actions
 *
 */

import {
  MEASUREMENTS,
} from './constants';

export function addMeasurements(data) {
  return {
    type: MEASUREMENTS,
    payload: {
      data,
    },
  };
}
