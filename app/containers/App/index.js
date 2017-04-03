import React from 'react';
import { pure } from 'recompose';
import MainMenu from 'containers/MainMenu';

export default pure(({ children }) => (
  <div>
    <MainMenu />
    {React.Children.toArray(children)}
  </div>

));
