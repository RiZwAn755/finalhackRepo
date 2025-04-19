import express from 'express'
const app = express();

import authRouter from './routes/auth'

app.use('/auth', authRouter);
app.use()

app.listen(3000, () => {
    console.log('Listening on port 3000....')
})