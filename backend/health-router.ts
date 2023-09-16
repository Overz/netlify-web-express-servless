import { Request, Response, Router } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
	res.send({ time: new Date() });
});

export { router as helloRouter };
