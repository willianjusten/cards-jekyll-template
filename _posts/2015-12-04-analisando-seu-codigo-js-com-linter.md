---
layout: post
title: "Analisando seu código JS com um linter"
date: 2015-12-04 22:43:23
image: '/assets/img/linter/errors-list.png'
description: 'Valide seu código em JS/ES6 em busca de erros, warnings, códigos esquecidos e melhore a sua qualidade. Seu amiguinho agradece um código mais limpo.'
main-class: 'js'
color: '#D6BA32'
tags:
- js
- linter
- tutorial
categories:
twitter_text: 'Valide seu código em JS/ES6 em busca de erros e melhore a sua qualidade.'
introduction: 'Valide seu código em JS/ES6 em busca de erros, warnings, códigos esquecidos e melhore a sua qualidade. Seu amiguinho agradece um código mais limpo.'
---

## Introdução

Faaaala pessoal, fazia muito tempo que eu não escrevia e confesso que isso já estava me agoniando. Então resolvi voltar a <s>falar besteiras</s> escrever!! 

Como não poderia deixar de ser, estou escrevendo ouvindo música. A playlist de hoje é [Brains](https://open.spotify.com/user/spotifybrazilian/playlist/0nUucSaL2BGl2VZlbY5TwR), uma playlist que está sendo montada lá na [CCXP](http://www.ccxp.com.br/), muita música maneira! Bota para tocar e vai lendo =D

## Qualidade de Código

Provavelmente você já passou horas escrevendo seu código lindo e aí, do nada, ele parou de funcionar. Então você ficou mais perdido que o John Travolta no Discurso da Dilma.

![John Travolta Meme](https://media.giphy.com/media/FWXpxEbWcOapq/giphy.gif)

 Você, então, em toda sua humildade, chegou para um amigo e pediu para ele dar uma olhada e ele falou frases assim:

> Você esqueceu de colocar o ponto e vírgula no final da linha. <br/>
> Essa variável tá escrita errada, faltou um 'a' ali. <br/>
> Cara, esse método não existe nessa linguagem...

Se você já ficou puto com isso, sinta-se abraçado, porque eu também já cansei de cometer esses erros bobos que dava vontade de bater com a cara na parede depois de descobrir. Mas não fui só eu, nem só você, isso é normal do ser humano, não somos máquinas e as vezes uns detalhes passam sem percerbermos.

No momento você está igual o John Travolta de novo.

![John Question](https://media.giphy.com/media/FxufOs6bQwxO0/giphy.gif) 

## Entendi seu ponto, mas como evitar isso?

Pensando nisso, foram criadas várias ferramentas para fazer análise por você. Seguem as principais e mais famosas:

- [JSlint](http://www.jslint.com/)
- [JSHint](http://jshint.com/)
- [Eslint](http://eslint.org/)

Cada uma dessas ferramentas possui um módulo no npm e podem ser fácilmente instaladas.

{% highlight  bash %}

npm install -g jslint

npm install -g jshint

## para poder fazer lint de ES6 e JSX
npm install -g eslint
npm install -g babel-eslint

{% endhighlight %}

E todas elas também possuem integrações com vários editores de código como Sublime, Atom, Brackets, etc...

## Mas como elas funcionam?

Cada uma dessas ferramentas lê seus arquivos desejados e percorre pelos mesmos buscando por erros ou definições que as próprias consideram como má prática e para cada um dos erros, elas reportam ao final.

Para os próximos passos, vou ensinar utilizando o `eslint`, que julgo o melhor dos Linters na atualidade, visto que ele dá um ótimo suporte a `ES6` e `JSX`, além do padrão do JS.

Após instalado o `eslint`, vá até o diretório do seu projeto, digite `eslint --init` e responda as perguntas de acordo com sua necessidade, segue abaixo o print de um uso meu.

![Print do eslint sendo usado](/assets/img/linter/eslint.png)

Após isso, será criado um arquivo chamado `.eslintrc` dentro da pasta raiz do seu projeto, contendo informações parecidas com:

{% highlight js %}
module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};
{% endhighlight %}

Se você quiser entender tudo que ele escreveu ali, dá uma olhadinha na [documentação](http://eslint.org/docs/user-guide/configuring) é super detalhada e bem explicada.

Tendo já o arquivo, basta você rodar no terminal em cima do arquivo desejado e ele fará o report se algum erro acontecer, como, por exemplo, tendo um arquivo js:

{% highlight js %}
(function () {
    'use strict';
    
    const a = 'will';

    function() {
        console.log('Hello!')
    }

})()
{% endhighlight %}

Se eu rodar o `eslint` no terminal analisando esse código, ele vai me retornar os seguintes erros:

![imagem mostrando os erros como variável não utilizada e falta de ponto e vírgula](/assets/img/linter/erro-1.png)

Eu criei uma variável `a`, mas nunca utilizei no meu código, eu usei console.log num código que vai para produção e ainda esqueci de colocar o ponto e vírgula no final do código!

Para um código pequeno desses, talvez não fizesse diferença, mas pense num código beeeem maior, ele pode ser uma mão na roda =D

Mas rodar isso o tempo todo no terminal é ruim, até mesmo se colocarmos num gulp/grunt da vida, o legal é mostrar no nosso editor. Se você usa Sublime Text, continua lendo aí, que vou mostrar a cereja do bolo!

## Usando o eslint no Sublime

Primeiro de tudo, espero que você tenha instalado o [Package Control](https://packagecontrol.io/installation) no seu Sublime. Depois disso, mande instalar o [SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html#installing-via-pc) e o [SublimeLinter-contrib-eslint](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation), que vão fazer toda a integração e mágica.

Feito isso, reinicie o seu Sublime e comece a escrever seu código JS! Quando tiver algum erro, ele irá te notificar com marcadores ao lado do erro e na parte inferior irá te avisar o erro. Como na imagem abaixo:

![Sublime indicando os erros](/assets/img/linter/sublime.png)

Se você for como eu e quiser ver todos os erros numa lista e poder navegar entre eles, aperte `cmd + shift + p` ou `ctrl + shift + p` e digite `linter show` e você verá uma opção igual da tela abaixo:

![Opção](/assets/img/linter/show.png)

Com essa opção selecionada, cada vez que você salvar o código, irá ver uma lista da seguinte forma:

![Lista de erros](/assets/img/linter/errors-list.png)

## Habilitando o Sublime para entender código ES6 + Eslint

Caso o seu Sublime não identifique ES6 junto com o Eslint e não faça o lint correto, basta que você instale o plugin do [Babel](https://github.com/babel/babel-sublime) no seu Sublime. Com esse plugin instalado, defina que todos os arquivos JS e JSX serão interpretados como Babel, seguindo os seguintes passos:

1) Abra um arquivo com a extensão JS ou JSX
2) Vá na opção View do Menu
3) Escolha Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel).

Feito isso, seu Sublime já vai entender aquele código em ES6 e o lint passará a funcionar! Agora vai lá e comece a programar com qualidade!

![John Kissing](https://media.giphy.com/media/D4QLJVmdHB44g/giphy.gif)

## Conclusão

Bom, é basicamente isso, se preocupe com seu código e evite demorar horas procurando o erro se uma ferramenta pode fazer por você.