import { Outlet } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/organisms/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Header />
        <div className="mt-[72.22px] max-w-7xl mx-auto">
          <Outlet />
        </div>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
