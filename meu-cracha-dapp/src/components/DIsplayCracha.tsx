// src/components/DisplayCracha.tsx
import { useEffect, useState } from 'react';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { SuiClient } from '@mysten/sui/client';
import { PACKAGE_ID, NETWORK } from '../config';
import './DisplayCracha.css';

interface CrachaData {
    id: string;
    nome: string;
    edicao_bootcamp: number;
}

export function DisplayCracha() {
    const account = useCurrentAccount();
    const [crachas, setCrachas] = useState<CrachaData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCrachas() {
            if (!account) {
                setCrachas([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            setError(null);
            
            try {
                const client = new SuiClient({ 
                    url: `https://fullnode.${NETWORK}.sui.io:443` 
                });
                
                // Busca objetos do tipo Cracha da conta do usuário
                const ownedObjects = await client.getOwnedObjects({
                    owner: account.address,
                    filter: {
                        StructType: `${PACKAGE_ID}::cracha::Cracha`
                    },
                    options: {
                        showContent: true,
                    },
                });

                const crachaList: CrachaData[] = [];
                
                for (const item of ownedObjects.data) {
                    if (item.data?.content?.dataType === 'moveObject') {
                        const fields = (item.data.content as any).fields;
                        crachaList.push({
                            id: item.data.objectId,
                            nome: fields.nome,
                            edicao_bootcamp: parseInt(fields.edicao_bootcamp),
                        });
                    }
                }
                
                setCrachas(crachaList);
                
            } catch (err) {
                console.error('Erro ao buscar crachás:', err);
                setError('Não foi possível carregar os crachás');
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchCrachas();
    }, [account]);

    if (isLoading) {
        return (
            <div className="cracha-card">
                <div>⏳ Carregando crachás...</div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="cracha-card error">
                <div>❌ {error}</div>
            </div>
        );
    }

    if (!account) {
        return (
            <div className="cracha-card">
                <div>🔗 Conecte sua carteira para ver seus crachás</div>
            </div>
        );
    }
    
    if (crachas.length === 0) {
        return (
            <div className="cracha-card">
                <div>📋 Você ainda não possui nenhum crachá</div>
                <p>Crie seu primeiro crachá abaixo!</p>
            </div>
        );
    }

    return (
        <div className="crachas-container">
            <h3>🎫 Seus Crachás do Bootcamp SUI</h3>
            {crachas.map((cracha) => (
                <div key={cracha.id} className="cracha-card">
                    <div className="cracha-content">
                        <div className="cracha-info">
                            <p><strong>👤 Nome:</strong> {cracha.nome}</p>
                            <p><strong>📚 Edição:</strong> {cracha.edicao_bootcamp}</p>
                        </div>
                        <button 
                            className="suiscan-button"
                            onClick={() => window.open(`https://suiscan.xyz/${NETWORK}/object/${cracha.id}`, '_blank')}
                            title="Ver no SuiScan"
                        >
                            🔍 SuiScan
                        </button>
                    </div>
                    <div className="cracha-id">
                        <small>ID: {cracha.id}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}