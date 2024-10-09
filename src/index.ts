import 'reflect-metadata';
import { AppDataSource } from './repos/db';
import express from 'express';
import routes from './route/index';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API!' });
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    
    const host = 'localhost';
    const port = 3000;

    app.listen(port, host, () => {
      console.log(`Server is running at http://${host}:${port}`);
    });
    
    app.use('/', routes);
  })
  .catch((error: unknown) => {
    console.log('Error during Data Source initialization:', error);
  });
