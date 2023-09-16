import { NextFunction, Request, Response } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
	console.log(`[NOT_FOUND] METHOD: ${req.method}, PATH: ${req.url}`);
	res.status(404).send({ message: 'Not Found' });
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	console.log('[INTERNAL_SERVER_ERROR] Erro não capturado!', err);
	res.status(500).send({ message: 'Internal Server Error' });
};
