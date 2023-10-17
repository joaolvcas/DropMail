import React from "react";
import { useLazyQuery } from "@apollo/client";
import refreshSrc from "../../../../../../assets/svg/refetch.svg";
import Timer from "../../../../../../components/Timer/circleAnimation";
import { Icon, RefreshIcon, RefreshWrapper, Text, View } from "./styles";
import { FETCH_MAILS } from "../../../../../../graphql/Querys/fetchMails";
import { useRecoilState } from "recoil";
import { mails, session } from "../../../../../../recoil/atoms";
import sendNotification from "../../../../../../helpers/sendNotification";

const Refresh: React.FC = (): JSX.Element => {
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

  const handleRefresh = () => fetch();

  return (
    <View>
      <Text>Autorefresh in</Text>
      <RefreshWrapper>
        <Timer handleRefresh={handleRefresh} />
        <Text>Refresh</Text>
        <Icon onClick={handleRefresh}>
          <RefreshIcon src={refreshSrc} alt="Refresh Icon" />
        </Icon>
      </RefreshWrapper>
    </View>
  );
};

export default Refresh;
