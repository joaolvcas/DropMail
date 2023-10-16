import React from "react";
import { View } from "./styles";
import PreviewEmail from "./components/PreviewEmails";
import Email from "./components/Email";

const Inbox: React.FC = (): JSX.Element => {
  return (
    <View>
      <PreviewEmail />
      <Email />
    </View>
  );
};

export default Inbox;
