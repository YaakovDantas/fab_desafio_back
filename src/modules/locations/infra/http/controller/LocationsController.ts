import { Request, Response, response } from 'express';
import { container } from 'tsyringe';

import CreateLocationService from '@modules/locations/services/CreateLocationService';
import LocationsRepository from '@modules/locations/infra/typeorm/repositories/LocationsRepository';

export default class LocationsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const locationsRepository = container.resolve(LocationsRepository);
    const locations = await locationsRepository.all();
    return response.json({ locations });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { cep, estado, pais, cidade } = request.body;

    const createLocation = container.resolve(CreateLocationService);

    const customer = await createLocation.execute({
      cep,
      estado,
      pais,
      cidade,
    });

    return response.json(customer);
  }
}
