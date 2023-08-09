import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Header />
        <div className="mt-[72.22px]">
          <Outlet />
        </div>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
