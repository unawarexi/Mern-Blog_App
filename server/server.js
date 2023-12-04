import express from "express";
import dotenv from "dotenv";
import connectDB  from "./config/db";
// this is where the issue is comming from

dotenv.config();
connectDB();
// and this too

const app = express();
app.use(express.json);

//  controllers
app.get("/", (req, res) => {
  res.send("server is running..");
});

const PORT = process.env.PORT || 5000;

// listening to a port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
