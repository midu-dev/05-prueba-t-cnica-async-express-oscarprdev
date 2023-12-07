import express from 'express';
import usersRouter from './api/features/index.js';

export const app = express();
app.use(express.json());
app.use('/items', usersRouter);

// EJERCICO 6 aquí

export const server = app.listen(3000, () => {
	console.log(`http://localhost:${3000}`);
});
