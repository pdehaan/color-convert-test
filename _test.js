const convert = require("color-convert");

const colors = require("./src/swatches.json");

const colorMap = Object.entries(colors).reduce((_map, [label, arr]) => {
  const _arr = arr.map(hex => ({
    hex,
    hsl: toHsl(...convert.hex.hsl(hex))
  }));
  _map[label] = _arr;
  return _map;
}, {});

console.log(JSON.stringify(colorMap, null, 2));

function toHsl(h, s, l) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}
