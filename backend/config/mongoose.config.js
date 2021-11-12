const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/" + process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Succesfully connected to the database')
    })
    .catch((err) => {
        console.log("Something went wrong when connecting to the database", err)
    });