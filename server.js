import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { FeatureWeightResolver } from "./app/resolvers/featureWeight";

const auth_string = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIwNGRhMWUyZi1jMTllLTRiODAtYmYwOC1lZjUzMGZhMTNiYzgiLCJzdWIiOiIwMDBlOGVmNy0wN2ZiLTRjYTMtOWNkOC1hZDJkYmQ3YzQwYjciLCJzdWJfbmFtZSI6IkFsZXJ0IFVJIiwicm9sZXMiOlt7ImlkIjoiNjkwNzY2OWUtMjc1NS0xMWU5LTlkN2EtMGI5ZjA4MTdjMWEwIiwibmFtZSI6InVzZXIifV0sInBlcm1pc3Npb25zIjpbeyJpZCI6IjQ4ZDllZGE2LTI3NTUtMTFlOS05NTYzLWViOWZkZTM5MzcwNiIsIm5hbWUiOiJhbTpsb2dpbiJ9XSwiaXNzIjoiaHR0cDovLzM1LjE5Mi4xNDUuMjIwOjkwMDAiLCJleHAiOjE1ODgxOTA3MTMsImlhdCI6MTU4ODE4NzExMywidHlwIjoiQmVhcmVyIiwibmJmIjoxNTg4MTg3MDUzfQ.v-4cjU3ZLuF8B9plPCiRBR1M_pfzRHVANMSv_o9vkrSAIQhdom6VM8YzhAVzXyO8Wi4QJaZeAQ_F0FJ2iSt8GTDklCHDxLXEhBS4w0KiWy4tOS9dIWmu0P_JcBE4YM8a2010XYNM7VecYLecMEppKMiICDQZr2G-XIOy-U8ODtwkGMDvpq4DA-1z1tZ1VglKikjhTGuvAJ3zbiu5jCvs_GwDzrgSRTwK6qFo9z4pN2VmxkQQQhko1gEwm6M6WccYxKbNcZYiv6Uvdid7UlQtBcDChti5LHV0dcZrZFHmL1_WFxGoXhymbQQu7xD_q6u4lepN78-fg-RjNesT9yoRBA`;
const session = `cd6dc442-df6e-410d-8094-8cab8d8ef4d1.awmctm9juQsKSWcsn6Y863r1X3A`;
const server = `http://localhost:4200/rest/v1`;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [FeatureWeightResolver],
    emitSchemaFile: true,
    validate: false,
  });

  console.log('here')

  const server = new ApolloServer({ schema });
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
      `🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`
    )
  );
};
main().catch((error) => {
  console.log(error, "error");
});
