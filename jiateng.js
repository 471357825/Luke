/*
[rewrite_local]
#加藤视频  公众号：捷径指令大全  by:Luke
^https:\/\/api\.(.+)\.cc\/shorter\/(video\/theylikeVideo|video\/hot\/list|home\/list|user\/getUser|user\/homePage|user\/homePageExt|resource\/getWindowNotice) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/jiateng.js
下载地址:
https://www.sanminnongye.com/?invitationCode=YMG82M
[MITM]
api.*.cc
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

body=body.replace(/userVip":\d/g,'userVip":1').replace(/expiredTime":\d+/g,'expiredTime":9876543210000').replace(/isVip":\d/g,'isVip":0').replace(/nickname":.+?,/g,'vip_end_date":"捷径指令大全",').replace(/isCharge":\d/g,'isCharge":0').replace(/content":.+?,/g,'content":"关注微信公众号：捷径指令大全",');

$done({body});
