import React from 'react';
import theme, {darkTheme} from './theme';
import {ThemeProvider} from './useTheme';
import Welcome from './Welcome';

const App = () => {
  return (
    <ThemeProvider {...{theme, darkTheme}}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
