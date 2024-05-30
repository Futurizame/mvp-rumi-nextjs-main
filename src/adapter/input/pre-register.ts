import { Optional } from "../../domain/shared/try-fn";
import {
  PreRegisterFormData,
  PreRegisterRemote,
} from "../../domain/preregistation/types";
import { getMongoDbRepository } from "../output/mongo-db-repository";
import { postUserPreRegisterUseCase } from "../../domain/preregistation/use-case";

export const preRegisterHandler = async (
  data: PreRegisterFormData,
): Promise<Optional<PreRegisterRemote>> => {
  const mongoDbRepo = getMongoDbRepository();

  return postUserPreRegisterUseCase(mongoDbRepo).registerNewUser(data);
};
