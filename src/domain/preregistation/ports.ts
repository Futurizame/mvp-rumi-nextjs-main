import { PreRegisterFormData, PreRegisterRemote } from "./types";
import { Optional } from "../shared/try-fn";

// inbound
export interface PreRegisterService {
  registerNewUser: (
    registerData: PreRegisterFormData,
  ) => Promise<Optional<PreRegisterRemote>>;
}

// outbound
export interface MongoDbRepository {
  postPreRegisterUser: (
    data: PreRegisterFormData,
  ) => Promise<Optional<PreRegisterRemote>>;
}

// use case
export type PostUserPreRegisterUseCase = (
  repo: MongoDbRepository,
) => PreRegisterService;
