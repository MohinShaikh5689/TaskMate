import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDB } from './DB/connectToDB';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
    connectToDB();

});