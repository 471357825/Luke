
/*
#闪萌表情 公众号：捷径指令大全  by：Luke
^https:\/\/hi\.weshine\.im\/v3.0\/account\/profile
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
    "expire_day" : 9999,
    "birthday" : "0000-00-00",
    "wechat" : "",
    "make_num" : 0,
    "verify_status" : "0",
    "nickname" : "捷径指令大全",
    "reg_time" : 1625503282,
    "album_count" : 0,
    "is_vip" : 1,
    "gender" : 1,
    "uid" : "756ca43e-ff26-55c6-6b3f-043cfc23a290",
    "email" : "",
    "collect_num" : 0,
    "phone_value" : "",
    "author_name" : "",
    "avatar" : "https://thirdwx.qlogo.cn/mmopen/vi_32/bqRNOkjcgbjHjmKEodNcmg9PyJ1oHia7E0uARLIF7RFSP1DicBoLm90uEucHWue1OxYib9GmFLowhFBgNG91z7mVg/132",
    "weibo" : "",
    "verify_message" : "",
    "age" : 0,
    "upload_num" : 0,
    "word_num" : 0,
    "vip_expiration_time" : "2090-01-01",
    "weixin_value" : "o46GcjnFhaDPGhJpiK3DV3s_ntXQ",
    "introduce" : ""
  }
}
;


$done({body: JSON.stringify(obj)});
