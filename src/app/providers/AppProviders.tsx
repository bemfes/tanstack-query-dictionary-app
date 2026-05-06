import ThemeContextProvider from "@/features/switch-theme/model";
import { ErrorBoundary } from "react-error-boundary";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary
      fallback={
        <p>
          There seems to have been an error, please try refreshing the page.
        </p>
      }
    >
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
