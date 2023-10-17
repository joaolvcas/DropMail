import React, { useState } from "react";
import notificationSrc from "../../assets/img/notification.png";
import { NotificatonButton, NotificatonIcon, NotificatonText } from "./styles";

const NotificationButton: React.FC = (): JSX.Element => {
  const [notificationPermission, setNotificationPermission] = useState(
    Notification.permission
  );

  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      setNotificationPermission(permission);
    });
  };

  return (
    <NotificatonButton onClick={requestNotificationPermission}>
      <NotificatonText>
        {notificationPermission !== "granted" && "Ativar notificações"}
        {notificationPermission === "granted" && (
          <NotificatonIcon src={notificationSrc} />
        )}
      </NotificatonText>
    </NotificatonButton>
  );
};

export default NotificationButton;
