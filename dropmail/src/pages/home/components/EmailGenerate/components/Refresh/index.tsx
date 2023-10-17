import React, { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useSpring, animated } from "react-spring";
import refreshSrc from "../../../../../../assets/svg/refetch.svg";
import syncSrc from "../../../../../../assets/svg/sync.svg";
import Timer from "../../../../../../components/Timer/circleAnimation";
import { ButtonRefresh, RefreshWrapper, Text, View } from "./styles";
import { FETCH_MAILS } from "../../../../../../graphql/Querys/fetchMails";
import { useRecoilState } from "recoil";
import { currentMail, mails, session } from "../../../../../../recoil/atoms";
import sendNotification from "../../../../../../helpers/sendNotification";
import { TimerWrapper } from "../Input/styles";
import { INTRODUCE_SESSION_MUTATION } from "../../../../../../graphql/Mutations/getSession";
import { getSessionSchemas } from "../../../../../../types/getSessionSchemas";

const Refresh: React.FC = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [isRotated, setIsRotated] = React.useState(false);
  const [springProps, setSpringProps] = useSpring(() => ({
    transform: "rotate(0deg)",
  }));
  const [Watchedmails, setWatchedMails] = useRecoilState(currentMail);
  const [actualSession, setActualSession] = useRecoilState(session);
  const [currentMails, setCurrentMails] = useRecoilState(mails);
  const [introduceSession, { loading }] = useMutation(
    INTRODUCE_SESSION_MUTATION,
    {}
  );
  const [fetch] = useLazyQuery(FETCH_MAILS, {
    variables: { id: actualSession?.id },
    onCompleted: (res) => {
      if (res.session.mails.length > currentMails?.length!) {
        sendNotification(
          `Você recebeu um email de ${res.session.mails[0]?.fromAddr}`
        );
      }
      setCurrentMails(res.session.mails);
    },
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
  });

  const handleRotate = () => {
    setIsRotated(true);
    setSpringProps({ transform: "rotate(360deg)" });
    setTimeout(() => {
      setIsRotated(false);
      setSpringProps({ transform: "rotate(0deg)" });
    }, 1000);
  };

  const handleNewEmail = async () => {
    setWatchedMails(null);
    setCurrentMails(null);
    setActualSession(null);
    try {
      await introduceSession({
        onCompleted: (res) => {
          const session: getSessionSchemas = {
            id: res?.introduceSession.id,
            expiresAt: res?.introduceSession.expiresAt,
            email: res?.introduceSession.addresses[0].address,
          };
          setActualSession(session);
          localStorage.setItem("@tempmail:session", JSON.stringify(session));
        },
      });
    } catch (error) {
      console.error("Erro na mutação:", error);
    }
  };

  const handleRefresh = () => fetch().then(() => setTimeLeft(15));

  return (
    <View>
      <TimerWrapper>
        <Text>Autorefresh em</Text>
        <Timer
          handleRefresh={handleRefresh}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
        />
      </TimerWrapper>
      <RefreshWrapper>
        <ButtonRefresh
          onClick={() => {
            handleRefresh();
            handleRotate();
          }}
        >
          <Text>Atualizar</Text>
          <animated.img
            src={refreshSrc}
            alt="Refresh Icon"
            style={{
              cursor: "pointer",
              transform: springProps.transform,
            }}
          />
        </ButtonRefresh>
      </RefreshWrapper>
      <ButtonRefresh
        onClick={() => {
          handleNewEmail();
        }}
      >
        <Text>Gerar e-mail</Text>
        <animated.img src={syncSrc} alt="Sync Icon" />
      </ButtonRefresh>
    </View>
  );
};

export default Refresh;
