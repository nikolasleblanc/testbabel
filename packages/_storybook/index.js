// import Provider from "./Theme";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export const getKnob = (key, knobFn, label, defaultValue, exclude = []) => {
  return exclude.indexOf(key) === -1 && { [key]: knobFn(label, defaultValue) };
};

export const WrappedWithThemeProvider = Comp => {
  return function WrappedWithTheme(props) {
    return (
      // <Provider>
      <Comp {...props} />
      // </Provider>
    );
  };
};

export const createStorySetWithDefault = (name, storyProps, Comp) =>
  storiesOf(name, module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add(
      "Default",
      () => {
        const props = {
          ...storyProps()
        };
        return <Comp {...props} />;
      },
      { info: {} }
    );

export const getStoryProps = (getKnobProps, eventHandlers) => exclude => ({
  ...getKnobProps(exclude),
  ...eventHandlers
});
