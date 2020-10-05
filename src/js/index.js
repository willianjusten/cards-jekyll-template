var azepto = require('./azepto'); // TODO: remove
var classie = require('./classie');
// var scrollanimation = require('scrollanimation'); // TODO: remove?
var simpleJekyllSearch = require('./simpleJekyllSearch'); // TODO: refactor to vanilla JS
// var smoothscroll = require('smoothscroll'); // TODO: remove?
var targetBlank = require('./targetBlank');
var zmain = require('./zmain'); // TODO: refactor to vanilla JS
var headingLinks = require('./headingLinks');
// TODO: add dark theme switch

azepto();
classie(window);
// scrollanimation();
simpleJekyllSearch(Zepto);
// smoothscroll();
targetBlank();
zmain(Zepto, window);
headingLinks();