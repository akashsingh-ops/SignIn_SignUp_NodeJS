const express = require("express");
const routes = require("./routes/auth");
const app = express();
const cors = require("cors");
app.use(cors());

// accept json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
const PORT = 1337;
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log("app is running", PORT);
});
