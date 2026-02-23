# RedCloud

Aplicação mobile desenvolvida com React Native, Expo e TypeScript, estruturada com arquitetura modular baseada em funcionalidades (Feature-Based Architecture), autenticação via Firebase e sistema de temas dinâmicos baseado em Material Design 3.

Projeto desenvolvido individualmente.

---

## Status do Projeto

Projeto de portfólio acadêmico em desenvolvimento contínuo.
Arquitetura consolidada e autenticação funcional integrada.

---

## Descrição

RedCloud é uma aplicação mobile estruturada com foco em organização arquitetural, escalabilidade e separação clara de responsabilidades.

O projeto passou por refatoração estrutural completa, migrando de uma organização simples para uma arquitetura modular por domínio de funcionalidade (feature-based).

A aplicação possui:

* Autenticação funcional via Firebase
* Navegação estruturada com Expo Router
* Sistema de temas dinâmicos (Light/Dark Mode)
* Padronização visual baseada em Material Design 3
* Desacoplamento entre rotas e regra de negócio

---

## Tecnologias Utilizadas

* React Native
* Expo
* TypeScript
* Expo Router
* React Navigation
* Firebase Authentication
* AsyncStorage
* expo-linear-gradient

---

## Pré-requisitos

Antes de executar o projeto, é necessário:

* Node.js (versão LTS recomendada)
* npm ou yarn
* Conta no Firebase
* Expo CLI (via npx)

---

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
cd redcloud
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm start
```

---

## Configuração do Firebase

Este projeto utiliza Firebase Authentication.

O arquivo `google-services.json` está no `.gitignore` e não é versionado.
Após clonar o projeto, é necessário configurar manualmente:

1. Criar um projeto no Firebase Console.
2. Ativar Authentication (Email/Password).
3. Registrar um app Android.
4. Baixar o arquivo `google-services.json`.
5. Colocar o arquivo na raiz do projeto (ou no diretório apropriado conforme configuração do app).
6. Configurar as credenciais no arquivo de inicialização do Firebase (`services/firebase.ts` ou equivalente).

Sem essa configuração, a autenticação não funcionará.

---

## Arquitetura

O projeto utiliza Feature-Based Architecture.

A organização é feita por domínio de funcionalidade, e não por tipo de arquivo.

### Estrutura

```bash
app/                 # Definição de rotas (Expo Router)

src/
  features/          # Funcionalidades isoladas por domínio
    auth/
    anime/
    payment/
    user/

  shared/            # Componentes reutilizáveis globais
  services/          # Configurações globais (Firebase)
  storage/           # Persistência local
  theme/             # Sistema de temas (Material Design 3)
```

Cada feature pode conter:

* screens
* components
* hooks
* services
* styles

Essa abordagem garante:

* Alta coesão
* Baixo acoplamento
* Escalabilidade
* Manutenção facilitada

---

## Sistema de Temas (Material Design 3)

O sistema visual é baseado na estrutura de cores do Material Design 3:

* primary
* secondary
* tertiary
* background
* surface

Implementação composta por:

* ThemeContext
* ThemeProvider
* Alternância Light / Dark Mode
* `userInterfaceStyle: "automatic"`

Os estilos seguem padrão funcional:

```ts
makeXxxStyles(colors: Colors)
```

As cores são injetadas dinamicamente.
O uso de `useMemo` reduz re-renderizações durante troca de tema.

Gradientes são implementados com `expo-linear-gradient`, mantendo consistência visual com a paleta definida.

---

## Navegação

* Expo Router (file-based routing)
* React Navigation para controle avançado (fullscreen e ajustes de layout)

O arquivo `_layout.tsx` centraliza:

* Providers globais
* Controle de tema
* Configuração estrutural de navegação

---

## Autenticação

Integração com Firebase Authentication utilizando SDK Web.

Funcionalidades implementadas:

* Registro com email e senha
* Login com email e senha
* Recuperação de senha
* Alteração de email
* Alteração de senha
* Logout com tratamento de erro

Persistência de preferências utilizando AsyncStorage.

---

## Telas Implementadas

* Initial
* Login
* Register
* Home
* Search
* List
* User
* Player
* Plan
* Payment
* Processing
* Success
* Forgot Password
* Change Email
* Change Password

## Relato Pessoal de Aprendizado

Desenvolver o RedCloud foi um processo diferenciado. Ao longo das fases do projeto, aprendi na prática que escrever código frontend também envolver pensar na arquitetura das pastas.

Evoluí bastante no frontend e no mobile, especialmente em:

* Organização arquitetural com modelo feature-based
* Separação real de responsabilidades no código
* Estrutura e funcionamento do React Native
* Tipagem e boas práticas com TypeScript
* Implementação de autenticação com Firebase
* Uso de navegação com Expo Router e Navigation
* Criação de sistema de temas dinâmicos (dark/light mode) com foco em performance
* Padronização visual baseada em Material Design 3
* Gerenciamento de dependências e ambiente de desenvolvimento
* Refatoração consciente visando escalabilidade

Também aprendi sobre disciplina, persistência e responsabilidade técnica. Houve momentos de cansaço e frustração, mas manter o projeto ativo e reestruturá-lo quando necessário foi parte fundamental do meu crescimento.

Após consolidar o relatório técnico, amadureci ainda mais alguns pontos:

* Visão mais clara sobre arquitetura modular e desacoplamento
* Importância de documentar corretamente um projeto
* Estruturar README e apresentação de forma profissional
* Pensar o projeto não só para funcionar, mas para ser compreendido por outros

Esse projeto marcou uma transição importante na minha evolução como desenvolvedor.


utilizando api jikan

eas build --plataform android --profile development