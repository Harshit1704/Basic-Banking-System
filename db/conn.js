const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/banking", {
    useNewUrlParser:true,
    useUnifiedTopology :true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection successfull`);
}).catch((e) => {
    console.log(`No connection`);
})
