import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/";
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
