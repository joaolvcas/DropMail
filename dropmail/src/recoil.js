import React from "react";
import { RecoilRoot } from "recoil";

export const initializeRecoilState = () => {};

export const RecoilProvider = ({ children }) => {
  initializeRecoilState();
  return <RecoilRoot>{children}</RecoilRoot>;
};
