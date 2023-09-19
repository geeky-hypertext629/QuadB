const mongoose = require('mongoose');



const connectDb =async ()=>{
    await mongoose.connect("mongodb+srv://subh28909jsr:subhjsr002@cluster0.hqgrfd5.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database Connected");
    })

}

module.exports = connectDb;