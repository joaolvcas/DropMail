import styled from "styled-components";

export const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 47.3vh;
  border-bottom-right-radius: 8px;
  background-color: #f8f8f8;
`;

export const BoxMail = styled.div`
  width: 98%;
  height: 54vh;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  margin: 4px 8px 8px;
`;

export const BoxTitleMail = styled.text`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 98%;
  padding: 8px 0;
`;

export const TitleMail = styled.text`
  font-weight: bold;
`;

export const BoxText = styled.div`
  padding: 12px;
`;

export const Text = styled.text`
  font-size: 12px;
`;
