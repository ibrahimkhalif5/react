require("dotenv").config({
  path: require("path").resolve(__dirname, ".env"),
});


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");



const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/education", require("./routes/educationRoutes"));



app.get("/", (req, res) => {s
  res.send("Api is working ibrahim added dev");
});

app.listen(5000, () => {
  console.log("Server running on port 5000 ibrahim");
});
