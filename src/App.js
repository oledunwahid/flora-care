import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
