import 'dotenv/config'
import express from "express";
import { PORT } from '../environments';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(PORT, () => console.log(`server running in localhost:${ PORT }`));