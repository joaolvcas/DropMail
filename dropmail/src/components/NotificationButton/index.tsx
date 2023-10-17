import React, { useState } from "react";
import { NotificatonButton, NotificatonText } from "./styles";

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
        {notificationPermission === "granted"
          ? "Notificações ativadas"
          : "Ativar notificações"}
      </NotificatonText>
    </NotificatonButton>
  );
};

export default NotificationButton;
