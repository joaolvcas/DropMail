import React, { ReactNode } from "react";
import { Scroll } from "./styles";

interface ScreenProps {
  children: ReactNode;
}

const ScrollView: React.FC<ScreenProps> = ({ children }): JSX.Element => {
  return (
    <Scroll style={{ height: "270px", overflowY: "scroll" }}>{children}</Scroll>
  );
};

export default ScrollView;
