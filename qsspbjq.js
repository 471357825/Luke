/*
清爽视频编辑器
公众号：捷径指令大全

QuanX:
#清爽视频编辑器 公众号：捷径指令大全 by:luke       
^http:\/\/videoeditor\.yiyongcad\.com\/api\/v4\/virtualactregister url script-response-body qsspbjq.js

[Mitm]
videoeditor.yiyongcad.com

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/v4/virtualactregister';


if (url.indexOf(vip) != -1) {
   obj["userinfo"]["vip"] = [{
      "id": 14872224,
      "auth_type": 1,
      "auth_value": 9876543210
    }];
   obj["vip_valid"] = 1;
   obj["vip_deadline"] = 9876543210;

   body = JSON.stringify(obj);
   }
   
$done({body});
