const { validateSchema } = require("./validate-schema");
const data = require("./src/palettes");

validateSchema("palettes", data)
  // .then(() => console.log("valid!"))
  .catch(err => {
    console.error(err);
    process.exitCode = 1;
  });
