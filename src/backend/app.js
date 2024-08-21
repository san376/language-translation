import express from 'express';
const app = express();
import mongoose from 'mongoose';

async function dbconnect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Translation');
}

dbconnect().then(() => {
    console.log("connected");
})
.catch(err => console.log("ERROR : ", err)); 

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(3000, (req,res) => {
    console.log("Listening");
})