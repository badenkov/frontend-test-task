import { createSelector } from 'reselect';

/**
 * Direct selector to the metricsPage state domain
 */
const selectMetricsPageDomain = () => (state) => state.get('metricsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MetricsPage
 */

const selectData = () => createSelector(
  selectMetricsPageDomain(),
  (substate) => substate.get('data')
);

const makeSelectMetricsPage = () => createSelector(
  selectMetricsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMetricsPage;
export {
  selectMetricsPageDomain,
  selectData,
};
