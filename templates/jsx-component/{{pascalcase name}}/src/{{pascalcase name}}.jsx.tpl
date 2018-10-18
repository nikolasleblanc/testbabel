import React from "react";
import PropTypes from "prop-types";

export default class {{pascalcase name}} extends React.PureComponent {
  static propTypes = {
    dummyProp: PropTypes.number
  };

  static defaultProps = {
    /* Sample prop that you can change */
    dummyProp: 123
  };

  render() {
    return (
      <p>replace me {this.props.dummyProp}</p>
    );
  }
}
