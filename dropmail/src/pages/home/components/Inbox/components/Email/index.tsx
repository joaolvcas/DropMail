import React from "react";
import { Header, View } from "./styles";
import ContentEmail from "./components/Email";

const Email: React.FC = (): JSX.Element => {
  return (
    <View>
      <Header />
      <ContentEmail />
    </View>
  );
};

export default Email;
