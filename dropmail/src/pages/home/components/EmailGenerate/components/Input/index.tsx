import React from "react";
import copySrc from "../../../../../../assets/svg/copy-text.svg";

import {
  CopyBox,
  CopyIcon,
  CopyText,
  EmailView,
  Label,
  WrapperInput,
} from "./styles";

const Input: React.FC = (): JSX.Element => {
  return (
    <WrapperInput>
      <Label>Your temporary email address</Label>
      <EmailView>
        <CopyBox>
          <CopyIcon src={copySrc} alt="copy text icon" />
          <CopyText>Copy</CopyText>
        </CopyBox>
      </EmailView>
    </WrapperInput>
  );
};

export default Input;
