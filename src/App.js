import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
       <NavBar/>
       <LandingPage/>
    </div>
  );
}

export default App;
