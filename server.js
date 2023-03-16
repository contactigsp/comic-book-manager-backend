const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");

const app = require("./app");

app.use(
  cors({
    origin: ["https://comic-book-manager.onrender.com"],
  })
);

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// connect to db
mongoose.set("strictQuery", true);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // listen for requests
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
      console.log(`DB connection successfully and listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
