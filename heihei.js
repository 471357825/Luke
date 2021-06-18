/*
[rewrite_local]

#嘿嘿连载  公众号：捷径指令大全
#下载地址  by：Luke
https://www.heihei3.app  邀请码∶80y7z


^https:\/\/api.(.+).com\/user\/(info|center) url script-response-body https://raw.githubusercontent.com/471357825/Luke/main/heihei.js
^https:\/\/api\.(.+).app\/api\/novel\/chapter\/list url response-body "is_free":\d+ response-body "is_free":1

[MitM]
api.*.com,api.*.app



*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/user/info';
const vip2 = '/user/center';


if (url.indexOf(vip) != -1) {
obj.data = "lvXFjQmYmVLFdleZVVXL17PCs9oeGCjr+AjC284jagABNq0y1WlDWgH7lXXL+RiLXmiFMsdhT1FSHqLIODP0kJQgSafCVKOY93V8d9ordtjowgRCYXTc8eUn+MtU/1Y4r2eH4AYgs1sigGazSL6f5WCKJqAQHHZCXAAaetNfv/EvscbycD0nVGR82xBe/K+uaZfrVIe2RTaVK5g20APUthEW2Pbwolho/eLXMeeh8hfZn1SbMYOAhOjuIOLhyF6ZJfqSzUziaZ9j4+0m5aph2uaiTgnXs51rXu6vTSSJGyXhSgpqb9B6kuf2V8Pu+a42K9VnAnpxT6kwOhqi0H8+ndgCfMl8NDBwlT8J6LvW7EXu4c08TtBSxB1McQHZULCLdORw2LKgpt1nmcBokh27s0pRfzZPIFsQ5/5/Np3jZMV0wxXYCpZVGl4hfQxloI4fQQW/S9aJuu1+SAJqoRX2WxzQLGtv65tC1nMLcuglNG/6hlO+UozRJe6gt3l9WcEJDvl1o4ZtxBU3G0ntY7qBYsW7zFwVSaPXH7uRwC+eyISRms+E50TfWBVfRqSscUoj29IYFYT/ErqY/2rOd8iBSQnwexqsYvjC7wOcA4vgzi2SiSicszR1Y8Y2xoXK6msh8M+s+4wcmfumGXxS1QAS3l9k3FpnOFq08QlJCHcQZkIsWDr0parqxlA8EjGTrZG6npQvgHqGJbXrJolCbP83/27MLisU8TnIQ/XrU2pE9XqL1BeoJlBoJX32/JtYZW4q5XHYcBKF0k68s9gTmZk5dA=="
   body = JSON.stringify(obj);
   }
   
if (url.indexOf(vip2) != -1) {
obj.data ="lvXFjQmYmVLFdleZVVXL17PCs9oeGCjr+AjC284jagABNq0y1WlDWgH7lXXL+RiLXmiFMsdhT1FSHqLIODP0kJQgSafCVKOY93V8d9ordtjowgRCYXTc8eUn+MtU/1Y4r2eH4AYgs1sigGazSL6f5WCKJqAQHHZCXAAaetNfv/EvscbycD0nVGR82xBe/K+uaZfrVIe2RTaVK5g20APUtpngwA9zj9PARx3v8BoIHLAr9CUfzPh9pPkPWT3erX0PJQ9qplVDCFhfsLjCjyJ3pUHPkATEIZ0kFQMuP0eAfuAQL7xo0hWYDrecr7/Y2gDff9lv24JjkI+mM4sOhZIz6P2KOB6KnTA4+z4WqFJEobhip8RhoOtYqxtq9pB98QU3H9IdVOM4dF4QEnZKfE9CixmeeeI1uyMpiIJ4t9r8Ufn1ngUrdXPHnECQOFLVfSnx6SpgkFdI6usSIO0w6c1VDfRZ7dHm8v8Vh83T7PJVoZbO+tlaAmiNTYyhgxTNOC/X6WG9jmrEFr6zrcxr9Di0y77ulfz/MMeUHRV/4OeRonJ/M+8Rl9OcsxA37I6dYaVy+qbOGWus8A3d2tSY9YPIk8s33QJg2aC9WyqR9QVVJ0wJyQ5aeo5qfrXFjilWuhxl8/uQ4NhyR039NGM+Y7ROIJZH/b0hgMky6CcaHQZti7nnZcRwTsIy/AtcKOOXo6mNv4kmsiD/yN7IJ6lV0gSidgBFfYp4DhqTDGUgp0Ed3fbljLqMkaxjSTL7svdR443v5JR4spoCC6KK4nWrgiAjeF2uT1DfZBFUrUvif82bPY1LFd8pGOpmzT5bVuBMyg6Go7lLKJWjbt6mHa80JC9mWZtFMQWtZDusfQLp2NJWAckRGgGT9f1ru0QIcvf9A3WDpTUERmQfFuXM+b0VjSxBOPZ5c9QF7QbbkivjDMU60nV8FTNRA8+cucWuMbRV6+rTX0pGhM8jFtFvrwvISyyP3P8J5TW8clndxw69YcNmO6cUbnXtL3W97C11ullzMZ01VGrMBv7sjGGSV848vWaKqK++PY2EN4OsF5nlYPLAEiIZsp7zwzHtKljJeR2125qaF4v+pr6PYRM7lb887LSmvQ6kYM4JQt10yZOwFbjpgU7OQLe3LxTe3xONxl735zNIG9sdW1kNd8zLhKumb3ExMxxHBP8NtjGHcv1/jiInJYB1JYJuE7WfFKt8NxMTz4wxXveqWpe4/sWi9BfESJxkbXtW7ZCdxN9nLpKCYIceNk71lzU0gp0VWyHQx0Ooyj7Xv3Pv+tWVPIBxym0AnLMrrHKjbMHQuCDznMwyXh3H1NTWB+/mLIRhuSvY4nN1ysW0umspexObUMYXVwi5tlRgXuLAwot4c9cbZAkchWfyFzm5aCbva1qG5dGguJIlnR6RCjIFApEDi96SExFUGGMQezGWL6f/P9ZTtuDzuiIRbY9djwJXisc3r0QEUp7ln2wNk3fA2km9R2Fti54rrnWyqyqk9jUDPPEPsHe7dhnIbsg=";
     body = JSON.stringify(obj);
     }


$done({body});


