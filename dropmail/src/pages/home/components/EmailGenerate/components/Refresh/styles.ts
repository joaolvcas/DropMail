import styled from "styled-components";

export const View = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Text = styled.text`
  font-size: 14px;
`;

export const RefreshWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  width: 26px;
  height: 26px;
  border-radius: 50px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #42a28d;
    cursor: pointer;
  }
`;

export const CircleProgress = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(gray 0% 0%, gray 50% 50%, green 50% 100%);
  animation: fill 15s linear infinite;
  transform: rotate(-90deg);
  margin: 10px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
`;

export const ButtonRefresh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #ddd;
  border-radius: 100px;
  border: 1px solid #ccc;
  padding: 4px 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #42a28d;
    cursor: pointer;
  }
`;

export const RefreshIcon = styled.img<{ rotate: boolean }>`
  cursor: pointer;
  transition: transform 1s;
  transform: ${(props) => (props.rotate ? "rotate(360deg)" : "rotate(0deg")};
`;
