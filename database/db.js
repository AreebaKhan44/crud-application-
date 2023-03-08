import mongoose from "mongoose"

const Connection=async()=>{
    const URL=`mongodb+srv://cluster0.l7t0liw.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`;

    try{

    mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("Database connected successfully");
    }
    catch (error){
        console.log("Error while connecting with the database",error);
    }

}

export default Connection;