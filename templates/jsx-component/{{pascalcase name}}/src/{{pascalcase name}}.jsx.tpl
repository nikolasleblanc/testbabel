import React from 'react';

import PropTypes from 'prop-types';

export const {{pascalcase name}} = props => (
  <p>{{pascalcase name}} Component {props.dummyProp}</p>
);

{{pascalcase name}}.propTypes = {
  /** Sample prop that you can change */
  dummyProp: PropTypes.string
};

{{pascalcase name}}.defaultProps = {
  dummyProp: 'My dummy prop default value'
};
