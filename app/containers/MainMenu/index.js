import React from 'react';
import { pure } from 'recompose';
import { Container, Menu } from 'semantic-ui-react';
import MenuItem from './MenuItem';

export default pure(() => (
  <Container style={{ marginBottom: 20 }}>
    <Menu pointing secondary>
      <MenuItem label="Home" to="/" exactly />
      <MenuItem label="Metrics" to="/metrics" />
    </Menu>
  </Container>
));
