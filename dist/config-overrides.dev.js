"use strict";

var _require = require('react-app-rewired'),
    injectBabelPlugin = _require.injectBabelPlugin;

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }], config);
  return config;
};