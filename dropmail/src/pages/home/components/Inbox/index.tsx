import React from "react";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { FETCH_MAILS } from "../../../../graphql/Querys/fetchMails";
import { mails, session } from "../../../../recoil/atoms";
import Email from "./components/Email";
import PreviewEmail from "./components/PreviewEmails";
import { View } from "./styles";

const Inbox: React.FC = (): JSX.Element => {
  const [actualSession, setActualSession] = useRecoilState(session);
  const [currentMails, setCurrentMails] = useRecoilState(mails);
  const { data } = useQuery(FETCH_MAILS, {
    variables: { id: actualSession?.id },
    onCompleted: (res) => {
      setCurrentMails(res.session.mails);
    },
  });

  return (
    <View>
      <PreviewEmail />
      <Email />
    </View>
  );
};

export default Inbox;
