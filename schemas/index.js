const swatches = require("../src/palettes").swatches;
const colorNames = Object.keys(swatches);

const swatchProperties = {};

for (const colorName of colorNames) {
  swatchProperties[colorName] = {
    type: "array",
    items: { type: "string", pattern: "#[A-F0-9]{6}" },
    minItems: 10,
    maxItems: 10
  };
}

exports.palettes = {
  type: "object",
  properties: {
    palettes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          primary: { type: "array", items: { enum: colorNames } },
          neutrals: { type: "array", items: { enum: colorNames } },
          supporting: { type: "array", items: { enum: colorNames } }
        },
        required: ["name", "primary", "neutrals", "supporting"],
        additionalProperties: false
      }
    },
    swatches: {
      type: "object",
      properties: swatchProperties,
      additionalProperties: false
    }
  },
  required: ["palettes", "swatches"],
  additionalProperties: false
};
