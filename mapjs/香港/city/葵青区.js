(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('葵青区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"810017","properties":{"name":"葵青区","cp":[114.13918,22.363908],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@C@@AA@@@@@@A@AB@@@@@@@@@@A@@@@@@@C@@@EBA@@@AA@@A@AA@@A@@@A@@@@@@@A@@@AA@@@A@A@ABABABAB@LCB@@@@A@@@AOGKEAA@@@A@@@@@@BABC@ABC@A@@B@h@@cG@@@@@MA@BDD@F@DCFIFKFGDCDCDAFCBCDCBM@K@UA@@ABA@GHGFEBGzTJvB@G@E@@@@@@@@FBB@@@B@@BB@DBDB@@BB@@@@@@@B@@B@@@@@@@@@@@@@@@@@@B@@BB@B@@@@@@BB@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@AB@@@@A@@B@@@@@@@@@@@BB@@@B@FBBBFBB@BB@@@@B@B@@@@@@@BBB@B@B@@@@@B@@G@@@AB@@@B@FBBC@@@AA@AC@A@A@C@C@CDC@C@@AA@ACC@A@A@C@GBA@ABA@ADAB@@A"],"encodeOffsets":[[116892,22877]]}}],"UTF8Encoding":true});}));