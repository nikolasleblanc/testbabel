import React from "react";
import PropTypes from "prop-types";

export default class Hello extends React.PureComponent {
  static propTypes = {
    /** Sample prop that you can change */
    dummyProp: PropTypes.string
  };

  static defaultProps = {
    dummyProp: 'My dummy prop default value'
  };

  render() {
    return (
      <p>Hello Component - {this.props.dummyProp}</p>
    );
  }
}
