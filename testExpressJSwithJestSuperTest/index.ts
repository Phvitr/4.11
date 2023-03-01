import express from 'express';
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Hi there");
})

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
})

export default app;