
/*
#闪萌表情 公众号：捷径指令大全  by：Luke
^https:\/\/hi\.weshine\.im\/v3.0\/account\/profile url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/shanmeng.js
[mitm]
hostname = hi.weshine.im
*/

var obj = JSON.parse($response.body);
obj = {
  "meta" : {
    "status" : 200,
    "msg" : "success"
  },
  "data" : {
    "qq_value" : "",
    "expire_day" : 99999,
    "birthday" : "0000-00-00",
    "wechat" : "",
    "make_num" : 0,
    "verify_status" : "0",
    "nickname" : "公众号:捷径指令大全",
    "reg_time" : 1625503282,
    "album_count" : 0,
    "is_vip" : 1,
    "gender" : 1,
    "uid" : "756ca43e-ff26-55c6-6b3f-043cfc23a290",
    "email" : "",
    "collect_num" : 0,
    "phone_value" : "",
    "author_name" : "",
    "avatar" : "https://dl5.weshineapp.com/profile/avatar/20210706/1625504642_60e33b826142f_2764.jpg",
    "weibo" : "",
    "verify_message" : "",
    "age" : 0,
    "upload_num" : 0,
    "word_num" : 0,
    "vip_expiration_time" : "2090-01-01",
    "weixin_value" : "o46GcjnFhaDPGhJpiK3DV3s_ntXQ",
    "introduce" : "关注公众号：捷径指令大全"
  }
}
;


$done({body: JSON.stringify(obj)});
