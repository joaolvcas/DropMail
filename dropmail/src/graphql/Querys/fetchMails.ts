import { gql } from "@apollo/client";

export const FETCH_MAILS = gql`
  query FetchMails($id: ID!) {
    session(id: $id) {
      mails {
        rawSize
        fromAddr
        toAddr
        downloadUrl
        text
        headerSubject
      }
    }
  }
`;
