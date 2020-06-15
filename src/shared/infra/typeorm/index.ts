import { createConnection, Connection } from 'typeorm';

export default async (name = 'default'): Promise<Connection> => {
  return createConnection();
};
