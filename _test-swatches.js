const { validateSchema } = require("./validate-schema");
const data = require("./src/swatches");

validateSchema("swatches" /* schema */, data)
  // .then(() => console.log("valid!"))
  .catch(err => {
    console.error(err);
    process.exitCode = 1;
  });
