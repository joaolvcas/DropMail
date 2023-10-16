import React from "react";
import logoSrc from "../../assets/img/tempmail.png";
import { Logo, View } from "./styles";

const Header: React.FC = (): JSX.Element => {
  return (
    <View>
      <Logo src={logoSrc} alt="logo tempmail" />
    </View>
  );
};

export default Header;
