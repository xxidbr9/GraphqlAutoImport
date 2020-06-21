import path from "path";
import { mergeTypeDefs, mergeResolvers, loadFilesSync } from "graphql-tools";

// buat graphql
const typeDefsArray = loadFilesSync(
  path.join(__dirname, `typeDefs/**/*.graphql`)
);
export const typeDefs = mergeTypeDefs(typeDefsArray, { all: true });

// buat resolvers
const resolversArray = loadFilesSync(
  path.join(__dirname, `resolvers/**/*.resolvers.*`)
);
export const resolvers = mergeResolvers(resolversArray);
