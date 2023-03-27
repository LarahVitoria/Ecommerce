# Ecommerce com Next.js, Redux, Strapi e Mercado Pago

Este é um projeto de ecommerce desenvolvido com o framework Next.js, utilizando o gerenciador de estado Redux para lidar com a complexidade da aplicação, o CMS Strapi para gerenciar os conteúdos, e a plataforma de pagamentos online Mercado Pago para processar as transações.

## Objetivo

Este projeto foi desenvolvido com o objetivo de explorar as possibilidades oferecidas pelo Next.js, uma poderosa ferramenta para construção de aplicações web que oferece diversas vantagens em relação às soluções tradicionais. Além disso, o projeto integra outras tecnologias modernas para oferecer uma experiência completa de ecommerce, desde o gerenciamento de produtos até o processamento de pagamentos.

## Funcionalidades

- Criação de produtos: a aplicação permite a criação de novos produtos através do CMS Strapi, com controle de estoque, descrição, imagens e outras informações importantes.
- Busca de produtos: os usuários podem buscar produtos por nome ou categoria, utilizando a barra de busca na página inicial da aplicação.
- Adição ao carrinho: os usuários podem adicionar produtos ao carrinho de compras, que será mantido mesmo ao mudar de página ou fechar o navegador.
- Processamento de pagamentos: a aplicação utiliza a plataforma Mercado Pago para processar pagamentos com cartão de crédito, boleto bancário e outras opções.
- Dashboard de administração: os administradores da aplicação podem acessar um painel de controle para gerenciar pedidos, produtos, usuários e outras informações relevantes.

## Tecnologias utilizadas

- Next.js: framework de construção de aplicações web em React com suporte a SSR, SSG e outras funcionalidades avançadas.
- Redux: gerenciador de estado para aplicações complexas, utilizado para manter a consistência e a performance da aplicação.
- Strapi: CMS para gerenciamento de conteúdo, utilizado para criar e gerenciar os produtos da aplicação.
- Mercado Pago: plataforma de pagamentos online para processamento de transações.
- Outras tecnologias: Node.js, React, TypeScript, Styled Components, entre outras.

## Instalação

Para instalar a aplicação em seu ambiente local, siga os seguintes passos:

1. Clone este repositório: `git clone https://github.com/LarahVitoria/Ecommerce.git`
2. Acesse o diretório do projeto: `cd nome-do-repositorio`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente necessárias, conforme descrito abaixo.
5. Inicie a aplicação: `npm run dev`

### Variáveis de ambiente

A aplicação utiliza as seguintes variáveis de ambiente:

- `STRAPI_API_URL`: URL da API do Strapi, utilizado para buscar as informações dos produtos. Pode ser definido no arquivo `.env`.
- `MERCADO_PAGO_ACCESS_TOKEN`: Access token da sua conta do Mercado Pago, utilizado para realizar as transações. Pode ser definido no arquivo `.env`.

## Contribuição

Este é um projeto aberto para contribuição da comunidade. Caso encontre algum bug ou tenha sugestões para melhorias, sinta-se à vontade para abrir uma issue ou
