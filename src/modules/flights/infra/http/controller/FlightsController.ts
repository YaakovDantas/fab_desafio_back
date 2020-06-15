import { Request, Response, response } from 'express';
import { container } from 'tsyringe';
import randomstring from 'randomstring';
import { parseISO } from 'date-fns';

import CreateFlightService from '@modules/flights/services/CreateFlightService';
import FlightsRepository from '@modules/flights/infra/typeorm/repositories/FlightsRepository';

export default class CustomersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const flightsRepository = container.resolve(FlightsRepository);
    const flights = await flightsRepository.all();
    return response.json({ flights });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { origem_id, destino_id, data } = request.body;

    const createFlight = container.resolve(CreateFlightService);

    const codigoVoo = randomstring.generate({
      length: 12,
      charset: 'alphabetic',
    });

    const parsedDate = parseISO(data);

    const customer = await createFlight.execute({
      codigoVoo,
      data: parsedDate,
      destino_id,
      origem_id,
    });

    return response.json(customer);
  }
}
