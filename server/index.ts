import express from 'express'
const app = express();

import authRouter from './routes/auth'

const cors = require("cors");
app.use(cors());
app.use('/auth', authRouter);


app.listen(8080, () => {
    console.log('Listening on port 8080....')
})