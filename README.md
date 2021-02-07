# slack-off

## 使用须知

本文档包括以下几个部分：

- 安装并运行
- 开发指南
- 上线指南（切记每次更新版本日志）
- 测试指南（测试人员须知）
- 目录规范（前端开发人员须知）
- 项目技术栈

👉 开发前请阅读[前端项目规范](./docs/前端项目规范.md)。

## 安装并运行

```bash
npm install # 安装环境依赖
npm run dev # 或 npm run serve 进入开发模式
```

## 开发指南

```bash
npm run lint # 代码格式化
npm run lint-fix # fix代码格式
npm run build-dev # 编译并压缩开发包
npm run build-qa # 编译并压缩测试包
```

## 上线指南

更新版本号：修改[/package.json](/package.json)中的`version`字段。
更新版本日志：修改[/changeLog.md](/changeLog.md)。

```bash
npm run build-pro # 编译并压缩生产包
```

> 将编译出的`dist-**`压缩后部署到服务端。

## 测试指南

- 安装并运行。
- 修改[/src/config](/src/config/index.js)中的 baseApiUrl，可以切换环境。

## 目录规范

- [/src/api](/src/api/index.js) api 集合，request 封装。
- [/src/assets](/src/assets/) 静态资源目录，包括字体、css、images 等。
- [/src/config](/src/config/index.js) 项目配置。
- [/src/libs](/src/libs/) 引入的第三方库，不过建议都通过 npm 引入。
- [/src/utils](/src/utils/) 自己封装的工具方法。
- [/src/components](/src/components/) vue 独立组件，适合抽离具有复用价值的组件。
- [/src/router](/src/router/) vue-router 路由配置。
- [/src/store](/src/store/) vuex 全局状态管理。
- [/src/views](/src/views/) vue 页面。

## 项目技术栈

- [vue: 官方文档](https://cn.vuejs.org/index.html) vue。
- [ant-design-vue: 官方文档](https://antdv.com/docs/vue/introduce-cn/) ant-design-vue UI 组件库。
- [axios: Github](https://github.com/axios/axios) axios 请求库。
- [moment: Github](https://github.com/moment/moment) 日期格式化库，`ant-design-vue`的日期组件需要。
- [nprogress: Github](https://github.com/rstacruz/nprogress) 页面进度条状态库。
- [prettier: Github](https://github.com/prettier/prettier) 代码美化工具。

## 注意事项

- [css 中使用 webpack 别名(alias)](https://www.jianshu.com/p/ef565d7cce71)
  - webpack 中设置了别名，css 中想使用需要在路径前添加`~`。

## VSCode 插件安装

### 一定安装

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - Vue 语法高亮、代码提示、Emmet、格式化等功能。
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - 可以格式化 JS、JSON、Vue、Less、SCSS 等。
  - facebook、react、babel、webpack 推荐。
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
  - webpack 可以配置`@`别名，但是在代码中使用时没有代码提示，使用这个插件可以实现路径补全。
- [别名路径跳转](https://marketplace.visualstudio.com/items?itemName=lihuiwang.vue-alias-skip)
  - 虽然使用`Path Autocomplete`可以实现路径补全，但是无法使用`ctrl + 点击`或者`command + 点击`跳转到该文件，使用这个插件可以实现。

### 推荐安装

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)git 管理插件
  - 每一行代码旁边都会显示代码提交人、提交时间和 message 信息，可以快捷回溯代码。
  - 点击侧边栏 GitLens 图标可以查看代码历史。
  - 可以操作查看代码 push 记录。
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
  - 支持注释高亮等。
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
  - 开始闭合标签匹配、开始闭合大括号匹配。
