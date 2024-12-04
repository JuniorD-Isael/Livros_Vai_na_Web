# Livros Vai Na Web

O projeto **Livros Vai Na Web** é uma aplicação web voltada para a doação de livros, incentivando a leitura e o compartilhamento de conhecimento entre os usuários. A plataforma é composta por um sistema de navegação simples que permite visualizar livros doados, preencher formulários para doações e buscar por conteúdos específicos.

## Tecnologias Utilizadas

- **React.js**: Framework JavaScript para a criação de interfaces de usuário.
- **React Router**: Biblioteca para navegação de rotas no React.
- **SCSS (Sassy CSS)**: Extensão do CSS com recursos adicionais como variáveis, aninhamento e mixins.
- **HTML5**: Linguagem de marcação para estruturação das páginas.
- **JavaScript (ES6+)**: Linguagem de programação para a dinâmica do site.
- **Vite**: Ferramenta de build rápida para desenvolvimento web moderno.
- **ESLint**: Ferramenta para análise de código JavaScript.

## Estrutura do Projeto

### Principais Componentes:

1. **Header**: Cabeçalho com o logotipo, navegação e barra de busca.
2. **Footer**: Rodapé com informações de contato e ícones de redes sociais.
3. **Páginas**:
   - **Início**: Apresentação do projeto e motivações para doações.
   - **Livros Doados**: Exibição dos livros que foram doados.
   - **Quero Doar**: Formulário para doação de livros.

## Requisitos para Execução

Certifique-se de ter instalado:

- **Node.js** (v22 ou superior)
- **npm** (v7 ou superior) ou **yarn** como gerenciador de pacotes

## Como Rodar o Projeto Localmente

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/livros-vai-na-web.git
   cd livros-vai-na-web
   ```

2. **Instale as Dependências**

   Com npm:
   ```bash
   npm install
   ```
   
   Ou com yarn:
   ```bash
   yarn install
   ```

3. **Inicie o Servidor de Desenvolvimento**

   Com npm:
   ```bash
   npm run dev
   ```
   
   Ou com yarn:
   ```bash
   yarn dev
   ```

   O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

4. **Compilação para Produção**

   Para gerar os arquivos otimizados para produção:
   ```bash
   npm run build
   ```
   
   Ou com yarn:
   ```bash
   yarn build
   ```

5. **Pré-visualizar a Build**

   Para testar os arquivos gerados em produção:
   ```bash
   npm run preview
   ```
   
   Ou com yarn:
   ```bash
   yarn preview
   ```
