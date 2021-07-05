/*

#2496音乐 公众号：捷径指令大全  by：Luke
^http:\/\/api_2496\.kuwo\.cn\/front\/user\/vipstatus url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/2496.js

[mitm]
hostname = api_2496.kuwo.cn
*/

var obj = JSON.parse($response.body);
obj.data.vipstatus = 1;
obj.data.expiration_time = "2090-01-01";


$done({body: JSON.stringify(obj)}); 
