export type ThemeType = 'light' | 'dark'

export interface IThemeContext {
    theme: ThemeType;
    changeTheme: () => void;
}

export interface ThemeContextProviderProps {
    children: React.ReactNode
}