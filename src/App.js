import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages/HomePages";
import LoginPages from "./pages/LoginPages/LoginPages";
import Header from "./components/Header/Header";
import LifeCyclePage from "./pages/LifeCyclePage/LifeCyclePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />}></Route>
          <Route path="/login" element={<LoginPages />}></Route>
          <Route path="/life-cycle" element={<LifeCyclePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
