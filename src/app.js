const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const {addMovie, listMovies} = require("./utils/index")
const app = async (yargsObj) => {
    const collection = await connection() // access connection function from connection.js
    try {
        if(yargsObj.add){
            //add movie to mongodb  type in terinal --add "movie"
           await addMovie({title: yargsObj.title}, collection) // to access collection from line5 need to pass it
        } else if(yargsObj.list){
            // list movies from mangodb on terminal
            await listMovies(collection)
        } else{
            console.log("incorrect command")
            client.close()  
        }
    } catch (error) {
        console.log(error)
        client.close()  
    }
    await client.close(); // close aplication after function is completed
}

app(yargs.argv)