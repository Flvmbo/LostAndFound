const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
"mongodb+srv://flvmbo:chukwuka2021@cluster0.hf7f2.mongodb.net/LostAndFound?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});