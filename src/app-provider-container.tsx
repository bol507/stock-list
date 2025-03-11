import App from "./App";
import AppRouter from "./app/router/app-router";

const AppProviderContainer = () => {
  return (
    <AppRouter>
      <App />
    </AppRouter>
  );
};

export default AppProviderContainer;
