import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Header />
      <div className="pt-outlet">
        <Outlet />
      </div>
    </CookiesProvider>
  );
}

export default App;
