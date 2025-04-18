import express from 'express'
const app = express();

import authRouter from './routes/auth'

app.use('/auth');
