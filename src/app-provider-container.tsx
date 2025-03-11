import App from "./App";
import { ThemeProvider } from "./app/hooks/theme-context";
import AppRouter from "./app/router/app-router";

const AppProviderContainer = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRouter>
        <App />
      </AppRouter>
    </ThemeProvider>  
  );
};

export default AppProviderContainer;
