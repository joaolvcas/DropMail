import React, { useEffect } from "react";
import styled from "styled-components";

const CircleTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: conic-gradient(
    #42a28d ${(props) => (props.timeLeft / 15) * 100}%,
    gray ${(props) => (props.timeLeft / 15) * 100}% 100%
  );
  transform: rotate(-90deg);
  transition: background 1s;
  position: relative;
  margin: 0 0 0 4px;
`;

const View = styled.div`
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  line-height: 1;
`;

const Timer = ({ handleRefresh, timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 0.3);
      } else {
        handleRefresh();
        setTimeout(() => {
          setTimeLeft(15);
        }, 1000);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, handleRefresh]);

  const roundedTime = Math.round(timeLeft);

  return (
    <CircleTimer timeLeft={roundedTime}>
      <View>{roundedTime}</View>
    </CircleTimer>
  );
};

export default Timer;
