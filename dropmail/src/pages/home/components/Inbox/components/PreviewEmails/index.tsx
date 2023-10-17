import React from "react";
import { useRecoilState } from "recoil";
import ScrollView from "../../../../../../components/ScrollView";
import { currentMail, mails } from "../../../../../../recoil/atoms";
import Email from "./components/Email";
import { Header, Text, View } from "./styles";
import { fetchMailsSchemas } from "../../../../../../types/fetchMailsSchemas";

const PreviewEmail: React.FC = (): JSX.Element => {
  const [currentMails, setCurrentMails] = useRecoilState(mails);
  const [mail, setMail] = useRecoilState(currentMail);

  const onClick = (selectedMail: fetchMailsSchemas) => setMail(selectedMail);

  return (
    <View>
      <Header>
        <Text>Entrada</Text>
      </Header>
      <ScrollView>
        {currentMails?.map<JSX.Element>((mail, index) => {
          return <Email mail={mail} onClick={onClick} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default PreviewEmail;
