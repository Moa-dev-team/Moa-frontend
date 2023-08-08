import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Header />
      <div className="mt-[72.22px]">
        <Outlet />
      </div>
    </CookiesProvider>
  );
}

export default App;
