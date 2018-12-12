const colorNames = require("./lib").colorNames;

const properties = {};

for (const colorName of colorNames) {
  properties[colorName] = {
    type: "array",
    items: { type: "string", pattern: "#[A-F0-9]{6}" },
    minItems: 10,
    maxItems: 10
  };
}

module.exports = {
  type: "object",
  properties,
  additionalProperties: false
};
