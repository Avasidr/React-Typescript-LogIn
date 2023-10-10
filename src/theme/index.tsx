import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import { useAppSelector } from 'hooks/redux';

interface Props {
  children: React.ReactNode;
}

const MaterialUiTheme: React.FC<Props> = ({ children }) => {
  const { themeMode } = useAppSelector((state) => state.settings);

  const isLight = themeMode === 'dark';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#650fff'
      },
      mode: isLight ? 'light' : 'dark'
    }
  });
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MaterialUiTheme;
