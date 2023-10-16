import React from "react";
import { BoxMail, BoxTitleMail, TitleMail, View } from "./styles";

const ContentEmail: React.FC = (): JSX.Element => {
  return (
    <View>
      <BoxTitleMail>
        <TitleMail>Welcome</TitleMail>
      </BoxTitleMail>
      <BoxMail></BoxMail>
    </View>
  );
};

export default ContentEmail;
