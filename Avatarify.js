/*
QuanX:       
公众号:捷径指令大全
直接使用无需恢复内购

[rewrite_local]
#Avatarify (蚂蚁呀嘿特效)by:Luke
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/Avatarify.js
[mitm]
buy.itunes.apple.com
*/


var obj = JSON.parse($response.body);
obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1512669147,
    "app_item_id": 1512669147,
    "bundle_id": "com.v43years.avatarify2",
    "application_version": "1",
    "download_id": 500145575618907348,
    "version_external_identifier": 840472430,
    "receipt_creation_date": "2021-02-25 15:38:11 Etc/GMT",
    "receipt_creation_date_ms": "1614267491000",
    "receipt_creation_date_pst": "2021-02-25 07:38:11 America/Los_Angeles",
    "request_date": "2021-02-25 15:38:21 Etc/GMT",
    "request_date_ms": "1614267501130",
    "request_date_pst": "2021-02-25 07:38:21 America/Los_Angeles",
    "original_purchase_date": "2021-02-25 15:04:14 Etc/GMT",
    "original_purchase_date_ms": "1614265454000",
    "original_purchase_date_pst": "2021-02-25 07:04:14 America/Los_Angeles",
    "original_application_version": "1",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.v43years.avatarify2.yearlyInApp",
      "transaction_id": "70000969474764",
      "original_transaction_id": "70000969474764",
      "purchase_date": "2021-02-25 15:38:10 Etc/GMT",
      "purchase_date_ms": "1614267490000",
      "purchase_date_pst": "2021-02-25 07:38:10 America/Los_Angeles",
      "original_purchase_date": "2021-02-25 15:38:11 Etc/GMT",
      "original_purchase_date_ms": "1614267491000",
      "original_purchase_date_pst": "2021-02-25 07:38:11 America/Los_Angeles",
      "expires_date": "2090-03-04 15:38:10 Etc/GMT",
      "expires_date_ms": "3792296290000",
      "expires_date_pst": "2090-03-04 07:38:10 America/Los_Angeles",
      "web_order_line_item_id": "70000390376262",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.v43years.avatarify2.yearlyInApp",
    "transaction_id": "70000969474764",
    "original_transaction_id": "70000969474764",
    "purchase_date": "2021-02-25 15:38:10 Etc/GMT",
    "purchase_date_ms": "1614267490000",
    "purchase_date_pst": "2021-02-25 07:38:10 America/Los_Angeles",
    "original_purchase_date": "2021-02-25 15:38:11 Etc/GMT",
    "original_purchase_date_ms": "1614267491000",
    "original_purchase_date_pst": "2021-02-25 07:38:11 America/Los_Angeles",
    "expires_date": "2090-03-04 15:38:10 Etc/GMT",
    "expires_date_ms": "3792296290000",
    "expires_date_pst": "2090-03-04 07:38:10 America/Los_Angeles",
    "web_order_line_item_id": "70000390376262",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20714225"
  }],
  "latest_receipt": "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",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.v43years.avatarify2.yearlyInApp",
    "original_transaction_id": "70000969474764",
    "product_id": "com.v43years.avatarify2.yearlyInApp",
    "auto_renew_status": "1"
  }],
  "status": 0
};

$done({body: JSON.stringify(obj)});
