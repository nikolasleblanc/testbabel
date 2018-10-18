import React from 'react';

import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import World from './World';

import { createStorySetWithDefault, getKnob, getStoryProps } from '@coinsquare/storybook';

const getKnobProps = (exclude = []) => ({
  ...getKnob('dummyProp', text, 'Dummy Prop', '123', exclude),
});

const eventHandlers = {
  /* event handlers */
};

const getProps = getStoryProps(getKnobProps, eventHandlers);

const stories = createStorySetWithDefault('World', getProps, World)
  // prevents container from taking full width
  .addDecorator(story => <div>{story()}</div>);
  /*
  // add other stories here
  .add('With Icon', () => {
    const props = {
      ...getProps()
    };
    return <World {...props} />;
  });
  */

export default stories;
