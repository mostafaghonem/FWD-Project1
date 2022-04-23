import express from 'express';
import routes from './routes/index';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/api' , routes )

const port = process.env.PORT || 5000;
app.listen(port , ()=>{
    console.log(`app listening on port ${port}`);
})


export default app;