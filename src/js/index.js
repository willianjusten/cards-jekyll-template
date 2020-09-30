var azepto = require('./azepto');
var classie = require('./classie');
// var scrollanimation = require('scrollanimation');
var simpleJekyllSearch = require('./simpleJekyllSearch');
// var smoothscroll = require('smoothscroll');
var targetBlank = require('./targetBlank');
var zmain = require('./zmain');

azepto();
classie(window);
// scrollanimation();
simpleJekyllSearch(Zepto);
// smoothscroll();
targetBlank();
zmain(Zepto, window);