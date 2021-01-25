/*
水印精灵
公众号：捷径指令大全

QuanX:
#水印精灵 by：luke
https:\/\/api1\.dobenge\.cn\/api\/user\/getuserinfo url script-response-body syjl.js

MITM = api1.dobenge.cn
*/
let obj = JSON.parse($response.body);
obj.data["is_vip"] = 1;
obj.data["vip_end_time"] = "宇宙爆炸";
$done({body: JSON.stringify(obj)});
