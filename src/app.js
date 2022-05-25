const yargs = require("yargs");
const { client, connection } = require("./db/connection");

const app = async (yargsObj) => {
    const collection = await connection() // access connection function from connection.js
    try {
        if(yargsObj.add){
            //add movie to mongodb  type in terinal --add "movie"
           await  collection.insertOne({title: yargsObj.title})
        } else if(yargsObj.ist){
            // list movies from mangodb
        } else{
            console.log("incorrect command")
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv)