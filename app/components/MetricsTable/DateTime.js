import React from 'react';
import { compose, withProps, pure } from 'recompose';

export default compose(
  withProps(({ timestamp }) => ({
    date: new Date(timestamp * 1000),
  })),
  pure,
)(({ date }) => (
  <strong>{date.toDateString()}</strong>
));
