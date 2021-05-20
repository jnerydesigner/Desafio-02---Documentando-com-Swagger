/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    console.log(user_id)
    const verifyUserAdmin = this.usersRepository.findById(user_id);

    if (!verifyUserAdmin.admin) {
      throw new Error("Mensagem do erro");
    }

    const users = this.usersRepository.list();


    return users;

  }
}

export { ListAllUsersUseCase };
