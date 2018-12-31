import React from 'react';

import PropTypes from 'prop-types';

export const Hello = props => (
  <p>Hello Component {props.dummyProp}</p>
);

Hello.propTypes = {
  /** Sample prop that you can change */
  dummyProp: PropTypes.string
};

Hello.defaultProps = {
  dummyProp: 'My dummy prop default value'
};
