import { Router } from 'express';
import flightsRouter from '@modules/flights/infra/http/routes/flights.routes';
import locationsRouter from '@modules/locations/infra/http/routes/locations.routes';

const routes = Router();

routes.use('/flights', flightsRouter);
routes.use('/locations', locationsRouter);

export default routes;
