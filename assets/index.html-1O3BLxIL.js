import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as a,b as t,d as e,a as s,e as c}from"./app-5WIspM_N.js";const p={},l={class:"hint-container tip"},d=t("p",{class:"hint-container-title"},"提示",-1),h={href:"https://github.com/ted423/FXXS-Encode-Guide",target:"_blank",rel:"noopener noreferrer"},_=c('<h2 id="源、编码、透明度对比" tabindex="-1"><a class="header-anchor" href="#源、编码、透明度对比" aria-hidden="true">#</a> 源、编码、透明度对比</h2><p><strong>源</strong>：源是指高质量可以用于进行压制编码的视频，一般包括蓝光圆盘、高质量的WEB（一般4K的SDR）等。压片时应采用 <strong>最优质的源</strong> 进行压制，提高压制质量。</p><p>随着很多老片的BD推出，很多蓝光源是从低分辨率拉到高分辨率，被称为<strong>upscale</strong>，在压制时应注意复原为原版的分辨率，不要压制过高的分辨率（非超分辨率时）。</p><p>关于WEB源应谨慎使用，尤其1080p的web-dl一般都为低质量不可以进行二次压制源，如非必要请勿压制。4k的SDR WEB源（一般来自Netflix和Prime Video等海外流媒体）目前评价较好，可能好于1080p的BD来源，对于压制1080p的视频可以进行比较使用。</p><p>对于动漫，优先使用BD原盘，其次选择Crunchyroll等优质WEB源</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p>对于已经编码过的视频不建议二次编码，通常而言，二次编码违反选择最优质源进行压制的原则。</p></li><li><p>SVFI推荐使用原盘源压制</p></li></ul></div><p><strong>编码</strong>：编码是指对于高质量来源进行压缩编码，进一步节约体积。编码过程种主要进行片源处理，修复源较为明显常见问题，通常包括脏边、色带、碎块、颜色偏差、伽马矫正等；切除黑边，去除源中16：9比例下的黑色边框；压制空间，主要将源采用更高的压缩方式进行重新编码，通常为有损方式。</p><p><strong>透明度对比</strong>：透明度是评价源于编码之间的相似程度的指标。良好的透明度是指在有经验的编码人员下都不能较为明显区分压制作品与源之间的差距。</p><p>根据I、P、B帧的功能，在编码过程中，编码器一般会尊重I帧内容，哪怕再劣质的压制，都不会对其进行明显的转换；而针对p帧，编码器可以转化为B帧进行编码节约空间，对于B帧进行重新编码。因此透明度应该从源与压制中P-&gt;B以及B-&gt;B的转换质量对比评判的压制质量。</p><p><strong>Bloating</strong>：称为臃肿，是指实现在相同透明度情况下，码率较高。根据压制较为广泛接受的规则，当压制作品太过接近源的码率也被认为Bloating，数值如下表：(x265建议更小的比例)</p><table><thead><tr><th style="text-align:center;"></th><th>1080p</th><th>720p</th></tr></thead><tbody><tr><td style="text-align:center;">原盘码率比例</td><td>75%</td><td>50%</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>SVFI 使用预制的压制参数对超分或补帧后的视频流进行压制，在设置为<code>AUTO</code>时，会根据原视频参数自动调整压制参数</p></div>',12);function g(B,u){const n=r("ExternalLinkIcon");return i(),a("div",null,[t("div",l,[d,t("p",null,[e("以下内容截取自"),t("a",h,[e("FXXS-Encode-Guide"),s(n)]),e("，感谢他们的付出")])]),_])}const m=o(p,[["render",g],["__file","index.html.vue"]]);export{m as default};