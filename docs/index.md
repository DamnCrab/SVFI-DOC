---
home: true
heroImage: /img/logo.png
heroText: SVFI
tagline: 🚀J佬快去修bug
actionText: 开始使用 →
actionLink: /pages/a2f161/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 知识管理
    details: 包含三种典型的知识管理形态：结构化、碎片化、体系化。轻松打造属于你自己的知识管理平台
  - title: 简洁高效
    details: 以 Markdown 为中心的项目结构，内置自动化工具，以更少的配置完成更多的事。配合多维索引快速定位每个知识点
  - title: 沉浸式阅读
    details: 专为阅读设计的UI，配合多种颜色模式、可关闭的侧边栏和导航栏，带给你一种沉浸式阅读体验

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---
<p align="center">
  <a class="become-sponsor" href="/pages/1b12ed/">支持这个项目</a>
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
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/dt/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>
</p>

## 🎖特别用户
::: cardList 3
```yaml
# - name: OpenHarmony
#   desc: 开放原子开源基金会
#   link: https://docs.openharmony.cn/pages/000000/
#   bgColor: '#f1f1f1'
#   textColor: '#2A3344'
- name: MyBatis-Plus官网
  desc: 🚀为简化开发而生
  link: https://baomidou.com/
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
- name: Deepin 社区
  desc: Deepin 应用开发技术分享、DTK开发经验等
  link: https://docs.deepin.org
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
- name: VForm官网
  desc: 低代码表单优选方案，拖拽式设计，一键生成源码
  link: http://www.vform666.com
  bgColor: '#f1f1f1'
  textColor: '#2A3344'
```
:::

<br/>

## 🎉上新推荐
* `v1.12.x`
  - 新增配置项`pageStyle`，用于切换页面的风格样式，可选`卡片`、 `线条`风格。[详情](/pages/a20ce8/#pagestyle)
  - 新增配置项`bodyBgImgInterval`，用于在设置了多张背景大图时修改大图切换的时间间隔。[详情](/pages/a20ce8/#bodybgimginterval)
  - 新增配置项`defaultMode`，用于修改默认外观模式(v1.12.3)。[详情](/pages/a20ce8/#defaultmode)
* `v1.11.x`：新增配置项`extendFrontmatter`，用于扩展自动生成front matter。[详情](/pages/a20ce8/#extendfrontmatter)
* `v1.10.x`：新增右侧目录栏对h2~h6标题的适配，并优化了UI，[详情](/pages/8dfab5/)。
* `v1.9.x`：新增配置文件对TypeScript的支持，参考[config.ts](https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/docs/.vuepress/config.ts)。新增[标题标记](/pages/3216b0/#titletag)。
* `v1.8.x`：新增 Markdown中使用的组件：[代码块选项卡](/pages/197691/#代码块选项卡) 。
* `v1.7.x`：新增 [自定义html模块](/pages/a20ce8/#自定义html模块) 配置，可用于插入广告模块。
* `v1.6.x`：支持[`四级目录`](/pages/33d574/#级别说明)，提高[站点结构](/pages/33d574/#级别说明)可塑性。
* `v1.5.x`：新增[`笔记`容器](/pages/d0d7eb/)，轻松插入笔记框。
* `v1.4.x`：新增了文章内容区块的 [背景底纹配置](/pages/a20ce8/#文章内容块的背景底纹)，让你的文章看起来像笔记本的风格~
* `v1.2.x`：这个版本对整体的UI细节做了很多优化，比如标签栏和分类栏等
* `v1.1.x`：从这个版本开始主题新增`超好用`、`高颜值`的Markdown容器，快去 [体验](/pages/d0d7eb/) 吧~

更多上新请查阅：[**更新日志**](https://github.com/xugaoyi/vuepress-theme-vdoing/releases)

<br/>

## ⚡️未来...

::: tip
期待 [VuePress v2.0](https://github.com/vuepress/vuepress-next) 以及 [VitePress](https://github.com/vuejs/vitepress) 的正式发布...

届时，VuePress 1.x 编译慢的缺点将得到极大的改善。我将会视情况把主题升级至 VuePress v2.0 或 VitePress。还希望大家多多 [:sparkling_heart:支持](/pages/1b12ed/) 哟，持续关注吧~
:::

<br/>

<!-- ## 💎 公众号
`有趣研究社`是本人对各种有趣的、好玩的、沙雕的创意和想法以在线小网站或者文章的形式表达出来，比如：
- [小霸王游戏机](https://game.xugaoyi.com)
- [爱国头像生成器](https://avatar.xugaoyi.com/)
- [到账语音生成器](https://zfb.xugaoyi.com/)

还有更多好玩的等你去探索吧~

::: center
<img src="https://fastly.jsdelivr.net/gh/xugaoyi/image_store@master/blog/qrcode.zdqv9mlfc0g.jpg"  style="width:190px;" />
:::

<br/> -->

## ⚡ 反馈与交流

在使用过程中有任何问题和想法，请给我提 [Issue](https://github.com/xugaoyi/vuepress-theme-vdoing/issues)。
你也可以在Issue查看别人提的问题和给出解决方案。

或者加入我们的交流群：

<table>
  <tbody>
    <tr>
      <td align="center" valign="middle">
        <img :src="$withBase('/img/qrcode/wxq.png')" class="no-zoom" style="width:120px;margin: 10px;">
        <p>vdoing微信群(添加我微信备注"进群")</p>
      </td>
      <td align="center" valign="middle">
        <img :src="$withBase('/img/qrcode/qqq.webp')" alt="群号: 694387113" class="no-zoom" style="width:120px;margin: 10px;">
        <p>vdoing QQ群: 694387113</p>
      </td>
    </tr>
  </tbody>
</table>


<!-- AD -->
<!-- <div class="wwads-cn wwads-horizontal page-wwads" data-id="136"></div>
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  } -->
</style>
