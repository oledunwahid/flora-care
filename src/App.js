import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
