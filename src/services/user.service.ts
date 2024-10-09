import { AppDataSource } from '../repos/db';
import { User } from '../entity/User';

const userRepository = AppDataSource.getRepository(User);

export const getAllUsers = async () => {
  return await userRepository.find({
    order: { name: 'ASC'},
  });
};

export const getUserById = async (id: number) => {
  return await userRepository.findOne({
    where: { id: id },
  });
};

export const createUser = async (userData: Partial<User>) => {
  return await userRepository.save(new User(userData));
};

export const updateUser = async (userToUpdate: User, userData: Partial<User>) => {
  Object.assign(userToUpdate, userData);
  return await userRepository.save(userToUpdate);
};

export const deleteUser = async (id: number) => {
  return await userRepository.delete(id);
};
