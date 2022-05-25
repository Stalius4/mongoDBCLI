// 1.this file is responsible to connet to database

 // 2.let us access .env file
 
require("dotenv").config();
const { MongoClient } = require("mongodb");
//MongoClient creates class using connection information from mangodb atlas and we  can use that class to manipulate databae
// pull specific method from mongodb library   

 const client = new MongoClient(process.env.MONGO_URI) //3. (process.env.MONGO_URI) code to access .env file and MONGO_URI. This line tells to app where is database
//take link from mongodb database  and paste in .env folder 



const connection = async () => {  //async waiting something to happen outside app
    try {
        await client.connect();  // connects to database, if that takes time we have to wait
        const db = client.db("Movies") // creates space in database and has to be plural 
        return db.collection("Movie") // Individual movie in movies datatabase created above
    } catch (error) {
        console.log(error)
    }
}

module.exports = { client, connection };