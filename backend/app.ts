import 'express-async-error';
import express from 'express';
import servless from 'serverless-http';
import cors from 'cors';
import { routes } from './routes';
import { errorHandler, notFound, trackRequest } from './middlewares';

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(trackRequest);

['/', '/api', '/.netlify/functions/index'].forEach((path) =>
	app.use(path, routes)
);

app.use('*', notFound);
app.use(errorHandler);

export const handler = servless(app);
