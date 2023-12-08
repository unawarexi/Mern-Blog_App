const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes =  require("./routes/UserRoutes")

const {errorResponderHandler, inValidPathHandler} =  require("./middleware/errorHandler")


dotenv.config();
connectDB();
// and this too


//middleware
app.use(express.json());
app.use('/api/users', userRoutes),
app.use(inValidPathHandler),
app.use(errorResponderHandler),



//  controllers
app.get("/", (req, res) => {
  res.send("server is running..");
});






const port = process.env.PORT || 5000;

// listening to a port
app.listen(port, () => console.log(`server is running on port ${port}`));
