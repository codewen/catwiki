const { MongoClient, ServerApiVersion } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version


let client;
module.exports = {
    initDatabase: async () => {
        client = new MongoClient(process.env.ATLAS_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            console.log("database connected");
        } catch (e) {
            console.error(e);
        }
    },
    getListOfMostClickedBreeds: async () => {
        const res = await client.db("catwiki").collection("favCat").find().toArray();
        console.log(res);
        return res;
    },
    addClickById: async (id) => {
        const res = await client.db("catwiki").collection("favCat").findOne({ id });
        console.log(res);
        if (res) {
            client.db("catwiki").collection("favCat").updateOne({ id }, { $set: { clickCount: res.clickCount + 1 } });
        } else {
            client.db("catwiki").collection("favCat").insertOne({
                id,
                clickCount: 1
            })
        }
    }
}

