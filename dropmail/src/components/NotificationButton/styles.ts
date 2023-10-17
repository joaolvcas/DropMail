import styled from "styled-components";

export const NotificatonButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 32px;
  background-color: #334960;
  border-radius: 100px;
  &:hover {
    background-color: #42a28d;
    cursor: pointer;
  }
`;

export const NotificatonText = styled.text`
  font-weight: bold;
  text-aling: center;
  font-size: 11px;
  color: #fff;
`;
