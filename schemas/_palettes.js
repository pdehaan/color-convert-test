const colorNames = require("./lib").colorNames;

module.exports = {
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
      type: "object"
    }
  },
  required: ["palettes", "swatches"],
  additionalProperties: false
};
