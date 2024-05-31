import { MongoDbRepository, PostUserPreRegisterUseCase } from "./ports";
import { PreRegisterFormData, PreRegisterRemote } from "./types";
import { Optional } from "../shared/try-fn";

export const postUserPreRegisterUseCase: PostUserPreRegisterUseCase = (
  repo: MongoDbRepository,
) => ({
  registerNewUser: (
    registerData: PreRegisterFormData,
  ): Promise<Optional<PreRegisterRemote>> => {
    return repo.postPreRegisterUser(registerData);
  },
});
