import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorElement } from "../../components/ErrorElement/ErrorElement";
import { MainPageLazy } from "../../pages/MainPage/MainPageLazy";
import { GamePageLazy } from "../../pages/GamePage/GamePageLazy";
import { Suspense } from "react";
import { Spin } from "antd";

export default function BrowserRouterProvider() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spin
            size="large"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/game/:gameId" element={<GamePageLazy />} />
          <Route path="*" element={<ErrorElement />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
