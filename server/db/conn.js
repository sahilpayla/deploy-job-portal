const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("DataBase Connected"))
    .catch((err) => {
        console.log(err);
    })