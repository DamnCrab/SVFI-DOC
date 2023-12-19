import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,e as l}from"./app-4cB34Das.js";const d={},r=l('<h2 id="补帧任务预设推荐" tabindex="-1"><a class="header-anchor" href="#补帧任务预设推荐" aria-hidden="true">#</a> 补帧任务预设推荐</h2><p>对于<strong>压制模式</strong>，2K以上分辨率<strong>务必</strong>使用H265或ProRes编码</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>务必确认自己的播放器可以播放 H.265 10bit，<br> 否则选择 H.264 veryslow</p></div><h3 id="动漫-普通补帧" tabindex="-1"><a class="header-anchor" href="#动漫-普通补帧" aria-hidden="true">#</a> 动漫 (普通补帧)</h3><table><thead><tr><th style="text-align:center;">场景</th><th style="text-align:center;">视频流畅度优化</th><th style="text-align:center;">压制模式</th><th style="text-align:center;">光流尺度</th><th style="text-align:center;">补帧模型</th></tr></thead><tbody><tr><td style="text-align:center;">极高质量</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">CPU H.265 slow</td><td style="text-align:center;">1.0</td><td style="text-align:center;">gmfss pg104</td></tr><tr><td style="text-align:center;">质量</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr><tr><td style="text-align:center;">常规</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">CPU H.265 fast</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr><tr><td style="text-align:center;">速度（N卡）</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">NVENCC H.264 quality</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">速度（N卡,核显加速压制）</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">QSVENCC H.264 best</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">速度（A卡）</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">VCEENCC H.264 slow</td><td style="text-align:center;">1.0</td><td style="text-align:center;">ncnn rife 4.6</td></tr></tbody></table><h3 id="动漫-慢放补帧与动漫剪辑" tabindex="-1"><a class="header-anchor" href="#动漫-慢放补帧与动漫剪辑" aria-hidden="true">#</a> 动漫 (慢放补帧与动漫剪辑)</h3><table><thead><tr><th style="text-align:center;">场景</th><th style="text-align:center;">视频流畅度优化</th><th style="text-align:center;">压制模式</th><th style="text-align:center;">光流尺度</th><th style="text-align:center;">补帧模型</th></tr></thead><tbody><tr><td style="text-align:center;">顶级流畅(素材帧率在24fps左右)</td><td style="text-align:center;">前进消重</td><td style="text-align:center;">从上方的预设表中选择</td><td style="text-align:center;">1.0</td><td style="text-align:center;">gmfss pg104</td></tr><tr><td style="text-align:center;">极致流畅(素材帧率在24fps左右)</td><td style="text-align:center;">一阶差分去重</td><td style="text-align:center;">从上方的预设表中选择</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr><tr><td style="text-align:center;">极致流畅(素材帧率在24fps左右)</td><td style="text-align:center;">去除一拍二与一拍三</td><td style="text-align:center;">从上方的预设表中选择</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr><tr><td style="text-align:center;">仅减轻卡顿,抑制果冻引入</td><td style="text-align:center;">固定阈值去重 0.80</td><td style="text-align:center;">从上方的预设表中选择</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr></tbody></table><h3 id="真人" tabindex="-1"><a class="header-anchor" href="#真人" aria-hidden="true">#</a> 真人</h3><table><thead><tr><th style="text-align:center;">场景</th><th style="text-align:center;">视频流畅度优化</th><th style="text-align:center;">压制模式</th><th style="text-align:center;">光流尺度</th><th style="text-align:center;">补帧模型</th></tr></thead><tbody><tr><td style="text-align:center;">质量</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">CPU H.265 medium</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr><tr><td style="text-align:center;">常规</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">CPU H.265 fast</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.13</td></tr><tr><td style="text-align:center;">速度（N卡）</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">NVENCC H.264 quality</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">速度（N卡,核显加速压制）</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">QSVENCC H.264 best</td><td style="text-align:center;">1.0</td><td style="text-align:center;">rife 4.6</td></tr><tr><td style="text-align:center;">速度（A卡）</td><td style="text-align:center;">时空线性化</td><td style="text-align:center;">VCEENCC H.264 slow</td><td style="text-align:center;">1.0</td><td style="text-align:center;">ncnn rife 4.6</td></tr></tbody></table><h2 id="超分任务预设推荐" tabindex="-1"><a class="header-anchor" href="#超分任务预设推荐" aria-hidden="true">#</a> 超分任务预设推荐</h2><p>（维护中...）</p>',11),a=[r];function i(s,c){return e(),n("div",null,a)}const y=t(d,[["render",i],["__file","index.html.vue"]]);export{y as default};