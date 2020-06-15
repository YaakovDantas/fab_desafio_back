import { Router } from 'express';

import FlightsController from '../controller/FlightsController';

const FlightsRouter = Router();
const flightsController = new FlightsController();

FlightsRouter.get('/', flightsController.index);
FlightsRouter.post('/', flightsController.create);

export default FlightsRouter;
