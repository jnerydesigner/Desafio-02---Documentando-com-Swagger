/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const verifyEmailExists = this.usersRepository.findByEmail(email);

    if (verifyEmailExists) {
      throw new Error("User already exists");
    }


    const user = this.usersRepository.create({
      name,
      email
    })


    return user;
  }
}

export { CreateUserUseCase };
