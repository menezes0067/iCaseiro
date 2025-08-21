## Icaseiro

**Gerenciamento de Pedidos em restaurantes**

Desc

## 📦 Instalação do Projeto:

Subindo containers do docker compose:
```
# Subindo tudo caso queira rodar o projeto em containers
docker compose up -d 
```

Caso queira rodar localmente(dev):
```bash
# Acessando backend
cd backend/

# Vai subir somente o container do database
docker compose up database -d 
```
Projeto:

```bash
# Criar a migrate no prisma
pnpm exec prisma migrate dev

# Rodar o projeto localmente
pnpm run dev 

# Acessando tabelas do banco de dados
pnpm exec prisma studio
```

## 🗂️ Estrutura de Pastas

```
.
├── backend/
│   ├── node_modules/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── interfaces/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── server.ts
│   ├── .env
│   ├── .gitignore
│   ├── docker-compose.yaml
│   ├── Dockerfile
│   ├── package.json
│   ├── tasks.md
│   └── tsconfig.json
├── frontend/
│   ├── css/
│   ├── js/
│   └── index.html
└── README.md
```
