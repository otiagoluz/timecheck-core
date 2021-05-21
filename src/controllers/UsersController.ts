import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import User from '../models/User';


export default {
  async index(req: Request, resp: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find()
    return resp.json(users);
  },

  async show(req: Request, resp: Response) {
    const { id } = req.params

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOneOrFail(id);
    return resp.json(user);
  },

  async create(req: Request, resp: Response) {
    const usersRepository = getRepository(User);

    const {
      first_name,
      last_name,
      email,
      password,
      is_admin,
      succursales
    } = req.body as User;
    
    const user = usersRepository.create({
      first_name,
      last_name,
      email,
      password,
      is_admin,
      succursales
    });
    await usersRepository.save(user);
    return resp.status(200).json(user);
  }
}