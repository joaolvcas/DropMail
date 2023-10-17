import React from "react";
import FallbackSrc from "../../../../../../../../assets/img/mail-icon.png";
import { Description, Icon, Infomation, View } from "./styles";

type Props = {
  visible: boolean;
  count: number | undefined;
  type: "empty" | "emails";
};

const Fallback: React.FC<Props> = ({
  visible,
  count,
  type,
}): JSX.Element | null => {
  if (!visible) return null;
  const infoMessage =
    type === "emails"
      ? `Você tem ${count ?? 0} e-mail${
          (count ?? 0) > 1 ? "s" : ""
        } na caixa de entrada`
      : "Sua caixa de entrada está vazia";

  const description =
    type === "emails"
      ? "Verique suas correspondências"
      : "Aguardando e-mail recebidos";
  return (
    <View>
      <Icon src={FallbackSrc} />
      <Infomation>{infoMessage}</Infomation>
      <Description>{description}</Description>
    </View>
  );
};

export default Fallback;
