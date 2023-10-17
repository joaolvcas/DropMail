import styled from "styled-components";
import backgroundImage from "../../assets/img/background.jpeg";

export const View = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  @media (max-width: 700px) {
    padding: 0 8px;
  }
`;
