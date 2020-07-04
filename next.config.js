/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require('@zeit/next-css');
const withImage = require('next-images');

module.exports = withCSS(withImage());
