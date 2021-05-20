/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.showUserProfileUseCase.execute({ user_id });

    console.log(user)

    if (!user) {
      return response.status(404).json({ error: "mensagem do erro" });
    }

    return response.status(201).json(user);
  }
}

export { ShowUserProfileController };
