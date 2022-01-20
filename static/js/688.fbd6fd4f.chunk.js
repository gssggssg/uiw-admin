"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[688],{39688:function(n,t,e){e.r(t),t.default="## ProTable\n\n\u96c6\u6210\u641c\u7d22\u8868\u5355\uff0ctable\u7684\u5217\u8868\u7ec4\u4ef6\n\n\n### demo\n\n```js\n\nimport React from 'react';\nimport { ProTable, useTable } from '@uiw-admin/components';\n\nexport default function Demo() {\n  const table = useTable('/api/getData', {\n    // \u683c\u5f0f\u5316\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5fc5\u987b\u8fd4\u56de{total \u603b\u6570, data: \u5217\u8868\u6570\u636e}\u7684\u683c\u5f0f\n    formatData: (data) => {\n      return {\n        total: data.total,\n        data: data.data,\n      };\n    },\n    // \u683c\u5f0f\u5316\u67e5\u8be2\u53c2\u6570 \u4f1a\u63a5\u6536\u5230pageIndex \u5f53\u524d\u9875  searchValues \u8868\u5355\u6570\u636e\n    query: (pageIndex: number, searchValues: any) => {\n      return {\n        page: pageIndex,\n        pageSize: 10,\n        data: searchValues,\n      };\n    },\n  });\n\n  return (\n    <ProTable\n      btns={[{ label: '\u65b0\u589e', type: 'primary' }]}\n      table={table}\n      columns={[\n        {\n          title: '\u540d\u5b57',\n          key: 'name',\n          props: {\n            widget: 'input',\n            initialValue: 'zzz',\n            // \u7ec4\u4ef6\u5c5e\u6027\n            widgetProps: {\n              preIcon: 'user',\n              placeholder: '\u8f93\u5165\u7528\u6237\u540d',\n            },\n          },\n        },\n        {\n          title: '\u5e74\u9f84',\n          key: 'age',\n          props: {\n            widget: 'select',\n            option: [\n              { label: '20', value: 20 },\n              { label: '10', value: 10 },\n            ],\n          },\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'info',\n          props: {\n            widget: 'textarea',\n          },\n        },\n        {\n          title: 'Switch',\n          key: 'Switch',\n          props: {\n            widget: 'switch',\n          },\n        },\n        {\n          title: 'timePicker',\n          key: 'timePicker',\n          props: {\n            widget: 'timePicker',\n          },\n        },\n        {\n          title: 'MonthPicker',\n          key: 'MonthPicker',\n          props: {\n            widget: 'monthPicker',\n          },\n        },\n        {\n          title: 'DateInput',\n          key: 'DateInput',\n          props: {\n            widget: 'dateInput',\n          },\n        },\n        {\n          title: 'Radio',\n          key: 'Radio',\n          props: {\n            widget: 'radio',\n            option: [\n              { label: '\u7537', value: 'man' },\n              { label: '\u5973', value: 'girl' },\n            ],\n          },\n        },\n        {\n          title: 'SearchSelect',\n          key: 'SearchSelect',\n          props: {\n            widget: 'searchSelect',\n            widgetProps: {\n              option: [\n                { label: 'a', value: 2 },\n                { label: 'aa', value: 3 },\n                { label: 'aaa', value: 4 },\n              ],\n            },\n          },\n        },\n      ]}\n    />\n  );\n}\n\n\n```\n\n## Porps\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| columns | \u4e0euiw table colunms\u7528\u6cd5\u4e00\u81f4 \u5fc5\u4f20\t| ColumnProps[]\t\t| [] |\n| btns | \u64cd\u4f5c\u680f\u6309\u94ae\u96c6\u5408\uff0c\u5c5e\u6027\u4e0euiw button\u4e00\u81f4\t| ButtonProps[]\t\t| [] |\n| table | useTable\u8fd4\u56de\u503c\t| Object \u5fc5\u4f20\t\t|  |\n\n### columns props\n\n\u914d\u7f6e\u641c\u7d22\u8868\u5355\n\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| widget | \u8868\u5355\u7ec4\u4ef6\t| \t\u652f\u6301\u4f8b\u5b50\u4e2d\u7684\u7ec4\u4ef6, \u7ec4\u4ef6\u540d\u4e0euiw\u8868\u5355\u7ec4\u4ef6\u540d\u5b57\u4e00\u81f4\uff0c\u53ea\u662f\u9996\u5b57\u6bcd\u5c0f\u5199\u4e86\t| - |\n| widgetProps | \u7ec4\u4ef6\u5c5e\u6027\t| \t\u4e0euiw\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5c5e\u6027\u4e00\u81f4\t| - |\n| label| \u8868\u5355\u6807\u9898\uff0c\u5982\u679c\u4e0d\u586b\u5219\u96c6\u6210columns title\t| \tString\t| - |\n| key| \u8868\u5355name\uff0c\u5982\u679c\u4e0d\u586b\u5219\u96c6\u6210columns key\t| \tString\t| - |\n\n## useTable\n\n### params\n\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| key | \u63a5\u53e3\u8bf7\u6c42\u5730\u5740\t| string\t\t| - |\n| options | \u914d\u7f6e\u96c6\u5408\t| object\t\t| {} |\n\n### options\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| formatData | \u683c\u5f0f\u5316\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\uff0c\u5fc5\u987b\u8fd4\u56de{total: \u603b\u6570, data: \u5217\u8868\u6570\u636e}\u7684\u683c\u5f0f\t| (data) => {total: 10, data: []}\t| - |\n| query | \u683c\u5f0f\u5316\u8bf7\u6c42\u53c2\u6570, \u4f1a\u63a5\u6536\u5230pageIndex \u5f53\u524d\u9875  searchValues \u8868\u5355\u6570\u636e\t|  (pageIndex: number, searchValues: any)\t=> {page:  pageIndex, pageSize: 10, searchValues}\t| {} |\n\n\n### response\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| data | \u63a5\u53e3\u8bf7\u6c42\u6570\u636e\t| Array\t| - |\n| total | \u6570\u636e\u603b\u6570\t| Number\t\t| - |\n| searchValues | \u8868\u5355\u503c\t| Object\t\t| - |\n\n\u522b\u7684\u503c\u54b1\u4e0d\u9700\u8981\u4f7f\u7528"}}]);
//# sourceMappingURL=688.fbd6fd4f.chunk.js.map