import express from 'express'
import router from './routes/url.js';
import  connectToMongoDb  from './connect.js';

const app = express();
const PORT = 8000;

connectToMongoDb("mongodb+srv://rajdeep:admin@cluster0.a5ct2.mongodb.net/UrlShort")
.then(() => console.log("Database connected Successfully"))
.catch((err) => console.log(err));

app.use(express.json())
app.use('/url', router)


app.listen(PORT, () => console.log("Server Start Successfully"));
