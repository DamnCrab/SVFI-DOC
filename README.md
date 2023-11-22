# SVFI-DOC Vuepress2 版本

## 文档维护流程

- `git pull`
- 编辑`md`文件
- `pnpm run docs:dev`并检查教程
  - 图片大小宽度统一定为600px
- `git push`或者发pr

## 说明

由于vuepress2还处于beta阶段，相关依赖具有版本关联性，因此不要随意升级依赖版本。

请使用pnpm安装依赖

## 使用的主题

https://theme-hope.vuejs.press/zh/

## i18n

en请放在src/en目录下

## 路由

路由请放在src/.vuepress/navbar中

## 图片路径

图片请放在src/.vuepress/public/目录下，尽可能根据公用图片、多语言图片进行整理。

## 配置文件

项目配置文件 src/.vuepress/config.js

主题配置文件 src/.vuepress/theme.js

## 自定义组件

项目自定义组件 src/.vuepress/components

只安装了less作为css预处理器，如果需要其他预处理器，直接安装即可。

组件需要在config.js中进行注册

## 评论插件

插件项目地址：https://plugin-comment2.vuejs.press/zh/

评论使用的仓库：https://github.com/DamnCrab/SVFI-DOC-Discussion
