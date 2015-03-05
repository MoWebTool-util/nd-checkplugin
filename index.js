/**
 * @module: nd-checkplugin
 * @author: lzhengms <lzhengms@gmail.com> - 2015-03-05 21:13:27
 */

//检查浏览器是否安装了某插件
'use strict';

var browser = require('nd-browser');

return function (name) {
  name = name.toLowerCase();
  if (browser.ie) {
    try {
      new ActiveXObject(name);
      return true;
    } catch (e) {
      return false;
    }
  } else {
    var plugins = navigator.plugins;
    for (var i = 0, len = plugins.length; i < len; i++) {
      if (plugins[i].name.toLowerCase().indexOf(name) > -1) {
        return true;
      }
    }
    return false;
  }
};

