import { Routes, Route } from "react-router-dom";
import "./App.css";
import FuturisticRestaurantLanding from "./Pages/FuturisticRestaurantLanding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FuturisticRestaurantLanding />} />
      </Routes>
    </>
  );
}

export default App;
