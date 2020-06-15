import { container } from 'tsyringe';

import IFlightRepository from '@modules/flights/repositories/IFlightRepository';
import FlightsRepository from '@modules/flights/infra/typeorm/repositories/FlightsRepository';

import ILocationsRepository from '@modules/locations/repositories/ILocationsRepository';
import LocationsRepository from '@modules/locations/infra/typeorm/repositories/LocationsRepository';

container.registerSingleton<IFlightRepository>(
  'FlightsRepository',
  FlightsRepository,
);

container.registerSingleton<ILocationsRepository>(
  'LocationsRepository',
  LocationsRepository,
);
