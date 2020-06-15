import { inject, injectable } from 'tsyringe';
import { startOfDay, isEqual, isAfter, addMinutes } from 'date-fns';
import AppError from '@shared/errors/AppError';

import Flight from '../infra/typeorm/entities/Flight';
import IFlightRepository from '../repositories/IFlightRepository';

interface IRequest {
  origem_id: string;
  destino_id: string;
  data: Date;
  codigoVoo: string;
}

@injectable()
class CreateFlightService {
  constructor(
    @inject('FlightsRepository')
    private fightsRepository: IFlightRepository,
  ) {}

  public async execute({
    codigoVoo,
    origem_id,
    destino_id,
    data,
  }: IRequest): Promise<Flight> {
    // const checkFlightInDayToDestiny = await this.fightsRepository.findByDestinyAndDay(
    //   destino_id,
    //   data,
    // );

    // if (checkFlightInDayToDestiny)
    //   throw new AppError(
    //     'Não é possível ter 2 voos para o mesmo destino, no mesmo dia.',
    //     422,
    //   );

    const checkTimeOfFlight = await this.fightsRepository.findByTimeOfFlight(
      data,
    );

    if (checkTimeOfFlight)
      throw new AppError(
        'É necessário um intervalo de 30 minutos entre voos.',
        422,
      );

    const flight = await this.fightsRepository.create({
      codigoVoo,
      data,
      origem_id,
      destino_id,
    });

    return flight;
  }
}

export default CreateFlightService;
