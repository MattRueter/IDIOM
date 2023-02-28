const { MongoClient } = require('mongodb')
const assert = require('assert');


(async function() {
  // Connection URL
  const url = "mongodb+srv://matthewrueter51:u29mBbgANVwKGj34@cluster0.ubo5s6e.mongodb.net/?retryWrites=true&w=majority"
  // Database Name
  const dbName = 'idiom_Client_DB';
  let client;

  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);

    const db = client.db(dbName);
  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    client.close();
  }
})();