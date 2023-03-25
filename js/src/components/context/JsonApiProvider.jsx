import React from 'react'
import { QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
    },
  },
});

const JsonApiProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}

  </QueryClientProvider>
)
export default JsonApiProvider
