import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as s,c as a,b as t,d as i,a as l,e as o}from"./app-5a067cd3.js";const p="/Statics/UserGuide/41.png",g="/Statics/UserGuide/42.png",c="/Statics/UserGuide/43.png",d={},u=o('<h2 id="分享或导入软件设置" tabindex="-1"><a class="header-anchor" href="#分享或导入软件设置" aria-hidden="true">#</a> 分享或导入软件设置</h2><h3 id="分享我的设置" tabindex="-1"><a class="header-anchor" href="#分享我的设置" aria-hidden="true">#</a> 分享我的设置</h3><blockquote><p>点击显示高级设置, 打开高级设置面板后, 点击下方的导出当前设置到文本文件。</p></blockquote><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>弹出文件夹内的&quot;日期.settings.ini&quot;文件即为您的设置文件。</p></blockquote><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><blockquote><p>建议您重命名导出的settings文件并妥善保管, 欢迎您将自己觉得好用的设置上传至Steam工坊的教程栏目中。</p></blockquote><h3 id="导入设置" tabindex="-1"><a class="header-anchor" href="#导入设置" aria-hidden="true">#</a> 导入设置</h3><blockquote><p>只需将settings文件拖入到软件内即可完成设置载入, 成功载入会弹出如下提醒。</p></blockquote><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p>社区版的设置导入到专业版中,或导入不同版本SVFI的设置可能会导致任务执行出错(原因: 载入了不可用功能),<br> 若出现了这种情况,请点击软件菜单栏中的 启动 - 载入默认设置。</p></div><h2 id="其他使用技巧" tabindex="-1"><a class="header-anchor" href="#其他使用技巧" aria-hidden="true">#</a> 其他使用技巧</h2>',12),h=o("<li><p>SVFI中，大部分选项不是“数字”越高效果越好（如转场参数，去重参数，CRF，光流尺度，补帧模型）。如果不懂建议严格按照说明或<strong>默认</strong>来选择。</p></li><li><p><strong>对于每个带有（？）或（！）的选项，鼠标悬浮在其上方会显示相应解释。</strong></p></li><li><p>如果<strong>追求质量</strong>，全部<strong>选择常规以上的预设</strong>；<strong>速度</strong>选项相对效果差。</p></li><li><p>对于CRF如果没有相应的知识，就默认选择参数16或者通过百度学习相关知识。</p></li><li><p>鼠标悬浮在<strong>转场选项</strong>上，可以看到<strong>相应说明</strong>。转场选项通常<strong>参数设置在12</strong> 即可。</p></li><li><p>去重选项只有2d 动漫需要使用去重选项3d，真人一律选择不去除重复帧。</p></li><li><p>社区版：单一识别功能中，根据用户反馈<strong>参数值设置在0.8-1.0效果较好</strong>。</p></li><li><p>专业版：功能<strong>1拍2</strong>更保守，软件<strong>错误更少</strong>。功能<strong>1拍3及以上</strong>更激进更丝滑，但是<strong>问题和错误经常更多</strong>（如画面消失等）。</p></li><li><p>如果没有特殊情况，建议您选择功能1拍2，其他选项参数全部默认就可以。</p></li><li><p>在svfi 补帧时，一般情况下会占用CPU（选用CPU 编码时）和n 卡的cuda。如果CPU一直满载，而cuda 占用波动极大时，则CPU为瓶颈。此时可以<strong>调整压制预设或者更换编码器以加快速度</strong>（如CPU H.265 very slow 调整为fast，CPU H.264 slow 调整为NVENC H.264 slow）。</p></li><li><p>注意如果CPU 不为瓶颈，推荐选用<strong>更佳的编码器和预设</strong>。因为显卡的cuda 决定了补帧速度，CPU 决定了编码速度。补帧速度只能通过<strong>更换更好的显卡来提升</strong>，但是<strong>编码速度可以考虑通过选择速度更快</strong>，质量稍逊的编码器和预设。</p></li><li><p>CPU 编码为软编，软编<strong>普遍速度慢文件小、质量好</strong>。</p></li><li><p>NVENC 、QSV、VCE 为硬件编码，其中NVENC 使用nVidia显卡，QSV 使用intel 核显，VCE使用AMD显卡，硬件编码的特点，速度快、文件大，在低码率小文件的情况下，质量比CPU 差。</p></li>",13),_={href:"https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new",target:"_blank",rel:"noopener noreferrer"},f=o("<li><p>硬编会对显卡有一定负载，如果选用NVENC 出现Broken Pipe 错误，则<strong>降低N卡硬编预设或者换用核显编码QSV</strong>。如果仍有同样错误，则<strong>使用CPU</strong>。</p></li><li><p>超分补帧建议：<br> 如果使用cugan，esrgan等算法进行超分，建议超分补帧分开进行，否则显存溢出(<code>CUDA out of memory</code>问题会很多)<br> 如果你只有1张可用于超分补帧的显卡，建议开始任务之前关闭其他有可能占用显存的软件。如果你不嫌麻烦，由于Windows桌面本身也会占用一定的显存，如果你的电脑有核显，可以重启电脑进BIOS设置核显输出，并把显示器信号插头插在主板上，再开机使用SVFI，这样可以获得最大的可使用显存，并且超分补帧的处理速度会更快一点。</p></li><li><p>压制设置的建议：<br> 如果不是压制组对压制十分严格，可使用硬件编码(NVENC,VCE,QSV等)以避免CPU压制瓶颈。CPU瓶颈会导致显卡占用率下降<br> CRF设置为16，其余的按上面说的来就行</p></li><li><p>补帧最常用的模型：<br> 使用2.3模型</p></li><li><p>动漫超分常用的模型：<br> 使用CUGAN模型</p></li><li><p>初次使用TRT编码时，不要开启大于1的线程数。如果初次使用报错，请尝试五到六次。若仍然报错，请联系开发人员。</p></li><li><p>在使用播放器界面进行预览时，如果输入为HDR视频，预览画面发灰是正常现象。</p></li>",7);function m(C,b){const n=r("ExternalLinkIcon");return s(),a("div",null,[u,t("ul",null,[h,t("li",null,[t("p",null,[i("硬编优先选择NVENC，在N卡硬编预设（您可以鼠标悬浮看说明）这一项中，可以自行在"),t("a",_,[i("https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new"),l(n)]),i("查询自己显卡的硬编预设,20系和30系一般都为7th+。")])]),f])])}const U=e(d,[["render",m],["__file","05.使用技巧.html.vue"]]);export{U as default};
