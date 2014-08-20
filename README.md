CSS-Sprite gulper plugin
===================

A [gulper](https://github.com/PaulAvery/node-gulper) plugin to include images as css based sprites:

``` js
var sprites = require('gulper-sprites');
var gulper = new require('gulper')(config)

gulper.plugin(sprites(glob));
```