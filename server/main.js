import express from 'express';
import {Server} from 'http';

const app = express();

const server = Server(app);

app.get('/', (req,res) => {
  res.status(200).send('Welcome to the chatting app...');
})

server.listen(8080, () => {
  console.log('Server starting on port 8080....');
})
