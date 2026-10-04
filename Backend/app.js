const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");

const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.route.js");
const captainRoutes = require("./routes/captain.route.js");
const cookieParser = require("cookie-parser");
const mapsRoutes = require("./routes/maps.routes");
// app.use(cors());

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Hello worldqq");
});
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapsRoutes);
// app.use("/rides", rideRoutes);

module.exports = app;
