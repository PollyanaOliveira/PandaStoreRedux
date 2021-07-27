<p align="center"><img width='150px' src='https://github.com/PollyanaOliveira/panda-store-project/blob/main/panda_store/src/images/pandaHeader.png?raw=true' />
<h1 align="center"> Panda Store Project  </h1>  </p>

## 🧑🏻‍💻👩🏾‍💻Desenvolvido por

@[AdaoBJr](https://github.com/AdaoBJr)
<br>
@[PollyanaOliveira](https://github.com/PollyanaOliveira)

---

# Informações Importantes

Esse projeto é uma atualização do Panda Store Project. Um projeto refatorado utilizando Redux.

# Objetivos do Projeto

Uma versão simplificada, sem persistência no banco de dados, de uma **loja online**. 
Desenvolvido em dupla de acordo com demandas definidas em um quadro Kanban. 
A partir dessas demandas, temos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

## Documentação da API do Mercado Livre

A página _web_ consome os dados da API do _Mercado Livre_ para realizar a busca de itens da loja online. As buscas podem ser consultadas nos seguintes _endpoints_:

- Para listar as categorias disponíveis:
  - Tipo da requisição: `GET`
  - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
- Para buscar por itens por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
- Para buscar itens por categoria:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
- Para buscar itens de uma categoria por termo:
  - Tipo da requisição: `GET`
  - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
  - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
  - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY

Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).



# Requisitos do projeto

## Lista de requisitos

#### 1. Implemente o módulo de acesso à api do Mercado Livre

Implemente um módulo que acessa a API do Mercado Livre.


#### 2. Crie uma página de listagem de produtos vazia

Criar o campo de busca da tela principal, a listagem de produtos, inicialmente vazia. A listagem vazia deve conter a mensagem "Digite algum termo de pesquisa ou escolha uma categoria".```

#### 3. Crie a página do carrinho de compras

Criar o botão de carrinho de compras na tela principal, de listagem de produtos, e criar uma tela para o carrinho de compras, inicialmente vazio.```

#### 4. Liste as categorias de produtos disponíveis via API na página principal

Listar filtros de categoria obtidos da API na tela principal, de listagem do produto. A requisição da API para recuperar as categorias deve ser feita uma única vez após o carregamento da tela.

#### 5. Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

Criar a listagem de produtos. Fazer a exibição resumida do produto (o "card" que aparece na listagem). A exibição deve ter título, foto e preço. Fazer requisição à API do Mercado Livre enviando os termos buscados por quem usa e usar o retorno para fazer a listagem dos produtos. Se a busca não retornar resultados, gerar a tela correspondente com o texto "Nenhum produto foi encontrado".

#### 6. Selecione uma categoria e mostre somente os produtos daquela categoria

Como pessoa usuária, eu quero clicar em uma categoria e ver a listagem de produtos ser filtrada de  acordo com os produtos daquela categoria.

#### 7. Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

Como pessoa usuária, eu quero clicar no card do produto e visualizar a exibição detalhada do produto com nome do produto, imagem, preço e especificação técnica. A tela também deve possuir um botão que leve ao carrinho de compras.

#### 8. Adicione produtos a partir da tela de listagem de produtos

Na tela de listagem de produtos, permitir adicionar o produto ao carrinho.

#### 9. Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

Na tela de exibição detalhada do produto, permitir adicionar o produto ao carrinho.

#### 10. Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

Adicionar lista de produtos ao carrinho, com valor total ao final. Criar botões (-) e (+) para cada produto do carrinho, permitindo alterar a quantidade desejada de cada produto. A quantidade não pode ser negativa. Criar também botão (X) para remover produtos do carrinho e botão para finalizar a compra.

#### 11. Avalie e comente acerca de um produto em sua tela de exibição detalhada

Adicionar formulário ao produto, em sua exibição detalhada, para permitir adicionar avaliações com nota de 1 a 5 estrelas e comentários (o comentário deve ser opcional, sendo possível enviar apenas a nota). Exibir a lista de avaliações já feitas. Se quem usa sai e volta da tela, a nota e as avaliações não devem ser apagadas.

#### 12. Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

 Implementar tela para a finalização da compra. A tela deve conter uma seção para revisão dos produtos com o valor total da compra, um formulário para ter as informações do comprador e um a seção para escolher o método de pagamento. Ao se clicar em "Comprar", deve-se validar que o formulário está preenchido e que a forma de pagamento foi escolhida e, em caso positivo, deve-se zerar o estado, redirecionar para a tela inicial (listagem de produtos). Caso algo não tenha sido preenchido, mantém-se na mesma tela com o dados sem apagar e destaca-se os campos não preenchidos em vermelho.

#### 13. Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

Adicionar ao ícone do carrinho, em todas as telas em que ele aparece, um número com a quantidade de produtos adicionados.

#### 14. Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque

Adicionar quantidade disponível do produto (disponível via chamada da API na chave "available_quantity") e limitar a compra de acordo com a quantidade em estoque. Desabilite os botões de (+) daquele produto na aplicação ao se alcançar a quantidade máxima dele no estoque.

#### 15. Mostre quais produtos tem o frete grátis

Adicionar indicador de frete grátis à exibição resumida e detalhada do produto.

#### 16. Faça um layout para o site

Adicionar ao site um layout agradável para quem usa ter uma boa experiência.

#### 17. Faça um layout responsivo para o site

Faça um layout responsivo completo, para telas pequenas.

#### 18. Crie um seletor dropdown para ordenar a lista de produto por maior e menor preço

Criar um seletor dropdown que permite a lista de produtos ser ordenada por maior e menor preço.

#### 19. Coloque uma animação no carrinho para quando um produto for adicionado

Coloque uma animação no carrinho quando adicionar/remover um produto.

#### 20. Crie um slider lateral para exibir o carrinho na tela principal

Exibir o conteúdo do carrinho num slider na lateral da tela, de forma que ele possa ser exibido e escondido através da interação com botão (veja os detalhes no card).

#### 21. Destaque, na tela principal, os produtos já adicionados ao carrinho

Destacar produtos que já foram adicionados ao carrinho, diferenciando-o dos demais produtos da lista da página principal (veja os detalhes no card).

#### 22. Impeça que a quantidade do produto seja negativa

Da tela de detalhamento de produto, permitir alterar a quantidade daquele produto no carrinho, se ele estiver lá, com botões (-) e (+). A quantidade não pode ser negativa (veja detalhes no card).
