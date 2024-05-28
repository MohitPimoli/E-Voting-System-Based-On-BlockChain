const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

MongoClient.connect(url, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    // Perform database operations here

    client.close();
});

// Check if MongoDB is connected every 5 seconds
setInterval(() => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            console.error('Error checking MongoDB connection:', err);
            return;
        }

        console.log('MongoDB is connected');
        client.close();
    });
}, 5000);