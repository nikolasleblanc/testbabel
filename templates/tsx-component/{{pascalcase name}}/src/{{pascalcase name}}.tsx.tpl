import * as React from "react";

interface {{pascalcase name}}Props {
  /** Sample prop description */
  dummyProp: number;
}

const {{pascalcase name}}: React.SFC<{{pascalcase name}}Props> = props => (
  <p>Replace me {props.dummyProp}</p>
);

{{pascalcase name}}.defaultProps = {
  /* Sample prop that you can change */
  dummyProp: 123
}

export default {{pascalcase name}};
