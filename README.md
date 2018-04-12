# tinyjs-types

> 为 Tiny.js 提供全局形式的 ts 类型声明，从而享受到「API 提示」和「类型校验」的能力。

![](https://gw.alipayobjects.com/zos/rmsportal/AiFygdHtdPjnslvBlKMq.gif)

## 使用方法

如果页面中使用 script 方式引用了 Tiny.js，然后在 js 中直接使用全局变量 Tiny 来开发，使用步骤如下：

### 1. 安装本库

```sh
npm install tinyjs-types --save-dev
```

### 2. 项目根目录下新建 `index.d.ts`，内容为

```ts
/// <reference path="node_modules/tinyjs-types/index.d.ts" />
```

### 3. 使用 [Visual Studio Code](https://code.visualstudio.com/download) 打开项目，即可享受到 Tiny.js 的「API 提示」能力

### 4. 增加「错误检查」能力

如果想在 js 代码中依靠 Typescript 来进行「类型校验」和「错误检查」，保障代码质量，可以在项目根目录下新建 `jsconfig.json`，内容为

```json
{
  "compilerOptions": {
    "checkJs": true
  }
}
```

项目即可拥有「类型校验」和「错误检查」的能力。

`jsconfig.json` 的详细配置和介绍可见： https://code.visualstudio.com/docs/languages/javascript#_javascript-project-jsconfigjson

如果业务开发时，想临时屏蔽掉某个错误，可以在错误行前面加上 `// @ts-ignore` 来屏蔽掉。

## 其他

* [WebStorm 如何使用](https://github.com/stonelee/tinyjs-types/blob/master/docs/webstorm.md)

## 贡献

如果在业务使用过程中发现问题，请[提交 issue](https://github.com/stonelee/tinyjs-types/issues/new)

