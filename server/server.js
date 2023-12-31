const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"});
const connnectDb = require("./config/db");
const cors = require('cors');


connnectDb();
const homeRoute = require('./routes/homeRoute');

app.use(cors({
    origin: "https://effulgent-sawine-38deb6.netlify.app",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  }));

app.use(homeRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Backend Running on port ${process.env.PORT}`);
})


