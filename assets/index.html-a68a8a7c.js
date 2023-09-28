import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as a,d as n,a as s,w as c,e as u}from"./app-a587a3d8.js";const r={},d=a("h2",{id:"补帧-内插帧-video-frame-interpolation-vfi",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#补帧-内插帧-video-frame-interpolation-vfi","aria-hidden":"true"},"#"),n(" 补帧 = 内插帧 => Video Frame Interpolation = VFI")],-1),k=a("p",null,"内插帧指通过某些特定算法提升视频帧率，即在帧与帧之间插入新的、原视频不含有的帧，以使观感更流畅。",-1),v={href:"https://baike.baidu.com/item/%E8%BF%90%E5%8A%A8%E8%A1%A5%E5%81%BF/9194264",target:"_blank",rel:"noopener noreferrer"},m={href:"https://baike.baidu.com/item/%E5%85%89%E6%B5%81%E6%B3%95/180688",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/megvii-research/ECCV2022-RIFE",target:"_blank",rel:"noopener noreferrer"},_={style:{"text-align":"right"}},h=u(`<p>效果参考：</p><p>::: cardImgList</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">target</span><span class="token punctuation">:</span> _blank
    <span class="token key atrule">imgHeight</span><span class="token punctuation">:</span> auto
    <span class="token key atrule">objectFit</span><span class="token punctuation">:</span> contain
    <span class="token key atrule">lineClamp</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">data</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/bilibili/yuan.jpg
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 《原神》
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 剧情CM短片 8K60帧 SVFI补帧超分
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.bilibili.com/video/BV1FS4y1C7RD
  <span class="token key atrule">author</span><span class="token punctuation">:</span> SVFI视觉 
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /img/svfi.ico
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/bilibili/umaron.jpg
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 赛马娘
  <span class="token key atrule">desc</span><span class="token punctuation">:</span>  第二季 NCOP 8K60帧
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.bilibili.com/video/BV1QY411b7e4
  <span class="token key atrule">author</span><span class="token punctuation">:</span> SVFI视觉 
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /img/svfi.ico
<span class="token punctuation">-</span> <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/bilibili/emilia.jpg
  <span class="token key atrule">name</span><span class="token punctuation">:</span>  Re：从零开始的异世界生活
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> 第二季后半 NCED Believe in you
  <span class="token key atrule">link</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//www.bilibili.com/video/BV1kF411p7FB
  <span class="token key atrule">author</span><span class="token punctuation">:</span> SVFI视觉 
  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /img/svfi.ico
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4);function y(g,f){const e=t("ExternalLinkIcon"),i=t("RouterLink");return p(),o("div",null,[d,k,a("p",null,[n("常见算法有“基于”硬件的"),a("a",v,[n("MEMC"),s(e)]),n(", “基于”软件的"),a("a",m,[n("光流法"),s(e)]),n("。")]),a("p",null,[n("SVFI使用基于深度学习的插帧算法"),a("a",b,[n("RIFE及其衍生算法"),s(e)]),n("进行补帧，其效果比其他算法更好。")]),a("div",_,[a("p",null,[s(i,{to:"/pages/052617/#%E8%A1%A5%E5%B8%A7%E7%AE%97%E6%B3%95"},{default:c(()=>[n("SVFI内置补帧算法说明")]),_:1})])]),h])}const V=l(r,[["render",y],["__file","index.html.vue"]]);export{V as default};
