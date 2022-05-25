const yargs = require("yargs")



exports.addMovie = async (movieObj, collection) =>{
   const response = await  collection.insertOne({title: movieObj.title})
   if(response.acknowledged){
       console.log("Succesffully added movie")
   } else {
       console.log("Something went wrong")
   }
}

exports.listMovies = async (collection) => {
    const movies = await collection.find().toArray()// find list of movies in database and show it on terminal. In find(type parameter what are you looking for)
    console.log(movies)
}

exports.updateMovies = async ( movieObj, collection, yargsObj) => {
    const updateDoc = {// create a document that sets the plot of the movie
        $set: {
          year: yargsObj.updateYear
        },
      };
    const options = { upsert: true };
    const movies = await collection.updateOne({title:movieObj.title},updateDoc, options)
    if(movies.acknowledged= true){
        console.log(" year updated")
    }
 
}

exports.deleteMovies = async (yargsObj, collection) =>{
    const query = { title:yargsObj.title };
   const result =  await collection.deleteOne(query)
   if (result.deletedCount === 1) {
    console.log("Successfully deleted one document.");
  } else {
    console.log("No documents matched the query. Deleted 0 documents.");
  }
console.log(result)
}