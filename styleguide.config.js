module.exports = {
  title: "Coinsquare Styleguide",
  components: "packages/**/src/!(*.story).*sx"
  // resolver: require("react-docgen").resolver.findAllComponentDefinitions,
  // propsParser: (filePath, source, resolver, handlers) => {
  //   return filePath.indexOf(".tsx") > -1
  //     ? require("react-docgen-typescript")
  //         .withDefaultConfig()
  //         .parse(filePath, source, resolver, handlers)
  //     : require("react-docgen").parse(source, resolver, handlers);
  // }
};
