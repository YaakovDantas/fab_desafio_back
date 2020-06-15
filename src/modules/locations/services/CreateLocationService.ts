import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Location from '../infra/typeorm/entities/Location';
import ILocationsRepository from '../repositories/ILocationsRepository';

interface IRequest {
  pais: string;
  estado: string;
  cidade: string;
  cep: string;
}

@injectable()
class CreateLocationService {
  constructor(
    @inject('LocationsRepository')
    private locationsRepository: ILocationsRepository,
  ) {}

  public async execute({
    cep,
    cidade,
    estado,
    pais,
  }: IRequest): Promise<Location | null> {
    const checkLocationExists = await this.locationsRepository.findByCity(
      cidade,
      cep,
    );
    if (checkLocationExists)
      throw new AppError('Esta cidade já existe nesse CEP', 422);

    const location = await this.locationsRepository.create({
      cep,
      cidade,
      pais,
      estado,
    });
    return location;
  }
}

export default CreateLocationService;
