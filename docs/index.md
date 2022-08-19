---
home: true
heroImage: /img/logo.webp
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
<p align="center">
  <a class="become-sponsor" href="https://store.steampowered.com/app/1692080/SVFI/">STEAM购买</a>
</p>

<style>
.become-sponsor {
  padding: 8px 20px;
  display: inline-block;
  color: #11a8cd;
  border-radius: 30px;
  box-sizing: border-box;
  border: 1px solid #11a8cd;
}
</style>

<br/>
<p align="center">
  <!-- <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a> -->
  <!-- <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/dt/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a> -->
  <a href="https://github.com/Justin62628/Squirrel-RIFE" target="_blank"><img src='https://img.shields.io/github/stars/Justin62628/Squirrel-RIFE' alt='GitHub stars' class="no-zoom"></a>
  <a href="https://github.com/Justin62628/Squirrel-RIFE" target="_blank"><img src='https://img.shields.io/github/forks/Justin62628/Squirrel-RIFE' alt='GitHub forks' class="no-zoom"></a>
</p>

## 🌎 效果演示 Demonstration on BiliBili

::: cardImgList
```yaml
config:
    target: _blank
    imgHeight: auto
    objectFit: contain
    lineClamp: 1

data:
- img: /img/bilibili/yuan.jpg
  name: 《原神》
  desc: 剧情CM短片 8K60帧 SVFI补帧超分
  link: https://www.bilibili.com/video/BV1FS4y1C7RD
  author: SVFI视觉 
  avatar: /img/svfi.ico
- img: /img/bilibili/umaron.jpg
  name: 赛马娘
  desc:  第二季 NCOP 8K60帧
  link: https://www.bilibili.com/video/BV1QY411b7e4
  author: SVFI视觉 
  avatar: /img/svfi.ico
- img: /img/bilibili/emilia.jpg
  name:  Re：从零开始的异世界生活
  desc: 第二季后半 NCED Believe in you
  link: https://www.bilibili.com/video/BV1kF411p7FB
  author: SVFI视觉 
  avatar: /img/svfi.ico
```
:::

## 🎖 白嫖列表
::: cardList 2
```yaml
- name: Squirrel Anime Enhance
  desc: 🚀开源超分软件，专注于兼容的超分工具
  link: https://github.com/Justin62628/Squirrel-RIFE/releases/tag/v3.20.4
  bgColor: '#eaeef1'
  textColor: '#2A3344'
- name: SVFI Demo 预览版
  desc: SVFI的预览版，支持1000帧以内的高质量、高自定义的补帧和超分
  link: https://store.steampowered.com/search/?sort_by=_ASC&term=SVFI+Demo
  bgColor: '#eaeef1'
  textColor: '#2A3344'
```
:::

<br/>

## 💻 系统要求

  -  Windows 10 及以上操作系统

  -  Windows 10 or above

  -  NVIDIA GTX 750ti 以上的N卡或五年内发布的A卡

  -  NVIDIA GPU( > GTX 750ti) or AMD GPU released within 5 years

  -  2GB 以上显存, 4GB 以上的空余运行内存以及10GB+的磁盘剩余空间

  -  2GB+ of VRAM, 4GB+ of RAM and 10GB+ of free disk space


## ⚡ 反馈与交流

在软件使用过程中有任何问题和想法，请在 [Steam论坛](https://steamcommunity.com/app/1692080/discussions/1/)提问。
或者加入[BBS论坛](https://bbs.svfi.group/)：

## 🤝  参考 Reference & Acknowledgement
- Video Frame Interpolation Algorithm: [RIFE](https://github.com/hzwer/arXiv2020-RIFE)
- NCNN Support: [RIFE-NCNN](https://github.com/nihui/rife-ncnn-vulkan) 
- SWIG Wraps: [Everything-ncnn-vulkan-python](https://github.com/orgs/media2x/repositories)
- UI Design: [QCandyUi](https://github.com/shuoGG1239/QCandyUi)
- Steamworks Interface: [SteamworksPy](https://github.com/philippj/SteamworksPy)
- Encode Supports: [FFmpeg](https://github.com/FFmpeg/FFmpeg), [QSVEnc](https://github.com/rigaya/QSVEnc), [NVEnc](https://github.com/rigaya/NVEnc), [dovi_tool](https://github.com/quietvoid/dovi_tool), [dlb_mp4base](https://github.com/DolbyLaboratories/dlb_mp4base), [hdr10plus_parser](https://github.com/quietvoid/hdr10plus_parser)
- Super Resolution Algorithm: [waifu2x](https://github.com/nagadomi/waifu2x), [RealESR](https://github.com/xinntao/Real-ESRGAN), [RealCUGAN](https://github.com/bilibili/ailab/blob/main/Real-CUGAN/LICENSE)
- View More at `LICENSE` and `LICENSES_BUNDLE` FILE

## 👓 一些注意事项
- 根据Steam用户使用条款(EULA)，SVFI发行版输出内容不可用于商业用途
- According to EULA, SVFI's output is not allowed for commercial use.
