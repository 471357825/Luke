/*
[rewrite_local]

#辣椒视频  公众号：捷径指令大全
#下载地址  by：Luke
http://wqet.mgfufg.live/?code=K1T36F
^https:\/\/api\.zzyyhyy\.cn\/api\/(reg|play) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/lajiao.js


[MitM]
api.zzyyhyy.cn



*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/reg';
const video = '/api/play';


if (url.indexOf(vip) != -1) {
obj.data.member.nick_name = "捷径指令大全";
obj.data.member.is_vip = 1;
obj.data.member.vip_date = 9999;
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(video) != -1) {
obj.data.openDeadline = 0;
     body = JSON.stringify(obj);
     }


$done({body});
