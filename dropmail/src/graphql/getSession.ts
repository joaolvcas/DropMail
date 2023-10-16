import { gql } from "@apollo/client";

export const INTRODUCE_SESSION_MUTATION = gql`
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`;
