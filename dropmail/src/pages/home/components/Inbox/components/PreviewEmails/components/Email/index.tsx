import React from "react";
import { Description, Text, Title, View } from "./styles";

const Email: React.FC = (): JSX.Element => {
  return (
    <View>
      <Title>Hello</Title>
      <Description>Welcome</Description>
      <Text>Your temp e-mail address is ready...</Text>
    </View>
  );
};

export default Email;
