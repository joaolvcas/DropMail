import React from "react";
import ScrollView from "../../../../../../components/ScrollView";
import { Header, Text, View } from "./styles";
import Email from "./components/Email";

const PreviewEmail: React.FC = (): JSX.Element => {
  return (
    <View>
      <Header>
        <Text>Inbox</Text>
      </Header>
      <ScrollView>
        <Email />
      </ScrollView>
    </View>
  );
};

export default PreviewEmail;
