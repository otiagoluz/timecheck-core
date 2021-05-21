import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import Succursale from '../models/Succursale';


export default {
  async index(req: Request, resp: Response) {
    const succursaleRepository = getRepository(Succursale);

    const succursales = await succursaleRepository.find()
    return resp.json(succursales);
  },

  async show(req: Request, resp: Response) {
    const { id } = req.params

    const succursaleRepository = getRepository(Succursale);
    const succursale = await succursaleRepository.findOneOrFail(id);
    return resp.json(succursale);
  },

  async create(req: Request, resp: Response) {
    const succursaleRepository = getRepository(Succursale);

    const {
      name,
      province,
      address_1,
      business_number, 
      city,
      latitude, 
      longitude,
      postal_code,
      users
    } = req.body as Succursale;
    
    const succursale = succursaleRepository.create({
      name,
      province,
      address_1,
      business_number, 
      city,
      latitude, 
      longitude,
      postal_code,
      users
    });
    await succursaleRepository.save(succursale);
    return resp.status(200).json(succursale);
  }
}






