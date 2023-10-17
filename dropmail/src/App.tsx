import React from "react";
import { RecoilRoot } from "recoil";
import Home from "./pages/home";

navigator.serviceWorker.register("service-worker.js");

function App() {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}

export default App;
