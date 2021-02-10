/*
QuanX:       
公众号:捷径指令大全
免登录，修复看直播退出登录
下载地址:tanhua.app

[rewrite_local]
#探花直播 by:Luke
^https:\/\/1008610010\.laikanshu\.top\/Member\/getUserInfo url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/tanhua.js

[mitm]
1008610010.laikanshu.top

*/


var obj = JSON.parse($response.body);
obj = {
  "status": "200",
  "msg": "返回成功",
  "data": {
    "member_name": "捷径指令大全",
    "mobile": "13588888888",
    "head_pic": "http:\/\/999.junc.vip\/uploads\/admin\/202010\/5f9b91e0a6fe0.jpg",
    "parent_id": 738,
    "user_viptime": "2090-02-05",
    "status": 1,
    "is_vip": 1
  }
};

$done({body: JSON.stringify(obj)});

