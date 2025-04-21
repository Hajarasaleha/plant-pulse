const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/productListing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/plantPulse";

main().then(()=>{
  console.log("connection successfull")
}).catch(err=>{
    console.log(err)
})

async function main(){
  await  mongoose.connect(MONGO_URL)
};

const initDB=async ()=>{
    await Listing.deleteMany({});
  await  Listing.insertMany(initData.data);
  console.log("data initialized")
}

initDB();