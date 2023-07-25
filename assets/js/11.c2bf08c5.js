(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{344:function(t,v,_){"use strict";_.r(v);var i=_(7),r=Object(i.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("以下内容截取自"),v("a",{attrs:{href:"https://github.com/ted423/FXXS-Encode-Guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("FXXS-Encode-Guide"),v("OutboundLink")],1),t._v("，感谢他们的付出")])]),t._v(" "),v("h2",{attrs:{id:"图像的表示方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图像的表示方法"}},[t._v("#")]),t._v(" 图像的表示方法")]),t._v(" "),v("h3",{attrs:{id:"rgb模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rgb模型"}},[t._v("#")]),t._v(" RGB模型")]),t._v(" "),v("p",[t._v("光的三原色是红(Red)、绿(Green)、蓝(Blue)。现代的显示器技术就是通过组合不同强度的三原色，来达成任何一种可见光的颜色。图像储存中，通过记录每个像素红绿蓝强度，来记录图像的方法，称为RGB模型 (RGB Model)")]),t._v(" "),v("p",[t._v("常见的图片格式中，PNG和BMP这两种就是基于RGB模型的。")]),t._v(" "),v("p",[t._v("比如说原图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/Source.webp",alt:"原图"}})]),t._v(" "),v("p",[t._v("分别只显示R G B通道的强度，效果如下：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/R.webp",alt:"RGB-R"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/G.webp",alt:"RGB-G"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/B.webp",alt:"RGB-B"}})]),t._v(" "),v("p",[t._v("三个通道下，信息量和细节程度不一定是均匀分布的。比如说可以注意南小鸟脸上的红晕，在3个平面上的区分程度就不同——红色平面下几乎无从区分，造成区别的主要是绿色和蓝色的平面。外围白色的脸颊，三色都近乎饱和；但是红晕部分，只有红色饱和，绿色和蓝色不饱和。这是造成红色凸显的原因。")]),t._v(" "),v("h3",{attrs:{id:"yuv模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#yuv模型"}},[t._v("#")]),t._v(" YUV模型")]),t._v(" "),v("p",[t._v("除了RGB模型，还有一种广泛采用的模型，称为YUV模型，又被称为亮度-色度模型（Luma-Chroma）。它是通过数学转换，将RGB三个通道，转换为一个代表亮度的通道(Y,又称为Luma)，和两个代表色度的通道(UV，并成为Chroma)。")]),t._v(" "),v("p",[t._v("YUV模型干的是类似的事儿。通过对RGB数据的合理转换，得到另一种表示方式。YUV模型下，还有不同的实现方式。举个用的比较多的YCbCr模型：它把RGB转换成一个亮度(Y)，和 蓝色色度(Cb) 以及 红色色度(Cr)。转换背后复杂的公式大家不需要了解，只需要看看效果：")]),t._v(" "),v("p",[t._v("只有亮度通道：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/Y.webp",alt:"YUV-Y"}})]),t._v(" "),v("p",[t._v("只有蓝色色度：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/Cb.webp",alt:"YUV-Cb"}})]),t._v(" "),v("p",[t._v("只有红色色度：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/Cr.webp",alt:"YUV-Cr"}})]),t._v(" "),v("p",[t._v("在图像视频的加工与储存中，YUV格式一般更受欢迎，理由如下：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("人眼对亮度的敏感度远高于色度，因此人眼看到的有效信息主要来自于亮度。YUV模型可以将绝大多数的有效信息分配到Y通道。UV通道相对记录的信息少的多。相对于RGB模型较为平均的分配，YUV模型将多数有效信息集中在Y通道，不但减少了冗余信息量，还为压缩提供了便利")])]),t._v(" "),v("li",[v("p",[t._v("保持了对黑白显示设备的向下兼容")])]),t._v(" "),v("li",[v("p",[t._v("图像编辑中，调节亮度和颜色饱和度，在YUV模型下更方便。")])])]),t._v(" "),v("p",[t._v("几乎所有的视频格式，以及广泛使用的JPEG图像格式，都是基于YCbCr模型的。播放的时候，播放器需要将YCbCr的信息，通过计算，转换为RGB。"),v("strong",[t._v("这个步骤称为渲染（Rendering）")])]),t._v(" "),v("p",[t._v("每个通道的记录，通常是用整数来表示。比如RGB24，就是RGB各8个bit，用0~255 (8bit的二进制数范围)来表示某个颜色的强弱。YUV模型也不例外，也是用整数来表示每个通道的高低。")]),t._v(" "),v("h3",{attrs:{id:"色深"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#色深"}},[t._v("#")]),t._v(" 色深")]),t._v(" "),v("p",[t._v("色深(bit-depth)，就是我们通常说的8bit和10bit，是指每个通道的精度。8bit就是每个通道用一个8bit整数"),v("code",[t._v("(0~255)")]),t._v("代表，10bit就是用10bit整数"),v("code",[t._v("(0~1023)")]),t._v("来显示。16bit则是"),v("code",[t._v("0~65535")])]),t._v(" "),v("p",[t._v("(注意，上文的表述是不严谨的，视频在编码的时候，并非一定能用到"),v("code",[t._v("0~255")]),t._v("的所有范围，而是可能有所保留，只用到一部分，比如"),v("code",[t._v("16~235")]),t._v("。这我们就不详细展开了)")]),t._v(" "),v("p",[t._v("你的显示器是8bit的，代表它能显示RGB每个通道0~255所有强度。但是视频的色深是YUV的色深，播放的时候，YUV需要通过计算转换到RGB。因此，10bit的高精度是间接的，它使得运算过程中精度增加，以让最后的颜色更细腻。")]),t._v(" "),v("p",[t._v("如何理解8bit显示器，播放10bit是有必要的呢：")]),t._v(" "),v("p",[t._v("一个圆的半径是12.33m, 求它的面积，保留两位小数。")]),t._v(" "),v("p",[t._v("半径的精度给定两位小数，结果也要求两位小数，那么圆周率精度需要给多高呢？也只要两位小数么？")]),t._v(" "),v("p",[t._v("取pi=3.14, 面积算出来是477.37平方米")]),t._v(" "),v("p",[t._v("取pi=3.1416，面积算出来是477.61平方米")]),t._v(" "),v("p",[t._v("取pi精度足够高，面积算出来是477.61平方米。所以取pi=3.1416是足够的，但是3.14就不够了。")]),t._v(" "),v("p",[t._v("换言之，即便最终输出的精度要求较低，也不意味着参与运算的数字，以及运算过程，可以保持较低的精度。在最终输出是8bit RGB的前提下，10bit YUV比起8bit YUV依旧具有精度优势的原因就在这里。事实上，8bit YUV转换后，覆盖的精度大概相当于8bit RGB的26%，而10bit转换后的精度大约可以覆盖97%——你想让你家8bit显示器发挥97%的细腻度么？看10bit吧。")]),t._v(" "),v("p",[t._v("8bit精度不足，主要表现在亮度较低的区域，容易形成色带。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Picture/Video/8bit.webp",alt:"色带"}})]),t._v(" "),v("p",[t._v("注意这图右边那一圈圈跟波浪一样的效果。这就是颜色精度不足的表现。")]),t._v(" "),v("p",[t._v("10bit的优势不只在于显示精度的提高，在提高视频压缩率，减少失真方面，相对8bit也有优势。这方面就不展开了。")]),t._v(" "),v("h2",{attrs:{id:"清晰度与画质简述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#清晰度与画质简述"}},[t._v("#")]),t._v(" 清晰度与画质简述")]),t._v(" "),v("p",[v("strong",[t._v("经常看到的说法：“这个视频清晰度是1080p的”。其实看过上文你就应该知道，1080p只是视频的分辨率，它不能直接代表清晰度——比如说，我可以把一个480p的dvd视频拉升到1080p，那又怎样呢？它的清晰度难道就提高了么？")])]),t._v(" "),v("p",[t._v("视频的画质，是由以下几点共同决定的")]),t._v(" "),v("ol",[v("li",[t._v("源的画质。")])]),t._v(" "),v("p",[t._v("俗话说的好，上梁不正下梁歪。如果源的画质本身很差，那么再如何折腾都别指望画质好到哪去。所以压制者往往会选择更好的源进行压制——举个栗子，BDRip一般都比TVRip来的好，哪怕是720p。蓝光也分销售地区，比如说一部日本的动画片，一般日本销售的日版，画质上比美版、台版、港版啥的都来得好。选取更好的源，就能做到画质上优先一步。")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("播放条件。")])]),t._v(" "),v("p",[t._v("观众是否用了足矣支持高画质播放的硬件和软件。这就是为啥我们在发布Rip的同时大力普及好的播放器；有时候一个好的播放器胜过多少在制作方面的精力投入。")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("码率投入 VS 编码复杂度。")])]),t._v(" "),v("p",[t._v("视频的时间和空间复杂度，并称为编码复杂度。编码复杂度高的视频，往往细节多，动态高（比如《魔法少女小圆剧场版 叛逆的物语》），这样的视频天生需要较高的码率去维持一个优秀的观看效果。")]),t._v(" "),v("p",[t._v("相反，有些视频编码复杂度低（比如《请问今天要来点兔子么》，动态少，线条细节柔和），这种视频就是比较节省码率的。")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[t._v("码率分配的效率和合理度。")])]),t._v(" "),v("p",[t._v("同样多的码率，能起到怎样好的效果，被称为效率。比如H264就比之前的RealVideo效率高；10bit比8bit效率高；编码器先进，参数设置的比较合理，编码器各种高端参数全开（通常以编码时间作为代价），码率效率就高。")]),t._v(" "),v("p",[t._v("合理度就是码率在时空分配方面合理与否，合理的分配，给观众的观看效果就比较统一协调。 码率分配的效率和合理度，是对制作者的要求，要求制作者对片源分析，参数设置有比较到位的理解。")]),t._v(" "),v("p",[t._v("码率分配和合理度做的好，就常常能做出低码率高画质的良心作品。")]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("编码前的预处理。预处理分三种：")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("客观修复。强调修复片源固有的瑕疵，比如锯齿，色带，晕轮等等。")])]),t._v(" "),v("li",[v("p",[t._v("主观调整，强调将片源调整的更适合人眼观看，比如适度的锐化，调色（有时候你是可以通过科学方法判定片源的颜色有问题，然后针对的做修复的）。")])]),t._v(" "),v("li",[v("p",[t._v("移除无效高频信息，比如降噪，避免码率浪费在无效的噪点上")])])]),t._v(" "),v("p",[t._v("预处理做的好，往往能达到画质上超越片源，或是在几乎不牺牲清晰度的前提下，节省码率开销。")]),t._v(" "),v("p",[t._v("但是预处理是一把双刃剑，优化的同时，可能引入副效果。降噪、抗锯齿、去晕轮等操作会不可避免的损失一些有效细节（或多或少，取决于制作者水准）；主观调整很可能 会引入副效果（比如过度锐化会导致锯齿和晕轮），或是变成了作者的自我满足，形成对观众的欺骗。")]),t._v(" "),v("p",[v("strong",[t._v("综上，一个优秀的画质，是由片源、制作者、观看者共同决定的；码率高低也只是部分因素，并非决定性的效果。")])])])}),[],!1,null,null,null);v.default=r.exports}}]);