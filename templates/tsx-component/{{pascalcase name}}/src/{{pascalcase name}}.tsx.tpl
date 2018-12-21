import * as React from "react";

interface {{pascalcase name}}Props {
  /** Sample prop description */
  dummyProp?: string;
}

const {{pascalcase name}}: React.SFC<{{pascalcase name}}Props> = props => (
  <p>{{pascalcase name}} Component - {props.dummyProp}</p>
);

{{pascalcase name}}.defaultProps = {
  /* Sample prop that you can change */
  dummyProp: 'My dummy prop default value'
}

export default {{pascalcase name}};
