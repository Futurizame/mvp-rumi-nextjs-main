import { rickAndMortyHandler } from "../src/adapter/input/rick-morty";

export default async function Home() {
  const [ok, character, error] = await rickAndMortyHandler(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Home Page</p>
      {ok ? (
        <div>
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
