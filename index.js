const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT;

const mongoose = require("mongoose")

//connect db
mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  })

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");

app.use(express.json())

//database seeder routes
app.use("/api/seed", databaseSeeder);

//routes for users
app.use("/api/users", userRoute);

//routes for products
app.use("/api/products", productRoute);

app.listen(PORT || 9000, () => {
  console.log(`server listening on port  ${PORT}`);
});











//MONGOOSEDB_URL=mongodb+srv://yusufpersonal:Iphone7b@cluster0.o8a9k.mongodb.net/REACT-NODE-APP
//MONGOOSEDB_URL=mongodb+srv://yusufpersonal:Iphone7b@cluster0.o8a9k.mongodb.net/REACT-NODE-APP

//mongodb+srv://yusufpersonal:<db_password>@cluster0.o8a9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0