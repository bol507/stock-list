import App from "./App";
import { ThemeProvider } from "./app/hooks/theme-context";
import AppRouter from "./app/router/app-router";
import { I18nextProvider } from "react-i18next";
import i18n from "@/app/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
    },
  },
});

const AppProviderContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRouter>
          <I18nextProvider i18n={i18n} defaultNS={"translation"}>
            <App />
          </I18nextProvider>
        </AppRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProviderContainer;
