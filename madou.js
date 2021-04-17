/*

麻豆短视频

下载地址：
https://mdsv01.com/?pc=157a3f6f-1440-4d8f-bf83-112cfc3e0fb1


公众号：捷径指令大全

QuanX:
#麻豆短视频 by:Luke

[rewrite_local]
^https:\/\/mda\.+\.site\/api\/(auth\/login|mine\/myHome) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/madou.js

[MitM]
mda..+.site

*/


let obj = JSON.parse($response.body);
obj.msg.user.vipLevel = "shallowCard";
obj.msg.user.vipExpire = 9876543210000;
obj.msg.user.name = "捷径指令大全";

$done({body: JSON.stringify(obj)});
