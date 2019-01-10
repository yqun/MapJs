(function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if(typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
	var log = function(msg) {
		if(typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if(!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if(!echarts.registerMap) {
		log('ECharts Map is not loaded');
		return;
	}
	echarts.registerMap('自贡市', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"id": "510302",
			"properties": {
				"name": "自流井区",
				"cp": [104.778188, 29.343231],
				"childNum": 16
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@CA@@@@@@@@@@A@@@@@@@@@@@@@DD@AB@"],
					["@@@@B@A@@@@@@@@@"],
					["@@@CA@@@@@ABB@BB@@"],
					["@@B@NHB@B@B@@@B@AAKEAA@ABA@@@A@A@@@@IC@@@B@@@@@@A@@@@@@@@B@@@@B@@@@@@@B@@@@BA@@@BB@@@@@@@@B@A@@@@@AF"],
					["@@@@@@@@@@BB@A@@A@"],
					["@@A@@@@BB@@@@A@@"],
					["@@AA@@@B@@B@"],
					["@@@A@A@AA@@@A@ABA@AB@BDBBB@@B@@@@ABA"],
					["@@AA@@@@@D@@@AB@@@"],
					["@@B@@@@@BB@BB@BABC@AAA@@C@@@A@@@AB@@@@@@@B@@@@@@@B@@"],
					["@@@@@AC@@B@@D@"],
					["@@@@A@@@@@@BB@@A@@@@@@"],
					["@@@AA@@@@B@@@@BB@A@@@@"],
					["@@BA@@@@C@@@@@@B@@B@@@@@@@"],
					["@@@@@@@@@@@@ACCDD@@@B@@@"],
					["@@@@BA@@D@@@BA@CB@@A@@DA@@F@DABABABA@ADADAD@F@BBBB@B@@CBADBBFH@B@@@@@B@@@@@B@@BB@@B@@BB@@B@@@@@@@@@@A@AB@@AB@AA@@@@@AA@@@@@@@@A@@@A@@@@B@@AB@@@@@@A@@B@@B@@@@@@@BB@@@@@B@@@@B@@@@B@B@DAB@@C@@B@@CBAD@BABABAB@BB@B@D@B@@@BBCD@BBB@ABA@@BAB@B@@@B@@@BA@B@@@D@@B@@@B@@@BA@@@A@@@@@@@A@@@B@@@@BB@@BB@B@B@B@@@B@@BA@@@@@A@@BA@@@B@@@@@@@B@@@DD@B@@B@B@@@B@BA@C@@@ABA@A@AAA@BA@A@@@A@A@@@@@@ABA@ABCB@B@B@B@@@@D@B@BBBBBBBA@@B@B@D@B@BA@@BB@@@B@@B@@@B@@AB@ACAA@@@AB@B@@@BACC@@@@@@@@@@@@A@B@@@@@B@@@@@@@@@@@DB@@@@@AB@B@B@@@B@@ABA@@B@BBB@B@BA@A@A@A@@DAH@@@BE@@@@@@@@@@@@AA@@A@@@@A@@@@A@@AA@@@B@B@@@B@A@@AB@@@@@@@JD@@B@@CA@@@B@@@@@@@BB@@@@@@B@@@B@B@@@@@BB@B@BB@@@@ABA@@BAFEBA@@BB@@@B@@@BBAB@@@@@@A@@@@@@@A@@@@@@BAA@@@@@B@B@@@D@@@BA@@@A@@@@@@CAABA@A@CE@CA@C@A@AF@@ABADAB@BAB@BA@A@K@A@@@@A@@C@@@A@@@@@BA@@@@D@DG@@BC@@B@DA@@BAAAAA@AA@ABAD@BA@A@@@@C@@B@@ABA@@@A@@@AA@@@@@@A@@AAA@A@@BA@@@A@A@AA@A@@@@@@@ABCBABCB@AAEIA@AAB@@@@A@@@@@A@A@A@@@@@A@@@AB@@@@@B@@@@A@@@A@@@@B@@B@@B@BB@@@@B@D@@@@@@ABA@@BC@@@A@@B@@ABA@@B@@@@@@A@@@A@@B@@@@@@A@@A@@@@A@@A@@@@B@@@@@@AAACA@@@@AA@@@AA@@@BA@@@@AA@A@@AA@@@@@A@@@A@@@@@@@AAAA@@@@@A@BBA@@BC@A@A@@@@A@@@A@A@A@@@@@@A@@@@@A@@A@@@A@@BA@@@@A@@@@BA@@@@@@@@@@@@C@A@@@A@@@@@@AAB@A@@@@@@@A@@A@@B@@@A@@@A@A@@@@ABA@@B@@A@@@@@@AA@@BA@@@@A@A@ABABA@@@@A@AB@@A@@A@@@AB@@@@A@@AAAAA@@@@@AB@@AAA@@BA@@@@A@@B@@@@@AA@@A@@A@@@@@A@@@@@A@@AA@@A@@B@@@@AA@@@@AAB@@@C@@@@B@@AB@A@@@@@A@@A@A@@@@A@@@@A@@@@@ABA@A@@@CA@@@@@@B@@A@@@@@@A@A@@@@@@@@A@@@@BA@@@@@A@@@A@@AB@@AA@@@ABA@@B@BB@@B@@@B@@@BA@@A@@A@@B@@AAA@@B@@@@AA@AA@@@@A@@@A@@A@@@@@AABAB@@A@@A@A@@@@D@@@BA@@@@@AB@BBB@@A@@@@A@A@@@AA@@@@@A@A@@B@@@@B@@@@@@B@AAAAA@@A@@@A@AA@BA@@B@@@@A@A@@A@@@@@A@@@A@ABAB@@@@@BA@@B@@A@@@@B@@@@A@A@C@@@@A@@@@AA@@@@B@@@B@BA@@A@@@@@A@@@BA@@A@@@BA@AB@@@@A@A@@@@BA@@@@@@@A@@B@@A@@@@@@CBA@A@@B@@A@@A@@BAA@@@@A@B@@AB@B@@@@@B@@@BA@@AA@@@A@@@@@@BAB@@A@@@AA@AB@@@@@AA@@AA@@@A@@@@@@@AAA@@@@@@A@@@@@AA@@A@AA@@AA@A@C@@@@@ABAB@@AB@@@@A@AB@B@@@@AD@@A@ABA@@@@@@AA@@@@@BA@@@@AA@@@AB@@@@@A@@@AB@@@@A@@@@@@ABA@@@@@@A@@AA@@A@@A@A@@B@@@@@AA@@@@AA@BA@@@AB@@@@AB@@A@@@@AA@@@A@@@A@@@A@@A@@AB@@AB@@@@@BA@@@A@@@@@@@A@ABAAA@@@A@@@A@@@@A@@@@A@@@A@@@@@AA@B@@AA@@A@@@AA@@@@@@@@@AB@AA@A@@@B@@A@@A@@@AA@@A@@BA@ABA@@@@AA@@B@BA@AA@AA@@AA@BABA@CBIAWKGAK@YDCBCDADCDCBC@C@G@A@@@A@A@A@ABA@A@A@@@A@EHEDAB@B@BBD@F@@ADABABAD@@@B@@BH@BB@B@@BBD@@DBDB@@BD@B@F@BDFBD@DBBB@B@FAB@D@@@B@FB@@AFAB@@BD@@B@@@A@@@@@B@AB@@A@@@@AC@@@@B@@BB@DABADBBBBDAB@@@@B@@A@ABA@@B@@BB@BB@@@@F@DBBBBB@BA@AB@B@B@BADA@BB@@D@D@DAB@BAB@B@@@BD@@@BDAB@BA@@B@@@D@BCD@B@BBD@BABCBCBBBBBBBBBD@BBBB@@B@BBD@B@@@B@@A@@AA@A@@@@@A@@B@B@DBDDDBB@BB@@@@CBABAB@@@BBF@D@B@B@@BB@@B@B@@AB@BCB@@AB@AA@@@A@@@@@AB@@@B@BBB@B@@@B@B@@A@@AA@A@@@A@@B@@@DB@BBBBBBD@B@BBB@@@BB@B@BABA@@B@@@B@@@@@@@@A@@@@B@@@@@@@@A@@@@@@@@@@@A@@B@@@@@A@@@@@@@AA@@@@@@@@B@BA@@@@@@@A@@AA@@@A@@@@@@@@@@B@@@@@@@@@B@@A@@@@@@@@A@@@A@@@@@@@@@@@@@@@@@@@BA@@@@@@AA@@@A@@@@@@@@B@@B@@@@@@B@@@@A@@B@@@@BB@@@@A@@@@@@@@BA@@@@@@B@@@@@@@@B@@B@@@@A@@@@@A@@@@@@@@@A@@@@B@@@@@@@B@@@@A@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@A@@B@@A@@@@@@@@@@@@@A@@@@@@BA@@@@@@AA@@@@@@A@@@@@@@A@@@@@@@@@AB@@@@@@@@@@@@@A@@@@@@BA@@@@B@@@@@@@@A@@A@@@@@A@@@@@@@@AB@@@@@@@@@@@@@@A@@@@@@@@AA@@@@B@@@@@@@@@@@B@@@@@@@@@@A@AB@@@@@@@@@A@@@@@@@@@A@@@@A@@@@@@@@B@@@@@@@@A@@@@@@@A@@B@A@@@@A@@@@@@@@@AB@@@@A@@@@@@@@B@@@BA@@@@B@BD@BBBBB@BHLHRBFDBDBBBBDBBDBDFB@BAB@@ABC@ADAB@B@@BAD@B@B@B@B@@@B@@@B@@CH@DBBBBB@"]
				],
				"encodeOffsets": [
					[
						[107285, 30068]
					],
					[
						[107272, 30067]
					],
					[
						[107275, 30066]
					],
					[
						[107301, 30061]
					],
					[
						[107265, 30061]
					],
					[
						[107266, 30060]
					],
					[
						[107272, 30060]
					],
					[
						[107344, 30056]
					],
					[
						[107308, 30055]
					],
					[
						[107322, 30053]
					],
					[
						[107302, 30052]
					],
					[
						[107259, 30049]
					],
					[
						[107260, 30048]
					],
					[
						[107261, 30047]
					],
					[
						[107149, 29961]
					],
					[
						[107242, 30034]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "510311",
			"properties": {
				"name": "沿滩区",
				"cp": [104.876417, 29.272521],
				"childNum": 17
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@@@@@A@BBAA@B@@@@@@A@@@A@@@@@@@@A@@B@@AD@@B@"],
					["@@C@@@@@@@@BB@BA"],
					["@@AA@@@AAB@@@@B@@@@BA@D@"],
					["@@FC@@@@E@@B@B"],
					["@@@@@@A@@B@@B@@@@@@A"],
					["@@B@@@AA@B@@@@"],
					["@@@A@@@@A@BB@@@@"],
					["@@@@@@@@@@@@@@@@"],
					["@@@@@@@@@@@@@@"],
					["@@@@@@@@@@@@@B@A"],
					["@@@A@@A@@@@@@B@@B@"],
					["@@@A@@AA@@A@@BB@A@@@@@@@B@@@A@BB@@B@@@@@"],
					["@@B@@@A@@@@@@@A@A@BB@@@@@@@@B@@A"],
					["@@@@@@AA@@A@@@@@@@BB@@@@@@B@@@"],
					["@@@@B@@@@@@@A@@@@@"],
					["@@@@@@A@@@@@@@B@@@"],
					["@@B@@AF@B@B@BB@B@@@B@HBBB@B@D@B@D@B@@BBH@BBBB@@A@@BA@@@@F@@@BA@@BA@@AA@@@AB@@@D@D@@AB@BA@A@@@I@ABABADAD@F@D@B@D@FCBAB@@A@@@@@A@@@@@BD@B@HGDABEAC@AC@@B@@@@A@@A@AB@@@@@BAAA@A@AB@DAB@@@@AEE@EAC@ABA@AB@DBB@BADCDABADAB@@AACAA@A@C@CB@BAFBBBF@D@FEB@B@BBBB@BB@@D@B@BBBBBB@HAHBDABABAD@FBDB@AAA@@@@B@@A@@@@B@@@A@BAB@@AB@@@B@B@@ABA@ABA@@AA@@@@A@@@B@@@@A@@@A@@@@B@@@@@@@BA@@@@@@B@@@BA@@AA@@@@BAB@@@@B@@@@@AB@@@@AA@@@@@AA@@@@BA@@@A@@@@@@B@D@@@@A@@@@@@@AB@BB@@@@@A@@@@@A@@@@B@@@@CB@@AB@BB@A@@@BBB@@@@@B@@@@BBB@B@BBB@@@@@@@@@DAB@A@BABB@AB@@@@@B@@@BA@@BB@@@A@@@@@AB@@@@@@A@@@C@AC@A@CAA@@A@@AA@ABA@@@ADADAFABAPCB@B@BCBABCBA@@BG@C@@ACEG@ACCAAAAA@@@@BA@@@A@@@@@@@A@@@@BBB@@@@A@@AA@@B@@@@@B@@A@@A@A@A@@@@AB@@A@@K@@@B@AA@@@A@@@@A@B@@A@@@@A@B@@@BAA@@@@@A@@A@@@@@@@@@A@@@A@@@@@@@@B@@A@@@@@@@@A@@@@A@@@@@@@A@@@@B@@@@A@@@@B@@@CA@@@ABA@@@A@A@@@ABA@@AAB@@@@A@@@@@BB@@@@B@@@@B@@B@@@@B@@@@@@@@@BB@@@@BB@@AB@@B@@@@A@@@BB@@@BA@B@@BA@@BB@BB@@A@AB@A@@A@@@AA@BA@@@@BB@@@@B@@@B@@@@B@@@@BB@@B@B@@@B@B@B@@@B@BAA@AAAA@@@@B@B@@A@A@@@@@@A@@@@@@@@@B@@@@A@@@@@A@@@@@@A@@A@A@@@@A@@A@@@@BB@@B@BA@@@@@AA@A@@@@AAAAAA@@A@@@A@@A@@@@A@@@A@@BA@@B@@BA@@@B@@@@@@@@@ABB@@B@@@AB@@@@A@@@B@@@@@A@@@A@@@A@@AABA@@@@AA@@@A@@@@@@@A@@@@@@A@@@@@AA@@@A@@@A@B@@AA@@@@@AB@@A@@@@@A@@@@AAA@@@A@@AA@@@@@AB@@A@AA@@@CB@@@ABA@@@@@AA@@@@@@@BA@@BA@@AA@AA@@@@@@@@BA@@@@@AAAAA@@@A@@B@@@BC@@@A@@@@B@A@@AA@@@A@@@@@@@@@A@@@@AA@@A@@@@@A@@AA@@@A@@@A@@@@@@@@AAB@@A@@@@@@@BA@@AA@@@@AACB@AA@@@A@A@@A@@@@@@BA@@A@@@A@@@A@@@AA@@@@@@@B@@@@@BAA@@B@@@AA@@@@@@@A@A@@@@BA@@@@@AA@@@AA@@@@@@@A@@@@@A@@@@AB@@@A@@@A@@@@@BA@@A@@@@@@AB@CBCA@AAA@CBA@A@AAA@@ABCB@DABA@A@AA@CACBCA@@AA@CDADADA@AD@FCFCBCDGBC@CACCEEACAA@ABCDAD@DCBC@CBC@CBEDA@A@@AAE@A@ABCBCBCB@BAD@B@DBBAB@BABA@C@A@C@ABAB@B@DBDBD@B@B@B@BA@CACACAA@ABABBD@DBB@BCDGBC@ABCBAB@B@D@B@BA@A@A@@C@EAA@@A@ADABADAB@D@@A@AA@CCAAAC@CAAAA@CBAB@BAB@@A@A@@ACA@@@@A@@A@@AAACGA@@ACACA@@AACCAA@AEGCKAACB@@A@A@C@A@A@A@A@A@A@C@A@@ACBCAEBE@CBAD@DDJBB@F@@@@CAA@AAA@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@@@@@B@@@@@@@@AAA@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@BA@@@@B@@@@@BA@@@@@@@@@A@@@AB@@A@@@@ABA@AAA@@@@@@AB@B@@@@A@@@@@A@A@@AA@@@@@@B@@A@@@@@@@@@@@@@@@@@@@AA@@@@@A@@@@@@A@@@A@@@@AA@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@BA@@@@B@@A@@@@@@@AA@@@A@@@@BA@@@A@@A@@@A@@@@@A@@A@@@AA@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@AA@@@@@@@A@@@@@@@@@AB@@@@@@@@@B@@@@@BA@@@A@A@@@A@@@A@@BA@@@@ABA@@@@A@@@@@@BAB@@@@A@@A@@@AA@@BA@@@@AA@@@BA@@@@@A@@@AAAA@@@A@A@@@@@@A@@@AA@@BA@@@A@@@@AA@@B@@@B@@@B@@A@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@B@@@@@@@@@@AB@@@@AB@@@@@@@@A@@@@@@@AA@@@@@@AA@A@@@@@@A@@@@@@@@@@@@B@@@@@@@@@BA@@@@@@@@@@@@@@@A@@@@A@@A@@@@@@B@@@@@@@@@@@BA@B@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@B@@B@@B@@A@@@@B@@A@@@@@@@AA@@AA@@A@@@@@@A@@@@AB@@@@@@@@@@@@@@@@@BA@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@B@@A@@@@@@@@@A@@@@B@@@@@@A@@BA@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@AB@@@LB@BBBBABA@CBA@@@@B@@@DB@@@AB@BA@@A@@@A@AA@@@A@@@@@@@@@@@@A@@@@@@A@@@@A@@BA@@@@@ACAA@@@@@@BDB@@@@A@@@@@@B@@@@@@@@A@@@@@AA@B@A@@@@@@@@@@@@@A@@@B@@@@@BB@@B@@@@A@@@A@A@A@@@@@@B@@@@B@A@@BB@@@@B@@A@@@@@AA@@A@@@A@@@CCA@@@@@@B@B@@@@@@@@@@AA@@@@C@A@@B@@BB@BA@A@A@@@@@ACA@@@A@A@@@A@@@@@@@@@@AA@AAA@AAAAA@EBC@ID@@A@AB@@AD@B@@A@CA@@AA@@@ABA@@@@AA@@AA@AAC@@A@A@@@@AAA@@C@@@AA@A@A@@A@AB@@@@@@@A@A@@A@CAC@CCAACAAD@B@BABB@@@BB@B@B@@A@@@AA@AA@@@@BABCD@BA@@@CA@@AAA@@@A@@@AA@@@@A@A@@ACCA@E@A@A@@DAF@@@BA@@@AA@@@@A@@@@B@BBB@@@BA@@@AB@@@DAD@@A@CBA@C@ABABAFA@@@@A@A@@A@C@@@CA@AA@A@CB@BAB@B@@AB@D@@@BA@A@CCA@@B@B@@AB@B@B@B@@ABA@A@@@A@@BA@A@@@@@@@@@@@A@@BA@A@@B@@@BB@@BB@B@@@@@@BA@@@B@@@@BB@@@@BB@CB@@@@@@@@@@@@@B@@@B@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@@@@@BB@@BB@BB@@B@@@B@@@@@@@@@@BB@@@@@@@@@@@@B@@@@A@@@@@B@@@@@@@B@@@@@@B@@@@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@@A@@@A@@BA@@@@@@@@B@@@@@@@@@@@@B@@@B@B@@@BB@@BBB@@BABA@@@BB@@@@AB@BAB@@@BB@@B@@@BB@@@@A@@@BBBA@@B@@@@@@@@BB@@B@@@BB@@@ABB@@@@B@@@B@@@@@@B@@B@@@B@@@B@BBBAB@@@@@@@B@@@B@@A@@@@BA@@BA@@@BB@@@B@@@B@@@B@@B@@B@@@BA@@@@BA@@B@@ABB@@@@BB@@@@A@@@@B@BB@@@BB@@@B@@@@B@BA@@@@@@@B@@A@@B@@@B@@@@BA@@B@@B@@B@@A@@@@BB@@@@@@AB@B@BC@@B@@A@A@@B@B@@A@@BA@AB@B@@@@@D@BBB@@BBB@@@BB@@@@B@@@@@@@BB@B@@@@@@@B@@BB@@BB@@@@A@@BBB@@B@@@BA@A@@@@B@@@B@@BB@@A@@@A@@@@@ABA@@@A@B@@B@AB@@@BB@@@@AB@B@DA@@@@@@@BA@@@@B@@@@@@AB@@@@@B@B@@A@@BAB@@B@@@AB@@B@@@@@B@@@ABA@@@A@@@@@BB@@@@@B@@D@B@B@@@@@@A@@B@@@@AB@@A@@@@BABAB@@@B@@@@@B@@@@B@B@@A@@@ABB@@B@B@@@BB@BBBBA@@@@@@@@A@@A@@@@B@B@@@@BB@@B@B@@@@@@BA@AAA@@B@@@@AB@@C@@@@@@B@BB@@@BABA@B@@@@@BB@@@B@@@@@BBB@@B@@A@@@BB@BA@@@@BB@@@AB@@A@@@A@@@AAA@@@AB@B@@BB@@BA@@@B@@@B@@@@AB@@@@@B@@@@@@B@B@@@@@@@@BA@@@@@@@DB@@B@B@BA@@@@B@@@@@@B@@B@B@@@@B@@@@@BBA@@@A@@D@@@A@BB@@@@BB@@@@@AB@@@BB@@@B@@@@@B@@@@@BB@@@BB@@@@A@@@@B@@B@@AB@BB@@BA@@@@B@BBBB@@@B@@A@@B@@@BB@@@BAB@@@@@ABAB@B@B@B@@B@@AB@@B@@@@B@@@@AB@BA@@@@@B@B@@@B@@@AB@@@@B@@@@@@@BBA@B@@@@B@@@B@D@@@@@@@@@@@@@AB@@@@@B@@B@@AB@@@B@@@@B@@@@@B@@@@B@B@B@@@B@@@@@@B@BAD@@AB@A@B@@@@BBBB@@@@@@B@@@B@@@@@B@@BB@B@@B@@B@@A@@BB@@B@@B@@B@BDBB@@@@@@@A@@B@@@@B@@B@@@@B@@@@A@@@@B@@@B@@@@A@@@AB@BA@@@@B@@AD@@AB@B@@@@C@A@@@@@AAA@@@@AA@@@@@@B@@@B@@A@@@@@A@@B@@@B@@@@@B@B@B@@@@@B@@A@BBB@FJBBA@ADABAD@B@@@@@@@BBBB@B@@@B@@AB@B@BB@@@B@@@@B@D@DBFB@@B@BD@B@@@BB@@@@@B@BAB@D@B@@DDFB@B@BABE@A@@D@@@B@B@BBBBB@BA@ABABAB@@BBB@FAD@D@BBDB@B@@@B@D@@@B@BB@BAB@B@B@@B@DADADABCBAB@@@BB@@F@A@B@@@@@@@@@@@@@EDBDBBBB@FABKNABADBDBBD@B@@AAAAA@@BA@@DA@BB@@B@@A@@@@@@B@@BB@@BAD@@@@@@A@@AA@@@A@@D@@BB@@BA@@@@B@@@D@@B@B@@@FCDABAB@@@B@@@B@@@@@@@@@@@B@@@@@AB@@@@@@@B@@@@@@@@AB@@@@@@@@A@@B@B@B@DBBD@B@BAHC"]
				],
				"encodeOffsets": [
					[
						[107370, 30075]
					],
					[
						[107430, 30070]
					],
					[
						[107437, 30059]
					],
					[
						[107355, 30055]
					],
					[
						[107212, 29870]
					],
					[
						[107304, 29863]
					],
					[
						[107315, 29863]
					],
					[
						[107319, 29863]
					],
					[
						[107320, 29863]
					],
					[
						[107321, 29862]
					],
					[
						[107329, 29862]
					],
					[
						[107326, 29860]
					],
					[
						[107324, 29857]
					],
					[
						[107235, 29856]
					],
					[
						[107259, 29852]
					],
					[
						[107260, 29852]
					],
					[
						[107378, 30078]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "510321",
			"properties": {
				"name": "荣县",
				"cp": [104.423932, 29.454851],
				"childNum": 11
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@B@FCBA@@DAB@@ABA@CBIA@@A@ADC@ABA@@@@A@@@E@A@C@C@A@@A@ABABA@@DADBFDDBB@B@RG@@BAB@DABAD@D@@@FBFB@@B@BAB@B@@ABAAA@A@CBABCBE@ABAB@B@B@HAF@B@@AB@BABC@ABABA@@B@DA@AB@@CBABE@ABC@CDIBC@@DCFA@AB@B@B@B@B@@B@D@BBB@@BBD@@@DBFFB@B@D@B@DB@@DBDDBDBBBBBB@@BBB@B@HBB@DB@BB@@BDD@B@B@@@BABA@AB@BBD@@AB@BA@@BA@AB@BBH@FBB@BB@DFDD@@BBBDDBBBBDB@B@B@B@FAB@D@B@@AB@BCDABADABAB@B@B@HDBBB@BB@@B@BA@A@@@C@AB@B@F@@@DABAB@@ABABC@A@@@@@ABC@AD@B@B@BB@@B@BABAB@B@BB@@@BBAB@@DB@D@BBDBJFB@FBF@H@BBB@BAB@B@B@BEBA@@BAF@B@BAD@FABAB@@ABCBABC@ABA@CAE@ABA@C@A@AAA@@@@@@CAA@AA@A@CAA@GDG@AA@AAGAA@@A@@@ADCHE@AB@@A@E@ABA@@B@BAD@B@F@D@B@@@JIJGHMHMFEB@FCDCBABA@CAAAC@@BA@ABABC@GBE@K@A@C@A@A@@BADC@@@A@A@A@@CCAC@@@ABAB@H@B@@@BA@A@@AE@CAAB@@AB@@A@AACCCAA@A@AAE@A@C@AB@@AB@BAF@BABADA@@BA@A@A@@AAA@A@A@ABGFABCB@@A@A@ABABC@IDGBE@C@A@E@@A@AA@BCB@@C@CBCBEBCBA@@BADAFAB@BABABCBG@@@@A@A@@@@AA@A@@@@A@@BA@A@@@@AA@@@@@@B@B@@ABA@@BB@AB@A@A@@@@A@@@@B@B@@AB@@AA@@AA@@@@@A@AB@@AA@@A@@@@@A@@@@A@@@@@@A@@A@@B@@@@A@@@A@AB@@@D@@@BA@@B@@C@AB@@B@B@@@@B@@@BB@B@@@@@@BB@AB@@@B@@A@@B@@A@@B@@@@@@@@A@@AAA@@A@@A@@@@@@ADA@@@A@@AB@@@A@@@A@@B@@A@@@@B@@A@@@@@@B@BA@BBB@@@@@BBA@@@@@@@@B@@@BA@@@@@@@@BA@@@@B@@@@@BB@@A@@B@@@@B@@@@@@@B@B@@A@@@@BA@@B@@@BA@@A@@BA@CA@@@@@A@@@AB@@@@@@B@@B@@AA@@A@@B@B@@@D@B@@@@@@@@B@@@@B@@@@A@@@@@A@@@@@@B@@BBA@@CA@@@A@@@@BA@@@@B@B@@@B@@A@@@@B@@AB@@A@@AA@@@@@A@@A@@@A@BAA@@A@@@A@@@A@@@@@@@@AA@@B@@A@@A@@A@@A@CBABA@A@@@@A@@@@B@@@@@@@B@@@AA@AB@@A@AA@BA@@@@D@@A@@@@@AA@@A@@A@AAA@@@@A@A@@A@@ABA@@@A@@@A@@@A@@B@B@@@@@@@@BB@D@B@D@@@@@@A@@@@@@A@@@@A@A@@@@B@B@@@@@@@B@@@@@BBBBD@@@@@B@@A@@@@B@@A@@@@AA@@@@BA@B@AB@BABA@@@@B@@B@@@@@@@AB@@@B@D@@A@@B@@@@@@A@@B@B@BB@@B@BAA@@@BABCBA@@@@@@B@@@@A@@B@AA@@@@@@@AB@@B@A@@@AA@@@@A@A@@@@A@@AA@BA@@A@@@@@A@@BA@@@A@@@@B@@A@@@@@A@@@A@@@@@@BAB@@@AA@@@@BA@@AAABA@@@@A@AA@@@A@@@B@AB@@@AA@@@@@@@A@@A@A@@AAAB@@AC@A@@CBABAB@@@@@@A@@CAA@A@@B@@AB@BA@@@A@@AA@@A@@A@@@A@AB@@A@B@@@@A@@@@A@@@@@@A@@@@@A@@A@@A@@AA@CA@@@A@A@@AC@@AA@@@A@@B@@@BA@A@@A@@AAABA@@@A@@@A@@@@@@@@A@@@@@@@A@A@@@A@@@@AA@AA@@@@@@@A@AA@A@A@A@AA@A@@A@@@@BA@@B@@A@@BAB@D@@@BB@@BA@@BAB@@@AAB@@@BAB@@@B@@A@@@@BAB@BBBB@@@@BA@AB@BABA@A@AA@@AA@@A@@A@@ABAA@@A@@@A@A@@AA@AA@@A@@@A@@BA@A@@@@A@EB@A@@@@@@B@BCBA@A@E@@BAH@DB@@B@@@@@B@@@@@@@A@@A@@@@@A@AA@@A@@@@@@A@AC@AAB@@AA@@@@@B@@A@A@@AAA@@@A@A@@B@@@@@B@@@@A@@@AA@@@@BAAAC@@BA@A@@@C@ACA@A@@AC@@@@@@@CAA@@@@A@@AAA@@@ABA@A@@@@A@A@@@@AA@@@@A@@AA@@AA@AA@A@A@@@AB@@A@@@A@@@A@@@AB@@@A@@@AB@@@@AA@C@ABAB@@A@@@@@@BD@@@B@@BA@@@AB@@A@@AA@@@A@@@@@@A@@A@@@@@@@A@@@A@@@@AA@@@BA@AA@@@@@AB@@A@A@@@@A@@A@@B@BA@@@@BA@AD@@@B@BBB@@B@@@@B@@BBBL@D@BA@A@@B@@AAA@@@A@@@@@A@@A@@AA@@@@AB@@@@ABA@@AA@B@AA@@@@@@@B@@@@A@A@@@@A@@AB@@@@@@B@@@@@@BA@AB@@@A@@C@@AA@@@A@@@@@@@@@@AAA@@A@@@@@@@@@A@A@@@AA@@AB@B@@A@@B@@A@A@@@AAA@@@A@@@@AB@@BB@B@@@@A@@A@AA@@B@A@@A@@@@@B@@A@A@C@@A@@@@@A@@A@@BA@@@@CAC@@@AB@@A@@@@A@@AA@@@@AB@AA@@@ACBABA@A@@@@AA@@AAB@@@AA@@AA@AAGE@@@CABA@A@A@@@A@@A@@@AA@ACAB@@@BAB@@AA@@A@@B@@A@@@@@AA@@@@@@AA@@@@BC@@@@@AA@A@@@@A@@@@@@AA@@@@A@@@@A@@@@A@@@@@ACB@A@@@@@AB@A@BA@@A@@@AAB@@@@@BA@@AABCBGB@@@@@AA@@@A@A@A@AAAABE@AAAA@O@EBA@AB@DAFCDABC@AAGEC@G@G@I@ECEAC@A@A@@@@@A@A@@BAB@@@B@@A@@@@BAAA@AA@@@@A@@BCB@BA@@B@D@BA@@@C@C@A@@@AAAC@AA@@AA@@@@@A@EBABA@A@A@C@A@C@CA@@A@@@@@@ADABCBC@@@C@C@@CC@@A@A@@AA@AAA@AA@@AAA@A@A@@B@@ABAB@BA@@B@BBB@@BBB@BD@D@@@@AB@BB@@BA@@B@BAB@@ABA@ABA@AA@@AA@AA@@AAA@AA@AAA@A@A@@@A@A@ABA@A@A@AB@@ABA@A@A@A@A@@AA@AB@@A@@AAB@@A@C@ABA@@BC@A@AACAEAABA@AB@@@B@DB@BBB@BBB@B@BBBBABABGDEDCDC@A@@@A@@@@@A@@A@@A@A@C@@@@BC@A@A@@@@@C@AA@@A@A@A@ABA@CDAF@@CBA@@@A@@@A@@@A@C@C@@@@@A@A@AA@AAA@A@@@AB@@ABA@@@A@A@A@AA@@A@AAABA@@@A@ABA@@@ABA@A@@BA@ABAB@@AB@B@BA@AB@BA@@BAB@@ABA@@BA@AB@@ABA@A@@@A@A@AAKGIIGICKAGAICE@AAIDGFA@MR@@A@@BA@AB@@ABA@AB@@AB@BA@ABA@@BA@A@A@ABA@A@A@@BAB@@AB@B@BA@@B@BA@@BAB@B@@AB@BABA@AAA@@AA@@AA@AA@A@@B@B@B@B@B@BEFS@EAACAE@AA@@A@AAA@CEAA@@A@@AA@AA@@AA@A@A@@@A@A@A@A@@@A@AAA@A@@@AAA@A@@@AG@@@CAE@QGIBGDCF@D@F@JABAB@BA@@DBFBHBD@D@DBB@BBB@@@B@B@BAFAJ@PAJCHCFEBG@CAECIMACAACACGEGECEBCFAFBFFRBPDFFBF@FDFDDDBFDDFBPHDFBFADCBEFKJ@BBD@DFJ@DABC@A@E@EAEAC@E@KFC@C@EA@A@AA@A@A@A@AF@B@DAB@@AB@@ABE@A@EACAA@ABA@ABABCDA@@@EBA@@@A@@@CBAB@B@L@BBBBBDDB@BDBF@@@DABCHAB@@BBB@D@B@DABADCDA@@BAF@DAH@B@DA@ADA@BB@DADBD@B@DBFD@@@@B@B@@A@E@@@@B@@@B@BDDDB@BB@@BBBABA@@@A@AB@BADA@@B@@B@F@D@B@D@BB@ADBD@B@BDBDB@@B@B@@A@A@CBA@@B@@ABCBADA@AAA@A@A@ABA@@DAB@B@B@B@BBBBB@BA@@B@BAB@@B@DBB@@@BABED@BADAFA@ABA@CBCB@B@BBB@BB@B@FABAD@@BB@DBBBB@@B@@@@BB@@@BABA@AB@@A@@@A@A@@BAB@BDDBBB@@@B@@BBB@D@D@BAB@@ABMAA@AA@@CC@AAAEAA@CBC@@@@D@B@BEH@D@BDBFABB@DCBEBABEFAD@DBBBFAB@B@AAAAAA@A@@AA@AAGAAAAA@AGEGAI@A@AACA@AA@ACAA@@AA@@@AA@AA@@A@A@@BAB@@ABGFA@ADAD@@@BFJ@D@D@HADAB@D@DBD@DBBB@DB@@BADAB@FC@@B@B@B@@BBD@B@F@B@BCFCBCF@D@B@B@@ADCBA@AA@@CBEB@@C@A@CA@@CACCECCAEAAAAA@AA@@ACAA@@AEAA@EBEB@@ABAB@DAF@B@D@H@@@B@B@B@B@B@BAB@B@D@BAD@B@@BD@@@BA@CBBDBB@BB@@B@BA@ABBB@BDBBDFDBBB@BBB@@@B@B@DCB@B@@@B@DBF@B@BABAB@@@BE@@AABA@@@@B@@@@@@BBB@@@@B@B@@A@@AABA@A@@B@@@FAB@BBFBBB@B@B@D@B@B@BBBBB@@B@@AB@B@@@B@@BBBBB@BFDB@@B@@@BFDBBDB@B@BB@BB@@B@F@B@BB@@B@BB@@@B@B@BDD@@@BBD@BBBB@B@B@BABA@@@A@@@C@@@@@@D@@@B@@A@@@A@@AAE@A@@A@A@AB@B@B@@@BBBBB@B@B@BABABABC@CFABADABABA@A@E@@BA@A@@@@@A@@@@@A@@@@@@B@@@@B@BD@F@BBBBB@@BBD@@BBBBBB@B@B@D@@@BBB@BBB@@@B@B@@@@A@C@A@@@@B@@@@FBBBBB@@DB@@@B@@@@@B@@@@@@@@@@@@A@BB@@@@@@B@@@@B@@A@AB@A@@AA@@@@ABC@AD@B@B@@AB@B@BFD@@@BA@C@C@AAA@AAAAAAAAA@A@A@@B@B@BBD@@DBBDDBBB@B@BABADABAD@BA@ABA@A@A@A@A@CACAEAA@A@A@@B@D@FBB@BB@B@DB@@FBB@B@@@BABAB@@@FF@BABA@@B@@@@BDBB@B@BB@B@BBD@BBHBBBDF@@BBDF@B@@@D@B@B@B@B@B@B@BA@EBAB@B@@@B@B@B@BBDAB@@ADAB@@GBEDGBAB@@AD@DADCFABCDABAB@D@@BB@@B@BA@AD@@@BB@D@@@BBBBAB@DC@@B@B@BB@@DDBBB@B@F@B@@BB@DAB@DB@@BB@B@H@@BFBB@BB@@BB@DBDBBBBD@@BB@B@@@BADAB@BAB@B@BBB@BBB@B@F@@BBD@@BB@B@B@BA@@DIBAB@BA@BB@BBB@LCB@BA@A@IBA@AB@@@FAB@FC@@FAFAB@BB@DB@@BB@B@D@FAF@F@D@BBDBB@B@F@B@BABB@@@BAD@BB@NB@@BB@BA@CB@@AB@D@D@D@@@BABCACAA@A@AB@@AF@@@B@BB@D@DAF@F@@@@A@AB@@AB@B@B@FBDBD@B@B@DABABAB@D@@@"],
					["@@@@@@@A@B@@@@@@"],
					["@@@A@A@BA@@@@@@B@@B@@@"],
					["@@@AAB@@@@B@@@@@"],
					["@@@@@@@@B@B@@A@@A@@A@@A@@@@B@@@@A@@@@@@@@@@@@B@@@@BB@A@@"],
					["@@A@@@B@@@@@@@@@"],
					["@@@@@A@A@@@@@BA@@@AA@@A@A@@@B@@@@AA@@@A@@@BB@@BB@B@@B@@@B@@B@A@@B@"],
					["@@@@@@@@BAA@@@@B@@@@@@"],
					["@@@@@BAA@@@@@BB@@@B@AA"],
					["@@@@A@@@@B@@B@@@BAA@"],
					["@@@@B@@@A@@@@@@@@@@@"]
				],
				"encodeOffsets": [
					[
						[106772, 30344]
					],
					[
						[106667, 30205]
					],
					[
						[106650, 30180]
					],
					[
						[106633, 30106]
					],
					[
						[107180, 30080]
					],
					[
						[107179, 30075]
					],
					[
						[107182, 30070]
					],
					[
						[107131, 30041]
					],
					[
						[107131, 30039]
					],
					[
						[107149, 29961]
					],
					[
						[107149, 29961]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "510303",
			"properties": {
				"name": "贡井区",
				"cp": [104.714372, 29.345675],
				"childNum": 3
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@CY@@@BAA@@@@@A@@@@@@@@@@@GA@@@B@BI@@A@@@@AAA@@AA@@B@@@B@@B@@A@@@B@B@@@BB@@B@@A@@@@@B@B@@VVB@BB@@DFB@BBBB@@@@ABA@@B@@DBB@@@@B@@A@A@@B@@BB@@B@@@B@@A@A@ABC@@@@B@@@BBB@@@@A@A@@ACA@@@B@@@D@@@B@@@BA@@@A@C@@@A@@B@@@B@B@@@@@AB@B@@@BBD@@BB@AB@@@BCBA@@@AB@@@B@BBFB@@@@BG@A@A@@@@A@@@A@AD@@A@@@A@@A@A@ABABABA@@@@AAA@A@CB@@@@@@@A@@@AB@BAB@@@BBD@@@B@AC@@BA@@BABA@BD@@@BB@BDAB@BB@ABAB@BBDBF@BB@@B@DAB@D@BAB@AE@A@ABAFCBABABEBAB@BA@A@A@A@@A@ABC@ABC@AAC@A@KDA@AAA@@A@C@ABABAJKBA@A@A@AC@CA@AA@AAAA@CDG@@@A@@@A@@@A@A@A@ABC@AA@A@CB@BAD@BA@ABA@CECAAAACAACACAAEGQGK@AAAAA@AACA@@@@@AB@@A@@@@@@@@@@B@@A@@B@@@@@@@@@B@@B@A@@@@B@@@@@@@B@@@@@@A@@@@@@@@@@B@@B@@@@@@@@@B@@@@@@@@@A@@B@B@@@@@@@@A@@@@@@@@@@@A@@@@@BB@@@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@B@@@@@B@@@@B@@@@@@A@@@@@AB@@@@@@@B@@@@@@@@@@@@BA@@@@@@@@B@@@@@@@B@@@@@@@BB@@@@@@AB@@@@@@@B@@@@@@@@@@@@@BA@@@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@B@@@B@@A@@@@@@@A@@@@@@B@@@@@@@@@B@@@@@B@@A@@@@A@@@@@@A@@@@@@@AB@@@@@@@@@B@@A@@A@@A@@@@B@@A@@@@@@@@AA@@@@@@@@@@B@@BB@@@@@@AB@@@@@@@@@@@@@@@@@@B@@@B@@@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@@@B@@BB@@@B@@@@@@ABA@@@@@@@@@BB@@@@@@B@@@@@A@@@@B@@@@@@@@@@@B@@@@@@A@@@@@@B@@@@@@A@@@A@@@ABABA@A@@A@@AA@A@AACAAAA@ACA@@A@@@@B@@@BBB@@@BA@A@@@A@A@AAA@@@A@@B@@@@@B@@BBA@@BA@ADA@@BA@A@@@AA@@@A@A@CAE@A@@BABADA@@@@AAA@CACCCAA@A@@@@B@@@@@BBB@@@BA@@@A@C@AAA@@@wr@@@@CBBBA@@@@@@@B@AB@@@@@@`@B@B@@B@@B@@@B@AA@@B@@@@@@BBA@@@@B@@A@@@@@@@ABADAB@@B@ABA@@@AAA@A@@@@B@@@@A@@@@BC@A@@@A@@B@@@@@@@AA@@@@@ABABA@@B@AAB@@@@BB@@@@@BA@@@@@@BA@@@@@C@AAAA@@@@A@@@@@@@A@A@@@@@@B@B@@B@@@@@@@@B@@@@C@A@C@A@@A@@@@@@A@A@@@@B@@@B@@@B@@AB@BB@@@@B@B@@B@BBB@@@@BB@@B@@@@@BC@@@@@ABB@@B@BA@@BBB@@A@@@@@@@A@@@@@@B@@B@B@BADAB@@@@BB@@@@BA@@@BB@@@@@@@@@B@@@B@@@BB@ABB@@@B@@@@B@@@@BB@@@BA@@BA@@@@@@BA@@@A@A@@@@@AB@@@@@B@@DB@@AB@AA@@@@@@@@B@@@@@B@@A@@@@@@A@@@@@@A@C@@@A@A@@@@BB@@BA@@@@A@@@@A@@B@@@B@@@@DBB@@AB@@@AB@@A@@@AB@@@@@BA@A@@@@@@@A@@@@@@AB@@@AA@@@@A@@@@@AB@@@@@@@@AB@@A@@@@@@@@@AB@A@@@@AA@AABA@@@@@@@@BA@@@@@@BA@@@@B@@@B@@BA@@@B@@CB@B@@@@B@@@@BB@BB@@@B@@@@@@A@@@@BA@@@@BA@@@A@@BAA@@@@@@@AAA@@A@@@@@@A@AA@@B@DA@@@AB@@C@@@A@@B@B@@@B@@A@@@@BB@@@@@@@@B@@B@@@@@B@@@BB@@BAB@@@@@B@@BB@@BA@@BA@A@@@@@@B@@B@B@A@@BAA@@AB@BA@A@@@@@@@BB@@@@@BAB@@@B@@B@B@@B@@B@B@@@DCBC@CBEAEBAB@F@D@FBBBD@JBFB@D@BMFCB@@@BBD@BB@@BBB@J@@BB@BF@BBBAB@BA@AAC@AA@BC@ABAD@BAHABB@BBF@@BBD@DBD@BDB@BB@@@A@@BA@@BB@B@B@@@@BA@A@@@@DA@A@@@C@@B@@AD@BABA@@@@@A@@A@@@@@@A@@@@B@B@@A@@@A@@@AB@@AB@@@BBB@@@@AB@BA@@@ABAB@@A@@@@@@B@@@@B@@BBB@BB@A@@BAB@@BBB@B@@A@A@A@@@@B@@BBB@@@@BAB@@@@@@B@B@@@BA@@@@B@D@B@BA@@B@@B@@@BB@B@@@@DB@@@B@@A@@@AB@B@@@FC@@@@BB@@@B@@A@CD@@@B@@B@@@@B@B@B@BB@B@@B@@AB@@@@@@@@B@@@B@@B@B@@B@BBB@@BBAB@B@@@BD@@B@@C@@B@BA@@@@@A@@BA@A@A@@AADCA@@A@@@AB@B@DBB@@A@@@A@@B@B@@ABA@@B@@B@B@@B@@@@@@A@@@C@A@@B@DBB@@@B@@A@@C@@A@@@A@ABA@@C@AAA@@A@@@ABABAB@B@@@BB@BBBB@BAB@BA@AAA@A@@@AD@@AB@F@B@@A@@@A@AAAAA@@@@BAB@B@DBBBB@@AB@@AAA@@@A@@@CB@@@B@@B@@@B@@B@BABABBBB@@@@@AB@AC@@@@@AD@BABA@@B@@@@@@BADAB@B@BBBBBB@@@@A@@@E@A@E@AB@BA@@F@B@B@@A@@CA@@A@@@BA@A@@AA@@@AB@BABA@A@@A@C@A@A@@A@C@@@@BA"],
					["@@UUA@@@@B@AA@AJ@@@@@@@@@HB@@@@@@A@@B@@@@BB@@@@BA@A@@@@@@@DZB@B@DBB@DAB@B@@@@A@@@AA@@@A@A@@@AA@@@A@A@@BAB@B@@@@@@AAA@AB@@@BABB@@BB@@B@BA@@@@AAAA@@@A@@@@"],
					["@@@@@@@@@A@@A@@A@@@@BB@A@@DA@@@@xqAAAAC@AAAAAAAADADABA@AAC@A@ADC@A@C@@@AB@@ABAAC@@C@@A@@@ABA@ABA@C@C@CA@@ACBABA@A@A@@BABA@AAAA@C@E@@A@@AAA@@@AB@BAB@@@@A@@A@CBAAAABCBA@CAA@@@A@@DC@@BABE@@EAA@@@C@A@EBA@A@AA@CACCE@A@E@AAC@@CACA@@AC@AA@A@@AAG@@@A@@BCBABABC@@@EAC@A@ABAFCFGB@A@@AA@A@@AA@A@AA@@AA@A@A@@BA@A@AA@A@AA@@A@A@A@A@A@A@A@A@A@AA@@AA@AA@AAA@AA@AAB@@AA@@AA@@@@A@@@@@@@A@@@@A@@@@@@@@@@BA@@@@@@@A@@@@@@@@@@@@A@@A@@@@@@A@@@@@@A@@B@@@@@@A@@@@@@@@@@@@@AA@@A@@@@@@A@@@@@AB@@@@@@@@@@@AA@@@@A@@@@@@@@@A@@@@@@@@B@@@@@@@BB@A@@@@@@@@@@@@@@@@@AA@@@@@@@@AB@@A@@BA@@@@B@@@@@@AA@@@@@@@@@@BA@@@@@@@@@@@@@@@@@AAA@A@@@@@@@@@@@A@@@A@@@@@@@@@@@@A@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@AB@@AB@@@@@B@@@@A@@@@@@@AA@@BA@AA@@AA@@A@@@A@AB@@A@@A@@@AA@@A@@A@A@@@@@@A@@@A@@BA@@@@@AA@@AA@A@A@@BA@AA@@@A@@@AA@@@A@CB@@AA@@@@@@@A@A@@A@@@AACA@@A@AAA@@@A@@@CB@@@@A@A@@AAAAC@@@@@A@@@@@@@@B@@A@@B@@@@@@@B@@@@@@@@AA@@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@AB@@A@@@@@@@@@@@A@@@@@@@@A@@A@@A@@@@@@AA@@@@AA@@@@@@@@@@@@@@@A@@@@AB@@@@@@A@@@@@@@@@@@A@@@@A@@A@@A@@@@@@@A@@B@@@@@@@B@@@@@B@@A@@@@@@@@@@@@@@A@@A@@A@@@@@@@A@@@@@A@@BA@@@C@CBYXA@ABA@@@ABA@ABA@A@@@A@A@A@AAA@@AA@A@A@A@A@A@A@A@@BA@AB@BA@@BAB@@AB@B@BA@@B@B@BA@@BABA@@BA@AB@@ABAB@@AB@BA@AB@BA@@B@B@B@B@BA@@B@BABIHIFEDCFIRCBAB@B@D@FADELADA@A@@@AA@@A@@@EAEEGAC@EDGBGB@B@B@B@BB@DTDDBBDD@B@BA@@BB@@A@@@@BA@B@@@BB@@A@BBA@@@@B@A@BD@@@@B@@@@@@B@@B@@@@@BB@@@@@@@B@@B@B@@B@@@@AD@@@@BB@@@@@@BB@@@@B@@@@AB@@@BB@@BA@A@@BABDB@@B@@@BB@@@B@B@B@BA@D@@HFBBB@@BB@@B@@BA@BB@@B@@B@B@BADA@B@@BBA@@B@@B@@BB@@@@@@BA@@B@@BD@D@@B@@AB@@@@B@@@@@BD@B@B@@@@A@@@@@BB@A@@@BBB@@@@B@@A@A@@AA@@B@@B@@@B@BB@@B@B@@@@AB@@@@ABA@@BB@@B@B@@@@@@@@@B@@@BB@B@@@@@@@@B@@@B@@BD@@@@B@@BAB@@A@@@@A@@@@@@@BA@@@B@@B@B@@@@@@A@@@@@@BBA@B@@BB@BA@@@@BA@@@@BB@@@BB@@@@@B@@@B@BB@@@AB@B@@A@CAKAA@@@A@@A@@@AA@A@A@@BCB@@A@@B@@A@AB@@@@B@@B@B@@@BA@@@@B@@BAB@@B@@B@@B@@@B@@@@@@@B@@@@B@@@@B@@@B@@BB@@@BA@@B@@AA@@@C@@A@@@@B@@@BABAD@B@@B@@A@@B@@@B@@BA@@B@@@B@@@B@@@BA@@B@B@B@@BBB@@BB@@@B@@B@@B@@B@B@@@@@@BAB@B@@BB@BB@@@@@BB@D@@@@@@BD@@@BDB@B@D@@@BAB@@BDBB@A@@B@@B@@@B@@A@@@@@A@@@@B@B@@BB@BB@B@@@@A@@@@BB@@BA@BBDB@@@@@@@@BB@@B@B@@@@@BB@@@@@@@A@@@@@A@@@CAG@AB@@@F@BABADA@@@@@@@@BFAB@@@@@@BAB@@@B@@@BB@@BBB@@@B@B@@@BB@AB@BB@@@@BB@@BB@@B@BABABA@@BAB@@@@AAAAA@AB@@@@@BA@@@A@AB@@A@BB@@A@AB@@AB@@AA@@C@A@AB@@@BA@@@AB@@@@@BB@B@@B@B@B@BBBB@@@@@@@B@@BBB@@@@@B@@@B@B@@@@@@@B@@@@@@B@@@B@@@B@BABB@@@BB@B@@A@@@AB@@@B@@BD@@BB@B@@@B@@DBB@@@BB@@@@B@@@@@B@@@@B@@@@@@B@@A@B@@@BAB@@@B@@@@BB@@BB@@@B@@ABA@@@AB@B@DB@@@B@@@@A@ABAB@DB@D@@BA@BB@BB@B@@@@B@@@@@@BB@@A@@B@A@@@B@@BBB@@@@@ABBB@BB@@A@@B@@B@@BA@A@@@@B@@@B@@@@@B@@@@A@@B@@@B@@AB@@@@@B@@@ABB@@BB@@@@@_"]
				],
				"encodeOffsets": [
					[
						[107182, 30093]
					],
					[
						[107193, 30081]
					],
					[
						[107131, 30041]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "510304",
			"properties": {
				"name": "大安区",
				"cp": [104.783229, 29.367136],
				"childNum": 26
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@DH@BF@JA@@BB@H@@BBDAJIBC@A@EAAAAAABCJBB@DEDCDAD@B@DC@BBCDC@A@@@AACACAECG@C@ABADABIBABAD@BDAD@BBBB@@@BCDABC@CAABC@AFAFABABA@CCCAC@EAIACCAE@GDABADCFA@A@AACAC@C@E@EACCA@C@A@ACAAAAAA@ACM@E@G@A@AGG@@N@@@B@@@@RZ@@B@@@@BA@@@AN@@@B@@@@@@kbB@@BBBBBBBDDBBB@DBBBB@D@DB@@DALA@ABA@@B@@A@AB@@@@@BB@BDBBDFBD@D@D@F@FBDAB@BBBB@BAFABAD@BABCBAD@B@BBJB@DBD@NADBJDDB@@@BAB@BCDA@@B@BB@B@@@@B@@@BB@@B@@A@@@A@CA@@@AB@@AA@@AGDEB"],
					["@@FCB@BABBD@BBBBB@@B@BEH@BAB@DB@@B@BABADCHABB@@@BBD@JBB@BA@AFKBABABAB@BAFB@@BBAF@DBB@BBBB@@BADE@AB@@@BB@BDDB@B@D@B@BAB@@@B@BFDBB@@BB@FBB@B@@ABA@GAA@AA@@@A@ABA@AAAA@CAA@A@ABA@@B@BFDDF@BBBCFA@A@CA@@AA@C@AAAA@A@CFCB@@@B@B@@DAD@B@B@B@@B@H@BDD@BAB@@AAAAAAA@AB@@@B@@BBBB@B@@ADEFAB@B@@BB@@BBD@@BB@@B@BAB@@A@AACAAAAAA@CB@B@BDBDBFBBB@@@B@@@@BB@@@BABB@@B@B@B@BB@@B@@@BBB@@AB@BBBBB@@B@B@B@@@B@@B@@BB@BBBDB@@B@DCBADABA@A@C@A@@@EDBDA@BB@@@BBB@@@@@B@BBB@@ABAD@@B@@@@@@BBDFBDDBBBB@@@BB@@B@BAB@BA@ADAB@@@B@BBDDBB@@BB@BB@B@B@FCD@B@BA@@AE@ABAHEB@@AAA@ABCB@DBFBB@D@B@@ABA@@@C@A@A@C@EB@@AD@HEB@BABB@@BB@B@B@B@B@@AB@D@BB@FDB@BD@@@BBDBD@B@D@BBBBB@B@BAB@B@B@DBB@BB@BBBB@B@BB@BBF@BABBD@@BD@D@DAB@DDBBBB@BB@B@D@DA@@BA@@@AAE@CAA@E@A@A@@FCFCD@HB@@@@BA@AAA@C@@@ABAH@JAD@D@B@FAB@BA@A@@@EACBADCFCB@FAF@D@BAD@HBDBD@BB@@B@BB@B@D@FB@@BB@BBD@B@@@B@DCBABAFEDCBABA@A@CBCDC@A@C@@BABAFE@@BA@AD@BABAB@@@DDB@BBBD@DBD@@DD@BB@B@B@B@B@D@@@B@BBla@A@@@@BM@@@@@@@AQY@@@@@A@@@@@@M@@A@BAHABADCD@B@@@@@D@BB@@B@@@BE@AAE@A@@BC@@@@CAA@@@@@FAB@@@B@FAHAF@BAAC@CBABCLEBCBC@AAAAAEEAAACBABEBADAD@BBFBD@F@HCBA@@GI@ABCBAF@F@BAB@DCBCDCDCDAF@AAEC@A@@@@@A@@@@A@AA@@@@B@@A@@@EB@@A@@@@AA@A@@B@@@BA@@A@@@A@@@@BA@@@@@@@@AA@@@@@@@AA@@@@@A@@B@AA@@@@C@@@A@@@@B@@C@@@@@@D@@@B@@ABC@@@@B@@A@AB@@@@@@@BA@A@@@@A@@@B@@A@@@A@A@@@@AB@@A@ABBB@@A@@@A@A@@BA@@B@B@@@B@@A@A@@@A@@@@A@@@@@BABA@@@@@@B@BA@A@@@@@A@@B@@@@AA@@@ACA@A@AAA@@A@@B@@@@@A@AA@@B@B@@AA@B@@@@A@@A@@@AA@A@A@@@@AA@@@B@@AA@@@@AA@BA@A@AB@AA@@@@A@@B@B@@A@@@A@@@@@@@A@@@AB@@A@@A@@BA@@@@A@AA@A@@@A@CB@A@@@@@AA@@@A@@@@@BB@@A@@@@B@@@@A@@@ABA@@@@@AA@@@@C@@@C@AA@@C@AA@@AC@@@@CB@B@@A@@A@@@@A@AB@@@DA@CD@@@A@@@@ABA@@@@@A@@@A@A@@@@BBA@BB@B@@B@@@@@@B@@@@@@@BB@@@@A@@@A@@@@B@@@@@@AAABAB@B@@@@@@@BAA@@AB@@@@B@@@ABAA@@@@AA@@AA@AA@@@@@A@@@A@BA@@AA@@@@@@AAA@AB@@A@@@@B@B@@@@@@ABA@@@@B@@@@BB@@B@@BA@@B@A@BA@AA@A@@@@@@@@A@@@C@@BA@AAA@ABCBCD@@A@@@@@@CDA@A@AAAEAA@@@@@ABADABADA@A@ODABEBCBCB@B@@AB@BBB@@@BB@DBB@D@@B@D@@@B@@@@A@@B@@@@@B@@AA@@AB@@A@@@@@A@@BAAABB@A@CB@@@@@@@@A@AAA@A@AA@@@@@A@@@@AA@A@@@BAAA@@BA@@D@@A@@@@@@B@@@@@B@@@@AAA@@B@@@@@@@B@@C@A@@@@@@@@B@@AB@@@@BB@@@@B@@B@@A@@B@@@@@A@@A@AB@@@@BB@@AB@@A@@@@@@@AB@@@@@@A@@@@@@B@@@B@@A@@@B@@@@@BB@@AB@BAB@BA@A@@@A@@BA@ABB@@@A@@@@@@BA@@@@@BB@BCAEAC@ABABCBGAGBA@AAAA@A@A@CA@@AAAAAA@A@EFC@E@AAEAABA@@D@D@BBBBD@BA@CBABCBCDABA@CAA@@BAB@BBD@FFF@B@@A@CBA@@B@BBB@B@@BB@BBDAFCBGHA@ABA@A@ABEDC@A@C@E@C@CBABAB@B@J@@@BABA@@BC@C@@@A@@B@@BB@@AB@@AB@@E@@@@@AB@@@BA@AA@AAG@AA@C@A@C@A@A@AA@G@A@@@AAAA@A@E@@B@@B@@@@@AB@@@@@@@@@@AAGDABA@C@AA@C@A@A@A@@BC@@@A@@A@@@A@ABCBED@@A@A@@@@C@@@A@@B@@AA@@AC@@@@B@@BB@@@B@@@@C@AB@@AA@@@A@@@@B@@@@AA@@ACB@@AB@@BBBB@BA@C@AAACBCBALMBA@EAAAAAC@A@A@@A@@@@@@@@@@@@@@@@@@AA@ABADCBCBCBA@@@@A@A@@AB@B@@A@@@AACA@ABAB@AA@@A@A@AC@A@CBC@EAA@AA@ABAB@BABA@AAAAA@A@@@C@@@@BAFDB@@@@@@@B@@AB@@@@BB@BADABA@@AAA@@@@A@@@A@AB@A@@@A@@AA@@ABEFAB@@AB@B@@A@@A@AAA@@@@A@A@@@A@@@@@@@@@A@@B@@A@@@@@@@@B@B@@AB@BBBLFBBA@@@A@A@A@MGA@@@G@CB@@@B@B@BABA@A@AAA@@@AB@BA@@@A@A@A@@B@@@@A@@BAB@@A@A@@B@@BBBDA@@BA@@@A@@@@A@@AA@@ABA@C@A@A@@@ABAAAAAAA@C@@@@@@A@A@ADABAB@BA@@@@@@BB@@B@A@@@AB@@@BABB@BBB@B@BA@@D@B@@A@A@@@A@AA@C@@@AAA@@@@A@@@A@A@AAA@@A@@@@@AB@@A@@@A@@@@C@@@AAB@@A@@B@@@B@@A@@@B@@@@BAA@@@@CA@@AB@BAA@ADCAA@@A@C@A@A@@ABABABA@ABCDA@@@@@@CC@@@@@@A@@B@@@@@BAA@B@@@@@@@BA@@A@B@@@B@B@BABA@ABAFABABEDAB@B@BBF"],
					["@@@@A@BB@A@@"],
					["@@@A@B@@@@@@@@@@@@"],
					["@@@@@@A@B@@@@@@@@@"],
					["@@@@@@@@BA@@@@A@@B@@"],
					["@@@@@@@@@@@@@@@@"],
					["@@@A@@@@@B@@@@@@@@@@"],
					["@@@@@@@@AA@B@BBA"],
					["@@@@@@A@B@@@@@@@@@"],
					["@@@@@A@@@@@@@A@@AB@@@B@@@@@@@@B@"],
					["@@@A@@B@@A@@A@A@ABDB@@@@@@"],
					["@@B@@A@@A@@@@@@@@@A@@B@BB@@@@@@A"],
					["@@@@@@@A@@@B@@@@@@@@"],
					["@@@@@@B@A@@@@@@@@@"],
					["@@@@B@@A@@A@@@@@@@A@@@@@@B@@B@@@"],
					["@@BA@AAAA@@@C@A@BBBAB@@@B@@B@B@B@@"],
					["@@@@A@A@@@B@@BB@@A@@@@@@"],
					["@@@@@@@@A@@BB@@@@@@@@A@@"],
					["@@@@@@@@A@@@B@@@@@"],
					["@@@@@@@@@@@@@@A@B@@@@@"],
					["@@@B@@@@@B@@B@L@B@B@@ABA@ABABCBA@@BEABA@@@@@A@@A@@@AACA@@@EACAC@@B@@@B@@AB@BA@@@@D@@B@B@@ABCBAB@@BBBBBAB@@CBA@@@AD@@CH"],
					["@@B@AA@@@B@@@@@@"],
					["@@@AD@@@BA@C@A@A@@A@@@@@@A@@@@AA@@@@@@A@@@@AB@@@@@@@BA@@@A@@B@@@B@@@@@@@@@BB@@@@B@@BBA@@BAB@@@@@@@@@@@@AA@@AA@@@AA@@@A@@@@@A@@@@@AEGAABCDA@@@AAAAAE@C@CBCB@BABABABCBE@@@CB@@@BA@@DAB@@C@@@AB@@@BDBD@@B@B@BABILABAB@B@D@BB@BBB@LCB@D@BBD@BAD@BAB@@A@@@@B@@@@A@@@@@A@@B@@B@A@@@A@@@@D@@@@@ABDD@@@@"],
					["@@@@@@AB@@@@B@@@@@@A"],
					["@@@@A@A@@@@@B@@@B@@@"]
				],
				"encodeOffsets": [
					[
						[107552, 30180]
					],
					[
						[107249, 30068]
					],
					[
						[107379, 30078]
					],
					[
						[107370, 30075]
					],
					[
						[107371, 30074]
					],
					[
						[107371, 30073]
					],
					[
						[107371, 30072]
					],
					[
						[107428, 30070]
					],
					[
						[107272, 30067]
					],
					[
						[107282, 30067]
					],
					[
						[107275, 30064]
					],
					[
						[107265, 30061]
					],
					[
						[107435, 30059]
					],
					[
						[107271, 30059]
					],
					[
						[107302, 30058]
					],
					[
						[107301, 30057]
					],
					[
						[107344, 30056]
					],
					[
						[107300, 30055]
					],
					[
						[107301, 30054]
					],
					[
						[107307, 30054]
					],
					[
						[107358, 30053]
					],
					[
						[107302, 30051]
					],
					[
						[107354, 30053]
					],
					[
						[107263, 30049]
					],
					[
						[107300, 30051]
					],
					[
						[107324, 30050]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "510322",
			"properties": {
				"name": "富顺县",
				"cp": [104.984256, 29.181282],
				"childNum": 18
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@@@@@B@@@@@@@A@@"],
					["@@@@B@@A@@A@@@@B@@@@@@"],
					["@@@@@@@@@B@@@@@@@@@A@@"],
					["@@@@@B@@@@@@@@@@BA@@@@A@"],
					["@@@@@@@@@@@@@@@@@@@@@@@@"],
					["@@@AD@F@@A@A@AEACA@A@CDAF@J@D@B@DCBE@EAECCAAEC@@@C@C@CBAF@BAN@D@HAB@BABA@AAACCAAEA@@@ADC@@DCDAB@@ABA@A@AAACAAA@ABCDADAB@BBBDBBAF@@DBF@DARGB@BAB@DD@BB@@BB@BC@ABCDABADCDAHAD@DAD@D@B@B@B@@ADGDADAP@B@BCHEBCBCAEGGCEEGCG@E@CBCBADBFF@FBBD@DADCBAFEBCDCHCHAFAF@BBBBDD@BAB@@EBCAAB@B@B@@DBD@D@BDD@D@DAB@BAHOBEJGBAB@B@BBDBD@DABAB@BC@CAA@AB@@@B@B@B@@@@@BA@A@AB@@EAAACAAC@@@E@C@A@AA@CBC@CDARCB@BABA@A@AC@AA@A@A@AB@@@B@@@B@B@@@@@BC@A@CCAEC@AAACACCCECACCECAACCCCACCAAA@CBCBGBCBA@ABCBA@AAACEACECCAAAACCCCECGCECCCAECCCCCCCCAAAAAACACACACAAAC@@CCE@GAGCAECEAAAAA@AAAA@C@C@EBCBC@C@CAACAACAA@CBA@A@ABG@CBAF@F@FABCBCBCBAFAD@D@B@B@BAB@BAB@BBBD@B@BDD@B@@HBFABCBADBBDBBDDBBHAHCF@HAD@DA@AAAECAA@CDCJ@H@D@DAD@BBBDB@@@B@@ABC@EEIAC@CB@BAF@@A@C@@@AACAC@@@ABA@ABC@A@AAA@AACAA@AA@CCCAGCCA@AA@C@A@@@@AA@ACAA@@OICE@C@CBCBCFCDAFAD@@@D@B@B@@ABABA@@BABAD@FAB@@@BABA@@@C@A@@AAAA@CAAAA@AA@AACAC@AACA@@A@A@ABADCBADAFCDABA@AAEGEACAGBEBABAB@D@DBBBB@BA@ABABABA@@B@B@B@BB@@B@@@BCDA@ABAB@@A@E@A@@AAAA@@@A@A@A@A@AA@@A@AA@AA@@ABC@A@A@A@A@A@CBA@AAAAA@AA@@@AA@@A@@AB@BA@@@A@A@A@@AAAAA@@@A@C@C@A@A@AAA@ACA@AAA@C@@BABADAB@BABA@C@A@C@CACAA@A@A@AB@@@B@D@DBB@BADCD@FCDCDCBIB@@AA@@ABA@ACA@AA@AB@@AB@@AA@@@C@A@@@A@@AAA@@AAAAA@A@@B@@@BA@A@AAA@A@A@@@C@AA@@A@@BBB@@@@AB@@C@@@A@AA@B@B@@@BA@A@AA@@CAC@A@@AA@@@A@AAA@@@@A@AB@A@@@C@AAA@@A@@@AAC@@@@A@ABABEDCBA@E@CAA@ECC@GBKDCBA@A@AACAACCDA@ADABCBCDCBA@ABA@ABADCBAB@@EBC@EBCDAB@B@D@BDFBD@D@@A@AAAAAAA@C@C@C@C@A@C@AB@B@BADABCBC@CBE@EBABA@ABADCFCFADADADADCB@@A@@@A@A@@BA@AB@BA@AB@@A@A@A@ABA@AA@@A@@A@A@C@@AA@@AB@@A@@@AB@B@B@B@B@B@@@B@BB@@BB@BBBB@@@BA@A@A@AAABA@@@ABA@A@AB@@A@A@A@ABA@ABA@ABA@AB@@@B@B@B@B@@@B@B@BAB@@A@ABA@A@A@A@A@A@@@A@ABA@A@A@A@A@A@AA@@A@A@ABA@A@AB@@ABAB@@@BAB@B@@AB@B@B@B@@AB@B@B@B@@@B@B@B@B@@@B@BAB@@AB@B@B@B@@@BBB@@BB@BBB@@@B@B@B@B@B@@@B@B@B@B@@AB@B@BA@ABA@@@A@A@ABA@A@A@A@AAA@A@A@@AAA@@AAAB@@A@A@A@@A@A@A@A@A@@@AAAA@A@A@A@A@@@A@A@A@A@A@AB@BA@AB@AA@@AA@AAA@AA@A@@AA@AA@ABA@ABA@@@AAA@@AAAA@A@@BA@ABA@@@ABA@AB@B@@AB@B@B@B@@@B@@A@AAA@AA@@@AAA@A@@@A@ABA@A@@@A@A@A@ABA@@@A@A@A@AA@@A@A@A@A@@@A@A@A@AA@@A@A@A@AA@@A@AAA@@AAA@A@A@AAA@A@@@A@A@A@A@AAA@A@A@A@AA@@A@AA@A@@@A@A@A@A@A@@@ABA@A@A@@AA@AAA@@AA@AA@@AA@A@A@A@A@A@A@A@AB@@A@A@@AAA@@AA@AA@A@A@A@A@ABA@A@A@A@@@AB@BA@ABA@@@AA@AA@AAA@A@A@A@@@ABA@C@A@@AA@@A@ABA@@@ACA@@@@@@@A@@@AAAA@A@AAA@@AAAA@@@A@CFABA@CBABA@@@A@@BA@AB@@ABA@ABA@A@@@ABA@A@A@ABA@A@@BAA@AA@AAA@A@@@A@C@@@@@@@A@C@CAA@@@A@AB@@A@@@@C@@AA@@E@ABA@@@AAC@@@C@A@@@@@@A@@A@AAA@A@@BA@A@AAA@C@AA@@AAA@AAAA@AA@@@A@A@A@ABA@@@AB@@AB@@A@ABA@@@C@A@A@@BC@A@A@@@AB@@A@@@A@C@A@A@@BA@A@@BA@@BAB@BBB@@@BBBB@B@@BB@@BBB@BA@@BA@ABAB@@ABA@@B@B@B@@AB@B@BAB@@@B@B@BBB@@@B@B@B@@@BABA@@@AB@@AB@@AB@BBB@BABAFEL@D@D@BDDB@DBDB@D@DAB@B@@@BDB@BB@BB@@D@B@B@@B@@B@@@B@BBB@@@@BBD@@@@BBB@BB@@BBB@BB@@BB@BB@@BB@B@BABBBB@D@DAJ@D@@@@A@@@CBKCIAEBEHCJAH@JCHCBG@GCIGC@IFAFADBDBD@@D@D@BB@@BB@@BD@BBBA@A@ABCB@@@@@BBDBBBBBB@B@@@BCBA@AB@BAB@BCBAD@BABAB@BAB@D@B@B@@AB@@@B@@@B@B@DA@@BCB@@AB@@AB@@@B@@BB@BB@B@B@B@B@B@@BB@BB@B@@@B@B@BBB@@BB@BB@@B@BBB@B@@@B@B@@B@DDB@B@@A@@@CBA@@A@@@@AB@@@@@@@BA@ADAB@B@@BDB@@D@B@@@@B@B@@B@BEBABAD@B@DAB@@@BC@C@@BA@@B@@A@@AA@A@A@@@@@@@@AA@@@@@@B@@@BB@@@@@@@@BB@@B@@A@@BE@CB@B@F@B@DD@BB@B@@@@@BB@@B@@@B@BB@@DB@@B@@ADCBA@A@@B@@@@@@@@@@@@@B@@@@@@A@@A@BA@A@ABCDBBBDDD@DBB@@@@B@B@@@@@@BAB@@@@B@BBB@@D@@@BB@B@@B@B@@@BD@BBB@@BB@@@@AB@B@@BB@@DBB@@@@ABC@@BAB@@@JCD@FAB@BBBBB@BBB@BB@@@@B@B@@@B@BD@@@@B@B@B@@AAA@@@AB@D@@@@@B@@@@@@A@@@@B@DD@@B@@@@@@@@@B@@@@@@@@@@@@@BB@@@@B@@@@A@@A@@A@@@A@@@@B@B@B@@@B@@@@@@AA@@A@@AA@@@@AAB@B@@@@@@@B@@@A@BB@@BB@@@@@@B@@@@@CA@A@@@@B@DB@B@@@@AB@@@B@@B@@@B@@@@B@@B@@B@B@@@BB@@ABA@@A@@C@@@A@@B@DAB@BAAAAAA@@K@@BA@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@AB@@@@@@@@A@@B@@@@@@@@@B@@@@A@@B@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@A@@@@@@@@@@@@@@@@BA@@@@@B@@@@B@@@BB@@BB@@@@@@B@@@@A@@B@@@@AA@@@@A@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@AA@B@@A@@@@@@@@@@@A@@@@B@@@@B@@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@B@@@@@@@@BBB@@@@@@BB@@@@@@B@@@@@@@@@BA@@@@BA@@@@@@@@@@@A@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@B@@@@A@@@A@@@AB@@B@@B@@@B@@AB@@B@@@B@@@@B@B@@@B@BB@B@@@B@@@@AB@@B@@B@@B@@AB@@B@@@BB@@@@@BA@A@@@@B@@@@@AB@B@@B@@AB@@@B@@@B@B@@@B@@A@@@@@A@@@@@@@@BA@@@@@@@@B@@@@@@@B@@B@@@@@@@@@@@@@@@B@@@@@@@@B@@@B@@B@@@BB@@@@@B@@@B@@@@B@@AB@@@@@B@@BB@@@@@@B@@@@A@@B@@A@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@B@@B@@@B@@@@@@@@B@@@@BB@@@@@@@@@@@@@@@@@@B@@@@A@@@@B@@BB@B@@@@@B@@@@@@ABA@@@@@@BB@BAB@B@@B@@@BA@@B@@@@@@@@@B@@A@@@@@A@@B@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@@BA@@@@@@@@@@B@BB@@@@@@@@@A@@@@@@@A@@@@@A@@@@@@@@@@@@@@@@@@B@BBB@DB@@@@@EAACI@CBCDAF@FADBDA@BB@D@B@B@B@B@B@B@D@B@B@@@DABBDLFH@BBBDDBB@@DBDB@BB@DHBB@BB@@@@B@@B@BD@@@B@BA@ABA@AB@DBBBB@DBDBBDDB@@B@BC@A@CBABCB@B@BB@FBD@@@@B@BABA@C@A@A@ABAD@BADCHADA@CAC@AAAB@BBBBDBD@DABA@A@A@C@CACAA@A@AB@B@D@B@DABABA@ABCAA@C@ABA@ADADAD@B@BBF@BB@B@FCDAD@DAD@DA@CBCDCBAB@DBFBDFBD@DADCHADEDEDC@@BCBCBCB@DBB@@DBDADBB@@B@BABCBA@AD@BB@BBB@B@DAB@BBB@AD@DBA@@@@@@@BB@@A@@@@@B@@@B@@BA@@@@@B@@@@@B@@@@@@BB@@B@@B@@@@AB@@@@@B@B@@@@@@BB@@A@@@BB@A@@@@@A@@@@@@BB@@B@@@B@@@B@@@AB@@@@@@@BB@B@@@B@@BDABB@@@@BB@@AB@@@@@@B@@@BA@B@@@@@@B@@@B@@@B@@BB@@@@@B@@@BB@@@@@B@@@@@@@@@B@@BB@@@B@A@@B@@@D@@A@@@AB@@@B@BBBB@@@@B@@A@@@@@@B@@BBB@@AB@@AB@@@@@@B@@B@@@@AB@B@@DA@@B@@B@BA@@B@@@@BB@@@B@@BB@B@@B@@@@@B@@@BA@@@@B@@BA@B@@@B@@@B@@B@@@@@B@@@@B@@@@@@@B@@@B@@B@@B@BA@BB@@@B@@@B@@@@@A@@@B@@@@@BA@@A@@@AA@B@@@@@@@@@A@@AB@@@AB@@AB@@@B@@@@@@BB@@@B@@@BBBBBB@@@@@BBB@@@@B@@A@AA@@A@@B@@@@B@@B@B@@@@B@@@@B@@@@@B@@@@@@A@@@@@@@@@B@@@@B@B@@@@A@A@@B@BB@BBB@A@A@@@A@A@A@@@A@AA@@A@@A@@@@@@A@@@A@@A@@A@@B@@ABB@@B@@@@BBAB@@@AAA@@AB@@AA@B@@A@@AA@@B@@@@@@AA@@BA@@A@@A@@A@@@@@@@@@A@@A@@@@A@@A@@@@@AA@@@@B@@@@@BA@BB@BA@@B@B@@@B@BA@@B@@D@@@A@@B@@@@@@A@@B@@@@@@@B@@@@@@B@@@@@@B@@@@A@@@@@@B@@@B@@@@@@@@@B@@@@B@@@@BB@A@@@A@B@@B@@@@A@B@@B@@@B@@B@A@@@LB@@@BA@@@@@B@B@BB@@@@A@@@@@AB@@BB@@@@@AA@A@@B@@@@@@@B@@@B@@A@@B@BBBBDD@BFHBD@@@DAH@@B@FBBB@B@BCB@D@@@@B@@@DCDABAB@BBB@@AD@@@B@@@@@@@@@@BBBB@@A@B@AB@@AA@@@AA@@@@@A@@B@BA@@@@@@@A@A@@B@@@BAB@BB@@@@@@BB@@ABB@@@B@@@@@B@@BBB@@BB@@@@BBBA@@A@@@@@BA@@BB@A@@@@@@@ABABABB@@@@@@@A@@B@@@B@@@@@AA@@@@@@A@@@@@@@@AA@A@@AAB@A@@B@B@@@B@@@@@B@BA@@@@@B@@DCB@@C@@BAB@@@@@@BB@@@@ADA@@@@BD@@BBD@@@BBD@@@D@@@@@BB@@@@B@BA@@B@@@@@@A@@B@@@AA@@@@B@@@B@@B@@@@@BDAB@@@B@B@@B@B@@B@@AB@@@@BA@@B@@@B@@@@@@@B@@@BA@A@@@@B@@B@@BBAB@B@@ABB@@@@BB@@@A@@BB@@@@@B@BBB@@B@@@@B@@A@B@@BA@A@@@BBB@@@@@A@@@@BB@BBB@B@BD@@B@@B@@A@@@@B@@@@@BABA@@@@@@@ABAB@@@@B@@@@@@B@@@B@BA@@@A@A@@@AB@@@B@B@@@BA@AA@B@BA@@B@@B@B@@@B@@@@A@@@B@@B@B@@A@@@@@@BAB@@@@A@@D@BA@@@A@@@C@@@@D@@@@A@@B@@@D@@@@@BBA@@@@B@@@@BB@@@@@@B@@B@@@@@@B@@A@@B@@@B@@@AB@@A@@@@BBB@@@@@BA@@F@@@BA@@@@@BBB@@@@@@B@@@@@BFDBB"],
					["@@@@@A@@@B@@@@@@"],
					["@@@@@@@@A@@@@@@@A@B@@@B@"],
					["@@@@@@@@@@@@@@"],
					["@@@@@@@@@@@@@@@@"],
					["@@B@A@@@@@@@@@"],
					["@@@@@A@@@@@B@@@@@@@@@@"],
					["@@@@@@A@@@@@@@B@@@@@@@@@"],
					["@@B@@@A@@@@@@@@B@A"],
					["@@AA@BA@@@@@BB@@@A@@B@"],
					["@@@@@@@@@@B@A@"],
					["@@@@@@A@@@@@B@@@"],
					["@@@BBB@@B@@@@A@AAA@B@@A@@@@@B@@@@@@@A@@@@@"]
				],
				"encodeOffsets": [
					[
						[107520, 30118]
					],
					[
						[107521, 30111]
					],
					[
						[107512, 30096]
					],
					[
						[107379, 30078]
					],
					[
						[107354, 30053]
					],
					[
						[107627, 30021]
					],
					[
						[107212, 29871]
					],
					[
						[107320, 29863]
					],
					[
						[107304, 29863]
					],
					[
						[107315, 29863]
					],
					[
						[107321, 29862]
					],
					[
						[107328, 29862]
					],
					[
						[107326, 29860]
					],
					[
						[107324, 29859]
					],
					[
						[107325, 29858]
					],
					[
						[107324, 29859]
					],
					[
						[107235, 29856]
					],
					[
						[107259, 29852]
					]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));