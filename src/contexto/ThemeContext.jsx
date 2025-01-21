import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../Styles/theme";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleTheme = () => {
        setIsLightMode(prevMode => !prevMode);
    }

    const theme = isLightMode ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
            {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useTheme(){
    return useContext(ThemeContext);
}