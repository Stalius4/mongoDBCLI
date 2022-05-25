# App to work

1. node src/app.js --add --title "name" **add item to database**
2. node src/app.js --list **display collection in to terminal**
3. node src/app.js --updateYear "year" --title "name"  **update movie with year**
3. node src/app.js --delete  --title "name" **delete object in database**

##  Type comands in terminal

1. npm init -y  ***(can be used to set up a new or existing npm package.)*** (https://docs.npmjs.com/cli/v8/commands/npm-init)
2. npm  i yargs     (https://www.npmjs.com/package/yargs)
3. mkdir src/utils (create  src and utils folder in it)
4. touch .gitignore (create .gitignore file add   /node_modules)
5. touch src/app.js
6. touch src/utils/index.js
7. mkdir src/db (create database folder in src folder)
8. touch src/db/connection.js ( create new file in db folder)
9. npm i mongodb (https://www.npmjs.com/package/mongodb)

10. create new file in same directory as .gitignore  ***.env***  add .env to .gitignore file 
11. npm i dotenv ***(this package let us to access .env file )***

# CRUD   (create, read, update and delete)

1. ***Create*** insertOne( )     [Documentation](https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/#std-label-node-usage-insert)
2. ***Read*** collection.find( ) [Documentation](https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/)
3. ***Update*** updateOne( )     [Documentation] (https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/)
4. **Delete*** deleteOne( )      [Documentation] (https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/)



# New functions

1. connect( )     (https://www.tabnine.com/code/javascript/functions/mongodb/MongoClient/connect)
2. db( )          (https://www.tabnine.com/code/javascript/functions/mongodb/MongoClient/db)
3. collection( )  (https://www.tabnine.com/code/javascript/functions/mongodb/Db/collection)
4. close( )       (https://developer.mozilla.org/en-US/docs/Web/API/Window/close)









# Things to re-search 

1. ***object document mapping***  MongoDB expresses data to be saved in a JSON-like format and saves it as a document. The function of associating such a document with an object in a programming language is called object-document mapping (O/D mapping).

2. ***Environment Variables*** - (https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa#:~:text=An%20environment%20variable%20is%20a,at%20a%20point%20in%20time.)

3. ***async***  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

4. ***try catch*** (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

5. ***Promises and Callbacks*** [documentation](https://www.mongodb.com/docs/drivers/node/current/fundamentals/promises/)




### Things to ask 

1. upsert