# Locadora E-Auditoria

**Por:** [Caio César de Oliveira](https://github.com/caiocesaroliveira). 

## 1. Sumário
- [Locadora E-Auditoria](#locadora-e-auditoria)
  - [1. Sumário](#1-sumário)
  - [2. Sobre o projeto](#2-sobre-o-projeto)
    - [Backend .NET Core](#backend-net-core)
    - [Frontend ReactJS](#frontend-reactjs)
  - [3. Inicialização](#3-inicialização)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [4. Banco de Dados](#4-banco-de-dados)
  - [5. Requisições](#5-requisições)

## 2. Sobre o projeto
O projeto consiste na criação de uma locadora de filmes virtual como avaliação prática do processo seletivo da empresa [E-Auditoria](http://www.e-auditoria.com.br/)

### Backend .NET Core
 - Foi criada uma api em .NET Core para a gestão de locação de filmes.
 - Nela foi implementada um CRUD completo de Clientes, Filmes e Locações além dos relatórios conforme especificado no documento de avaliação.
 - Endpoints: `v1/clientes`, `v1/filmes`, `v1/locacoes`, `v1/relatorios`
  
### Frontend ReactJS
 - Foi criado um web client em ReactJS com TypeScript.
 - Nele foi implementado o CRUD de cliente de filmes
 - Rotas: `/customers`, `/movies`


## 3. Inicialização
Clone o repositório: 
```bash 
git clone https://github.com/caiocesaroliveira/locadora-eauditoria.git
```

### Backend
Acesse o diretório `backend`: 
```bash 
cd locadora-eauditoria/backend
```

Instale as dependencias:
```bash 
dotnet restore
```
   
Execute o projeto:
 ```bash 
dotnet build                            #para compilar a aplicação
dotnet ef migrations InitialMigrations  #para criar as migrations
dotnet update                           #para atualizar o banco de dados com as migrations
dotnet run                              #para inicializar o servidor.
 ```

### Frontend
 Acesse o diretório `frontend`: 
```bash 
cd locadora-eauditoria/frontend
```

Instale as dependencias:
```bash 
yarn i
# or
npm i
```
   
Execute o projeto:
```bash 
yarn start
```

## 4. Banco de Dados
Por padrão o a aplicação está utilizando um banco de dados SQL
  - Altere o arquivo `appsettings.json` e informe a string de conexão na chave `ConnectionString`

## 5. Requisições
 - Os arquivos de requisições com os endpoints estão na pasta `auxiliar` na pasta raiz `locadora-eauditoria`
 - Os arquivos sql para carga inicial dos dados estão na pasta `auxiliar` na pasta raiz `locadora-eauditoria`
