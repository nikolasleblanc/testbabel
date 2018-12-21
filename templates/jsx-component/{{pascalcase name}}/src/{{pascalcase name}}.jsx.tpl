import React from "react";
import PropTypes from "prop-types";

export default class {{pascalcase name}} extends React.PureComponent {
  static propTypes = {
    dummyProp: PropTypes.optionalString
  };

  static defaultProps = {
    /* Sample prop that you can change */
    dummyProp: 'My dummy prop default value'
  };

  render() {
    return (
      <p>{{pascalcase name}} Component - {this.props.dummyProp}</p>
    );
  }
}
