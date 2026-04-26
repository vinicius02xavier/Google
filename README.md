# Google

Clone simples da página inicial do Google usando HTML, CSS e JavaScript.

## Descrição

Este projeto recria a interface da página inicial do Google com foco em layout responsivo e estilo visual semelhante ao original. O projeto inclui:

- cabeçalho com links e ícones
- logo do Google
- campo de busca com efeitos de foco
- histórico de buscas armazenado no `localStorage`
- rodapé com links organizados

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Material Icons

## Estrutura do projeto

- `index.html` — página principal do clone do Google
- `assets/css/style.css` — estilos do projeto
- `assets/js/script.js` — lógica de histórico e interação com o campo de busca

## Como usar

1. Abra o arquivo `index.html` no seu navegador.
2. Digite um termo de busca e pressione Enter para navegar para o Google com o termo pesquisado.
3. O histórico aparecerá abaixo da barra de pesquisa quando o campo estiver ativo.

## Observações

- O histórico de busca é salvo no `localStorage` do navegador.
- O botão `excluir` remove um item do histórico local sem recarregar a página.
- O projeto é uma recriação visual e usa a busca do Google apenas como redirecionamento de URL.