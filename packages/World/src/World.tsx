import * as React from 'react';

interface WorldProps {
  /** Sample prop description */
  dummyProp?: string;
}

export const World: React.SFC<WorldProps> = props => (
  <p>World Component - {props.dummyProp}</p>
);

World.defaultProps = {
  dummyProp: 'My dummy prop default value'
};
