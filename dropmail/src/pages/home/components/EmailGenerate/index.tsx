import React from "react";
import { useMutation } from "@apollo/client";
import { INTRODUCE_SESSION_MUTATION } from "../../../../graphql/getSession";
import Input from "./components/Input";
import Refresh from "./components/Refresh";
import { View } from "./styles";

const EmailGenerate: React.FC = (): JSX.Element => {
  const [introduceSession] = useMutation(INTRODUCE_SESSION_MUTATION, {});

  const handleIntroduceSession = async () => {
    try {
      const { data } = await introduceSession();
      // A variável 'data' conterá a resposta da mutação
      console.log(data);
    } catch (error) {
      console.error("Erro na mutação:", error);
    }
  };

  return (
    <View>
      <Input />
      <Refresh />
      <button onClick={handleIntroduceSession}>Introduzir Sessão</button>
    </View>
  );
};

export default EmailGenerate;
