import React from "react";
import { View } from "./styles";
import EmailGenerate from "../EmailGenerate";
import Inbox from "../Inbox";

const Content: React.FC = (): JSX.Element => {
  return (
    <View>
      <EmailGenerate />
      <Inbox />
    </View>
  );
};

export default Content;
