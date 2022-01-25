"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[688],{39688:function(n,e,t){t.r(e),e.default="## ProTable\n\n\u96c6\u6210\u641c\u7d22\u8868\u5355\u7684Table\u7ec4\u4ef6\uff0c\u7528\u4e8e\u4e00\u822c\u9875\u9762\u7684\u67e5\u8be2\u641c\u7d22\u3002\n\n\n### demo\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from 'react';\nimport { ProTable, useTable } from '@uiw-admin/components';\n\nfunction Demo() {\n  const table = useTable('/api/getData', {\n    // \u683c\u5f0f\u5316\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5fc5\u987b\u8fd4\u56de{total \u603b\u6570, data: \u5217\u8868\u6570\u636e}\u7684\u683c\u5f0f\n    formatData: (data) => {\n      return {\n        total: data.total,\n        data: data.data,\n      };\n    },\n    // \u683c\u5f0f\u5316\u67e5\u8be2\u53c2\u6570 \u4f1a\u63a5\u6536\u5230pageIndex \u5f53\u524d\u9875  searchValues \u8868\u5355\u6570\u636e\n    query: (pageIndex, searchValues) => {\n      return {\n        page: pageIndex,\n        pageSize: 10,\n        data: searchValues,\n      };\n    },\n     // swr options\n    SWRConfiguration: {\n      revalidateOnFocus: false\n    }\n  });\n\n  return (\n    <ProTable\n      operateButtons={[\n        { label: '\u65b0\u589e', type: 'primary' },\n      ]}\n      // \u81ea\u5b9a\u4e49\u641c\u7d22\u680f\u6309\u94ae, \u8986\u76d6\u539f\u672c\u7684search\u6309\u94ae \u5982\u8981\u6267\u884c\u67e5\u8be2\u64cd\u4f5c \u9700\u8981\u6309\u94ae htmlType: 'submit'\n      // searchBtns={[\n      //   { label: '\u641c\u7d22', type: 'primary',  htmlType: 'submit',  onClick: () => {\n      //     table.onSearch()\n      //   }},\n      //   { label: '\u70b9\u6211', onClick: () => null},\n      // ]}\n      onBeforeSearch={({ initial, current }) => {\n        const errorObj = {};\n        if (!current.name) errorObj.name = '\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a\uff01';\n        if (Object.keys(errorObj).length > 0) {\n          const err = new Error();\n          err.filed = errorObj;\n          throw err;\n        }\n        return true;\n      }}\n      table={table}\n      columns={[\n        {\n          title: '\u540d\u5b57',\n          key: 'name',\n          props: {\n            widget: 'input',\n            initialValue: 'zzz',\n            // \u7ec4\u4ef6\u5c5e\u6027\n            widgetProps: {\n              preIcon: 'user',\n              placeholder: '\u8f93\u5165\u7528\u6237\u540d',\n            },\n          },\n        },\n        {\n          title: '\u5e74\u9f84',\n          key: 'age',\n          props: {\n            widget: 'select',\n            option: [\n              { label: '20', value: 20 },\n              { label: '10', value: 10 },\n            ],\n          },\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'info',\n          props: {\n            widget: 'textarea',\n          },\n        },\n        {\n          title: 'Switch',\n          key: 'Switch',\n          props: {\n            widget: 'switch',\n          },\n        },\n        {\n          title: 'timePicker',\n          key: 'timePicker',\n          props: {\n            widget: 'timePicker',\n          },\n        },\n        {\n          title: 'MonthPicker',\n          key: 'MonthPicker',\n          props: {\n            widget: 'monthPicker',\n          },\n        },\n        {\n          title: 'DateInput',\n          key: 'DateInput',\n          props: {\n            widget: 'dateInput',\n          },\n        },\n        {\n          title: 'Radio',\n          key: 'Radio',\n          props: {\n            widget: 'radio',\n            option: [\n              { label: '\u7537', value: 'man' },\n              { label: '\u5973', value: 'girl' },\n            ],\n          },\n        },\n        {\n          title: 'SearchSelect',\n          key: 'SearchSelect',\n          props: {\n            widget: 'searchSelect',\n            widgetProps: {\n              option: [\n                { label: 'a', value: 2 },\n                { label: 'aa', value: 3 },\n                { label: 'aaa', value: 4 },\n              ],\n            },\n          },\n        },\n      ]}\n    />\n  );\n}\n\nReactDOM.render(<Demo />, _mount_);\n\n```\n\n## Porps\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| columns | \u4e0euiw table colunms\u7528\u6cd5\u4e00\u81f4 \u5fc5\u4f20\t| ColumnProps[]\t\t| [] |\n| operateButtons | \u64cd\u4f5c\u680f\u6309\u94ae\u96c6\u5408\uff0c\u5c5e\u6027\u4e0euiw button\u4e00\u81f4\u5e76\u652f\u6301\u81ea\u5b9a\u4e49render\t| `Array<ButtonProps & { render?: JSX.Element }>`\t\t\t| [] |\n| searchBtns | \u641c\u7d22\u680f\u6309\u94ae\u96c6\u5408\uff0c\u5c5e\u6027\u4e0euiw button\u4e00\u81f4\u5e76\u652f\u6301\u81ea\u5b9a\u4e49render\t| `Array<ButtonProps & { render?: JSX.Element }>`\t\t| [] |\n| table | useTable\u8fd4\u56de\u503c\t| Object \u5fc5\u4f20\t\t|  |\n| onBeforeSearch | \u67e5\u8be2table\u524d\u8868\u5355\u56de\u8c03\uff0c\u53ef\u7528\u4e8e\u8868\u5355\u9a8c\u8bc1\uff0c\u8fd4\u56detrue \u7ee7\u7eed\u67e5\u8be2\t| ({initial, current}) => Boolean \t|  |\n\n\u5176\u4f59\u5c5e\u6027\u4e0euiw Table\u4e00\u81f4\n\n### columns props\n\n\u914d\u7f6e\u641c\u7d22\u8868\u5355\n\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| widget | \u8868\u5355\u7ec4\u4ef6\t| \t\u652f\u6301\u4f8b\u5b50\u4e2d\u7684\u7ec4\u4ef6, \u7ec4\u4ef6\u540d\u4e0euiw\u8868\u5355\u7ec4\u4ef6\u540d\u5b57\u4e00\u81f4\uff0c\u53ea\u662f\u9996\u5b57\u6bcd\u5c0f\u5199\u4e86\t| - |\n| widgetProps | \u7ec4\u4ef6\u5c5e\u6027\t| \t\u4e0euiw\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5c5e\u6027\u4e00\u81f4\t| - |\n| label| \u8868\u5355\u6807\u9898\uff0c\u5982\u679c\u4e0d\u586b\u5219\u96c6\u6210columns title\t| \tString\t| - |\n| key| \u8868\u5355name\uff0c\u5982\u679c\u4e0d\u586b\u5219\u96c6\u6210columns key\t| \tString\t| - |\n\n## useTable\n\n### params\n\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| key | \u63a5\u53e3\u8bf7\u6c42\u5730\u5740\t| string\t\t| - |\n| options | \u914d\u7f6e\u96c6\u5408\t| object\t\t| {} |\n\n### options\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| formatData | \u683c\u5f0f\u5316\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5fc5\u987b\u8fd4\u56de{total: \u603b\u6570, data: \u5217\u8868\u6570\u636e}\u7684\u683c\u5f0f\t| (data) => {total: 10, data: []}\t| - |\n| query | \u683c\u5f0f\u5316\u8bf7\u6c42\u53c2\u6570, \u4f1a\u63a5\u6536\u5230pageIndex \u5f53\u524d\u9875  searchValues \u8868\u5355\u6570\u636e\t|  (pageIndex: number, searchValues: any)\t=> {page:  pageIndex, pageSize: 10, searchValues}\t| {} |\n| SWRConfiguration | swr\u914d\u7f6e\t| SWRConfiguration\t| {} |\n\n\n### response\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| data | \u63a5\u53e3\u8bf7\u6c42\u6570\u636e\t| Array\t| - |\n| total | \u6570\u636e\u603b\u6570\t| Number\t\t| - |\n| searchValues | \u8868\u5355\u503c\t| Object\t\t| - |\n"}}]);
//# sourceMappingURL=688.dd8dd726.chunk.js.map