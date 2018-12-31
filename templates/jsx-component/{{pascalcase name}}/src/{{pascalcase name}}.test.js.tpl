import React from 'react';
import renderer from 'react-test-renderer';

import { {{pascalcase name}} } from './{{pascalcase name}}';

const createComponent = newProps => {
  const component = renderer.create(
    <{{pascalcase name}} {...props} />
  );

  return {
    component
  };
};

describe('{{pascalcase name}} component', () => {
  it('should render', () => {
    const { component } = createComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
