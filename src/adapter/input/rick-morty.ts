import { Character } from "../../domain/rickandmorty/types";
import { characterRepository } from "../output/character-repository";
import { rickAndMortyUseCase } from "../../domain/rickandmorty/use-case";
import { Optional } from "../../domain/shared/try-fn";

export const rickAndMortyHandler = (
  id: number,
): Promise<Optional<Character>> => {
  const repo = characterRepository();

  return rickAndMortyUseCase(repo).getCharacter(id);
};
