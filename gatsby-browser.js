const React = require("react");
const Layout = require("./src/layout").default;

exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
