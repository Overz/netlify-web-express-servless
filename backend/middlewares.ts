import { NextFunction, Request, Response } from 'express';
import crypto from 'crypto';

export const trackRequest = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const correlationId = req.headers['x-correlation-id'] || crypto.randomUUID();

	console.table({
		info: 'TRACKING REQUEST',
		ip: req.ip,
		method: req.method,
		path: req.url,
		body: req.body,
		query: req.query,
		'x-correlation-id': correlationId,
		'user-agent': req.headers['user-agent'] || 'unknown',
	});

	res.set({ 'x-correlation-id': correlationId });

	next();
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
	console.log(`[NOT_FOUND] METHOD: ${req.method} - PATH: ${req.url}`);
	res.status(404).send({ message: 'Not Found' });
};

export const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log('[INTERNAL_SERVER_ERROR] Erro não capturado!', err);
	res.status(500).send({ message: 'Internal Server Error' });
};
