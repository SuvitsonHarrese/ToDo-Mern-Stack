import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from "./database/db.js";
import route from "./routers/route.js";

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use('/', route);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running success on Port ${PORT}`));