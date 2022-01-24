"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31],{8031:function(n,e,t){t.r(e),e.default="@uiw-admin/basic-layouts\n---\n\n## Installation\n\n```bash\nnpm i @uiw-admin/basic-layouts --save\n```\n\n## \u8bf4\u660e\n> \u9875\u9762\u6574\u4f53\u5e03\u5c40\n> [\u4f7f\u7528\u65b9\u5f0f](https://github.com/uiwjs/uiw-admin/blob/2bd741133b585f5bdd52c3f46cb24474420f1106/examples/base/src/layouts/BasicLayout.tsx)\n\n\n## \u53c2\u6570\n\n```ts\n\nexport type BasicLayoutProps = {\n  logo?: string;\n  projectName?: string;\n  /**\n   * \u9875\u811a\n   */\n  footer?: React.ReactElement;\n  /** \u5b50\u96c6\u8def\u7531 */ \n  routes?: RoutersProps[];\n  children?: React.ReactNode;\n} & HeaderRightProps;\n\n\nexport interface HeaderRightProps {\n  /**\n   * \u83dc\u5355\n   */\n  menus?: Array<HeaderMenuItemsProps>;\n  /**\n   * avatar \u5934\u50cf\n   * userName \u7528\u6237\u540d\n   * menuLeft \u83dc\u5355\u5de6\u4fa7\n   */\n  profile?: {\n    avatar?: string;\n    userName?: string;\n    menuLeft?: React.ReactElement;\n  };\n  // \u91cd\u65b0\u52a0\u8f7d\u6743\u9650\n  onReloadAuth: () => void;\n}\n\nexport interface HeaderMenuItemsProps {\n  /** \u6807\u9898 */ \n  title: React.ReactNode;\n  /** \u56fe\u6807 */ \n  icon: JSX.Element | string | false | null;\n  /**  \u70b9\u51fb\u4e8b\u4ef6 */ \n  onClick?: () => void;\n  /** \u5206\u5272\u7ebf */ \n  divider?: boolean;\n  /** \u81ea\u5b9a\u4e49\u6e32\u67d3 */ \n  render?: React.ReactNode;\n}\n\n```\n\n\n## \u6848\u4f8b\n\n```tsx\n\nimport React from 'react';\nimport BasicLayout from '@uiw-admin/basic-layouts';\nimport { Outlet } from 'react-router-dom';\nimport { RoutersProps } from '@uiw-admin/router-control';\nimport { Badge, Icon } from 'uiw';\nimport useSWR from 'swr';\n\ninterface BasicLayoutProps {\n  routes: RoutersProps[];\n}\n\nfunction BasicLayoutScreen(props: BasicLayoutProps = { routes: [] }) {\n  const { routes } = props;\n  const { mutate } = useSWR(['/api/reloadAuth', { method: 'POST' }], {\n    revalidateOnMount: false,\n    revalidateOnFocus: false,\n    onSuccess: (data) => {\n      if (data && data.code === 200) {\n        sessionStorage.setItem('token', data.token);\n        sessionStorage.setItem('auth', JSON.stringify(data.authList || []));\n        window.location.reload();\n      }\n    },\n  });\n\n  const basicLayoutProps = {\n    onReloadAuth: async () => mutate(),\n    routes: routes,\n    // \u4fee\u6539\u5bc6\u7801\u4ee5\u53ca\u5176\u4ed6\u64cd\u4f5c\u5728\u9879\u76ee\u4e2d\u8fdb\u884c\n    menus: [\n      {\n        title: '\u6b22\u8fce\u6765\u5230uiw',\n        icon: 'smile',\n        onClick: () => {},\n      },\n      {\n        title: '\u4fee\u6539\u5bc6\u7801',\n        icon: 'setting',\n        onClick: () => {},\n      },\n    ],\n    profile: {\n      avatar: require('../assets/head.png'),\n      menuLeft: (\n        <div style={{ marginRight: 15 }}>\n          <Badge count={66}>\n            <Icon type=\"bell\" color=\"#343a40\" style={{ fontSize: 20 }} />\n          </Badge>\n        </div>\n      ),\n    },\n  };\n  return (\n    <BasicLayout {...basicLayoutProps} {...props}>\n      <Outlet />\n    </BasicLayout>\n  );\n}\nexport default BasicLayoutScreen;\n\n\n```"}}]);
//# sourceMappingURL=31.d99ef35b.chunk.js.map