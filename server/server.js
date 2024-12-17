const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// create a database connection -> u can also
// create a seprate file for this and then import/use that file.

mongoose
  .connect("mongodb+srv://nshabam271:rozykadari271@cluster0.hnd5d.mongodb.net/")
  .then(() => console.log("mongoDB connected successfully"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            'Authorization',
            'Cache-control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, console.log(`Server is now running on port ${PORT}`))
