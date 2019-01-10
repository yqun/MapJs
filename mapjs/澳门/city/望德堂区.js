(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('望德堂区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"820003","properties":{"name":"望德堂区","cp":[113.550252,22.193791],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@CC@@AAA@AB@@@@@@A@@@A@@@@@A@@@A@@@@@@@@@@@A@@@@@A@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@BDB@@B@@B@@DBBB@@@@BBB@@@DC@@@@@@@@B@@@@AB@@@@A@A@@A@@@"],"encodeOffsets":[[116285,22729]]}}],"UTF8Encoding":true});}));