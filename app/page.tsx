import { rickAndMortyHandler } from "../src/adapter/input/rick-morty";
import Link from "next/link";
import connectMongo from "../src/adapter/output/mongo-repository";

async function checkMongoConnection() {
  try {
    await connectMongo();
    console.log("Conexión exitosa a MongoDB");
    return true;
  } catch (error) {
    console.error("Error al conectar a MongoDB:");
    return false;
  }
}

export default async function Home() {
  const isConnected = await checkMongoConnection();

  if (isConnected) {
    const response = await rickAndMortyHandler(1);
    const [ok, character, error] = response;

    return (
      <main className="flex flex-col items-center p-24">
        <p>Conexión exitosa a MongoDB</p>
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
  } else {
    return (
      <main className="flex flex-col items-center p-24">
        <p>No se pudo establecer la conexión con la base de datos.</p>
      </main>
    );
  }
}
