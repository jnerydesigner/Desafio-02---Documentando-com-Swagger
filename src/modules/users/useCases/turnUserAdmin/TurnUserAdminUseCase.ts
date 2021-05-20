/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const verifyUser = this.usersRepository.findById(user_id);

    if (!verifyUser) {
      throw new Error("User Does Not exists");
    }

    const user = this.usersRepository.turnAdmin(verifyUser);

    return user;
  }
}

export { TurnUserAdminUseCase };
