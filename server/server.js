const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const router =  require("./routes/UserRoutes")


dotenv.config();
connectDB();
// and this too


//json
app.use(express.json);

app.use('/api/users', router)


//  controllers
app.get("/", (req, res) => {
  res.send("server is running..");
});






const port = process.env.PORT || 5000;

// listening to a port
app.listen(port, () => console.log(`server is running on port ${port}`));
