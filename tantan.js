/*
公众号：捷径指令大全

[rewrite_local]
#探探网页版 by:Luke
#观看地址 http://fnidf.buzz?uid=dvraowx4 
#如打不开请用这个地址 http://iykhb.xyz/My?userId=1406787851020423168
^http:\/\/(.+)\/tantan\/mobile\/tantan\/user\/login url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/tantan.js
^http:\/\/(.+)\/tantan\/mobile\/tantan\/user\/addNm url response-body "code":\d+ response-body "code":1
[mitm]
*.*

*/


var obj = JSON.parse($response.body);
    obj.data.frequency = 99999,
    obj.data.name = "捷径指令大全",
    obj.data.isVip = "1",
    obj.data.maturityDate=4000000000000,
    obj.data.maturityDates = "2096-10-02 15:06:40",
$done({body: JSON.stringify(obj)});
