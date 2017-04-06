## Documentação 

### Front Matter

#### Páginas
- `layout`: Layout a ser utilizado pela página.
- `permalink`: URL do post. Deve incluir `/blog/`.
- `title`: Título do post.
- `description`: Meta descrição do post para motores de busca.

Exemplo:
``` yml
---
layout: blog
permalink: /blog/

title: Artigos
description:
  Aqui você encontra todos os meus artigos, guias e tutoriais.
---
```

#### Posts

- `permalink`: URL do post. Deve incluir `/blog/`.
- `title`: Título do post.
- `description`: Meta descrição do post para motores de busca.
- `excerpt`: Trecho do texto que será exibido no Blog Roll.

Exemplo:

``` yml
---
permalink: /blog/porque-decidi-virar-desenvolvedor-web/

title:
  Porque resolvi estudar Desenvolvimento Web
description:
  Meu nome é Pedro Britto, 26, sou natural de Fortaleza/CE e prometi que nunca iria me tornar um programador. É um prazer!
excerpt:
  Meu nome é Pedro Britto, 26, sou natural de Fortaleza/CE e prometi que nunca iria me tornar um programador. É um prazer!
---
```
