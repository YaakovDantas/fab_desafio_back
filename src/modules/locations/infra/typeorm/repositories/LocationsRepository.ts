import { getRepository, Repository } from 'typeorm';

import ILocationsRepository from '@modules/locations/repositories/ILocationsRepository';
import ICreateLocationDTO from '@modules/locations/dtos/ICreateLocationDTO';
import Location from '../entities/Location';

class LocationsRepository implements ILocationsRepository {
  private ormRepository: Repository<Location>;

  constructor() {
    this.ormRepository = getRepository(Location);
  }

  public async all(): Promise<Location[] | null> {
    const locations = this.ormRepository.find();

    return locations;
  }

  public async create({
    cep,
    cidade,
    estado,
    pais,
  }: ICreateLocationDTO): Promise<Location> {
    const location = this.ormRepository.create({
      cep,
      cidade,
      estado,
      pais,
    });

    await this.ormRepository.save(location);

    return location;
  }

  public async findByCity(
    cidade: string,
    cep: string,
  ): Promise<Location | undefined> {
    const findCity = await this.ormRepository.findOne({
      where: { cidade, cep },
    });

    return findCity;
  }
}

export default LocationsRepository;
