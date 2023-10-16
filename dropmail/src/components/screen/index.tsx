import React, { ReactNode } from "react";
import { View } from "./styles";

interface ScreenProps {
  children: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }): JSX.Element => {
  return <View>{children}</View>;
};

export default Screen;
