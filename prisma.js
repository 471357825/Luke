/*

Quantumult X脚本:
Prima解锁订购
公众号:捷径指令大全

[Rewrite_local]
# Prisma [p图](by:十 °)
^ Https？: \/\/Appapi \.神经鞘瘤 \。Com \/收据 \/ios \/状态 \/pisma \/。* Url脚本-响应-体pisma。Js

[手套]
Hostname = appapi。神经炎.Com，

*/
Var obj = JSON。Parse ($ response。身体);
Obj = {
"状态": "ok"，
"Is_valid": true，
"Expiration_date": "2050-12-28T17:11:00Z"，
"Is_trial": true，
"Processing_count": 5，
"Is_introductory_used": true，
"Product_id": ""，
"Promotional_offer_id": ""，
"Is_grace_period": false，
"Auto_recenabled": true，
“Is_in_billing_retry_period”: true，
"Subscription_type": "年度"，
“平台”: “”
};

$ Done ({body: JSONStringify (obj)});
