import styled from "styled-components";

export const Scroll = styled.div`
  height: 100%;
  overflow-y: auto;
  /* Estilize a barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #42a28d;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
  }
`;
