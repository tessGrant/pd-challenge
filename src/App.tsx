import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from "react-query/devtools";
import { PdContainer } from './sections/MainContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <PdContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
