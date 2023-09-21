const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // Add any production-specific optimizations here, e.g., code splitting, minification, etc.
});
