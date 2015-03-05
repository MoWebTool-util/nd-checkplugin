/**
 * @module: nd-checkplugin
 * @author: lzhengms <lzhengms@gmail.com> - 2015-03-05 21:13:27
 */

//检查浏览器是否安装了某插件
'use strict';

var browser = require('nd-browser');

return function (pluginName) {
  var plugins=navigator.plugins;
  if (window.ActiveXObject) {
    //ie
    var activeName=pluginName+'.'+pluginName;
    try {
      new ActiveXObject(activeName);
      return true;
    } catch (e) {
      return false;
    }
  } else {
    //非ie
    pluginName=pluginName.toLowerCase();
    for (var i = 0, len = plugins.length; i < len; i++) {
      if (plugins[i].name.toLowerCase().indexOf(pluginName)!== -1) {
        return true;
      }
    }
    return false;
  }
};

