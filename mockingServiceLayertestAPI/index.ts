import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./src/router/user.router";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
const DB_URL = 'mongodb://localhost:27017/dbtest2';

mongoose.connect(DB_URL)
.then(() => console.log('Connected'))
.catch(err => console.log('connection error', err.message));

app.use('/api/v1', router);

app.listen(PORT, () => console.log('App is listening on http://localhost:${PORT}'))

export default app;