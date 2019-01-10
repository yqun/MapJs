(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('海淀区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"110108","properties":{"name":"海淀区","cp":[116.310316,39.956074],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@@@@AA@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@AB@@@BCA@CAA@A@C@M@EA@@A@E@EAA@KAA@A@AAC@C@E@EA@@A@DE@A@@DAFIFEBCBABC@@@@B@BCFGFIHGBA@A@@B@@A@A@ABEBEBGBC@@@A@@@A@@@A@@@CAE@CK@G@@A@A@A@E@C@A@ABA@C@E@A@C@A@@A@AA@@A@CAA@@@AAA@EAC@@@@@C@A@@@@@@@@@@@@D@D@B@@@@@B@@@B@@A@C@AA@@A@@A@A@A@@@A@ABA@A@@@@@@@@AAA@@@@@A@CB@@A@EA@@@@AAA@@@@@A@@B@@@@A@@@@@@@@@@A@@@@A@@@@B@@A@A@@@@@@@A@AB@@@@@@A@@@A@@@@@A@@@A@@@AA@@A@AAB@@@@@@A@@@@@@@AB@@@@@@@@@B@@@@@@@@@@@@A@@F@@A@C@C@C@@@EBA@E@A@A@@@@@@@A@@@E@I@C@@@@@@@@@A@@@@@AB@@A@@@A@@@A@@@@A@@C@A@@B@@A@@B@@AA@@A@@@C@A@@@@BA@B@@@@B@@@@@@A@AI@A@C@G@@@@@A@M@@@@@A@@@@@E@@@A@@@AA@@A@@@AA@@@@@@@@E@@@@AAAC@@AD@B@@@A@@AA@A@C@BA@@@A@@@@@B@@A@A@@A@@A@@@A@@@@@@@AAAA@@@@AAAB@@@@@L@HA@A@C@G@G@@@A@@@@@A@G@CAE@@@@@A@@@@@@@@@@@@@C@E@@@A@@@ABA@@@@@A@A@@@@@@@@@@@@@C@@@@@@@A@@@@@@@@@@@A@@@D@@@A@@@@@@@K@@@@@@@A@@@BD@B@@@@@@@B@@@F@@@@@@@B@F@D@F@FA@@@E@@@@@@B@@@@@@@@@@@B@@@@B@@@@@D@@@B@@@@BA@@@@BA@@BB@@@@B@@C@@@AA@@A@@@@@@@A@@A@@@@AA@@E@A@@@@@@@G@AB@A@@A@@@@@@A@@@A@@@@@@I@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@A@@@A@C@E@C@A@@@A@@@@@@@A@@BCAA@@A@BCAA@@@@@@@A@AB@@@@@@@@@@A@@@@B@@@@@@C@@B@@@@@JB@@DJ@F@@B@@BBEB@@@@BD@@@@@@D@@@@@@@ABA@@@AB@@@@@B@@@@B@@@B@@@B@@BA@@B@@@@@@@@B@@HAB@@F@@D@BE@BBABA@ABAD@BEBGJGD@DADA@EBKF@D@BE@CD@@ADBB@DAB@D@@BBB@@BADBB@BABABA@CBA@@@CD@IACIGCAA@ADALADABCAECGAABBDCDCHCBB@@BB@@B@B@@BBB@LDVB@B@@@@@B@@B@@@@B@@@@@@@@BBA@@@B@@@@B@@@@@@B@@@@B@@@@@@@@@@@@@@ABA@@@@@@B@@@@@BA@@@@@@@AA@@@B@@@@@@@@AB@@@@@@@@@B@@A@@@@@@@A@@@@@@@AB@@@@@@@@@B@@@@A@@@@@@A@B@@@@@@@@@@A@@BA@@@@@@B@@@@@@@@@@@B@@@@A@@B@@@@@@@@A@@BA@@@@@AB@@@@A@@@A@@@@@@B@@A@@@@B@@@@@@A@@@@@A@@@@@@@@@@@@@A@@@@B@@@@A@@@@@@@A@@@@@AB@@@@@@A@@@@@A@@A@@A@@@@@@@@@@@AB@@@@A@AB@@A@@B@@@@A@@B@BA@@@@@A@@@@@@@A@@B@@A@@B@@A@@@@@@@AB@@A@@@@@A@@@@@@@A@@@@B@@@@A@@@@@@@A@@@@@A@@@A@@@@@A@@@A@C@A@@@A@AAA@A@A@@B@@CB@@A@A@@BA@C@A@A@C@@@A@@@A@AAA@A@@@@@@@AB@@EBA@@@E@A@CA@AE@@@A@A@C@A@A@CA@@A@@B@@AB@@A@A@C@@@A@@@@B@BA@AB@BA@@B@B@@@B@@@B@BA@@@@BA@@BAB@BA@@BAD@@@D@@ABAB@@BBA@BB@@BB@BBB@BBB@B@B@BA@A@AB@BA@@BABA@@BA@@B@DB@@@AB@@@BABABA@@@@@@@@@AB@@AB@@A@AA@B@@AB@@@@A@@@@@ABAB@BAB@@AB@B@@@@@@@BAB@@A@@@A@@@@B@@@@@B@@@B@@@@@B@@B@@@@@@B@@@@BB@B@@@@B@@@@@BB@@@@@@B@@@@B@@@@@B@@@@@@BBBB@B@@@@B@@@@@@@B@@@@@@B@@@@B@@@@@@@@@B@@B@@B@@@@@@@@@@@B@@@@@@B@@@D@@@@@@@@B@@@@B@@@@@@B@B@@@@B@@@@B@@@@@B@@@B@@@@@B@@@@@@B@@@@@@B@@@@@@@@B@@@@@@@B@@B@@@@B@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@B@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@B@@@@@@B@@@@@@@@@B@@@@@B@@A@@@@@@@@@@B@@@@@BB@@@@@@B@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@B@@@@@@B@@@@@A@@@@@@B@@@@@B@@@@@B@@@B@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@BB@@@@@@@@@ABB@@@@@@@@@@@@@@B@@@B@@@@@@B@@@@@@@@B@@@@@@@@@@A@@@@BA@@@@BA@@@@B@@@BA@A@@@@@@@@@@@@@@@@B@@AB@@@@@@@@@@B@@@@B@DB@@B@FABA@@B@@@@@@@@@B@@@@@@@@@B@@AB@@BH@@@B@@@B@@@H@B@B@BBB@@@B@BC@@@@@@@@B@D@@@@H@BBDR@B@T@B@FBLB@@B@HBB@B@@B@@@B@@A@@@AB@BB@@@@@D@@@@@B@AH@@ADABAH@FNDLF@D@@@@@DFF@@@D@B@@@B@@@@@@@@@@B@B@BAB@BAB@B@B@@@@@@@B@@@@@DH@@JB@@H@@A@A@A@A@@@A@@@@@A@@BA@AB@@ABA@@@A@A@A@@@C@A@ABA@AB@BAB@BAB@B@@BB@BB@BB@@@B@B@DAHCBAF@DAB@DADAD@D@B@D@B@@@B@B@F@@@@C@@@A@C@CAE@I@@A@@@@A@A@@@A@@E@DI@@EG@@@@@A@ABADAB@BABBF@@@BBB@B@BAB@DCBBB@BB@B@BABAB@@@BBB@@B@D@@@@A@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@AB@@@@@@AA@@@@@@@@A@@B@@@@A@@@@@@@@@@@A@@@@@A@@@@@@@A@AB@DA@@@@@@@CIABC@BB@@@@@@@@@@@@@B@@@@A@CFBJ@BA@@@AAAFG@A@@@@DEDI@@B@LD@@@@@@BB@@@@@@B@@@@@DB@ADEBEDE@@PY@@FDFCHB@CJDFCHG@@@@BADBBA@@@@@@@@DBBB@@B@@B@@B@B@F@BBDGF@@BAHB@@@@@B@@@F@AHB@@@@@@@@@D@BCDBADLBL@@FP@@@D@AA@AB@BAD@F@FA@DBABGEA@@CABAEA@BA@@A@@ABAA@@A@@AA@BEIADKD@@CB@B@D@@@B@@@@@@@@A@@@C@@@@B@@@DB@@@@@@@@@AB@@@@@F@@@B@@@B@B@@@DA@@B@@@@@@@@@D@"],"encodeOffsets":[[119185,41003]]}}],"UTF8Encoding":true});}));