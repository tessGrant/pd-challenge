import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from "react-query/devtools";
import { MainContainer } from './sections/MainContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // retry: false,
      // staleTime: 30000,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <MainContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
