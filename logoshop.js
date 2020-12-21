/*

Quantumult X 脚本:
Logo shop 解锁pro
公众号:捷径指令大全

[rewrite_local]
# logo shop(by:十°)

^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/.* url script-response-body logoshop.js

[mitm]
hostname = api.revenuecat.com,

*/
var obj = JSON.parse($response.body);
obj = {
  "request_date": "2020-06-05T11:54:41Z",
  "request_date_ms": 1591358081473,
  "subscriber": {
    "entitlements": {
      "premium": {
        "expires_date": "2090-11-11T11:11:11Z",
        "product_identifier": "com.circles.fin.premium.yearly",
        "purchase_date": "2020-02-11T07:52:54Z"
      }
    },
    "first_seen": "2020-05-29T07:59:41Z",
    "last_seen": "2020-06-05T11:46:28Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
    "original_application_version": "5",
    "original_purchase_date": "2020-05-29T07:47:32Z",
    "other_purchases": {},
    "subscriptions": {
      "com.circles.fin.premium.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2090-11-11T11:11:11Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-11-11T07:52:55Z",
        "period_type": "normal",
        "purchase_date": "2020-11-11T07:52:54Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body: JSON.stringify(obj)});
