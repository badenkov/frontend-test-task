import React from 'react';
import { compose, pure } from 'recompose';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container } from 'semantic-ui-react';
import MetricsTable from 'components/MetricsTable';
import { createStructuredSelector } from 'reselect';
import makeSelectMetricsPage from './selectors';

export default compose(
  connect(
    createStructuredSelector({
      MetricsPage: makeSelectMetricsPage(),
    }),
    (dispatch) => ({ dispatch })
  ),
  pure,
)(({ MetricsPage: { data } }) => (
  <Container>
    <Helmet
      title="MetricsPage"
      meta={[
        { name: 'description', content: 'Description of MetricsPage' },
      ]}
    />

    <MetricsTable rows={data} />
  </Container>
));
