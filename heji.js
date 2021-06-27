
[rewrite_local]
#探探网页版 by:Luke
#观看地址 http://fnidf.buzz?uid=dvraowx4 
#如打不开请用这个地址 http://iykhb.xyz/My?userId=1406787851020423168
^http:\/\/(.+)\.(+)\/tantan\/mobile\/tantan\/user\/login url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/tantan.js
^http:\/\/(.+)\.(+)\/tantan\/mobile\/tantan\/user\/addNm url response-body "code":\d+ response-body "code":1
[mitm]
*.*


#嘿嘿连载  公众号：捷径指令大全
#下载地址  by：Luke
https://www.heihei3.app  邀请码∶80y7z
^https:\/\/api.(.+).com\/user\/(info|center) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/heihei.js
^https:\/\/api\.(.+).app\/api\/novel\/chapter\/list url response-body "is_free":\d+ response-body "is_free":1
[MitM]
api.*.com,api.*.app


#辣椒视频  公众号：捷径指令大全
#下载地址  by：Luke
http://wqet.mgfufg.live/?code=K1T36F
^https:\/\/api\.zzyyhyy\.cn\/api\/(reg|play) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/lajiao.js
[MitM]
api.zzyyhyy.cn


#麻豆短视频 by:Luke
^https:\/\/mda\..+\.site\/api\/(auth\/login|mine\/myHome) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/madou.js
^https:\/\/mda\..+\.site\/api\/operation\/video\/buy url response-body "code":\d+ response-body "code":200
^https:\/\/mda\..+\.site\/api\/auth\/startupAdv url reject-200
[MitM]
mda.*.site

#探花直播 by:Luke
^https:\/\/1008610010\.laikanshu\.top\/Member\/getUserInfo url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/tanhua.js
[mitm]
1008610010.laikanshu.top

#Plane vpn 公众号：捷径指令大全 by:Luke
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/plane.js
[mitm]
buy.itunes.apple.com

#prisma[p图]公众号：捷径指令大全 by:Luke
^https?:\/\/appapi\.neuralprisma\.com\/receipt\/ios\/status\/prisma\/.* url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/prisma.js
[mitm]
hostname = appapi.neuralprisma.com,

# logo shop(by:十°)
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/.* url script-response-body logoshop.js
[mitm]
hostname = api.revenuecat.com,


#清爽视频编辑器 公众号：捷径指令大全 by:luke       
^http:\/\/videoeditor\.yiyongcad\.com\/api\/v4\/virtualactregister url script-response-body qsspbjq.js
[Mitm]
videoeditor.yiyongcad.com

公众号:捷径指令大全
操作方法:进去订阅界面点击订阅然后取消支付即可。
如果订购信息刷新不出来就先打开app等价格出来再开圈x
用完后请关闭这条规则，以免对其他内购规则产生影响。
[rewrite_local]
#克拉壁纸 by:Luke
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/klbz.js
[mitm]
buy.itunes.apple.com



