import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { compose, pure, withProps, withHandlers, setPropTypes, defaultProps } from 'recompose';
import { Menu } from 'semantic-ui-react';

export default compose(
  setPropTypes({
    label: PropTypes.string,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]).isRequired,
    exactly: PropTypes.bool,
  }),
  defaultProps({
    exactly: false,
  }),
  withRouter,
  withProps(({ router, to, exactly }) => ({
    isActive: router.isActive(to, exactly),
  })),
  withHandlers({
    onClick: ({ router, to }) => () => {
      router.push(to);
    },
  }),
  pure,
)(({ onClick, isActive, label }) => (
  <Menu.Item active={isActive} onClick={onClick}>
    {label}
  </Menu.Item>
));
