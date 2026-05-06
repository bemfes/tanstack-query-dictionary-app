import ThemeContextProvider from "@/features/switch-theme/model";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary
      fallback={
        <p>
          There seems to have been an error, please try refreshing the page.
        </p>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
