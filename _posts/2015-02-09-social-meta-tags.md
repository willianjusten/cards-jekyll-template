---
layout: post
title: "Social Meta Tags"
date: 2015-02-09 19:33:48
image: '/assets/img/dica-rapida-2/main.png'
description: 'Aprenda como ser mais social, ter maior relevância nas redes sociais e atrair mais usuários.'
main-class: 'html'
color: '#EB7728'
tags:
- social
- seo
- tutorial
categories:
twitter_text: 'Aprenda a usar as meta tags sociais.'
introduction: "Aprenda como ser mais social, ter maior relevância nas redes sociais e atrair mais usuários. Para isso, basta criar as meta tags corretas."
---

## Introdução

Estou aqui de novo para mais uma **#dicarapida** sobre um assunto que é bastante importante, mas muita gente esquece ou não faz de forma correta, que são as Meta Tags Sociais.

Hoje em dia, as redes sociais são fundamentais para que a gente consiga alcançar um maior número de pessoas. Antes isso ficava mais a cargo das pesquisas orgânicas, ads e outros modelos de divulgação (email marketing, spots de rádio, tv, etc).

No meu blog, muito do acesso é dado pelas redes sociais, sendo o facebook o maior propagador, acho que é porque sigo os passos do [Fernando Daciuk](http://blog.da2k.com.br/) e mando spam para todos os grupos do face =p

Segue o gráfico abaixo, indicando as origens de acessos do meu blog:

![Gráfico de Acessos do Blog por Origem](/assets/img/dica-rapida-2/canais.png)

## Mas e por que dessa tal de Meta Tag?

Cada rede social possui um conjunto de informações para serem lidas e elas serão enviadas do seu site para as redes através dessas Meta Tags. Isso que permite que as redes leiam seu link e já preencham o post de informações. Elas podem ser visíveis para os outros usuários, como: imagem, título, descrição, hiperlink. Mas também podem ser informações somente para análise da rede social, como o tipo do site (blog, website, ecommerce), autor, hora de publicação, tags e etc.

## Facebook

A maior rede social que temos hoje possui um conjunto de informações que é o chamado [Open Graph](https://developers.facebook.com/docs/sharing/best-practices?locale=pt_BR). A partir dela conseguimos organizar bastante as informações e inclusive fazer uma análise do nosso site utilizando o Facebook Insights.

Existem vários tipos de Meta Tags que o Open Graph suporta e todas elas são sempre iniciadas com o prefixo `og:`, caso queira saber todas que tem, basta dar uma olhada lá no site do [Open Graph](https://developers.facebook.com/docs/sharing/best-practices#tags).

Abaixo seguem algumas das tags principais, das quais inclusive utilizo no meu blog:

{% highlight html %}
<!-- Social: Facebook / Open Graph -->
<meta property="fb:admins" content="id do seu fb insight">
<meta property="og:url" content="url do seu site">
<meta property="og:type" content="tipo do link, article, page, etc">
<meta property="og:title" content="título do site">
<meta property="og:image" content="imagem do site (LINK ABSOLUTO)">
<meta property="og:description" content="breve descrição">
<meta property="og:site_name" content="Nome do site">
<meta property="article:author" content="fb de quem escreveu">
<meta property="article:publisher" content="fb de quem publicou">
<meta property="article:published_time" content="momento de publicação">
<meta property="article:tag" content="tag1">
<meta property="article:tag" content="tag2">
{% endhighlight %}

Tendo esse conjunto de informações, quando você for colocar seu link em algum lugar do facebook, ele vai ler as informações e colocar semelhante a imagem abaixo:

![Imagem de um post no Facebook](/assets/img/dica-rapida-2/face-post.png)

**AVISO:** o facebook é uma bosta para ler seus links corretamente, portanto, utilize a ferramenta de [debug](https://developers.facebook.com/tools/debug/og/object/), para que ele possa ler os dados e identificar se está tudo certinho. Lembre-se também de seguir as regras do facebook, como, por exemplo, tamanhos de imagem e dados passados.

## Twitter

Outra grande rede social, um pouco mais simples, mas que também permite carregar certas informações. Esses dados são chamados de Twitter Cards e são iniciados com o prefixo `twitter:`. Para saber um pouquinho mais, [leia a documentação deles](https://dev.twitter.com/cards/overview)

Seguem as tags básicas:

{% highlight html %}
<!-- Social: Twitter -->
<meta name="twitter:card" content="summary_large_image"> <!-- aqui fica o tipo de card -->
<meta name="twitter:site" content="@willian_justen"> <!-- twitter handler do site -->
<meta name="twitter:title" content="Título do Post">
<meta name="twitter:description" content="Descrição do post">
<meta property="twitter:image:src" content="link da imagem">
{% endhighlight %}

Para que o twitter passe a aceitar seus cards, você precisa validar [neste link aqui](https://cards-dev.twitter.com/validator). Após validado, quando você postar algum link do seu site, ele será visualizado conforme a imagem abaixo:

![Imagem de um post no twitter](/assets/img/dica-rapida-2/twitter-post.png)

## Google Plus

Por último, mas não menos importante, vem o Google Plus. Apesar de muita gente achar inútil, ele tem uma indexação excelente e por ser do google, muitas vezes é favorecido, portanto, não vamos esquecer dele =p

Ele segue o padrão do [Schema.org](http://schema.org/) e seguem abaixo as tags:

{% highlight html %}
<link rel="author" href="google plus do autor">
<!-- Social: Google+ / Schema.org  -->
<meta itemprop="name" content="Título da página">
<meta itemprop="description" content="Pequena descrição">
<meta itemprop="image" content="imagem da página">
{% endhighlight %}

## Conclusão

Com isso fecho a **#dicarapida** de hoje, espero que tenham entendido a importância dessas meta tags e consigam mais relevância em suas postagens e/ou sites. Se tiverem alguma dúvida ou alguma informação a acrescentar, só falar nos comentários logo abaixo =)
