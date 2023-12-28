// const username = encodeURIComponent('anil120');
// const password = encodeURIComponent('@LpU@120#');

// mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ryvoxgc.mongodb.net/blog_App`);



import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './routes/routes.js';
import mongoose from 'mongoose';
import user from './model/user.js';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Database connected") })
    .catch((err) => { console.log(err) })

const app = express();


app.use(cors())
//app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',router)

app.get('/', (req, res) => {
    res.send("<h1>hello world</h1>");
});


const PORT =  4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
