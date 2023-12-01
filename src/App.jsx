import "./App.css";

import { CountProvider } from "hiveryStore/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicPage from "./Components/BasicPage";
import App1 from "hiveryMicroApp1/App";
import App2 from "hiveryMicroApp2/App";
import Header from "./Components/Header";
function MainComponent() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<BasicPage />} />
          <Route path="/app1" element={<App1 />} />
          <Route path="/app2" element={<App2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const App = () => (
  <CountProvider>
    <MainComponent />
  </CountProvider>
);

export default App;
