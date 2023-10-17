import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { INTRODUCE_SESSION_MUTATION } from "../../../../graphql/Mutations/getSession";
import Input from "./components/Input";
import Refresh from "./components/Refresh";
import { View } from "./styles";
import { getSessionSchemas } from "../../../../types/getSessionSchemas";
import { useRecoilState } from "recoil";
import { session } from "../../../../recoil/atoms";

const EmailGenerate: React.FC = (): JSX.Element => {
  const [currentEmail, setCurrentEmail] = useRecoilState(session);
  const [introduceSession, { loading }] = useMutation(
    INTRODUCE_SESSION_MUTATION,
    {}
  );

  const CheckSessionIsAvalible = (expiresAt: Date) => {
    const currentDate = new Date();
    const dateSessionDeadline = new Date(expiresAt);

    return dateSessionDeadline > currentDate;
  };

  const handleIntroduceSession = async () => {
    const storagedData = localStorage.getItem("@tempmail:session");
    const currentSession = JSON.parse(storagedData as string);
    const hasSessionAvalible = CheckSessionIsAvalible(
      currentSession?.expiresAt
    );

    if (hasSessionAvalible) {
      return setCurrentEmail(currentSession);
    }

    try {
      await introduceSession({
        onCompleted: (res) => {
          const session: getSessionSchemas = {
            id: res?.introduceSession.id,
            expiresAt: res?.introduceSession.expiresAt,
            email: res?.introduceSession.addresses[0].address,
          };
          setCurrentEmail(session);
          localStorage.setItem("@tempmail:session", JSON.stringify(session));
        },
      });
    } catch (error) {
      console.error("Erro na mutação:", error);
    }
  };

  useEffect(() => {
    handleIntroduceSession();
  }, []);

  return (
    <View>
      <Input loading={loading} email={currentEmail?.email ?? ""} />
      <Refresh />
    </View>
  );
};

export default EmailGenerate;
