/*

Quantumult X 脚本:
解锁迅捷六款App：指间文字识别，捷速录音转文字，万能pdf转换器，迅捷文字识别，录音转文字助手，文字转语音助手，迅捷PDF转换器，迅捷论文查重。

[rewrite_local]
#公众号:捷径指令大全
# 迅捷旗下app解锁  by:Luke
^https:\/\/(.+)\/api\/v\d\/* url script-response-body https://raw.githubusercontent.com/471357825/MyActions/main/xunjie.js

[mitm]
hostname = *.*.*,

*/

let obj = JSON.parse($response.body);
obj.userinfo.vip = [{
      "id": 00000001,
      "auth_type": 1,
      "auth_value": 4102469002
    }];

$done({body: JSON.stringify(obj)});
