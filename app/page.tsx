import { rickAndMortyHandler } from "../src/adapter/input/rick-morty";
import Link from "next/link";

export default async function Home() {
  const response = await rickAndMortyHandler(1);

  const [ok, character, error] = response;

  return (
    <main className="flex flex-col items-center p-24">
      <p>Home Page</p>
      <Link href="counter">To Counter</Link>
      {ok ? (
        <div className="flex flex-col p-4 gap-2">
          <p>{character.id}</p>
          <p>{character.name}</p>
          <p>{character.status}</p>
        </div>
      ) : (
        <div>
          <p>Character not found</p>
          <p>{error.message}</p>
        </div>
      )}
    </main>
  );
}
