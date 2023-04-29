import "./App.css";
import Navbar from "./Components/Home/Navbar";
import { Outlet } from "react-router-dom";
import Navbartop from "./Components/Home/Navbartop";

function Home() {
  return (
    <div className="App">
      <Navbartop />
      <div className="row g-0">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-9 bgg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
