import { Router } from 'express';

import LocationsController from '../controller/LocationsController';

const LocationsRouter = Router();
const locationsController = new LocationsController();

LocationsRouter.get('/', locationsController.index);
LocationsRouter.post('/', locationsController.create);

export default LocationsRouter;
