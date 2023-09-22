import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const AppQueryProvider = props => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};

export default AppQueryProvider;
