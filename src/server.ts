import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/movies', movieRoutes);

app.listen(port, () => console.log(`Server is running at ${port}`))

