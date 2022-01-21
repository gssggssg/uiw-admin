"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[476],{29476:function(n,e,t){t.r(e),e.default='router-control\n===\n\n## Installation\n\n```bash\nnpm i @uiw-admin/router-control --save\n```\n\n## \u53c2\u6570\n\n```ts\n\n// json\u6587\u4ef6\u683c\u5f0f\nexport interface RoutersJSON {\n  key?: string;\n  /** \u9ed8\u8ba4\u8df3\u8f6c */\n  index?: boolean;\n  /** \u8def\u5f84 */\n  path?: string;\n  /** \u540d\u79f0 */\n  name?: string;\n  /**  \u56fe\u6807 */\n  icon?: string;\n  /** \u91cd\u5b9a\u5411  \u5f53 index===true\u751f\u6548 */\n  redirect?: string;\n  /** \u7ec4\u4ef6 */\n  component?:string;\n  /** \u5b50\u96c6 \u8def\u7531 */\n  routes?: RoutersJSON[];\n  /** \u52a0\u8f7d model \u7684\u6587\u4ef6\u8def\u5f84 , ts \u7ed3\u5c3e\u7684\u6587\u4ef6 */\n  models?: string[];\n  /** \u662f\u5426\u9690\u85cf\u83dc\u5355 */\n  hideInMenu?: boolean;\n  /** \u7528\u4e8e\u8def\u7531\u6821\u9a8c\u6743\u9650 */\n  isAuth?: boolean;\n}\n\nexport interface ControllerProps {\n  /** \u8def\u7531\u6a21\u5f0f   \u9ed8\u8ba4 history  */\n  routeType?: "history" | "hash" | "browser";\n}\n\n```\n\n## routes.json \u6587\u4ef6\u6848\u4f8b\n\n> `@` \u6307\u5411 src \u76ee\u5f55\n\n```json\n[\n  {\n    "path": "/login",\n    "component": "@/layouts/UserLayout"\n  },\n  {\n    "path": "/",\n    "component": "@/layouts/BasicLayout",\n    "routes": [\n      {\n        "index": true,\n        "redirect": "/tableList"\n      },\n      {\n        "path": "/home",\n        "name": "\u9996\u9875",\n        "component": "@/pages/TableList",\n        "icon": "home"\n      },\n      {\n        "path": "/dom",\n        "name": "\u5b50\u9879",\n        "icon": "copy",\n        "routes": [\n          {\n            "path": "/dom/courses",\n            "name": "Dashboard",\n            "component": "@/pages/Dashboard"\n          }\n        ]\n      },\n      {\n        "path": "/403",\n        "name": "403",\n        "hideInMenu": true,\n        "component": "403"\n      },\n      {\n        "path": "/500",\n        "name": "500",\n        "hideInMenu": true,\n        "component": "500"\n      },\n      {\n        "path": "/404",\n        "name": "404",\n        "hideInMenu": true,\n        "component": "404"\n      },\n      {\n        "path": "*",\n        "name": "404",\n        "component": "404"\n      }\n    ]\n  }\n]\n```\n\n## \u6848\u4f8b\n\n```ts\nimport React from "react";\nimport Control from \'@uiw-admin/router-control\';\nexport default ()=>{\n  return (\n    <Control\n      routeType="hash"\n    />\n  )\n}\n\n```\n\n\n'}}]);
//# sourceMappingURL=476.3e80bb37.chunk.js.map