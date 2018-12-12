const Ajv = require("ajv");

const schemas = require("./schemas");

function validateSchema(schema, data) {
  if (typeof schema === "string") {
    schema = schemas[schema];
  }
  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(schema);

  if (!validate(data)) {
    return Promise.reject(ajv.errorsText(validate.errors, { separator: "\n" }));
  }

  return Promise.resolve(data);
}

module.exports = {
  validateSchema
};
