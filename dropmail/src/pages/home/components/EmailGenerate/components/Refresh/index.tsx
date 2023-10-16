import React from "react";
import refreshSrc from "../../../../../../assets/svg/refetch.svg";
import { Icon, RefreshIcon, RefreshWrapper, Text, View } from "./styles";

const Refresh: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text>Autorefresh in</Text>
      <RefreshWrapper>
        <Text>Refresh</Text>
        <Icon>
          <RefreshIcon src={refreshSrc} alt="Refresh Icon" />
        </Icon>
      </RefreshWrapper>
    </View>
  );
};

export default Refresh;
