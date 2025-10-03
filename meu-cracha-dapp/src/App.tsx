// src/App.tsx
import { useState } from 'react';
import { ConnectButton } from '@mysten/dapp-kit';
import { DisplayCracha } from './components/DIsplayCracha';
import { MintCracha } from './components/MintCracha';
import './App.css';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCrachaCreated = () => {
    // Força a atualização do DisplayCracha
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎓 Bootcamp SUI - Sistema de Crachás</h1>
        <ConnectButton />
      </header>

      <main className="app-main">
        <DisplayCracha key={refreshTrigger} />
        <MintCracha onCrachaCreated={handleCrachaCreated} />
      </main>
    </div>
  );
}

export default App;