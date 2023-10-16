import React from "react";
import Screen from "../../components/screen";
import Header from "../../components/header";
import Content from "./components/Content";

const Home: React.FC = (): JSX.Element => {
  return (
    <Screen>
      <Header />
      <Content />
    </Screen>
  );
};

export default Home;
