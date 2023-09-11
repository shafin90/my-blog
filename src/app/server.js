const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://mashrafiahnam:IOwrG4DoOlIGCD3G@cluster0.yhuz2xd.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {





    const userCollection = client.db("Blog").collection('blogs');






    app.get('/blogs', async (req, res) => {
        try {
          const cursor = userCollection.find();
          const result = await cursor.toArray();
          res.json(result);
        } catch (error) {
          console.error('Error fetching blogs:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
      
      app.post('/blogs', async (req, res) => {
        try {
          const blog = req.body;
          const result = await userCollection.insertOne(blog);
          res.status(201).json({ message: 'Blog saved successfully', insertedId: result.insertedId });
        } catch (error) {
          console.error('Error saving blog:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

    



    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);



app.get('/hi', (req, res) => {
  res.send('shafin,,,your server is running...')
})

app.listen(port, () => {
  console.log(`${port}`)
})