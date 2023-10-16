import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

const ApolloProviderWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloProviderWrapper;
