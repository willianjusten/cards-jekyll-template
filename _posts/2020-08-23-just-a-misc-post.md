---
layout: post
comments: true
title: "Just a misc post"
date: 2020-08-23 19:11:45
image: '/assets/img/'
description: "Just a misc post"
main-class: 'misc'
color: '#7AAB13'
tags:
- misc
categories:
- "Misc"
twitter_text:
introduction: "Just a misc post"
---

## Site and User Settings

You have to fill some informations on `_config.yml` to customize your site.

This is a simple and minimalist template for Jekyll designed for developers that want to write blog posts but don't want to care about frontend stuff.

## Basic Setup

1. [Install Jekyll](http://jekyllrb.com)
2. Fork the [Will Jekyll Template](https://github.com/willianjusten/will-jekyll-template/fork)
3. Clone the repo you just forked.
4. Edit `_config.yml` to personalize your site.
5. Check out the sample posts in `_posts` to see examples for assigning categories and tags, and other YAML data.
6. Read the documentation below for further customization pointers and documentation.
7. **Remember to compile your assets files with Gulp.**

HTML:
```html
<div class="container">
  <h1>Hello World</h1>
  <a href="#" title="Home">Home</a>
  <!--button -->
  <button>Click</button>
</div>
```

CSS:
```css
#id {
  color: red;
}

.class {
  background: purple;
  color: #fff;
}

p {
  padding: 20px;
}

a:hover {
  color: #2f2f2f;
}
```

JavaScript:
```javascript
const text = "Hello World";

function printText () {
  return text;
}

printText(); // "Hello World"
```

Bash:
```bash
git add . && git status
```

JSON:
```json
[
  {
    "name": "Jack",
    "age": 23,
    "employed": true
  },
  {
    "name": "Jill",
    "age": 24,
    "employed": false
  }
]
```

The Theme features:

- Gulp
- Stylus (Jeet, Rupture, Kouto Swiss)
- Live Search
- Offcanvas Menu
- SVG icons
- Very very small and fast!
- Shell Script to create posts
- Tags page
- Series page
- About Me page
- Feed RSS
- Sitemap.xml
- Color Customization
- Info Customization



