import express from "express";
import cors from 'cors'
import bp from "body-parser";
import { ApolloServer, ForbiddenError } from "apollo-server-express";

import { resolvers, typeDefs } from "./app/graphql";

const server = async () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
  });

  gqlServer.applyMiddleware({ app });

  app.use(bp.urlencoded({ extended: true }));
  app.use(bp.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );

  app.get("/start", (req, res, next) => {
    res.status(200).json({ error: [], message: "NOW YOUR IN BRUHHH !!!" });
  });

  await app.listen(PORT, () => {
    console.log(`app running http://localhost:${PORT}`);
    console.log(
      `GraphQL run on http://localhost:${PORT}${gqlServer.graphqlPath}`
    );
  });
};

server();
