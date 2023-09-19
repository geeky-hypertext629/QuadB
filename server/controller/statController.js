const Data = require("./../models/dataModel");
const axios = require('axios');

const url = 'https://api.wazirx.com/api/v2/tickers';
module.exports = getData= async (req,res,next)=>{
    try{
    const Items = await axios.get(url);
    const reqItems = await Object.values(Items.data).slice(0, 10)
    console.log("Data is Requested")
    const arrayOfData = reqItems.map((data) => new Data(data))
    await Data.insertMany(arrayOfData);
    res.status(200).json({
        success : true,
        message : "Data Saved Successfully",
        arrayOfData,
    })
}
    catch(err)
    {
        res.status(500).json({
            success : false,
            message : "Something went wrong in fetchig the data",
            error : err.message
        })
    }
}


