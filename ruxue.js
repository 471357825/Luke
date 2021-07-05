
/*

[rewrite_local]
#如雪直播  下载地址：
#公众号：捷径指令大全 byLuke
^https:\/\/xw-lv\.hengmanjiankang\.cn\/api\/publi\/(.+)

[MitM]
xw-lv.hengmanjiankang.cn
*/


var obj = JSON.parse($response.body);
obj.data.info.type = "0";

$done({body: JSON.stringify(obj)});
