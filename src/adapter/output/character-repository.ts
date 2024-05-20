import { CharacterRepository } from "../../domain/rickandmorty/ports";
import { Optional, tryFn, tryFnSync } from "../../domain/shared/try-fn";
import { Character } from "../../domain/rickandmorty/types";
import { object, string, number, ObjectSchema } from "yup";

const baseUrl = "https://rickandmortyapi.com/api/character/";

export const characterRepository = (): CharacterRepository => ({
  getCharacter: async (id: number): Promise<Optional<Character>> => {
    const [ok, rawCharacter, error] = await tryFn<unknown>(async () => {
      const response = await fetch(`${baseUrl}${id}`);
      return response.json();
    });

    if (!ok) {
      return [false, undefined, error];
    }

    const schema: ObjectSchema<Character> = object({
      id: number().required(),
      name: string().required(),
      status: string().required(),
    });

    return tryFnSync(() => schema.validateSync(rawCharacter));
  },
});
