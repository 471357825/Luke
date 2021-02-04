/*
QuanX:       
公众号:捷径指令大全

[rewrite_local]
#探花直播 by:Luke
^https:\/\/1008610010\.laikanshu\.top\/Member\/getUserInfo url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/tanhua.js

[mitm]
1008610010.laikanshu.top

*/


let obj = JSON.parse($response.body);
obj.data.user_viptime = "2090-02-05",
obj.data.is_vip = 1,
 
$done({body: JSON.stringify(obj)});
