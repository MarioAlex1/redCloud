### Configurações Iniciais
O projeto foi iniciado usando o Expo através do comando:

npx create-expo-app@latest --template

Escolhi o template Blank TypeScript, o mesmo utilizado nas aulas do professor Jhonny. A partir daí, organizei a estrutura inicial do app e preparei o ambiente para desenvolvimento mobile com React Native.

### Fontes de Estudo
Usei diferentes criadores de conteúdo para entender melhor o desenvolvimento mobile e alguns detalhes específicos do projeto:

Coding With TJ — Tutorial TypeScript React Native Expo (para entender melhor a estrutura e tipos).

Jovem Programador — Conceitos gerais de desenvolvimento.

Icode Mobile — Conteúdos sobre assets e manipulação de imagens.

Renan Pallin Dev — Estudos sobre Expo Router e navegação.

### Ferramentas Utilizadas
O projeto foi desenvolvido utilizando:

Expo (template TypeScript)

React Native

TypeScript

Node.js

Além disso, instalei e configurei:

Navigation Router

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

Checkbox

Precisei instalar um DOM específico do React para suporte adequado.

Ícones

Utilizei ícones do Expo, disponíveis em: https://icons.expo.fyi

Gerenciamento de dependências

Usei npm list para confirmar a existência e versões dos pacotes.

adicionei o npx expo install expo-screen-orientation
pra rotação de tela

precisei usar o navigation pra esconder os botoes do sistema e deixar fullscreen, e o router nao da pra fazer isso

### Aprendizados do Maru
Durante o desenvolvimento, evoluí bastante no entendimento de frontend e mobile. Antes eu tinha muito mais familiaridade com backend, mas ao longo do projeto aprendi:

Conceitos de CSS aplicado ao mobile.

Estrutura e lógica do React Native.

Uso de extends e tipagem no TypeScript.

Como funcionam e são instaladas as dependências do front.

Comandos importantes de terminal.

Práticas de manutenção, como limpar cache do Expo.

Preparação e otimização do tamanho das imagens para assets.

### o que ainda precisa ser feito
precisa organizar melhor as pastas, refatorar o codigo, deixar limpo pra ser escalavel 