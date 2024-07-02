const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// middleware

// mongodb


// fitness-app
// vuyprvkt25tld2kl


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mongo-app.q62fegx.mongodb.net/?retryWrites=true&w=majority&appName=mongo-app`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();


        const serviceCollection = client.db('fitness-app').collection('services');
        const bookingCollection = client.db('fitness-app').collection('bookings');

        // show all the data in '/service' route
        app.get('/services', async (req, res) => {
            const cursor = serviceCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })
        // show all the data in '/service' route

        // add data to the '/service' route
        app.post('/services', async (req, res) => {
            const newService = req.body;
            console.log(newService);
            const result = await serviceCollection.insertOne(newService);
            res.send(result);
        })
        // add data to the '/service' route

        // get single data from '/service' route
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const options = {
                // Inculde only the 'title' and 'imdb' fields in the returned document
                projection: { service_area: 1, service_price: 1, service_name: 1, service_image: 1, service_provider: 1, service_price: 1, username: 1, email: 1 }
            };

            const result = await serviceCollection.findOne(query, options);
            res.send(result);
        })
        // get single data from '/service' route

        // booking post
        app.post('/bookings', async (req, res) => {
            const booking = req.body;
            console.log(booking);
            const result = await bookingCollection.insertOne(booking);
            res.send(result);
        })
        // booking post

        // user specific booking
        app.get('/bookings', async (req, res) => {
            console.log(req.query.email);
            let query = {};
            if (req.query?.email) {
                query = { email: req.query.email };
            }
            const result = await bookingCollection.find(query).toArray();
            res.send(result);
        })
        // user specific booking

        // delete api
        app.delete('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            res.send(result);
        })
        // delete api

        // update api
        app.patch('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { uspsert: true };
            const updatedBookings = req.body;
            const books = {
                $set: {
                    _id: updatedBookings._id,
                    service_name: updatedBookings.service_name,
                    providerName: updatedBookings.providerName,
                    service_price: updatedBookings.service_price
                }
            }
            const result = await bookingCollection.updateOne(filter, books, options);
            res.send(result);
        })
        // update api

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
// mongodb

app.get('/', (req, res) => {
    res.send("Server is running");
})

app.listen(port, () => {
    console.log("server is running on port ", port);
})