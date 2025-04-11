"use strict";

hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyEnd.file('floater','views/floater.pug',{}, {cache: false});
});