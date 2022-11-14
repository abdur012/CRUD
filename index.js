const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// user:dbuser1
// password:AChIgj9IyyClgdJx

const uri = "mongodb+srv://dbuser1:AChIgj9IyyClgdJx@cluster0.kepqgfg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user');
        const user = { name: 'salim', email: 'salim@gmail.com' };
        const result = await userCollection.insertOne(user);
        console.log(`User inserted with ID : ${result.insertedId}`);
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
})





