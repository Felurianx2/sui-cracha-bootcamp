# 🎓 SUI Crachá Bootcamp

Um sistema completo de crachás digitais construído na blockchain Sui, desenvolvido durante o Bootcamp de Blockchain. Este projeto demonstra a criação de NFTs funcionais que servem como credenciais digitais verificáveis.

## 🌟 Funcionalidades

- ✅ **Smart Contract em Move** - Lógica robusta para criação e gerenciamento de crachás
- ✅ **Interface Web React** - DApp moderno e responsivo
- ✅ **Conexão com Carteira** - Integração com carteiras Sui
- ✅ **Criação de Crachás** - Mint de novos crachás NFT
- ✅ **Visualização** - Display de crachás existentes
- ✅ **Blockchain Testnet** - Deploy funcional na rede de teste

## Estrutura do Projeto

```
sui-cracha-bootcamp/
├── sources/                 # Smart contracts Move
│   └── cracha.move         # Contrato principal
├── tests/                  # Testes dos contratos
│   └── cracha_tests.move   
├── meu-cracha-dapp/        # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── config.ts       # Configurações
│   │   └── services/       # Serviços Sui
│   └── package.json
├── Move.toml               # Configuração Move
└── README.md
```

## 🚀 Deploy Atual

### 📦 Smart Contract
- **Package ID:** `0xcb106205455d594f89cf7dbf61ac5027378c29fb35da3d7f0d1d3caa8d904049`
- **Network:** Sui Testnet
- **Module:** `cracha`

### 🎫 Crachá de Exemplo
- **ID:** `0xcfccc8050224d1a4ad4263933780d51819e11290eb48219ea5b2bc2da1399849`
- **Nome:** Isamar Suarez
- **Edição:** 2

## ⚡ Como Executar

### Pré-requisitos
- Node.js 18+
- Sui CLI
- Carteira Sui (Sui Wallet, Ethos, etc.)

### 1. Clone o repositório
```bash
git clone https://github.com/Felurianx2/sui-cracha-bootcamp.git
cd sui-cracha-bootcamp
```

### 2. Smart Contract (Move)
```bash
# Build do contrato
sui move build

# Deploy (opcional - já está no testnet)
sui client publish --gas-budget 20000000
```

### 3. Frontend (React)
```bash
cd meu-cracha-dapp
npm install
npm run dev
```

Acesse: `http://localhost:5173`

## 🎯 Como Usar

1. **Conecte sua carteira** - Clique em "Connect Wallet"
2. **Visualize crachás** - Veja crachás existentes na blockchain
3. **Crie seu crachá** - Digite seu nome e clique em "Criar Crachá"
4. **Confirme a transação** - Aprove na sua carteira Sui

## 🔧 Funcionalidades do Smart Contract

### Estrutura do Crachá
```move
struct Cracha has key, store {
    id: UID,
    nome: String,
    edicao_bootcamp: u64,
}
```

### Funções Disponíveis
- `emitir(nome: String)` - Cria um novo crachá
- `get_nome(cracha: &Cracha)` - Obtém o nome do portador
- `get_edicao_bootcamp(cracha: &Cracha)` - Obtém a edição do bootcamp
- `atualizar_nome(cracha: &mut Cracha, novo_nome: String)` - Atualiza o nome

## 🌐 Links Úteis

- **SuiVision Explorer:** [Ver Package](https://suivision.xyz/package/0x2556464174da40e048a9dc0ac9c90597c36a29922398ac2e05d7873719d40fcd?network=testnet)
- **Crachá Exemplo:** [Ver no Explorer](https://suivision.xyz/object/0xb8d8679af2b1640e36e5ed76ebc6da4c0b83ec3a8c4c8413d6664140193b1781?network=testnet)
- **Sui Docs:** [Documentação Oficial](https://docs.sui.io)

## 🛠️ Tecnologias Utilizadas

- **Blockchain:** Sui
- **Smart Contracts:** Move Language
- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Sui Integration:** @mysten/dapp-kit
- **Styling:** CSS3 com gradientes modernos

## 📝 Próximas Funcionalidades

- [ ] Sistema de verificação de crachás
- [ ] Diferentes tipos de crachás (cursos, workshops)
- [ ] Integração com IPFS para imagens
- [ ] Sistema de recompensas
- [ ] Dashboard administrativo
- [ ] Exportação de certificados em PDF

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autores

**f0ntz** & **Isamar Suarez**
- Desenvolvido durante o Bootcamp SUI
- [GitHub](https://github.com/f0ntz)

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐
