
/*

[rewrite_local]
#如雪直播  下载地址：
#公众号：捷径指令大全 byLuke
^https:\/\/xw-lv\.hengmanjiankang\.cn\/api\/publi\/(.+) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/ruxue.js

[MitM]
xw-lv.hengmanjiankang.cn
*/


var obj = JSON.parse($response.body);
for (var i = 0; i < obj.data.length; i++) {
       obj.data[i].info.type = "0";
   }


$done({body: JSON.stringify(obj)});
