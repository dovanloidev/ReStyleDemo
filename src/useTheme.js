import {createContext, useContext, useState} from 'react';
import React from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children, theme, darkTheme}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeSelect = isDarkMode ? darkTheme : theme;

  return (
    <ThemeContext.Provider value={{...themeSelect, isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme || {};
};

export default useTheme;
