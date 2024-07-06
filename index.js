import express from 'express';
import cors from 'cors';
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin:true
    preflightContinue: true
}));

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
    });
app.post('/login', (req, res) => {
    res.json({ message: 'Login Success!' });
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // res.setHeader('Access-Control-Allow-Credentials', true);
    } );

app.options("*",cors());

app.listen(port, () => {
    console.log('Server is running on port '+ port);
    });
