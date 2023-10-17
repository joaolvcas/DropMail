import icon from "../assets/img/tempmail.png";

const sendNotification = (body: string) => {
  if (Notification.permission === "granted") {
    new window.Notification("Tempmail", {
      body: body,
      icon: icon,
    });
  }
};

export default sendNotification;
