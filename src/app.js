const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const {addMovie, listMovies, updateMovies, deleteMovies, findMovie} = require("./utils/index")


const app = async (yargsObj) => {
    const collection = await connection() // access connection function from connection.js
    try {
        if(yargsObj.add){
            //add movie to mongodb  type in terinal --add "movie"
           await addMovie({title: yargsObj.title}, collection) // to access collection from line5 need to pass it
        } else if(yargsObj.list){
            // list movies from mangodb on terminal
            await listMovies(collection)
            client.close() 
        } else if(yargsObj.update && yargsObj.year){
            await updateMovies( {title: yargsObj.title}, collection, yargsObj)
            client.close() 
        } else if(yargsObj.update && yargsObj.genre){
            await updateMovies( {title: yargsObj.title}, collection, yargsObj)
            client.close() 
        } else if(yargsObj.find && yargsObj.genre){
            await findMovie({genre: yargsObj.genre}, collection, yargsObj)
            client.close()
        } else if(yargsObj.delete){
            await deleteMovies( {title: yargsObj.title}, collection, yargsObj)
            client.close() 
        }else {     console.log("incorrect command")
        client.close() 
    }
    } catch (error) {
        console.log(error)
        client.close()  
    }
    await client.close(); // close aplication after function is completed
}

app(yargs.argv)