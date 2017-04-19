---
permalink: /blog/css-para-iniciantes-1/
publishdate: 19 de abril, 2017

title: >
  CSS para iniciantes (parte 1) - O básico

description: >

excerpt: >

---

Você criou coragem e resolveu o que quer da vida. Agora você está mergulhando de cara e quer começar a aprender sobre desenvolvimento web.

Muito bem! Então prepare-se: vamos aprender CSS! Se você nunca estudou sobre CSS antes, esse post foi feito especialmente pra você.

**É interessante que você tenha um conhecimento básico de HTML antes de prosseguir.**


## O que é CSS e pra que ele serve?

CSS é a sigla para Cascading Style Sheets (que pode ser traduzido como Folha de Estilos em Cascata). Pode parecer um nome estranho (como eu também achava), mas faz todo sentido.

Folhas de Estilo são simplesmente os arquivos `.css`, que definem o visual (ou o 'Style') da página e é exatamente para isso que ele serve.

Enquanto o html é o esqueleto do site, o css é a parte visual, que define cores, formas e tamanhos.

( Exemplo de site com html puro vs com css )

A parte do 'em Cascata' se refere à forma peculiar com que os estilos são aplicados. Vamos ver isso ao final deste artigo.

## Como ele funciona

A lógica do CSS funciona assim:

  1. Escolher um elemento do site para aplicar estilos.
  2. Escolher uma propriedade (ou tipo de estilo a ser aplicado).
  3. Atribuir um valor que modifique essa propriedade.

Então se nós quisermos adicionar um fundo azul claro ao fundo do site poderiamos fazer da seguinte forma:

  1. Escolher o elemento do "corpo" do site.
  2. Escolher a propriedade "cor de fundo".
  3. Atribuir a cor "azul claro" à propriedade "cor de fundo"

Simples, não é?

Mas infelizmente (ou felizmente!) você não pode escrever dessa forma e esperar que o navegador entenda o que você está dizendo.


### O CSS como ele é

Para que tudo funcione corretamente você precisa falar em "CSSês" e ele parece um pouco com isso:

``` css
seletor {
  propriedade: valor;
  outra-propriedade: outro-valor;
}
```

O `seletor` vem primeiro e é através dele que o navegador saberá onde aplicar os estilos que se quer. Afinal, nós queremos que apenas que o fundo do nosso site fique azul claro.

Em seguida vem um par de `{ }` e é dentro dele que todoas as nossas declarações de estilos devem estar.  Esquecer um deles -- ou os dois -- é suficiente para seus estilos ficarem loucos.  O espaço delimitado pelos `{ }` é chamado de "declaration block" (ou bloco de declaração).

Dentro do bloco de declaração vem às "declarations" (ou declarações), que são o par `propriedade: valor`. São elas que definem de fato a aparência do seletor. Depois de cada declaração é preciso por um `;` para que o computador saiba onde termina cada uma delas.

Para finalizar, o nome de tudo isso (seletor, propriedades e valores ) é "rule" (ou regra).

Estamos quase chegando lá. Mesmo falando em CSSês, os navegadores não vão entender nosso código. Afinal, eles não sabem português.


### Aplicando o fundo azul de verdade

Chegou a hora de fazer acontecer. O código para aplicar o fundo azul no nosso site é:

``` css
body {
  background-color: lightblue;
}
```

Muito diferente? Vamos analisar melhor:

- `body` é o seletor que escolhe todo o corpo do site (elemento `body`).
- `background-color` é a propriedade referente à cor de fundo do elemento escolhido.
- `lightblue` é o valor aplica uma cor azul claro à propriedade `background-color`.

Assim aplicamos com sucesso a cor `lightblue` ao `background-color` do elemento `body` de nosso site!

Agora você sabe como aplicar fundos azuis a qualquer site que você fizer, mas para conseguirmos criar um design mais refinado precisaremos saber um pouco mais sobre CSS.

Vamos começar nos aprofundando um pouco mais sobre seletores.

## Seletores

Seletores servem para selecionar mais do que apenas elementos HTML. Eles também podem selecionar classes e IDs e isso com uma pequena modificação.

- Para selecionar um elemento, basta escrever o nome do elemento.
- Para selecionar uma classe, basta digitar um `.`, seguido pelo nome da classe.
- Para selecionar uma ID, basta digitar um `#`, seguido pelo nome da ID.

``` css
elemento { }
.seletor-de-classe { }
#seletor-de-id { }
```

### Selecionando coisas dentro de coisas

Digamos que nós precisamos selecionar paragrafo, mas não todos os paragrafos. Quem sabe só aqueles parágrafos dentro daquele `div`.

A boa notícia é que podemos especificar que queremos apenas os paragrafos dentro de um div. Para isso basta escrever os seletores em sequência:

```
div p { }
```

A má notícia é que isso não é muito recomendado por problemas de especificidade e é um pouco mais difícil de manter o código fácil de editar sem perder a cabeça.

Em um site pequeno isso não é problema, mas quando se tem algumas dezenas de páginas e milhares de linhas de CSS escritas, pode acreditar: isso será um problema.

## Propriedades e valores
