/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { User } from "../../model/User";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";



class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response<User> {
    const { user_id } = request.headers;



    const users = this.listAllUsersUseCase.execute(user_id);


    return response.status(201).json(users);
  }
}

export { ListAllUsersController };
