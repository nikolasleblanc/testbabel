import * as React from "react";

interface WorldProps {
  /** Sample prop description */
  dummyProp?: string;
}

const World: React.SFC<WorldProps> = props => (
  <p>World Component - {props.dummyProp}</p>
);

World.defaultProps = {
  /* Sample prop that you can change */
  dummyProp: 'My dummy prop default value'
}

export default World;
