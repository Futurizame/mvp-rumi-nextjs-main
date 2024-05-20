import { Optional } from "../shared/try-fn.js";
import { Character } from "./types.js";

// inbound
export interface CharacterService {
  getCharacter: (id: number) => Promise<Optional<Character>>;
}

// outbound
export interface CharacterRepository {
  getCharacter: (id: number) => Promise<Optional<Character>>;
}

// use case
export type RickAndMortyUseCase = (
  repo: CharacterRepository,
) => CharacterService;
