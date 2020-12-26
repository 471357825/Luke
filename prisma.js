/*

Quantumult X 脚本:
prisma 解锁订阅
公众号:捷径指令大全

[rewrite_local]
#prisma[p图](by:十°)
^https?:\/\/appapi\.neuralprisma\.com\/receipt\/ios\/status\/prisma\/.* url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/prisma.js

[mitm]
hostname = appapi.neuralprisma.com,

*/
var obj = JSON.parse($response.body);
obj = {
  "status": "ok",
  "is_valid": true,
  "expiration_date": "2050-12-28T17:11:00Z",
  "is_trial": true,
  "processing_count": 5,
  "is_introductory_used": true,
  "product_id": "",
  "promotional_offer_id": "",
  "is_grace_period": false,
  "auto_renew_enabled": true,
  "is_in_billing_retry_period": true,
  "subscription_type": "annual",
  "platform": ""
};

$done({body: JSON.stringify(obj)});
