import React from "react";
import { useRecoilState } from "recoil";
import { currentMail, mails } from "../../../../../../../../recoil/atoms";
import Fallback from "../Fallback";
import {
  BoxMail,
  BoxText,
  BoxTitleMail,
  Text,
  TitleMail,
  View,
} from "./styles";

const ContentEmail: React.FC = (): JSX.Element => {
  const [currentMails, setCurrentMails] = useRecoilState(mails);
  const [mail, setMail] = useRecoilState(currentMail);

  const type: "emails" | "empty" =
    (currentMails?.length ?? 0) > 0 ? "emails" : "empty";

  return (
    <View>
      <BoxTitleMail>
        <TitleMail>{mail?.headerSubject}</TitleMail>
      </BoxTitleMail>
      <BoxMail>
        <Fallback visible={!mail} type={type} count={currentMails?.length} />
        <BoxText>
          <Text>{mail?.text}</Text>
        </BoxText>
      </BoxMail>
    </View>
  );
};

export default ContentEmail;
