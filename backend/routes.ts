import { Router } from 'express';

import { helloRouter } from './health-router';

export const routes: Router[] = [helloRouter];
