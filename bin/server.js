const db = require("../config/db");
const app = require("../app");

const PORT = process.env.PORT || 3500;

db.then(() => {
  app.listen(PORT, async () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((err) => {
  console.log(`Server not running. Error ${err.message}`);
});
