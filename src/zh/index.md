---
home: true
title: 首页
heroImage: /brand/logo.png
heroText: Squirrel-RIFE Video Frame Interpolation
tagline:
actionText: 专注于动漫超分补帧 →
actionLink: pages/0e988c/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features:
  - title: 上手即用
    details: 自动预设系统，小白也能用，根据输入自动调整设置，获得最优效果
  - title: 高质量输出
    details: 高粒度设置选项，满足你的极客心与质量把控高要求
  - title: 快速省心
    details: 超多优化避免常见补帧软件造成的果冻，转场花屏等不如意

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

::: center
<p>
  <a class="crab-become-sponsor" href="https://store.steampowered.com/app/1692080/SVFI/">STEAM购买</a>
</p>
:::

<br/>

::: center
<p>
  <a href="https://github.com/Justin62628/Squirrel-RIFE" target="_blank"><img src='https://img.shields.io/github/stars/Justin62628/Squirrel-RIFE' alt='GitHub stars' class="no-zoom"></a>
  &nbsp;
  <a href="https://github.com/Justin62628/Squirrel-RIFE" target="_blank"><img src='https://img.shields.io/github/forks/Justin62628/Squirrel-RIFE' alt='GitHub forks' class="no-zoom"></a>
</p>
:::

## 🌎 效果演示 Demonstration on BiliBili

<cardList :items="[
{
	img: '/external/bilibili/01-hitoshizuku.jpg',
	name: 'BanG Dream! It\'s MyGO!!!!!',
	desc: '壱雫空（Hitoshizuku）',
	link: 'https://www.bilibili.com/video/BV1Gm41127gL/',
	author: 'SVFI视觉',
	avatar: '/brand/logo.png'
},
{
	img: '/external/bilibili/02-melody.jpg',
	name: 'BanG Dream! It\'s MyGO!!!!!',
	desc: '迷路日々（Melody）',
	link: 'https://www.bilibili.com/video/BV1HT42117aQ',
	author: 'SVFI视觉',
	avatar: '/brand/logo.png',
},
{
	img: '/external/bilibili/03-utakotoba.jpg',
	name: 'BanG Dream! It\'s MyGO!!!!!',
	desc: '詩超絆（Utakotoba）',
	link: 'https://www.bilibili.com/video/BV14r421K7ik',
	author: 'SVFI视觉',
	avatar: '/brand/logo.png'
}
]"/>

## 🌎 教程演示 Tutorial on BiliBili

<cardList :items="[
{
	img: '/external/bilibili/04-tutorial-6.jpg',
    name: '使用教程',
	desc: 'SVFI 6.0版本简明使用教程',
	link: 'https://www.bilibili.com/video/BV1jM411f778',
	author: 'SVFI视觉 ',
	avatar: '/brand/logo.png'
},
{
	img: '/external/bilibili/05-tutorial-settings.jpg',
	name: '设置教程',
	desc: '重复帧去除功能演示+如何设置',
	link: 'https://www.bilibili.com/video/BV1Gt4y1G7Un',
	author: 'SVFI视觉',
	avatar: '/brand/logo.png'
}
]"/>

## 📕 本文档建议阅读顺序

- 视频处理基础与软件入门：[快速入门的所有文章](/zh/pages/fps-resolution-bitrate/) -> [必读导引](/zh/pages/mustread/) -> [预设](/zh/pages/svfi-presets/) -> [任务基本设置说明](/zh/pages/task-basic/) -> [播放器介绍](/zh/pages/player/) -> [补帧模型说明](/zh/pages/vfi-models/) -> [超分模型说明](/zh/pages/sr-models/) -> [画质恢复模型说明](/zh/pages/restore-models/) -> [实时窗口播放模型说明](/zh/pages/realtime-models/)
- 软件报错、输出不一致等问题排查：[Q&A](/zh/pages/QA/) -> [使用技巧](/zh/pages/useful-tips/)
- 软件进阶学习：[相关文章科普](/zh/pages/wiki-image-quality/) -> [任意窗口实时播放](/zh/pages/realtime-window/) -> [其他进阶说明](/zh/pages/other-advanced-settings/) -> [SVFI命令行使用](/zh/pages/svfi-cli/)

## 🤖 AI Agent 专区

本区域是面向 AI Agent 的文档路由索引。处理用户问题时，优先根据问题类型打开对应页面；中文文档的稳定入口统一使用 `/zh/pages/<slug>/`。

- **任务设置与界面操作**： [软件主要页面](/zh/pages/sidebar/) · [任务基本设置](/zh/pages/task-basic/) · [补帧设置](/zh/pages/vfi-settings/) · [预设设置](/zh/pages/preset-bar/) · [预设推荐](/zh/pages/svfi-presets/) · [输出分辨率](/zh/pages/output-resolution/) · [编解码设置](/zh/pages/encode-decode/) · [转场识别](/zh/pages/scene-detect/) · [播放器](/zh/pages/player/) · [软件偏好设置](/zh/pages/preferences/) · [工具箱](/zh/pages/toolbox/)
- **模型选择与画质处理**： [补帧模型](/zh/pages/vfi-models/) · [超分模型](/zh/pages/sr-models/) · [画质恢复模型](/zh/pages/restore-models/) · [实时窗口播放模型](/zh/pages/realtime-models/)
- **报错与结果排查**： [Q&A](/zh/pages/QA/) · [使用技巧](/zh/pages/useful-tips/) · [高级设置下方选项](/zh/pages/advanced-below/)
- **实时播放**： [任意窗口实时播放](/zh/pages/realtime-window/) 
- **高级自动化**： [其他进阶设置](/zh/pages/other-advanced-settings/) · [命令行进阶](/zh/pages/svfi-cli/)

## 🎖 白嫖列表

```component VPCard
title: Squirrel Anime Enhance
desc: 🚀开源超分软件，专注于兼容的超分工具
logo: /brand/logo.png
link: https://github.com/Justin62628/Squirrel-RIFE/releases/tag/v3.20.4
background: #eaeef1
```


<br/>

## 💻 系统要求

- Windows 10 及以上操作系统

- NVIDIA GTX 750ti 以上的N卡或五年内发布的A卡

- 2GB 以上显存, 4GB 以上的空余运行内存以及10GB+的磁盘剩余空间

## ⚡ 反馈与交流

在软件使用过程中有任何问题和想法，请在 [Steam论坛](https://steamcommunity.com/app/1692080/discussions/1/)提问，此为唯一售后渠道。

## 👓 一些注意事项

- 根据Steam用户使用条款(EULA)，SVFI发行版输出内容不可用于商业用途
