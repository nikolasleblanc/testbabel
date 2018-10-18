import React from "react";
import { configure, addDecorator } from "@storybook/react";
import "@storybook/addon-console";

// import { Provider } from "../src";

const Provider = props => <div>{props.children}</div>;

const req = require.context("../packages", true, /\.story\.[jt]sx$/);

class Wrapper extends React.Component {
  render() {
    return (
      <Provider>
        <div
          style={{
            padding: 20,
            overflow: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100vh"
          }}
        >
          {this.props.story()}
        </div>
      </Provider>
    );
  }
}

addDecorator(story => <Wrapper story={story} />);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);

if (module.hot) {
  module.hot.accept(() => configure(loadStories, module));
}
