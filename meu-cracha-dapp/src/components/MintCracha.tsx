// src/components/MintCracha.tsx
import { useState } from 'react';
import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { PACKAGE_ID } from '../config';
import './MintCracha.css';

interface MintCrachaProps {
    onCrachaCreated?: () => void;
}

export function MintCracha({ onCrachaCreated }: MintCrachaProps) {
    const account = useCurrentAccount();
    const { mutate: signAndExecute } = useSignAndExecuteTransaction();
    const [nome, setNome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleMint = async () => {
        if (!account) {
            alert('Conecte sua carteira primeiro!');
            return;
        }
        
        setIsLoading(true);
        
        try {
            const txb = new Transaction();
            
            txb.moveCall({
                target: `${PACKAGE_ID}::cracha::emitir`,
                arguments: [txb.pure.string(nome)],
            });

            signAndExecute(
                {
                    transaction: txb,
                },
                {
                    onSuccess: (result) => {
                        alert(`Crachá criado com sucesso! Digest: ${result.digest}`);
                        setNome('');
                        setIsLoading(false);
                        // Chama o callback para atualizar a lista
                        if (onCrachaCreated) {
                            onCrachaCreated();
                        }
                    },
                    onError: (error) => {
                        alert(`Erro ao criar crachá: ${error.message}`);
                        setIsLoading(false);
                    }
                }
            );
        } catch (error) {
            alert(`Erro: ${error}`);
            setIsLoading(false);
        }
    };

    return (
        <div className="mint-container">
            <h3>🎫 Crie seu Crachá do Bootcamp</h3>
            
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    disabled={isLoading || !account}
                    className="name-input"
                />
                
                <button 
                    onClick={handleMint} 
                    disabled={isLoading || !account || !nome.trim()}
                    className="mint-button"
                >
                    {isLoading ? '⏳ Criando...' : '🎯 Criar Crachá'}
                </button>
            </div>
            
            {!account && (
                <p className="warning-text">
                    ⚠️ Conecte sua carteira para criar um crachá
                </p>
            )}
        </div>
    );
}