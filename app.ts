import "reflect-metadata";
import express from 'express';
import userRouter from './routes/router';

const app = express();
app.use(express.json());
const port = 3007;

app.use('/user',userRouter);

app.listen(port,() => {
    console.log('Server running on port 3007');
});
