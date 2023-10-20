import styled from "styled-components";

export const WrapperInput = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    max-width: 95%;
  }
`;

export const Label = styled.text`
  font-size: 12px;
`;

export const EmailView = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 400px;
  height: 32px;
  margin: 4px 0;
  border-radius: 100px;
  @media (max-width: 700px) {
    max-width: 85%;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8px;
  width: 100%;
  height: 32px;
`;

export const TextEmail = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #474747;
`;

export const CopyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16%;
  height: 32px;
  border-left: 1px solid #d9d9d9;
  transition: background-color 0.3s;
  cursor: pointer;
  border-top-right-radius: 200px;
  border-bottom-right-radius: 200px;
  &:hover {
    background-color: #42a28d;
    color: #fff;
  }
`;

export const CopyText = styled.text`
  font-size: 100%;
  color: #d9d9d9;
`;

export const CopyIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
