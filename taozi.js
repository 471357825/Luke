/*
桃子视频
公众号：捷径指令大全

QuanX:
#桃子视频 (vip去广告可下载)by:Luke
^http:\/\/api\..+\.xyz\/fast-cloud\/(user\/info|ads\/fetch|cms\/vod\/download\/.+) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/taozi.js

hostname: api.*.xyz
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user/info';
const ad = '/ads/fetch';
const down = '/cms/vod/download';


if (url.indexOf(vip) != -1) {
   obj["result"]["vipType"] = -1;
   obj["result"]["vipValidDate"] = 9876543210000;
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(ad) != -1) {
obj["data"]= null;
     body = JSON.stringify(obj);
     }

if (url.indexOf(down) != -1) {
obj["code"] = "0000";
   body = JSON.stringify(obj);
}

$done({body});
