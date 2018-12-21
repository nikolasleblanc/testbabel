import React from 'react';
import renderer from 'react-test-renderer';

import Hello from './Hello';

const createComponent = newProps => {
  const component = renderer.create(
    <Hello {...props} />
  );

  return {
    component
  };
};

describe('Hello component', () => {
  it('should render', () => {
    const { component } = createComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
