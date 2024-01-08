import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './assets/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </QueryClientProvider>,
);
