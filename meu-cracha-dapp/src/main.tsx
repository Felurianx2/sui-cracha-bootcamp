import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@mysten/dapp-kit/dist/index.css'; 

import { SuiClientProvider, WalletProvider, createNetworkConfig } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { networkConfig } = createNetworkConfig({
  mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
        <WalletProvider autoConnect>
          <App />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  </React.StrictMode>
);