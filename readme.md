
# 🔗 URL Shortener

Encurtador de URLs com **painel de estatísticas**, construído com **Node.js**, **Express** e **MySQL**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars-F0772B?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)

---

## ✨ Funcionalidades

- Encurtamento de URLs
- Redirecionamento para a URL original a partir do link encurtado
- Painel de estatísticas de acesso aos links
- Persistência dos dados em **MySQL**
- Sessões e mensagens de feedback na interface (flash messages)
- Páginas renderizadas no servidor com **Handlebars**
- Arquitetura organizada em controllers, middlewares, models e rotas

## 🛠️ Tecnologias

| Dependência | Uso |
| --- | --- |
| [Express](https://expressjs.com/) | Servidor HTTP e rotas |
| [express-handlebars](https://www.npmjs.com/package/express-handlebars) | Template engine das views |
| [mysql2](https://www.npmjs.com/package/mysql2) | Conexão com o banco MySQL |
| [express-session](https://www.npmjs.com/package/express-session) | Sessões |
| [connect-flash](https://www.npmjs.com/package/connect-flash) | Mensagens flash |
| [body-parser](https://www.npmjs.com/package/body-parser) | Leitura de formulários e JSON |
| [dotenv](https://www.npmjs.com/package/dotenv) | Variáveis de ambiente |

## 📁 Estrutura do projeto

```
URL-Shortener/
├── assets/
│   └── css/           # Estilos da interface
├── controllers/        # Regras de negócio das rotas
├── database/           # Conexão e configuração do banco de dados
├── express_conf/       # Configurações do Express
├── middlewares/        # Middlewares da aplicação
├── models/
│   └── urls/           # Acesso a dados das URLs encurtadas
├── routes/              # Definição das rotas
├── views/               # Templates Handlebars
├── application.js       # Ponto de entrada da aplicação
├── .env.example         # Exemplo de variáveis de ambiente
└── package.json
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- npm (já incluso com o Node.js)
- Servidor [MySQL](https://www.mysql.com/) em execução

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/higordday/URL-Shortener.git

# 2. Acesse a pasta do projeto
cd URL-Shortener

# 3. Instale as dependências
npm install

# 4. Importe a estrutura SQL através do arquivo database/struct.sql
mysql -u user -p url_shortener < struct.sql
```

### Configuração

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
SERVER_LISTENING_PORT=8000
EXPRESS_SESSION_SECRET_KEY=sua_chave_secreta

DATABASE_SERVER_HOST=localhost
DATABASE_SERVER_PORT=3306
DATABASE_AUTHENTICATION_CREDENTIAL_USERNAME=seu_usuario
DATABASE_AUTHENTICATION_CREDENTIAL_PASSWORD=sua_senha
DATABASE_NAME=nome_do_banco
```

| Variável | Descrição |
| --- | --- |
| `SERVER_LISTENING_PORT` | Porta em que o servidor vai rodar |
| `EXPRESS_SESSION_SECRET_KEY` | Chave secreta usada para assinar as sessões |
| `DATABASE_SERVER_HOST` | Endereço do servidor MySQL |
| `DATABASE_SERVER_PORT` | Porta do servidor MySQL (padrão: `3306`) |
| `DATABASE_AUTHENTICATION_CREDENTIAL_USERNAME` | Usuário do MySQL |
| `DATABASE_AUTHENTICATION_CREDENTIAL_PASSWORD` | Senha do MySQL |
| `DATABASE_NAME` | Nome do banco de dados (database) MySQL |

### Execução

```bash
node application.js
```

Depois, acesse `http://localhost:8000` (ou a porta que você definiu no `.env`).
