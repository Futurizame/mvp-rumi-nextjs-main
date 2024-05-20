import { CharacterRepository, RickAndMortyUseCase } from "./ports";
import { Optional } from "../shared/try-fn";
import { Character } from "./types";

export const rickAndMortyUseCase: RickAndMortyUseCase = (
  characterRepository: CharacterRepository,
) => ({
  getCharacter: (id: number): Promise<Optional<Character>> => {
    return characterRepository.getCharacter(id);
  },
});
