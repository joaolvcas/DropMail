import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import refreshSrc from "../../../../../../assets/svg/refetch.svg";
import Timer from "../../../../../../components/Timer/circleAnimation";
import {
  ButtonRefresh,
  RefreshIcon,
  RefreshWrapper,
  Text,
  View,
} from "./styles";
import { FETCH_MAILS } from "../../../../../../graphql/Querys/fetchMails";
import { useRecoilState } from "recoil";
import { mails, session } from "../../../../../../recoil/atoms";
import sendNotification from "../../../../../../helpers/sendNotification";
import { TimerWrapper } from "../Input/styles";

const Refresh: React.FC = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [actualSession, setActualSession] = useRecoilState(session);
  const [currentMails, setCurrentMails] = useRecoilState(mails);
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
        <ButtonRefresh onClick={handleRefresh}>
          <Text>Atualizar</Text>
          <RefreshIcon src={refreshSrc} alt="Refresh Icon" />
        </ButtonRefresh>
      </RefreshWrapper>
    </View>
  );
};

export default Refresh;
