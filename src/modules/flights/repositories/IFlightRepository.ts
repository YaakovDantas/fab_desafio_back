import Flight from '../infra/typeorm/entities/Flight';

import ICreateFlightDTO from '../dtos/ICreateFlightDTO';

export default interface IFlightsRepository {
  all(): Promise<Flight[] | null>;
  create(data: ICreateFlightDTO): Promise<Flight>;
  findByDestinyAndDay(destino_id: string, data: Date): Promise<Flight>;
  findByTimeOfFlight(data: Date): Promise<Flight>;
}
