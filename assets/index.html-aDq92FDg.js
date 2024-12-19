import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c as o,b as a,d as e,a as r,w as t,e as l}from"./app-8snbn7eT.js";const c={},d={class:"hint-container warning"},m=a("p",{class:"hint-container-title"},"注意",-1),v=l(`<p>SVFI 支持使用命令行调用</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为避免可能的性能损耗，使用纯OLS命令行执行任务速度最快。<br> 在可能的情况下，使用全VSPipe工作流速度最快。</p></div><h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2><ol><li>在SVFI安装根目录新建<code>steam_appid.txt</code>，填写如下内容</li></ol><blockquote><p>1692080</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p>填写该文本文件将使SVFI以独立应用程序模式启动，以避免Steam客户端的干扰。</p><p>可实现<strong>软件多开</strong>、<strong>软件安装位置迁移</strong>、<strong>软件版本保留</strong>等特殊操作。</p><ul><li>软件版本保留：在steam操作回退到指定分支后，复制整个SVFI安装文件夹并确保<code>steam_appid.txt</code>存在，以后即可点击该文件夹下的<code>SVFI.Professional</code>或者<code>SVFI.Community</code>运行该版本的SVFI。</li><li>建议关闭偏好设置的强制退出选项，以避免SVFI任务结束后导致所有OLS进程退出。</li></ul></div><ol><li>在<strong>SVFI安装根目录</strong>启动命令提示符<code>cmd</code>（若安装位置不在系统盘，则无需管理员权限），输入<code>one_line_shot_args -h</code>并回车，应能够看到以下类似内容：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: #### SVFI CLI tool by Jeanna #### [-h] -i INPUT --config CONFIG -t TASK_ID [--concat-only] [--extract-only] [--render-only]
[--force-args FORCE_ARGS [FORCE_ARGS ...]] [-p] [--pipe-in] [--pipe-out] [--pipe-iwPIPE_IN_WIDTH]
[--pipe-ih PIPE_IN_HEIGHT] [--pipe-in-fps PIPE_IN_FPS]
[--pipe-in-pixfmt {rgb24,rgb48be,rgb48le,gbrp,gbrp16le}] [--pipe-rgb]
[--pipe-colormatrix {470bg,170m,2020ncl,709}]

To enhance Long video/image sequence quality

options:
  -h, --help            show this help message and exit

Basic Settings:
  -i INPUT, --input INPUT
                        Path of input video/image sequence folder. leave &#39;-&#39; for stdin.
  --config CONFIG       Path of config, should be .ini or .json file.
  -t TASK_ID, --task-id TASK_ID
                        13-digit Task id, can not leave blank
  --concat-only         Concat Chunk only
  --extract-only        Extract input to frames Only
  --render-only         Render only without VFI process
  --force-args FORCE_ARGS [FORCE_ARGS ...]
                        Force to update config. Examples: --force-args output_chunk_cnt=-1 interp_start=-1
  -p, --preview         [Dilapidated] Preview Settings.

Pipe Settings:
  Set the follow parameters when &#39;-mid&#39; is assigned, or you will encounter exceptions.Output Y4M at YUV444P10

  --pipe-in             This enables OLS to obtain input data from stdin, use with &#39;-i -&#39;
  --pipe-out            This enables OLS to pipe y4m or rgb/rgb48be output to stdout
  --pipe-iw PIPE_IN_WIDTH
                        Width of input raw RGB, effective and mandatory when --pipe-in appointed
  --pipe-ih PIPE_IN_HEIGHT
                        Height of input raw RGB, effective and mandatory when --pipe-in appointed
  --pipe-in-fps PIPE_IN_FPS
                        Input stream FPS, effective and mandatory when --pipe-in appointed
  --pipe-in-pixfmt {rgb24,rgb48be,rgb48le,gbrp,gbrp16le}
                        Pixel format of input raw RGB input, effective and mandatory when --pipe-in appointed
  --pipe-rgb            Pipe pixel format of rgb or rgb48be raw data to stdout, otherwise pipe y4m. Effective when --pipe-out appointed
  --pipe-colormatrix {470bg,170m,2020ncl,709}
                        Colormatrix for RGB-YUV Conversion, effective when --pipe-in appointed and --pipe-rgb NOT appointed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="典型使用场景说明" tabindex="-1"><a class="header-anchor" href="#典型使用场景说明" aria-hidden="true">#</a> 典型使用场景说明</h2><h3 id="多开svfi" tabindex="-1"><a class="header-anchor" href="#多开svfi" aria-hidden="true">#</a> 多开SVFI</h3><p><code>one_line_shot_args</code>（以下简称<code>OLS</code>）程序在完成以上配置后支持多开，支持多任务同步操作，请注意这可能会造成极大的资源占用。</p><p>三个必需参数：</p><ul><li><code>--input</code>: 待进行画质处理的视频文件或图片序列所在文件夹</li><li><code>--config</code>：SVFI GUI程序生成的配置文件，一般位于安装目录的Configs文件夹</li><li><code>--task-id</code>：任务ID，非空的字符串，用于区分不同任务。</li></ul><h3 id="管道输入" tabindex="-1"><a class="header-anchor" href="#管道输入" aria-hidden="true">#</a> 管道输入</h3><p>SVFI支持从其他进程输入RGB流，目前支持<code>rgb24,rgb48be,rgb48le,gbrp,gbrp16le</code>五种像素格式的裸流输入。</p><p>必须填写<code>--pipe-in</code>以启用SVFI管道输入功能，并另行指定<code>--pipe-iw</code>输入图像像素长，<code>--pipe-ih</code>宽，<code>--pipe-in-fps</code>输入流帧率（仅支持浮点型），<code>--pipe-in-pixfmt</code>输入的像素格式。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p><code>rgb48be,rgb48le,gbrp16le</code>表示输入数据为48位，16bit高精度输入。</p></li><li><p>使用VSPipe输出RGB流，OLS接受RGB流时，若不确定VSPipe的RGB输出通道顺序，请指定ols的<code>--pipe-in-pixfmt</code>该参数为<code>gbrp</code>或<code>gbrp16le</code>。</p></li></ul></div><h3 id="管道输出" tabindex="-1"><a class="header-anchor" href="#管道输出" aria-hidden="true">#</a> 管道输出</h3><p>SVFI支持输出<code>rgb24</code>或<code>rgb48be</code>或<code>YUV444P10</code>的Y4M流到<code>stdout</code>中。</p><p>必须填写<code>--pipe-out</code>以启用此功能，</p><ul><li>若需要输出<code>YUV444P10</code>，请指定<code>--pipe-colormatrix</code>用于SVFI进行RGB到YUV流的正确色彩转换。<code>Y4M</code>输出为默认操作。</li><li>若要输出<code>RGB</code>流，请指定<code>--pipe-rgb</code>，具体的输出像素格式由配置文件各选项控制，一般而言开启高精度工作流则输出<code>rgb48</code>，非高精度工作流输出<code>rgb24</code>。</li></ul><h3 id="强行指定svfi使用的gpu编号" tabindex="-1"><a class="header-anchor" href="#强行指定svfi使用的gpu编号" aria-hidden="true">#</a> 强行指定SVFI使用的GPU编号</h3><ul><li>在SVFI界面内选择GPU下拉列表的第一项启动任务，生成任务配置文件，然后按照在线教程另外新建命令行cmd。</li><li>输入<code>set CUDA_VISIBLE_DEVICES=1</code>回车。</li><li>调用<code>OLS</code>，将指定在PCIE第二卡位的GPU运行SVFI。</li><li>这个方法可以解决使用int8量化时无法指定使用显卡的问题。</li></ul><h3 id="命令行示例" tabindex="-1"><a class="header-anchor" href="#命令行示例" aria-hidden="true">#</a> 命令行示例</h3><h4 id="使用同一套设置批量处理文件夹内所有mp4、webm、gif文件" tabindex="-1"><a class="header-anchor" href="#使用同一套设置批量处理文件夹内所有mp4、webm、gif文件" aria-hidden="true">#</a> 使用同一套设置批量处理文件夹内所有mp4、webm、gif文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> %i <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&quot;文件夹路径/*.mp4&quot;</span> <span class="token string">&quot;文件夹路径/*.webm&quot;</span> <span class="token string">&quot;文件夹路径/*.gif&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token punctuation">(</span>one_line_shot_args.exe <span class="token parameter variable">--input</span> <span class="token string">&quot;%i&quot;</span> --task-id <span class="token string">&quot;%~ni&quot;</span> <span class="token parameter variable">--config</span> <span class="token string">&quot;SVFI_Config_vfi_sr.ini&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中：</p><ul><li>要在SVFI安装软件根目录下使用命令提示符<code>cmd</code>执行。</li><li><code>SVFI_Config_vfi_sr.ini</code>是通过点击高级设置下方导出设置按钮导出的设置文件。</li><li>该操作会输出所有文件到配置文件中指定的文件夹。</li></ul><h4 id="示例一-ffmpeg-ols-ffmpeg" tabindex="-1"><a class="header-anchor" href="#示例一-ffmpeg-ols-ffmpeg" aria-hidden="true">#</a> 示例一：<code>ffmpeg-&gt;OLS-&gt;ffmpeg</code></h4><blockquote><p>使用<code>ffmpeg</code>进行高精度16bit拆帧、输入<code>OLS</code>进行仅压制处理，输出高精度<code>rgb48be</code>到<code>ffmpeg</code>进行压制</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> test.mp4 <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb48 <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span> one_line_shot_args.exe <span class="token parameter variable">-i</span> - <span class="token parameter variable">--config</span> <span class="token string">&quot;Configs/SVFI_Config_pipe_test.ini&quot;</span> <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">1920</span> --pipe-ih <span class="token number">1080</span>  --pipe-in-fps <span class="token number">24</span> --render-only --pipe-out --pipe-rgb --pipe-in-pixfmt rgb48be <span class="token operator">|</span> ffmpeg.exe <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-s</span> 1920x1080 <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-pix_fmt</span> rgb48be <span class="token parameter variable">-f</span> rawvideo <span class="token parameter variable">-r</span> <span class="token number">24</span> <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> output.mp4 <span class="token parameter variable">-y</span> <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例二-ffmpeg-ols-ols-ffmpeg" tabindex="-1"><a class="header-anchor" href="#示例二-ffmpeg-ols-ols-ffmpeg" aria-hidden="true">#</a> 示例二：<code>ffmpeg-&gt;OLS-&gt;OLS-&gt;ffmpeg</code></h4><blockquote><p>使用<code>ffmpeg</code>进行高精度16bit拆帧、输入第一个<code>OLS</code>管道进行超分处理、输入第二个<code>OLS</code>管道进行补帧处理、输出<code>Y4M</code>到<code>ffmpeg</code>进行压制</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> test.mp4 <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb48be <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span> one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">--config</span> Configs/SVFI_Config_pipe_1.ini <span class="token parameter variable">-t</span> pipe_1 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span> --pipe-in-fps <span class="token number">24</span> --render-only --pipe-out --pipe-rgb --pipe-in-pixfmt rgb48be <span class="token operator">|</span> one_line_shot_args.exe <span class="token parameter variable">-i</span> - <span class="token parameter variable">--config</span> Configs/SVFI_Config_pipe_2.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">1920</span> --pipe-ih <span class="token number">1080</span>  --pipe-in-fps <span class="token number">24</span> --pipe-out --pipe-in-pixfmt rgb48be <span class="token operator">|</span> ffmpeg.exe <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> output.mp4 <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例三-vapoursynth-ffmpeg-ols-ffmpeg" tabindex="-1"><a class="header-anchor" href="#示例三-vapoursynth-ffmpeg-ols-ffmpeg" aria-hidden="true">#</a> 示例三：<code>Vapoursynth-&gt;ffmpeg-&gt;OLS-&gt;ffmpeg</code></h4><blockquote><p>使用<code>Vapoursynth</code>对输入进行预处理、输入<code>ffmpeg</code>进行<code>Y4M</code>转高精度<code>rgb48be</code>、转低精度<code>rgb24</code>、输入<code>OLS</code>处理并压制</p></blockquote><p>使用的<code>Vapoursynth</code>脚本<code>input.vpy</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> vapoursynth <span class="token keyword">as</span> vs
<span class="token keyword">from</span> vapoursynth <span class="token keyword">import</span> core
video <span class="token operator">=</span> core<span class="token punctuation">.</span>lsmas<span class="token punctuation">.</span>LWLibavSource<span class="token punctuation">(</span><span class="token string">r&#39;test.mp4&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 960x540, 24fps</span>

<span class="token comment"># DO SOMETHING</span>

video<span class="token punctuation">.</span>set_output<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># output yuv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vspipe input.vpy <span class="token parameter variable">--y4m</span> - <span class="token operator">|</span> ffmpeg <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-vsync</span> passthrough <span class="token parameter variable">-hwaccel</span> auto <span class="token parameter variable">-i</span> - <span class="token parameter variable">-map</span> <span class="token number">0</span>:v:0 <span class="token parameter variable">-sws_flags</span> +bicubic+full_chroma_int+accurate_rnd <span class="token parameter variable">-vf</span> copy,format<span class="token operator">=</span>yuv444p10le,format<span class="token operator">=</span>rgb48be,format<span class="token operator">=</span>rgb24,minterpolate<span class="token operator">=</span>fps<span class="token operator">=</span><span class="token number">24.000</span>:mi_mode<span class="token operator">=</span>dup <span class="token parameter variable">-f</span> image2pipe <span class="token parameter variable">-pix_fmt</span> rgb24 <span class="token parameter variable">-vcodec</span> rawvideo - <span class="token operator">|</span>  one_line_shot_args.exe  <span class="token parameter variable">-i</span> - <span class="token parameter variable">--config</span> Configs/SVFI_Config_pipe_test.ini <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">960</span> --pipe-ih <span class="token number">540</span>  --pipe-in-fps <span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="示例四-vapoursynth-ols-ffmpeg" tabindex="-1"><a class="header-anchor" href="#示例四-vapoursynth-ols-ffmpeg" aria-hidden="true">#</a> 示例四：<code>Vapoursynth-&gt;OLS-&gt;ffmpeg</code></h4><blockquote><p>使用<code>Vapoursynth</code>对输入进行预处理、输出RGB到<code>OLS</code>并转<code>RGB</code>给ffmpeg压制</p></blockquote><p>使用的<code>Vapoursynth</code>脚本<code>input.vpy</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> vapoursynth <span class="token keyword">as</span> vs
<span class="token keyword">from</span> vapoursynth <span class="token keyword">import</span> core
video <span class="token operator">=</span> core<span class="token punctuation">.</span>lsmas<span class="token punctuation">.</span>LWLibavSource<span class="token punctuation">(</span><span class="token string">r&#39;test.mp4&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 960x540, 24fps</span>

<span class="token comment"># DO SOMETHING</span>

video <span class="token operator">=</span> mvf<span class="token punctuation">.</span>ToRGB<span class="token punctuation">(</span><span class="token builtin">input</span><span class="token operator">=</span>video<span class="token punctuation">,</span> matrix<span class="token operator">=</span><span class="token string">&quot;709&quot;</span><span class="token punctuation">,</span> depth<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span> kernel<span class="token operator">=</span><span class="token string">&#39;bicubic&#39;</span><span class="token punctuation">)</span>

video<span class="token punctuation">.</span>set_output<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># output gbrp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令行：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vspipe input.vpy - <span class="token operator">|</span> one_line_shot_args.exe <span class="token parameter variable">-i</span> - <span class="token parameter variable">--config</span> <span class="token string">&quot;Configs/SVFI_Config_pipe_test.ini&quot;</span> <span class="token parameter variable">-t</span> pipe_2 --pipe-in --pipe-iw <span class="token number">1920</span> --pipe-ih <span class="token number">1080</span>  --pipe-in-fps <span class="token number">24</span> --pipe-out --render-only --pipe-in-pixfmt gbrp --pipe-rgb <span class="token operator">|</span>  ffmpeg.exe <span class="token parameter variable">-y</span> <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-s</span> 1920x1080 <span class="token parameter variable">-vsync</span> cfr <span class="token parameter variable">-pix_fmt</span> rgb24 <span class="token parameter variable">-f</span> rawvideo <span class="token parameter variable">-r</span> <span class="token number">24</span> <span class="token parameter variable">-i</span> - <span class="token parameter variable">-preset:v</span> slow <span class="token parameter variable">-c:v</span> hevc_nvenc <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-crf</span> <span class="token number">16</span> output.mp4 <span class="token parameter variable">-y</span> <span class="token parameter variable">-loglevel</span> error <span class="token parameter variable">-hide_banner</span> <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>使用管道时尽量保证精度对齐，尽量使用<code>y4m</code>以避免<code>y4m</code>转<code>rgb</code>时出现的精度丢失</li><li>建议先使用SVFI配置任务参数并启动任务后，使用<code>Configs</code>文件夹下生成的<code>Config.ini</code>进行命令行任务</li></ul></div>`,47);function u(b,k){const s=p("RouterLink");return i(),o("div",null,[a("div",d,[m,a("p",null,[e("此页说明属于进阶内容，请优先阅读"),r(s,{to:"/pages/advanced-settings/"},{default:t(()=>[e("高级内容详解")]),_:1})])]),v])}const h=n(c,[["render",u],["__file","index.html.vue"]]);export{h as default};