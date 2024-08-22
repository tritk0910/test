import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./components/layout/home/HomePage";
import NavBar from "./components/layout/home/NavBar";
import Footer from "./components/layout/home/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100vh-(80px+482px))]">
        {location.pathname === "/" ? <HomePage /> : <Outlet />}
      </div>
      <Footer />
    </>
  );
}

export default App;
