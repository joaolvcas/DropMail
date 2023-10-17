import React, { useState, useEffect } from "react";
import { Text } from "./styles";

type Props = {
  loading: boolean;
};

const Loading: React.FC<Props> = ({ loading }): JSX.Element | null => {
  const [loadingText, setLoadingText] = useState("A carregar");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === "A carregar...") {
          return "A carregar";
        } else {
          return prevText + ".";
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return <Text>{loadingText}</Text>;
};

export default Loading;
