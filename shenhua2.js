
/*
[rewrite_local]
#神话直播  下载地址:https://shzb.live/   邀请码:888888
#公众号:捷径指令大全  by:Luke
^https:\/\/shapi\.ysqhds\.com\/api\/video\/config url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/shenhua.js
[mitm]
shapi.ysqhds.com
*/

let obj = JSON.parse($response.body);
obj = {
  "msg": "成功",
  "code": 200,
  "data": "3vwf3JO69YsI9IHloiwkgoE0EOFzE9MeyaVqWrkhcBTc+RSodswJUoKq1YSp6FXoJVSvPsHGJ87xQs3o2I01oFzjgeqk+wRCOMkvZ1JGUMSu2nSb7hLoLGFlN7u6+aK79Np5cwgLat/1ud7Gvn4/YmkLsEXq0WB+Fh7pIaxrQ1uH3oUFimH5JDom322L1NFxcAHvscL6oQ/k8p58PGte5eqU3VdFooh/PbEFqV53rAl/636mrBUbhuDlPY7HxTKyjx/ut//gFnMkBBpuOlzcPdeFaQhqnYKGBVdzpfmaFW0=",
};

$done({body: JSON.stringify(obj)});
