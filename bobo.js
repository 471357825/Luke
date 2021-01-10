/*
波波视频
公众号：捷径指令大全

QuanX:
#波波视频       
http:\/\/api\.wscdn\.vip\/index\/(User\/ucenter|Get\/videoInfo) url script-response-body bobo.js

hostname: api.wscdn.vip
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/User/ucenter';
const video = '/Get/videoInfo';


if (url.indexOf(vip) != -1) {
   obj["data"]["isVip"] = 1;
   obj["data"]["isVip_forever"] = 1;
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(video) != -1) {
obj["data"]["buyStatus"] = 1;
     body = JSON.stringify(obj);
     }


$done({body});
