import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import initDB from './backend/config/db.js';
import userRoutes from './backend/routes/userRoutes.js'


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
dotenv.config();

// it is going to connect your backend application to mongodb database
initDB()


app.get("/api", (req, res) => ( 
    res.send("hello from node server")
));

app.use("/api/users/",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port,() => {
   console.log(`server is running on ${port}`)
});

