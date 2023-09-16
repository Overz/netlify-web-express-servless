import { Router } from 'express';

import { healthRouter } from './health-router';

export const routes: Router[] = [healthRouter];
