(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('衢州市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"330802","properties":{"name":"柯城区","cp":[118.873041,28.944539],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@^MXCNHNGAEHG@DDDT@HEFFL@BACMGKHE@CCE@]FERBHJ@@@QIQ\\_BePKPM@@@@ZSPQAOGKFMIKFI^IDA]KUQHKCGICJABC@@@A@@@A@@@@@AB@@@B@@@@@@@DA@ABABA@@BA@A@@A@@AA@@@@@CA@@@@@A@ADG@@@@@A@@CABCBABAB@BAB@B@BABBB@BBDD@@DBB@B@@BBBBBFDB@BB@@DDBBB@BBD@D@@@B@B@@AD@BADADABABCEMGEIIQKIGCEAABADANEJEHADAD@@BBFDBDDF@D@BABADG@ECECEEG@C@A@CDAD@F@HAJAFCDCDCBE@@@@@@BCDEBG@CEEGCEAEACCCEAE@G@CDGFEDEB@@A@A@AAA@@AA@@A@AA@@AEBCBCBA@E@@@A@@AA@@B@@AB@@@B@D@@@BABA@C@E@ACE@A@A@CCCAAAAAAE@A@ABGBG@IAE@CAAAC@IDIBC@A@AECIEEEAE@A@ABADAF@LAHADEBEBCB@HGNKPKHEDKBCBCAC@E@CB@B@BBD@B@BABABAB@DBDBJBD@HGLILCD@B@BBBDDBD@BADEBE@CAA@A@EGEECCCECCAAA@A@C@CAA@AAAA@A@C@ABC@AC@AAE@C@AACCCCA@CAGAC@AAAA@EA@AAA@C@AAC@CC@@@@@@@A@@@ABA@@B@@AB@@AB@@A@@@@B@@A@@@@@@@@BA@@@@A@@A@@@@@@A@@A@@@@@@@A@@@A@@@@@@@@AA@@C@@@C@@@@A@A@A@A@A@A@@AAAAA@AAGCGCCAAAA@@A@@@@AA@A@@@A@A@A@A@A@A@@AA@A@@CACA@@A@AA@AA@@@@AA@@A@@@@C@E@AAABC@@@@@ABBDAB@D@@AFAHCJEFADEDABCDADADCDCDCB@BAB@DAFCFAF@BA@@@ABA@A@A@CB@@CDCBA@@@A@AAA@A@A@A@A@A@A@@BCBA@ABA@@B@B@@B@FBD@D@F@D@B@BBBDDJDDDBFBD@BBBDDD@@BBBDBD@B@DB@FJBDBD@JBB@DBFBDABADABAB@BBDBB@@BDABABCBA@EBCBEBAD@DADCFCFEFADCBABAA@@A@C@AB@B@HAHAF@BBBBB@BBB@@ABABAB@DAB@BB@GLAF@F@F@DDHDDBDBBBBDAD@BBBB@HCBAHAD@B@F@FBFDDBBBB@F@FCJAH@DBDBFHDBBBH@PBN@HBDBBDDBBDBBDFBDBDBDDDD@DBDDDDBJFBBBD@FDDBB@DADCFAB@D@J@DBD@BBBD@D@BBBB@B@D@FAF@@@BBBHBFBFFDBBBBB@F@J@LBDBDDDBB"],"encodeOffsets":[[121615,29892]]}},{"type":"Feature","id":"330822","properties":{"name":"常山县","cp":[118.521654,28.900039],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACCACAC@K@I@EAAAACAEEEAGAAA@A@@BE@E@C@AAAAAC@C@AA@AAC@C@I@CBADEBC@CAACC@EACAAIECACCAC@CCCCCCACAEAACCAAACCAAAC@GAM@OAGAAGCAEAC@CBGDI@E@EAAAACCAE@E@E@ABCBGDA@GAAAAC@CBAAAAACCCCG@C@E@EBEHKA@@ABA@CBABABA@@AA@AAAAA@ABEBG@G@ABAD@B@@@BBBADABCFEDEDEBC@CBCFADAFAB@DABABAAC@@AAAC@ABABABCBAACAE@CAA@IACACEIA@@C@AACACAA@@CCACAAC@EACACCCIACAAA@C@E@C@C@EAA@@@@A@AB@BAAAAAAAAACC@@ACAC@@@ABA@ABAAA@AA@AAA@@@AA@@A@@@AA@@C@AAC@C@@@EA@@A@@@A@A@A@C@CACA@@A@CAECAAEACAA@@@I@@@@@C@CBEF@@EBCB@@A@@BA@A@ABABA@A@A@@@A@@@@@A@@@@A@@A@@ACAA@@@@@AA@A@ABABADCBABABAB@@A@A@@AA@@@A@@AA@@ACAA@@CACCC@ECIAC@EAEA@@C@@@C@@@CBA@A@A@ABC@C@C@CBABABABABA@A@A@A@@A@@AA@@BA@C@ACCAAAAA@C@A@@@CB@@A@@AA@@@@@@@@AC@ACCAA@C@@@@@@@ABADABA@ABABA@A@CAA@CAA@AA@A@@@@@@AA@@@AB@@A@@@AAC@ACCACCAA@@AA@@BA@A@@BAB@@AB@@@B@@@@@BADAD@BABA@@@C@@@AAE@@@C@C@CA@@A@AAC@C@A@A@@AAA@ABC@@@CBCBA@C@@AA@@@A@A@@@@AAA@@@AA@C@@@CAA@@A@ACAA@AA@@@@@AA@@BAB@@ACAEC@A@AAE@@AAAC@A@@@A@@@A@@CCCECC@AAACCAC@A@EBE@C@@@@C@A@@@@@AA@@A@@@A@AB@@@@A@@@A@EBCBAD@B@@BFBBAF@B@DAB@@@@A@AA@@@@@@@A@@B@@AA@A@@@G@ABCDCBAB@B@@@B@@@@@@A@AAA@A@CBABCBE@EBC@AAAACACAA@A@A@ABCB@BAB@D@BAB@BA@A@A@@@AAA@CAA@C@ABAB@@@@@@AAA@AAAA@@A@@@CBCB@@A@@@AE@A@A@AAA@A@@@A@A@@@A@@@@A@@A@@@@@AB@@@@B@@@@@@B@@@AA@A@@A@@@A@@C@AA@@@@@A@@@A@AA@AAAA@@AA@AB@@A@@@@A@@A@A@AAA@@BA@@D@BBBB@@@@BA@@B@B@B@B@@CD@@@@BB@@@@@@B@@@@@B@BB@@@BB@@@@@@@@@@@@BABA@A@ADAB@@@BA@@BABA@@@A@@@@@AB@@@D@@AD@@@@@@@BA@@@@B@@B@@@@B@@B@B@@@@@@BA@@@A@@BAB@@A@@B@@@B@B@@ABABABA@@@A@@@@AA@@@@B@BA@@@@@E@A@@@A@AD@@A@A@@@@@A@@@@@A@@@@AG@@@E@E@EBA@A@A@CAE@CBEDCDA@GB@@ABABA@A@G@E@CBEB@@ADAB@BA@AAAAA@@@@@@D@B@@@@@BABABABCB@@@B@@@B@@B@DBBB@@BBDBDB@@@@@B@@CB@B@@@@B@@BA@@@@BA@A@CDAB@B@B@D@BABADAFADADCBC@A@@BBFAFAHADCDAD@B@H@DAHABCFEB@B@DAD@F@DADAHCD@D@D@@ABCBA@E@AB@@@@A@AA@@CDCD@@@B@@@B@@@BBB@@BDBB@@@@DD@@B@@@B@@@@@BADC@@BA@@FEB@B@@@DBH@B@BB@@B@@B@@B@B@@@B@@@B@@ABA@AB@@@BA@@@AB@BA@@@@B@@BB@@B@@B@@BB@@@@@BBB@B@@AB@@@@A@@@@@A@@B@@@@@D@@@FB@@DBFAHAF@FBB@B@B@@B@@FDDBFBBBB@B@DAB@D@BA@AB@@@@@D@@@BBB@@BBB@@@@BDBB@@BBB@@@B@B@@@B@BAB@BA@@BBB@FFBH@B@@@@@@@BA@@BA@CDA@@BABAB@DBDDLB@BFBDBBDDBBDDJD@@@BB@BBHFBBB@B@B@@BD@@@B@@@@@B@HFHBHDDBF@B@P@D@@@DC@@@@HIBABA@@FAF@@@@@F@@@HBB@BBDJ@@BH@B@@@BB@@@@BB@@@@@HDFFBBFF@B@@@BABCDA@AB@BBFBBBFDBBBDB@B@BCBA@@D@BDNBFDFDBB@D@DABCD@LBD@DBFBDBDBDBHBHDDFBDBDBD@DBDDDBBD@DDF@FDBDFDTNFFBBBBBDBFBDBDBBHDLJPFPLFBBDDDDBDBHBDBBBFLDDBBBDBD@DAFCF@D@HDFDBDDBFDFBBD@D@B@B@D@FFBDFFDBBDFDFBDFDDDBDDBBBD@D@FAB@BDDBBAD@FABABBBDDF@DB@AL@H@JDJBHDH@XFFBH@D@F@HBDBB@FCJGHCHEHCFANBFFDDFHHBD@DBBBBHBDJFBBHDHBF@FAFD@C@ABAAE@AACBADABCBCFKBC@A"],"encodeOffsets":[[121615,29892]]}},{"type":"Feature","id":"330825","properties":{"name":"龙游县","cp":[119.172525,29.031364],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EACCCCAAACAECEACGEECMIAA@C@CBEBA@ACC@CBEAE@GAEC@CA@AB@DALAFABABCBE@CACAC@EBCDC@@ACCCAABCHIDEFCFA@ECE@E@E@A@ABADADALAFABABA@GBK@KD@D@H@DAF@FCDABAFGBCDCDAFCFADCAGAG@C@ADCFCD@FBDBB@DAH@D@DB@BB@BAB@@ABCDIBCB@BABA@A@AACAAA@ACA@@A@A@A@ABOBCBA@@DADA@A@@AA@A@AAC@A@C@EBADI@A@ABC@I@C@AA@AAA@@B@BAB@BABAB@DADBHAB@BC@@@AA@A@E@C@A@EAGAE@CAECK@C@CACBE@@@@@@FE@@@@@A@@@@BA@@@A@@A@@@A@@A@@@C@A@A@@@AB@DAB@BA@A@CACCECECCECCCM@C@C@CA@CBA@CFAFEDGBGBK@CBCDEBCBAFGDEBEBE@C@@@C@AFCDIBEBCFAHCDCFE@G@IAKCEAAE@KDEBE@@@A@@ABA@ADAHCDCBABA@ACKACACA@C@A@ABABADCDC@A@@@A@CCAAACA@CG@AAC@@@C@@@CAE@IAE@@BA@@BBFDBBD@FBDAD@BAB@BB@@BDBD@BBBBBB@B@B@DCFCBABA@A@AA@C@C@C@@A@@@ABABA@ACCAC@CBCBABA@@DCDCDEB@@A@A@@ACACCAEAICEAC@ACAAACAG@A@A@A@@A@@@@BA@@B@@@B@DADABADA@CBC@A@@@AACCCCCAAA@@AAA@CA@@CBA@CBCBC@C@G@CAC@A@ECA@AA@A@A@A@@@C@A@@ACCICEIGEEGCAAEAACCECA@C@CAA@AAAE@CAC@G@EB@@EBE@CBMBGDEBE@GAC@E@IBKBE@CACEGGEIEIIGE@C@E@CAIGKCKCKCM@EAC@E@EBCBGBGDEBEBC@C@C@A@AAAAAA@@@@CECCA@AAA@@BA@CBABABABA@@@A@A@@A@@@@AACCA@AAA@C@AAE@AA@@AB@@A@@@@B@@@B@@@HAFBHDDB@BBD@B@@BBD@@@DBBDDDBBB@@@B@B@B@DDD@D@B@DAFEFEFGHAD@F@HAHAHBDDFFBFDFBD@DBB@DDDDBBBDBDDBDBD@FBBBB@@B@D@FAH@B@BBB@@FD@BBDBFDNBD@B@BCBAB@B@DBDAH@FBBDBDBDDDDBBBB@D@DABAD@DBP@HAFKF@B@FBBBDDFBDDHDJ@F@DAHADEHKHKFGDEFCBEDABGLEBCBKFGDEN@FBDD@FAB@DB@B@BCFBDBDJHF@HBFADADGDAB@@B@B@B@BBF@B@@A@ABA@A@AB@@@B@@@@@BB@@@@@D@D@DBFHEDABEFABABABC@E@C@C@A@AB@@@@A@@D@BABABCBC@@H@B@DADADABCP@@@@ADADABIJ@BA@ABC@E@EBABAB@B@BBD@BDDB@BBB@B@B@D@B@D@@B@@@BABGF@@AB@B@B@@B@D@DBBBBFBF@D@BABCDAB@B@B@BB@BBHADADAD@HCB@B@B@DB@BBBB@BBBAB@B@B@B@BB@B@J@B@BBB@BB@B@BABBBBBB@D@DAB@@A@A@AAABA@ABIRAFKRCH@BADBB@B@BDBFDBBBD@BABADCFCHAFABCBA@C@@@A@BD@FABABCBC@KBC@ABA@ABAB@D@TAHAJ@J@DAD@B@BAB@@CBAB@BAD@HAD@DABA@ABABCHJFDBH@BAJBPHL@D@DAFAD@HFBDFDF@H@BABCF@F@LAFDHDHDFDHDF@F@FAEQBC@EBAJAD@DDBBJ@DBDFB@BBDAFEHEBAHAF@DCBCFCDC@CBCHALAF@DHFN@DADCBCFABBDBBDBB@DAD@FBB@B@BA@EBCDAF@DBDB@B@BCDAFBJ@RBBDB@@@BGBEDEDEFADCBAACACBCB@D@D@BFFFHFDF@BB@B@BGBBBAB@FADAD@BBF@DB@FCD@BEDAFAF@HAB@DBDBDBDADA@AACAGBABCFADCBEBIDCDCAEAE@EB@F@FBJAJCFAD@D@"],"encodeOffsets":[[122124,29950]]}},{"type":"Feature","id":"330803","properties":{"name":"衢江区","cp":[118.957683,28.973195],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@FCDEFEF@BCDCDEHAFCDEDCHAH@HCH@BABAFGDCFAJAFAD@BA@A@CCCAAICGACAACBCBCDADAHGBEDCBAB@B@FBFGDCDCDCBADBDIBEBCHGBA@AACCA@A@EBC@E@CBGDAFEBEDABAD@BABEDE@CDAB@DDD@FDDBNBFBJ@FBNDBBDGBABAB@BA@CBC@GBC@ABADA@@BA@A@ABC@C@IBIBG@S@CBABAB@BAD@LAD@DABABA@EACB@@@D@B@DABABEDGDEBCBA@AACAAECCA@A@AAABC@ADGLQBEJQBAB@BABBB@B@@@BA@C@CAAAAAAABA@A@@AAA@A@A@I@AAAA@A@A@A@ABAAA@AA@ACAA@A@A@GDC@CBCBGBAAA@@A@A@ABADCBA@A@CAEAEAACAC@A@@@@A@ABA@@HEBA@A@@@AC@A@C@A@A@A@AAA@CC@AAC@A@ABABAFAF@D@BAB@@AJIBABCBC@@@@DOBABCBC@C@A@GD@DABABA@A@CB@@@@@BAB@D@D@F@D@BABABAFEBAFCEGCAC@C@@@@@A@@A@@@@@A@@BAB@B@BAB@@@@AAE@A@A@A@AA@CBCHCBEBGAE@IGACACDE@A@ACAA@EBC@AC@EFMHCLEDAFAHKBAFCDAFEHCLELGFGBCBG@C@ECICGACCEACAA@E@ALEBE@GAO@CBCBA@C@CAAAACCCCCACAAA@EBGAC@C@ABADA@A@AACCMAEAC@AEC@@AA@A@ABG@E@C@AA@AAEAC@CACAACACAACCCCA@CAC@EAECEACEACBGBG@G@EBCHGFEFEBE@C@A@CCC@C@A@A@A@@AACACCAA@C@@AC@AA@C@AAA@CCAGBE@G@@@A@@@A@@@@AACECAEACACA@AAAAAA@A@AA@A@AACAEACAAECAAE@AAGBC@EAAAA@ACEEGCCCECCAA@AAACACAACC@@AEACAAAAA@A@A@AAAACAACACAAACACAA@@AA@AAA@A@@AAA@A@@AC@ACAACECCECAAAAAAAEA@EGAA@@A@@@ABCDADA@ABC@CCCAE@C@@@C@C@CACAE@CCCAIM@E@E@E@ECCCECACCAE@EBI@ECCC@CCCEAGBMAOB@FGBCBC@EEGGEAAAECEAACECCCACCA@CACA@E@CACCAC@EEACEICAAAC@C@CBCBABAB@DAB@FAB@@ABC@CAA@CBA@ADCD@@@DADABC@A@A@E@CAA@C@ABCBEDEDEDA@C@C@CCC@CACCA@AC@AEEAAAAAAA@@@C@@@A@A@ABA@@@AD@@@@@D@@AFAF@@AFCJAFAF@D@B@DBDBD@D@B@D@B@B@DBFBFDBBB@BBBBBBD@@FFBBBFBDBF@D@B@@@DAFADAB@D@D@DBDDDFDBBDBFH@BBD@@@B@B@BADAFBB@@@B@BAB@B@BB@AB@BCBEBEDC@CBCBC@A@EBA@@B@D@DAFAFAHENCDADBLDL@BFF@BBD@F@B@BABCBAD@@@@AB@@ADCDAD@@@D@B@B@BDH@B@B@BADBD@B@DADAB@B@BBD@HBF@DBD@@@D@BAJA@@DAD@BABA@AAC@E@C@ABABAFAF@DA@CFCFCFADCFAD@DADABEBA@ADADADADCDCDA@@DBB@DBD@B@B@BAFGHELABAF@B@@@@D@BABBF@D@@@@@@BB@@B@@B@@BBBB@@@DBDB@@@BBB@@@B@B@B@B@B@B@@@BBB@@@@@BB@BBDBHDHDBBB@BBBB@@@B@B@B@B@B@B@@D@@@D@@@BB@@@@@@@@@B@@@B@@@@@@@BB@@@@@@@@BB@@@@@AB@@@@@@@@@BA@@@@@@BA@@BA@@BA@@@AB@B@@@B@@@@@@DDD@BBD@B@BBB@@FBBBBD@HBDBB@DDDDBBD@F@BBD@@BAD@B@D@BBBBBB@DBD@B@B@BBDDDFDDFFFHB@B@DBF@FABC@AACCCAA@A@ADCJKHK@GACAIAC@CBABABA@A@AAC@A@ADAF@D@DBDALAFCLGLOHM@GDAFAFABCBG@KBEBCBAB@F@FBFFDJBFB@D@JAJCD@BBDBF@JBH@HABAB@F@BBBBBBDD@D@B@BDF@B@F@DABAB@@C@A@@@A@@BA@@@BB@@@B@@@FABADADBF@@BBB@@@BB@@BB@B@B@BA@CFEFCH@D@HBFDFDDFBFBHDFF@DAHCFAD@@@@@@AFCDCDEDIBGBE@C@CB@D@B@DFHDFDF@FCHABABC@E@CCCAAE@AC@CBGBIFMFCBABBBDFJHRLJJHFFNADABCBCBABC@@BA@A@@@C@C@AAA@AACC@@AAA@ECAAAA@AA@A@CA@@CCAAA@AAABA@A@ABA@ABABADDB@@@B@@@@CH@B@B@@@@DB@@@@B@@BB@@@@BAB@@ABAB@BCB@@@@@@A@@@A@@B@@@@@B@@@B@@ADIBJDDHGLVR^LCB]JEJJLENHLBPORYT@@@@ONOLAf[`JR@R@@GIQAEF@^DF@DGFHLDNABK@EEGFS@CC@CGHBFMHMGWD]N@BADELADADCBABBD@BBFAB@B@DBBDDFBFBDD@BAF@FBF@D@DEDABAD@DBD@DBDBBBDD@F@H@D@BBDFBBBDD@BBBD@F@DBBB@F@FBNJLFFDFFFBD@FADAF@DBDH@@@FFBHDFFDDDDDBD@F@JFDD@DBD@DDFDFDFFBHHHDDBFBHCHCF@DBBFBDDDHBDB"],"encodeOffsets":[[121755,30037]]}},{"type":"Feature","id":"330824","properties":{"name":"开化县","cp":[118.414435,29.136503],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@G@@@C@C@CBABC@ABABABCBA@E@ABAD@DAB@D@D@FAFA@@BA@ABCDEBCBA@CDCBAB@DAB@DAD@B@BA@ABC@CDABABABAD@D@DBD@FBD@BAF@BADAFC@A@@@AACACAAAAAAAACC@A@@@ABABAD@DAB@D@B@BADABAD@BABAD@BA@C@AAAACAAAA@ABA@ADABAHEDADAHEDABAD@DBB@B@DABCBABCBABCDABADABADCDABAD@F@B@@BDBBBFBDDBBD@F@BBD@D@BABABA@ABADAB@F@D@B@BAFCJFHBFBHADAB@BCAE@CCEACCG@CHBL@FAHAD@D@DA@ABE@ABAH@D@DAFBHBHBJ@J@DABAFEDAB@HBD@BA@C@CBAB@FDDBD@JEDC@ABA@C@CAC@ADCJGHGFEBAACCIHGDCFGBCFEFCBCFIBEBEBC@CA@@AA@EBCDGJEDAFAFCAEBABEBC@AE@GACAAAC@ADEBCBCBEDCBEBCAGCCCCCCAAAABAFEDEBEFEDIBCJ@HBD@BABA@GBE@G@C@CACGEACAADECAE@CCAABABA@EBCAACC@ABA@E@CACAACCCACCCEEAECACCAEEACEEC@A@A@C@C@AACEAECCCACE@G@CDEBE@CACACAACCEKAACAGACACACCACEAOKOEKIGCAAACACAEACAAAAEESMECACECE@CCC@AACCAC@CACACACCEGCGACACACAEACAC@KAC@ADCBC@A@CACEAECM@A@CB@DA@A@ACAAACAAEAAAE@ABAB@DCBA@A@@@AEEAAEEGC@@@@A@@A@@A@@A@@@AAG@@CIAAA@GA@@E@@@@@E@EB@@ABABGJ@@@@CD@@C@O@A@E@CAGCGAGEA@@@@@A@@@C@@AA@A@A@AAGEAAA@@A@@ICCCAACCAAACAEA@CKAC@CBABA@AB@DCB@@AB@@A@@@@@@@AAGEEA@AA@@ABA@ABA@@@A@A@@@A@AA@@AAAC@@@@AA@AA@AA@@C@@@@@A@@BABC@A@CBA@A@AAEACAEC@@@AA@A@A@EAE@GBEBCA@@EA@@C@@@@@A@@@@B@@@@@B@@A@@BA@A@AA@@@@A@@AA@@@@AA@@AA@@@@@ABA@@B@@AB@@A@@BAB@BA@@@A@@@A@A@@@@AA@@@AAA@G@CA@@A@A@EF@@AB@@CDAB@@@@A@@@A@@@CC@@@@AAAC@@AA@A@@@A@@@AA@A@A@@@AAACA@AAC@CBE@A@CAEAGCAAC@CAAACAAAE@A@CACC@@ICEAAAE@GAAAA@GBA@AF@D@FBDDDBBHDB@HBBBDFDFHHBBFDBBDBDD@B@BBBBBDD@@@@@B@@AB@@A@@@@B@@@BA@@BA@CBC@A@EAA@@@EBAB@@@BAB@B@B@@@BA@A@A@CAAA@@A@EDA@@@A@@B@D@DADABAFABADEDABADCF@BC@A@A@@BA@CF@@A@A@AAA@A@@@A@AB@@AD@@@@AB@@A@@@@@@@AB@@A@AB@@@@@@A@A@@@@BA@@@AAAA@@A@@@ABA@@@@@AAAA@@A@@@A@@@@BBB@@@@A@@@A@@B@@@@@@A@AAC@C@A@@AA@@@@A@@@@@A@@@@@ABC@C@AA@A@@@@@@D@BA@@@C@@@EBCBCB@@@BA@A@A@@@CFADEHCD@B@BBBB@@@@@@@@@@@B@@@@B@@@@B@@@@B@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@BB@@@@@@@@B@@@@@@@@@@B@@@@@@@@B@@B@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@B@@@@@@@@@@AB@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@AB@@@@@@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@@AA@@@@@@@@A@@@@@@@@A@@@@A@@@@@@@@@@@@AA@@@@@@@@AA@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@A@@@@@@@@@@@A@@A@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@AB@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@A@@@@@@AE@C@A@@C@E@AA@@A@A@C@@@DDBB@B@@BB@BBB@@@@@@@@B@@@@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@@B@@@@A@@@@@@@@B@@@@@@A@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@B@@@@B@@A@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@B@@A@@@@@@@@@@@@@@@AA@@@@@@@@A@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@A@@A@@@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@@ABCDADAFAFAB@D@D@H@D@D@DABAF@DEBABADCDCBCBC@CBC@@B@D@DB@AB@BC@CDABAD@DBB@BB@BBDDDDBBBBBB@@BB@B@@ADAB@B@BBB@F@B@BCDCBABABCBG@ABC@ABABEDCBCBC@EBC@ADABABCBABCF@D@B@DBBBDDFBB@BB@DBF@B@DDB@BB@B@DCBEFC@EDCDABCB@B@BDHBDBB@BBD@F@D@D@B@BBBBBAB@DABBB@D@DCDABCBA@CBABCBC@ABA@ABADBBBDBBBDBDBB@DBF@D@DB@@FBD@B@D@BBB@BD@BB@@@D@B@B@B@B@BBB@DBD@BBBB@@DFDDDB@B@B@BADAB@DADBD@D@B@FBD@B@D@BB@B@DDFBB@BBDBBBFBBBBBBABABAFBD@BBBABA@CBABAB@B@BBF@DBF@F@B@BBDBBBB@BABABA@@B@D@D@FBBAD@BAFA@CDABAB@DBBDBD@D@D@DAFAFAD@LCD@BAD@D@D@DBBBBB@BFDBDDBB@D@BABEBABAD@FAJAFADAB@D@@BFBDBBBD@BAD@B@D@DBDBDDD@FFDBBDD@BBD@D@D@B@DB@B@BAFAFABCDCDEBABAB@BD@FBDBDDDBBBDBBDDD@B@D@D@DDBDDD@@BBBBBDBBBDBD@D@DBDBDBBBBB@BBD@FBF@D@BAFCFADABABBBBDBDBB@BBD@BCDCBEDABGFABCB@BCF@DBBD@DCD@D@B@BBDBDH@DBBBBFJ@BDDDD@B@D@DBDDBDBDBDBBBD@B@D@F@F@DDDBDBHDBBD@B@DABCDABAB@F@DBH@FBDAB@DABABABAD@BBDBD@BBF@D@BCBC@CB@BAD@F@D@BBDBB@D@B@FAHBD@BB@D@D@@@FAF@D@J@F@HBD@F@D@DABADAD@DAF@DADABAD@DAF@BCD@DBB@B@D@BAF@@@D@BBBBDFBB@D@D@D@D@FBD@D@D@BCBABEBCBADCBCDCDAB@DABA@A@CB@"],"encodeOffsets":[[121186,30184]]}},{"type":"Feature","id":"330881","properties":{"name":"江山市","cp":[118.627879,28.734674],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@B@@@B@@@@AA@@A@@@@@@@@B@@@@@BB@B@@@@B@@@@A@@@@@@BA@@@@@@BA@@B@@@BBA@@@A@@B@@@@@@@@@@BAB@@AB@@@B@@@@@@@@BA@@B@@@@@@@@BA@@@@B@@AF@@@@@@@@B@@@@@@@BC@@@A@@@A@@BA@@@@@@B@@B@B@BADA@@BA@@@@@@@AB@@@BA@@@@B@@@@AA@@AB@D@BAB@BB@@@@@B@F@B@BBB@@B@@@@ABC@C@CBA@@B@@@B@BA@A@@BA@@@A@CBABAB@B@@@BBB@BB@ABAB@@@@@@BB@@@BABA@A@@B@BAB@B@@@B@@@@B@@@@@@B@BBB@BB@@@DAF@@@@@@@@BBB@B@@ABA@@B@@@D@@@@BB@B@@ABA@@B@@B@B@BDB@@@BAB@B@@@BB@@@B@@@@@@B@@@B@@@@@@@@@@B@@@@@@AB@@@@A@@@@A@@@@@@@@@@@@A@@@AB@@@@@B@B@B@BAB@B@@@@BD@@@@AB@@A@@@@@CCC@A@AB@@@BB@@@@B@@AB@B@BFH@@@@A@A@@BA@@B@D@@BBDBDB@@@@B@@A@@@@@AAAA@@A@@@@B@DB@@B@BA@B@@B@@@@@A@@B@@AB@@B@@@@@@@B@@A@@@@BB@@@@@BB@@@@@@@@@@BB@A@@@A@@B@@B@@@BB@@@D@@@B@@B@@A@@@@@@@BB@@@@A@@@@@@@@@B@@@B@@@AA@@@@BB@@@@@@@B@@@@@BA@@B@@D@FBD@@@@B@@@BB@B@@AB@@A@A@@@AB@@@BA@@BA@@B@@@B@@@@@@@BA@A@@B@@@B@BCBAF@B@B@@@BA@@@@BBB@@B@@@ABA@@@@BB@BBD@B@BBDBB@BB@@BBA@@@A@@@@@A@@@C@@B@@@@DBBB@B@@@D@BADBBBD@@@BAB@B@@BB@@@B@@A@AB@@@F@D@B@@D@BB@@ADABEDA@C@ECA@@BCDA@C@@B@@BBBBAB@@EB@@@@@D@@@BB@@B@@FAB@@@@B@BA@CDCBCB@B@BA@@@CBA@AA@@A@@@@@@@ABCF@@AB@@A@CAE@A@@ACAA@A@@BA@@@BDADA@@BB@B@@B@@@D@DB@@BB@D@DBB@BB@@B@BB@@@B@BA@@@@@@B@@@B@@@B@@@@@B@@@B@@@@AB@@ACA@@@ABAB@@AB@@@@BB@@@@@@@BB@@@@@@@@@B@BAB@BA@@@@B@@@@B@@@@AB@@A@@@@@@B@@@@@B@BA@@@ABA@@@@B@@AB@@@@@@AAA@A@@@@@A@@@@BB@@@@@@B@@@@A@@@@@@@@B@@BA@BB@@B@@@@B@@@@@D@@@@@@@@@B@B@@@B@B@@B@@@@AB@@@BA@@@@@@AA@@BA@@@CBA@@B@@@@A@A@@@@B@D@B@@BB@@@@@BA@C@ABCB@@@@B@@@@@B@DBB@B@@@@@@BB@AD@@@@B@@@@@@B@@A@@@@@@B@@B@@@B@B@@BB@@BA@@B@@@@CA@@@@@@@@@@@@AB@@@@@@@B@@@@@@@@A@@@@@AAA@A@@@AB@@@BB@@@BB@@@@@@A@@@@@A@@@AA@C@AA@@@AB@@@@BB@B@BAD@B@B@@@@A@@@@@AB@@@BB@@B@@@B@DB@@BA@@@@@@@@@A@@@@@@@@B@@BB@@@BA@@B@@@@B@@B@@@@@@@B@@B@@@BAB@@BB@BB@BBBB@@@B@@@@@B@@B@DB@@@B@@@@BBB@@A@@@@@@@@A@@A@@B@@@@@BB@@@@@@B@@@B@B@@@BBB@B@B@BBF@@B@@@DADA@@B@@@BBBBB@BB@@@@@@BABAD@B@DBB@BB@@B@B@B@@ABA@A@CBA@ADABAB@B@B@DBDBBBBBD@FAF@DABADAB@B@BBB@@@@@@@@A@@@ABADADCBAH@@@B@B@@BA@@@@B@@@@@@BBB@@@@@BA@C@ABEAAAE@@@ABCDAFAB@@@B@@@@@BAB@@@B@@@BB@@@@B@D@@@@@@DAF@F@BBDDDBB@BDDDFDD@@@B@@@B@@@BBDBB@@BF@B@BFDDB@BA@AB@@BB@@@@B@@BBBBDB@@@BB@D@@@DBB@@B@BB@@@@@B@B@@BB@@@DABAD@D@@AD@BBB@BB@B@D@D@BBB@@@DBD@D@@@F@BB@@D@@@B@BA@ABCBC@A@@@@@A@@BA@@BA@AB@B@@AB@@BB@DBBDDD@BBD@B@@@BA@@B@@BB@@@@@@@BBBB@DBB@DBB@B@BABAB@BABCBA@@@@@@D@B@DBBDD@@B@@@@@@B@@BB@@@DA@@B@D@B@BBBBDD@B@DAB@@BB@@@BB@B@B@B@BABABABADAD@D@D@BAB@B@B@DA@@D@@@D@@@FBFBD@JBFDD@DDDB@@BBBD@@BB@@@B@@BB@@@B@BA@ABABABCDABAB@B@BBB@@@@B@DB@BB@@@@B@@B@@@@@B@@@B@B@B@BABAB@B@@AB@@@DAFA@@FEDAD@@@@@J@@@B@DBFBBBFDDBB@@@DBDBD@B@B@B@@@B@@@FB@@D@D@BBD@@@BB@@B@@@BB@@B@BBB@@BBBAB@BAB@B@@BDBD@@DDBBBBBBBBB@DA@AB@B@B@B@B@B@B@BBB@@@B@DADC@@DAB@B@B@BA@@B@@ABEDEBE@CBA@ADADCDCBCBCDCBAFCBCFEDIBGBE@@@CBAACBA@ABEBAFKHGBE@A@A@AAC@CAA@CB@DCDCBCBCBCBCB@FABABC@CBCDEBCDEDEDEB@@CBEBEBABAD@F@D@BBB@BA@ABC@CB@BI@A@C@@AC@CAE@GAC@A@ABABC@C@AACBC@A@A@ACG@A@A@A@C@@BCDCBC@@BA@@@@BCDABA@A@A@EAC@AEE@ACKAKBCDCFMBGBEBE@C@C@AB@FAB@D@DADAD@FCFADA@ABAA@@A@ABA@A@A@@AABEBC@A@A@A@@AC@AEGCAAAECCCAC@C@C@CBABCBE@C@@@A@CAEACAEAAEE@@ACAAAA@AAACAAEAE@C@A@A@C@A@CACAC@C@A@CBEBEDIBE@@BEBE@@@C@@@@BCA@@@A@A@A@AAC@AAAAA@AAGAAA@@@@AA@@A@@A@@A@@@@A@@AA@@@A@@@AAA@AAC@@AAA@A@A@@@A@@BA@@BA@@BAAA@AB@@@BABA@@BA@@@A@@AA@A@A@@B@AA@@@A@@@ABA@ABC@@@@@C@@@A@@@AA@@AA@A@@@@@A@@@AA@@A@@AA@AA@@@B@AA@@AA@A@@@A@@@@@@@@A@@A@@@@AC@@AA@@@@AAA@@@A@@@@@AAA@AA@@A@A@@A@AA@@A@AAA@A@@A@AA@@A@@@A@A@A@A@@@@@AA@@@A@A@@@AAAAA@@@A@A@@@@@C@@BC@@B@B@@@BA@@@AB@AABA@A@A@@BAB@@A@@@@@@ACAA@@@A@@@A@@@@@@CE@AAC@A@C@G@@@A@AB@@@HCBC@A@@AG@EAC@AACAE@C@@@@@@AC@@AA@@AA@A@A@@@A@AB@@@BABAB@@A@@AAAACA@AAA@@@C@E@C@E@A@ABAB@B@B@B@DBB@BBBD@B@@@BB@@@@@B@@@B@DA@@BA@@D@D@DBFBHBB@B@BA@@B@AA@AAAAA@@BA@AB@DABA@A@AAG@A@CACCCCCC@@AACAEAECCACAAEKAE@A@A@ADCBA@A@@@@@C@@CGCCGKA@AECCAACC@@CEACAAA@A@@@A@@BA@A@@@AAAAEEC@A@CAGECAAC@A@G@ECA@AAA@A@ADC@@@AA@@A@@EGEGGUKQCGIKCCEAE@E@C@CBEBADABCBAB@@C@A@@@GCAAA@C@A@C@A@AC@ACCCG@AAAACA@A@A@A@A@CAAAEEC@C@E@EBE@C@CA@@CAAAA@A@C@ABCDAB@F@FDD@BBD@DABADCBEFCFADA@ABCBC@A@C@EAC@A@EBCBEAICE@A@C@GDCDC@A@@A@C@E@G@CAAC@EAC@GAEACAG@GAG@C@CBABCDCFCFA@@@@@@@@BA@A@A@A@@A@AAAAAA@A@A@AAAC@AAIACAC@@BADAB@@CB@@CB@@@@@B@@@B@@@BAAA@A@@AA@@@@BA@@B@@@B@@B@@D@@@@A@@ACAA@@@A@@@A@A@@A@A@CAEAACAAAC@AAA@@ABA@EDCDGFABAA@@AA@@CAABA@@BC@C@A@CA@@AA@@AAA@ABA@@BA@C@@@@BA@@BA@A@AAABA@ABAB@@A@ADAB@@CAA@A@@B@B@B@@@BDDBBDB@B@B@BA@A@C@@@E@E@@@A@@@@@@@AB@@@@B@@BBBBB@@@BBBAB@@ABA@A@A@A@@A@@@@A@@@@@@B@B@@AB@FAFA@@BABAB@B@@@@BDBFBB@B@B@@B@FDDBLDDBHDLFBB@@B@@B@@B@@@B@@@@@B@@@BBBDBBHHDFBD@BABBBBBF@BBDBBBB@DE@@B@@BADBDBDB@BB@BBD@BABA@ADADA@A@@@A@@@@@@AB@@A@@@A@AAC@A@@@AA@AB@@BB@B@@A@A@@@@A@A@@@AAA@AA@@@@@@B@B@BBB@@@@A@@@A@@@@@AAC@A@@@A@@@@BB@B@BBFBDDBB@@@@@@A@AB@@@A@@@@AAAA@@@@A@AB@B@@B@@DBD@DAF@@EB@@@FA@@J@F@D@BABC@CBAB@B@JAFITCLIDEBCBA@CDADAB@DAFABABA@C@CAAAA@@B@@BD@BBBB@DBBDD@@B@@@B@D@@BD@@JDB@BBB@@ADAB@B@@BA@@B@BB@B@B@@@B@B@B@@B@@@BCBA@@@A@AAA@A@@BB@BDBFB@BBD@@@BFDF@D@B@@BB@B@DBFBB@BDFDFAB@BABAF@D@@@@B@B@@ABAB@BABA@@B@@@@D@BCDCD@@@BBBB@@@@@B@@@B@@@@BAB@@@@BB@@@AB@@BB@@@@B@@@@BDBBB@@@D@B@B@@@B@B@@@BD@B@B@@@@A@A@A@A@@@A@@@@B@B@B@@B@@B@@CD@@A@@@AD@@@@@@A@@@A@@@@@@B@B@@BB@@@@@B@@A@@@@@ACAAA@@BA@A@A@@@A@A@A@@@@@@@@B@@AB@@A@@@@A@AA@A@@@@@A@@@@A@@BA@@@@CA@@AACA@@CBAB@BCF@BAB@B@@A@@@A@@@@@A@ABABADADABC@ABAB@@A@A@@A@@A@A@A@@@AA@@ABA@@@A@@@@@AA@@A@CBAB@@@@AAAA@BABCBABCDA@@BDBBDBBB@BBB@B@BABA@@@A@@B@BA@B@@@@AB@@B@@@F@BA@@B@@B@@@B@@B@@B@@B@@@B@@@@BB@@@BB@A@@@@@@@@@@@@@@@@@A@@B@@@BA@@B@@@@@@@@B@B@@@@AB@@@B@@@@BBB@D@@@@B@B@@BBDDB@@BAD@@AB@@CBCBAD@BAB@@@@A@@ACCAAAA@AC@@AA@@BA@@@@@@@DB@B@@@@@B@@@B@BA@A@ABA@@@@B"],"encodeOffsets":[[121270,29208]]}}],"UTF8Encoding":true});}));