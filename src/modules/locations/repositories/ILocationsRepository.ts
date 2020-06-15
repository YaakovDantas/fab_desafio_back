import Location from '../infra/typeorm/entities/Location';

import ICreateLocationDTO from '../dtos/ICreateLocationDTO';

export default interface ILocationsRepository {
  all(): Promise<Location[] | null>;
  create(data: ICreateLocationDTO): Promise<Location>;
  findByCity(cidade: string, cep: string): Promise<Location | null>;
}
