import { MongoDbRepository } from "../../domain/preregistation/ports";
import {
  PreRegisterFormData,
  PreRegisterRemote,
} from "../../domain/preregistation/types";
import { Optional, tryFn } from "../../domain/shared/try-fn";
import { MongoClient } from "mongodb";

export const getMongoDbRepository = (): MongoDbRepository => ({
  postPreRegisterUser: async (
    data: PreRegisterFormData,
  ): Promise<Optional<PreRegisterRemote>> => {
    const uri = process.env.MONGO_CONNECTION_STRING || "";

    const client = new MongoClient(uri);

    const database = client.db("rumigrow");
    const users = database.collection<PreRegisterFormData>("users");

    const [ok, result, error] = await tryFn(() => users.insertOne(data, {}));

    await client.close();

    if (!ok) {
      return [false, undefined, error];
    }

    const finalData: PreRegisterRemote = {
      id: result.insertedId.toString(),
      ...data,
    };

    return [true, finalData, undefined];
  },
});
