<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://i.imgur.com/egOsngu.png">
    <img src="https://i.imgur.com/egOsngu.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Posts! - Uma aplicação Node.js + React</h3>

  <p align="center">
    Posts! é uma aplicação fullstack CRUD de gerenciamento de publicações.
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#como-usar">Como usar</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

A aplicação Posts! é um projeto fullstack construído com Node.js e React, nela a pessoa usuária é capaz de cadastrar, editar, deletar e visualizar postagens.
As postagens são compostas por 2 componentes principais: o título e o conteúdo, sendo o primeiro obrigatório para realizar a publicação e o segundo opcional.
A aplicação possui design simples e intuitivo, pensada tanto para ambiente desktop e telas grandes, quanto para mobile e outras telas pequenas.
<br />
O app possui duas páginas: a principal, na qual a pessoa poderá realizar grande parte das tarefas, como cadastrar uma publicação, clicar para editar um item (que levará para a página de edição), selecionar um item para excluir ao clicar no ícone de lixeira ou excluir vários ao selecionar o checkbox ao lado dos itens escolhidos, que habilitarão o botão "Deletar vários".
<br />
<br />
Na tela inicial, a pessoa usuária clica no botão "Nova publicação" para cadastrar uma nova aplicação que está localizado no cabeçalho. Ao clicar nesse botão, um modal de cadastro irá abrir, solicitando que o título e o conteúdo sejam preenchidos e, por fim, cadastrados ao clicar no botão "Cadastrar".
<details>
<summary>Clique para visualizar a tela de cadastro de publicações</summary>

[![Cadastro de pub][cadastro-post]](cadastro)

</details>

Na página de edição, a pessoa usuária poderá visualizar o histórico de alterações e adicionar uma nova modificação. É possível clicar no texto tanto do título quanto do conteúdo para adicioná-los às respectivas caixas de texto e retomar uma alteração.

<details>
<summary>Clique para visualizar a tela de edição</summary>

[![Editar post][editar-post]](cadastro)

</details>
<br />


## Tecnologias utilizadas

* Node.js
* Express.js
* Serverless AWS
* Mongoose (mongoDB)
* Jest
* React
* Styled Components
* Axios e React Query



<!-- GETTING STARTED -->
## Iniciando o projeto

Abaixo será listado como iniciar tanto o front-end quanto o back-end da aplicação, você pode encontrar o repositório da API <a href="https://github.com/amandapccs/motrix-challenge-fullstack-app">aqui</a>.

### Pré-requisitos.

Para executar o repositório da API localmente, é esperado que o <a href="https://nodejs.org/en/">Node.js</a> esteja instalado em sua máquina.

### Instalação

#### Front-end

1. Clone o repositório
   ```sh
   git clone git@github.com:amandapccs/posts-app.git
   ```
2. Instale as dependências
   ```sh
   npm install
   ```
3. Inicie a aplicação
   ```sh
   npm start
   ```
   
#### Back-end
1. Clone o repositório
   ```sh
   git clone git@github.com:amandapccs/motrix-challenge-fullstack-app.git
   ```
2. Instale as dependências
   ```sh
   npm install
   ```
3. Inicie a aplicação
   ```sh
   npm run local
   ```


<!-- USAGE EXAMPLES -->
## Como usar

A pessoa usuária será capaz de:
- Cadastrar novas publicações, clicando no botão "Nova publicação", localizado no cabeçalho da aplicação à direita.
- Visualizar todas as postagens realizadas na página inicial.
- Editar uma postagem, selecionando o botão "Editar" ao lado do item que deseja modificar.
- Na página de edição, a pessoa usuária pode visualizar o histórico de alterações daquela postagem.
- Excluir uma publicação, clicando no ícone de lixeira, em vermelho, ao lado do item que deseja excluir.
- Excluir várias publicações simultâneamente: ao apertar no checkbox, um novo botão aparecerá no final da tabela ("Deletar vários"), podendo assim fazer a seleção de vários itens e excluí-los.

Se estiver executando a aplicação localmente, abra uma aba do seu navegador e digite http://localhost:3000/, caso a aplicação não tenha o feito automaticamente.



<!-- ROADMAP -->
## Roadmap

- [x] Configuração inicial do back-end: configuração do serverless.yml, entrada da aplicação (handler.js) e instalação de dependências.
- [x] Criação de model com o Schema: title, content, insertedAt e updatedAt
- [x] Desenvolvimento do domínio principal (Post): Repository, Service e Controllers
- [x] Criado posts DTO
- [x] Middleware de validação de title, content e Promise errors criado.
- [x] Factory de Posts criada
- [x] Pasta src/utils: cria validação de JSON e classe que armazena os status codes da aplicação.
- [x] Testes com Jest: desenvolvidos testes para repository, service e controller da aplicação.
- [x] Início da configuração da aplicação front-end: criado com o pacote create-react-app.
- [x] Configuração do ContextAPI: foi desenvolvido o hook useProvider com useContext.
- [x] Rotas criadas: "/" para a entrada a aplicação e "/post/:id" para edição.
- [x] Criado componente Header da aplicação desenvolvido com botão de nova publicação.
- [x] Criado componente para armazenar a tabela de postagens da aplicação (PostsTable.jsx)
- [x] Criado componente Modal: um modal que é invocado ao clicar no botão "Nova Publicação" para cadastrar as postagens.
- [x] Criado componente EditPosts: página na qual a pessoa usuária será encaminhada para editar as postagens.
- [x] Chamada dos componentes Header, PostsTable e Modal em pages/main.page.js
- [x] Chamada dos componentes EditPosts em pages/edit.page.js
- [x] Estilização dos componentes utilizando Styled Components.


<!-- CONTACT -->
## Contato

Amanda Soares - amandchen@hotmail.com - <a href="https://www.linkedin.com/in/amandapccs/">LinkedIn</a>



<!-- ACKNOWLEDGMENTS -->
## Agradecimentos

* []() À empresa <a href="https://www.motrix.global/">Motrix</a> por apresentar esse desafio e contribuir no meu aprendizado.
* []() Ao meu amigo <a href="https://github.com/samsantosb">Samuel</a> pelos ensinamentos em back-end e programação orientada a objetos.
* []() Ao meu marido <a href="https://www.linkedin.com/in/alexandre-mateus/">Mateus</a>, por seus conhecimentos com design e UI/UX para melhorar a experiência da pessoa usuária para navegar a aplicação. 



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: https://i.imgur.com/NT9kebX.png
[cadastro-post]: https://i.imgur.com/mP23mN1.png
[editar-post]: https://i.imgur.com/zWRl7zo.png

[logo-icon]: https://i.imgur.com/egOsngu.png
