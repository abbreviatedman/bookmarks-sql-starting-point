// Dependencies.
const dotenv = require("dotenv");
// Pull in app.js.
const app = require("./app");

// Configuration.
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
