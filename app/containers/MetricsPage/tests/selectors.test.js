import { fromJS } from 'immutable';
import { selectMetricsPageDomain } from '../selectors';

const selector = selectMetricsPageDomain();

describe('makeSelectMetricsPageDomain', () => {
  it('Expect to have unit tests specified', () => {
    const globalState = fromJS(true);
    const mockedState = fromJS({
      metricsPage: true,
    });

    expect(selector(mockedState)).toEqual(globalState);
  });
});
