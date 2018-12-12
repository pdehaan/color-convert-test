const convert = require("color-convert");

const { palettes, swatches } = require("./src/palettes");

const res = palettes.reduce((arr, palette) => {
  arr.push({
    name: palette.name,
    primary: colorMap(palette.primary),
    neutrals: colorMap(palette.neutrals),
    supporting: colorMap(palette.supporting)
  });
  return arr;
}, []);

console.log(JSON.stringify(res, null, 2));

function colorMap(colors) {
  return colors.map(name => ({
    name,
    colors: swatches[name].map(hex => ({
      hex,
      hsl: hexToHSL(hex),
      // rgb: hexToRGB(hex)
    }))
  }));
}

function hexToHSL(hex) {
  const [h, s, l] = convert.hex.hsl(hex);
  const str = `hsl(${h}, ${s}%, ${l}%)`;
  str.raw = {h, s, l};
  return str;
  // return {
  //   h,
  //   s,
  //   l,
  //   _value: str
  // };
}

function hexToRGB(hex) {
  const [r, g, b] = convert.hex.rgb(hex);
  const str = `rgb(${r}, ${g}, ${b})`;
  return str;
  // return {
  //   r,
  //   g,
  //   b,
  //   _value: str
  // };
}
