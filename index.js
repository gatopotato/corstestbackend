import express from 'express';
import cors from 'cors';
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
    });
app.post('/login', (req, res) => {
    res.json({ message: 'Login Success!' });
    } );
app.listen(port, () => {
    console.log('Server is running on port '+ port);
    });