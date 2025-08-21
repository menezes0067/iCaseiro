## Icaseiro

**Gerenciamento de Pedidos em restaurantes**

Desc

## 📄 Váriaveis de ambiente
Atenção na hora de criar usas váriaveis de ambiente no `.env` 

```
.env_example
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

# URL completa do seu banco de dados
DATABASE_URL=postgresql://seu_usuario:sua_senha@localhost:5432/nome_do_banco
```

**Obs:** O arquivo `.env` já está no `.gitignore` e **não deve ser versionado**.

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
│   ├── .gitignore
│   ├── docker-compose.yaml
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── css/
│   ├── js/
│   └── index.html
└── README.md
```
