import servless from 'serverless-http';
import { app } from './app';

const finish = () => {
	console.log('Clean up...');
	exit(0, null);
};

const exit = (code: number, msg: any) => {
	console.log(`Exiting with code '${code}'`, msg);
	process.exit(code);
};

process.on('SIGINT', finish);
process.on('SIGTERM', () => exit(1, 'SIGTERM'));
process.on('uncaughtException', (err) => console.error('Exception não capturada', err));
process.on('unhandledRejection', (err) => console.error('Promise não capturada', err));

export const handler = servless(app);
