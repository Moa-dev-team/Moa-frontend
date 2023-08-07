import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";

function App() {
  return (
    <>
      <Header />
      <div className="pt-outlet">
        <Outlet />
      </div>
    </>
  );
}

export default App;
