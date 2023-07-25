(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{339:function(t,v,_){"use strict";_.r(v);var a=_(7),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("以下内容截取自"),v("a",{attrs:{href:"https://github.com/ted423/FXXS-Encode-Guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("FXXS-Encode-Guide"),v("OutboundLink")],1),t._v("，感谢他们的付出")])]),t._v(" "),v("h2",{attrs:{id:"帧率-分辨率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#帧率-分辨率"}},[t._v("#")]),t._v(" 帧率，分辨率")]),t._v(" "),v("p",[t._v("视频是由连续的图像构成的。每一张图像，我们称为"),v("strong",[t._v("一帧")]),t._v("(frame)。图像则是由"),v("strong",[t._v("像素")]),t._v("(pixel)构成的。一张图像有多少像素，称为这个图像的分辨率。比如说1920x1080的图像，说明它是由横纵1920x1080个像素点构成。视频的分辨率就是每一帧图像的分辨率。")]),t._v(" "),v("p",[t._v("一个视频，每一秒由多少图像构成，称为这个视频的"),v("strong",[t._v("帧率(frame-rate)")]),t._v("。常见的帧率有"),v("code",[t._v("24000/1001=23.976")]),t._v(", "),v("code",[t._v("30000/1001=29.970")]),t._v(", "),v("code",[t._v("60000/1001=59.940")]),t._v(", "),v("code",[t._v("25.000")]),t._v(", "),v("code",[t._v("50.000")]),t._v("等等。这个数字是一秒钟内闪过的图像的数量。比如23.976，就是1001秒内，有24000张图像。视频的帧率是可以是"),v("strong",[t._v("恒定的(cfr, Const Frame-Rate)")]),t._v("，也可以是"),v("strong",[t._v("变化的(vfr, Variable Frame-Rate)")])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("请注意SVFI不支持可变帧率(vfr)的处理，向SVFI输入此类视频会导致音频和画面不同步。")]),t._v(" "),v("p",[t._v("SVFI仅支持整数（如25.00, 24.00）及NTSC制式（分母为1001的帧率，如23.976、29.97、59.94）的帧率作为输入。")]),t._v(" "),v("p",[t._v("输入其他类型的帧率（如24.5），会被视作NTSC制式帧率并很大概率导致输出音画不同步。")])]),t._v(" "),v("h2",{attrs:{id:"码率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#码率"}},[t._v("#")]),t._v(" 码率")]),t._v(" "),v("p",[v("strong",[t._v("码率")]),t._v(" 的定义是视频文件体积除以时间。单位一般是Kbps(Kbit/s)或者Mbps(Mbit/s)。注意1B(Byte)=8b(bit)。所以一个24分钟，900MB的视频：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("体积："),v("code",[t._v("900MB = 900MByte = 7200Mbit")])])]),t._v(" "),v("li",[v("p",[t._v("时间："),v("code",[t._v("24min = 1440s")])])]),t._v(" "),v("li",[v("p",[t._v("码率："),v("code",[t._v("7200/1440 = 5000 Kbps = 5Mbps")])])])]),t._v(" "),v("p",[t._v("当视频文件的时间基本相同的时候（比如现在一集番大概是24分钟），码率和体积基本上是等价的，都是用来描述视频大小的参数。长度分辨率都相同的文件，体积不同，实际上就是码率不同。")]),t._v(" "),v("p",[t._v("码率也可以解读为单位时间内，用来记录视频的数据总量。码率越高的视频，意味着用来记录视频的数据量越多，潜在的解读就是视频可以拥有更好的质量。（注意，仅仅是潜在，后文我们会分析为什么高码率不一定等于高画质）")]),t._v(" "),v("h3",{attrs:{id:"码率控制方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#码率控制方法"}},[t._v("#")]),t._v(" 码率控制方法")]),t._v(" "),v("p",[t._v("码率控制是指视频编码中决定输出码率的过程，常用的码率控制方法有：")]),t._v(" "),v("h4",{attrs:{id:"cbr-constant-bitrate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cbr-constant-bitrate"}},[t._v("#")]),t._v(" CBR(Constant Bitrate)")]),t._v(" "),v("p",[t._v("固定比特率，指文件从头到尾都是一种位速率。相对于VBR和ABR来讲，它压缩出来的文件体积很大，而且视频质量相对于VBR和ABR不会有明显的提高。")]),t._v(" "),v("p",[v("strong",[t._v("特点：")])]),t._v(" "),v("ul",[v("li",[t._v("码率稳定，但是质量不稳定，带宽有效利用率不高，特别当该值设置不合理，在复杂运动场景下，如果设置的码率不够，画面则会非常模糊，非常影响观看体验；")]),t._v(" "),v("li",[t._v("但是输出视频码率基本稳定，便于计算视频体积大小；")])]),t._v(" "),v("h4",{attrs:{id:"vbr-variable-bitrate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vbr-variable-bitrate"}},[t._v("#")]),t._v(" VBR(Variable Bitrate)")]),t._v(" "),v("p",[t._v("动态比特率，也就是"),v("strong",[t._v("没有固定的比特率")]),t._v("，音视频压缩软件在压缩时根据音视频数据的复杂程度即时确定使用什么比特率，这是以质量为前提兼顾文件大小的方式。")]),t._v(" "),v("p",[t._v("相对于CBR来说\n适用场景：VBR适用于那些对带宽和编码速度不太限制，但是对质量有很高要求的场景。特别是在运动的复杂场景下也可以保持比较高的清晰度且输出质量比较稳定，适合对延时不敏感的点播，录播或者存储系统。")]),t._v(" "),v("p",[v("strong",[t._v("特点：")])]),t._v(" "),v("ul",[v("li",[t._v("码率不稳定，质量基本稳定且非常高；")]),t._v(" "),v("li",[t._v("编码速度一般比较慢，点播、下载和存储系统可以优先使用，不适合低延时、直播系统；")]),t._v(" "),v("li",[t._v("这种模型完全不考虑输出的视频带宽，为了质量，需要多少码率就占用多少，也不太考虑编码速度；")])]),t._v(" "),v("h4",{attrs:{id:"cqp-constant-qp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cqp-constant-qp"}},[t._v("#")]),t._v(" CQP(Constant QP)")]),t._v(" "),v("blockquote",[v("p",[t._v("应该算编码器实现VBR的方式")])]),t._v(" "),v("p",[t._v("固定QP，最简单的码率控制方式，每帧图像都按照一个特定的QP来编码，每帧编码后的数据量有多大是未知的，既不是码率优先模型也不是质量优先模型，不过是实现最简单的模型；")]),t._v(" "),v("p",[t._v("适用场景：一般不建议使用这种方式，因为这种方式不考虑编码内容的复杂性，用相同的压缩比处理每一帧。出来的视频质量和码率都不固定。个人觉得只有那种非常简单的场景，比如静止不变的场景运动量很小的场景可以尝试用，一遇到复杂场景，码率波动就非常大。或者在算法研究或者验证可以使用。")]),t._v(" "),v("p",[v("strong",[t._v("特点：")])]),t._v(" "),v("ul",[v("li",[t._v("瞬时码率会随场景复杂度波动；")]),t._v(" "),v("li",[t._v("编码速度快，调控最简单,每帧的QP值相同；")])]),t._v(" "),v("h4",{attrs:{id:"crf-constant-rate-factor"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#crf-constant-rate-factor"}},[t._v("#")]),t._v(" "),v("strong",[t._v("CRF(Constant Rate Factor)")])]),t._v(" "),v("p",[t._v("应该算编码器实现VBR的方式\n恒定码率系数。把某一个”视觉质量”作为输出目标。通过降低那些耗费码率但是又难以用肉眼察觉的帧（高速运动或者纹理丰富）的质量提升那些静态帧的码率来达到此目的。")]),t._v(" "),v("p",[v("strong",[t._v("特点：帧间QP变化，帧内宏块的QP变化，输出码率未知，各帧输出的视觉质量基本恒定，这种方式相当于固定质量模式+限制码率峰值的方式。")])]),t._v(" "),v("ul",[v("li",[t._v("适用场景：对视频质量有一定要求的场合，CRF值可以简单理解为对视频质量期望的一个输出固定值，希望无论是在运动复杂场景下还是在静止简单情况下，都希望有一个稳定的主观视频质量可以选择该模式，该模式是视频质量优先模型。视频质量可以简单理解为视频的清晰度，像素的细腻程度和视频的流畅度。")]),t._v(" "),v("li",[t._v("与恒定QP类似，但追求主观感知到的质量恒定，瞬时码率也会随场景复杂度波动，视频帧之间或者内部宏块之间的QP值都不一样；")]),t._v(" "),v("li",[t._v("对于快速运动或细节丰富的场景会适当增大量化失真（因为人眼不敏感），反之对于静止或平坦区域则减少量化失真；")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("SVFI 内置"),v("code",[t._v("渲染质量CRF")]),t._v("(即CRF或CQP)、"),v("code",[t._v("目标码率")]),t._v("(CBR)两种码率控制方案。")]),t._v(" "),v("p",[t._v("在使用"),v("code",[t._v("渲染质量CRF")]),t._v("来控制码率时，SVFI对除"),v("code",[t._v("NVENC")]),t._v("以外的编码器使用CRF控制；对"),v("code",[t._v("NVENC")]),t._v("编码器使用CQP码率控制。")]),t._v(" "),v("p",[t._v("在使用"),v("code",[t._v("目标码率")]),t._v("来控制码率时，统一使用固定比特率（CBR）控制。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);