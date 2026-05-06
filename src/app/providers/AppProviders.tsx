import ThemeContextProvider from "@/features/switch-theme/model";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default AppProviders;
