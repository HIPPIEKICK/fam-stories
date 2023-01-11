/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import familyRouter from './routers/family.router';
import * as cors from 'cors';
import { connectToServer } from './mongoDbClient';



(async () => { 
  await connectToServer()
})();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/family', familyRouter);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to FamStories-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
