import * as React from "react";

interface HelloProps {
  /** Sample prop description */
  dummyProp: number;
}

const Hello: React.SFC<HelloProps> = props => (
  <p>Replace me {props.dummyProp}</p>
);

Hello.defaultProps = {
  /* Sample prop that you can change */
  dummyProp: 123
}

export default Hello;
