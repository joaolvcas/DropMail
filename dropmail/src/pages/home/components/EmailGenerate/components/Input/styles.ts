import styled from "styled-components";

export const WrapperInput = styled.div``;

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
  width: 20%;
  height: 32px;
  border-left: 1px solid #d9d9d9;
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #42a28d;
    color: #fff;
  }
`;

export const CopyText = styled.text`
  font-size: 14px;
  color: #d9d9d9;
`;

export const CopyIcon = styled.img`
  width: 18px;
  height: 18px;
`;
