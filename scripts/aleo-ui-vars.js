/**
 * Convert @aleohq/ui/dist/less/variables/_main.less into js vars
 *
 * @example
 *   const darkVars = require('./dark-vars');
 */
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const stylePath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@aleohq',
  'ui',
  'dist',
  'less',
  'variables',
);

const colorsGreyLess = fs.readFileSync(path.join(stylePath, 'colors', 'grey.less'), 'utf8');
const colorsRedLess = fs.readFileSync(path.join(stylePath, 'colors', 'red.less'), 'utf8');

const antdColorsLess = fs.readFileSync(path.join(stylePath, 'antd', 'colors.less'), 'utf8');
const antdLess = fs.readFileSync(path.join(stylePath, 'antd', 'index.less'), 'utf8');

const colorsGreyPalleteLess = lessToJs(`${colorsGreyLess}`, {
  stripPrefix: true,
  resolveVariables: false,
});
const colorsRedPalleteLess = lessToJs(`${colorsRedLess}`, {
  stripPrefix: true,
  resolveVariables: false,
});

const antdColorsPalleteLess = lessToJs(`${antdColorsLess}`, {
  stripPrefix: true,
  resolveVariables: false,
});

const antdPalleteLess = lessToJs(`${antdLess}`, {
  stripPrefix: true,
  resolveVariables: false,
});

console.log({
  ...colorsGreyPalleteLess,
  ...colorsRedPalleteLess,
  ...antdColorsPalleteLess,
  ...antdPalleteLess,
});

module.exports = {
  ...colorsGreyPalleteLess,
  ...colorsRedPalleteLess,
  ...antdColorsPalleteLess,
  ...antdPalleteLess,
};
