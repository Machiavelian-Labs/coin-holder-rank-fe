import '../shared/styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, persistedStore } from './stores';
import router from './router';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider theme={darkTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
