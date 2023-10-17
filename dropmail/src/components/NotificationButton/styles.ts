import styled from "styled-components";

export const NotificatonButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 32px;
  background-color: #42a28d;
  border-radius: 100px;
  padding: 0 12px;
  &:hover {
    background-color: #3b9387;
    cursor: pointer;
  }
`;

export const NotificatonText = styled.text`
  font-weight: bold;
  text-aling: center;
  font-size: 11px;
  color: #fff;
`;

export const NotificatonIcon = styled.img`
  width: 38px;
  height: 28px;
`;
