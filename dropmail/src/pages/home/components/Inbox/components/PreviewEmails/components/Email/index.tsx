import React from "react";
import { fetchMailsSchemas } from "../../../../../../../../types/fetchMailsSchemas";
import { Description, Text, Title, View } from "./styles";

type Props = {
  mail: fetchMailsSchemas;
  onClick: (selectedMail: fetchMailsSchemas) => void;
};

const Email: React.FC<Props> = ({ mail, onClick }): JSX.Element => {
  return (
    <View onClick={() => onClick(mail)}>
      <Title>{mail.headerSubject}</Title>
      <Description>{mail.fromAddr}</Description>
      <Text>{mail.text}</Text>
    </View>
  );
};

export default Email;
