/*
[rewrite_local]
#神话直播  下载地址:https://shzb.live/   邀请码:888888
#公众号:捷径指令大全  by:Luke
^https:\/\/shapi\.ysqhds\.com\/api\/video\/user\/data url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/shenhua.js

[mitm]
shapi.ysqhds.com


*/

let obj = JSON.parse($response.body);
obj = {
  "msg": "成功",
  "code": 200,
  "data": "1lcExD4vMBIgBbl9yeDgINn44L/SYLr3iq2uwji+eL7aZgqPO1nh8P65JkbV2CWSYLkT4w+oR3hCRuQDB7g9np41LTwQEKUAvU5WP0oKGeFSwAjN/BTM7ZtKT5HGTJtqBPj9jWT5G4eVj6+1CGCbBFivonMI64xE4lxqCj16PY8tzkTiVREsaNeFP6uKUR95x5LBpkMupPJiuSD7sdQWSNn44L/SYLr3iq2uwji+eL6I7qXyeX4Hyx3ZVtGln8XR",
};

$done({body: JSON.stringify(obj)});
