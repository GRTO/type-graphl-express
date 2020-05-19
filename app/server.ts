import { ApolloServer } from "apollo-server-express";
import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { FeatureWeightResolver } from "./resolvers/featureWeight";

const main = async () => {
  // Access to our env variables
  // Choose which file are server is going to use
  dotenv.config({
    path: process.env.NODE_ENV === "dev" ? ".env" : "production.env",
  });

  const schema = await buildSchema({
    resolvers: [FeatureWeightResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    playground: process.env.NODE_ENV === "dev",
  });
  const app = Express();
  // Adding cors to our app
  const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));
  // setting up the middleware
  server.applyMiddleware({ app });
  // Listening the port
  app.listen({ port: 3333 }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:3333${
        server.graphqlPath
      }, based on the following backend service: ${
        process.env.SP_BASE_URL || "Not server found"
      }`
    )
  );
};
main().catch((error) => {
  console.log(error, "error");
});
