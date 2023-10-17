import React from "react";
import copySrc from "../../../../../../assets/svg/copy-text.svg";
import copiedSrc from "../../../../../../assets/svg/checked.svg";
import Loading from "../Loading";
import {
  CopyBox,
  CopyIcon,
  CopyText,
  Email,
  EmailView,
  Label,
  TextEmail,
  WrapperInput,
} from "./styles";

type Props = {
  loading: boolean;
  email: string;
};

const Input: React.FC<Props> = ({ loading, email }): JSX.Element => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const handleCopyText = async () => {
    await navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <WrapperInput>
      <Label>Seu endereço de e-mail temporário</Label>
      <EmailView>
        <Email>
          <TextEmail>{email}</TextEmail>
          <Loading loading={loading} />
        </Email>
        <CopyBox onClick={handleCopyText}>
          {!isCopied && <CopyIcon src={copySrc} alt="copy text icon" />}
          {isCopied && <CopyIcon src={copiedSrc} alt="text copied" />}
        </CopyBox>
      </EmailView>
    </WrapperInput>
  );
};

export default Input;
