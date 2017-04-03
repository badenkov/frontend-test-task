import React from 'react';
import { pure } from 'recompose';
import Helmet from 'react-helmet';
import { Container, Header } from 'semantic-ui-react';

export default pure(() => (
  <Container>
    <Helmet
      title="Test Task"
    />

    <Header>Test Task</Header>
    <p>
      Implement a single page application which reads measurements from stream (EventSource).
      The changes should be reflected as soon as they are updated. Measurements can be one of
      following types string, float or array with coordinates (Location)
    </p>


  </Container>
));
