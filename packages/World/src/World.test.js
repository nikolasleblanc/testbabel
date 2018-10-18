import React from 'react';
import renderer from 'react-test-renderer';

import World from './World';

const createComponent = newProps => {
  const component = renderer.create(
    <World {...props} />
  );

  return {
    component
  };
};

describe('World component', () => {
  it('should render', () => {
    const { component } = createComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
