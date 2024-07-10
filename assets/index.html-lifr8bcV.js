import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as h,c as d,b as e,d as t,a as o,w as r,e as a}from"./app-funPpyP0.js";const c={},u=e("h2",{id:"software-error-reporting-issues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#software-error-reporting-issues","aria-hidden":"true"},"#"),t(" Software Error Reporting Issues")],-1),p=e("h3",{id:"error-reporting-when-starting-a-task",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-reporting-when-starting-a-task","aria-hidden":"true"},"#"),t(" Error reporting when starting a task")],-1),f=e("li",null,[t("If "),e("code",null,"_pickle.UnpicklingError: invalid load key, '\\x00'."),t(" is reported when starting a task, find and delete the folder inside according to the path "),e("code",null,"C:\\Users\\<UserName>\\AppData\\Local\\Temp\\gen_py\\"),t(". If the AppData folder is not found, in the Windows Explorer, click View and check the Hidden Items checkbox.")],-1),m=e("code",null,"xxx is not a valid path",-1),g=e("li",null,[t("SVFI does not support directly reading files located on network locations (i.e., files whose paths start with "),e("code",null,"/"),t("). The network location needs to be mounted as a virtual disk to be readable.")],-1),b=e("li",null,'If using vspipe (including using the full vspipe workflow), and the task directly enters the task merging stage when starting and reports an error "Chunk not found", it indicates that vapoursynth cannot read this video. The vspipe decoding function must be turned off to try using ffmpeg decoding.',-1),w=e("li",null,'If an error is reported when starting the task, "Conversion from a high frame rate to a low frame rate cannot be performed yet", and the input frame rate and output frame rate "are set correctly", it indicates that the input video is not a constant frame rate supported by SVFI. It is necessary to use shanaencoder to re-encode the input video to make it a constant frame rate supported by SVFI (such as 24, 24000/1001), etc.',-1),v=a('<h3 id="how-to-solve-the-problem-when-the-software-prompts-insufficient-video-memory-or-insufficient-memory" tabindex="-1"><a class="header-anchor" href="#how-to-solve-the-problem-when-the-software-prompts-insufficient-video-memory-or-insufficient-memory" aria-hidden="true">#</a> How to solve the problem when the software prompts insufficient video memory or insufficient memory?</h3><h4 id="insufficient-video-memory" tabindex="-1"><a class="header-anchor" href="#insufficient-video-memory" aria-hidden="true">#</a> Insufficient video memory?</h4><ul><li><p>At least <strong>2G of video memory</strong> is required for interpolating <strong>1080P videos</strong>, and at least <strong>6G of video memory</strong> for <strong>4K videos</strong>. Please try to enable staggered frame interpolation to avoid exceeding the video memory limit.</p></li><li><p>If you are sure that the video memory of your machine is large enough, you can try to <strong>restart the machine to see if it solves the problem</strong>.</p></li><li><p>In the output resolution setting, reducing the video resolution can be tried. In the output quality setting, the half-precision mode can be enabled. Also, in the frame interpolation setting, try to reduce the optical flow scale (setting it to <strong>2.0 or above</strong> will greatly increase the video memory usage, be sure to check the value of this option).</p></li><li><p>In some cases, the error reporting shows &quot;encountering occasional CUDA errors&quot;, which may also be caused by insufficient video memory, and the settings need to be changed referring to the above instructions.</p></li></ul><h4 id="insufficient-memory" tabindex="-1"><a class="header-anchor" href="#insufficient-memory" aria-hidden="true">#</a> Insufficient memory?</h4><ul><li>For machines with less than 16G of running memory, it is recommended to use the <strong>function of manually specifying the memory size of the cache area</strong> in the <strong>output quality setting</strong> to specify the memory usage size.</li><li>Recommended minimum: 1G.</li></ul><h4 id="error-handling-process-when-the-graphics-card-is-enable-with-ecc-mode" tabindex="-1"><a class="header-anchor" href="#error-handling-process-when-the-graphics-card-is-enable-with-ecc-mode" aria-hidden="true">#</a> Error handling process when the graphics card is enable with ECC mode</h4>',6),y={href:"https://channellfd.com/msfs-rtx-4090-issues-resolved/",target:"_blank",rel:"noopener noreferrer"},k=a('<h3 id="what-to-do-with-broken-pipe" tabindex="-1"><a class="header-anchor" href="#what-to-do-with-broken-pipe" aria-hidden="true">#</a> What to do with Broken Pipe?</h3><ul><li>You can try to reduce the parameter selected for the NVIDIA GPU hard-coding preset in the output quality setting, or turn off this function.</li><li>Use CPU H.265 Fast or ProRes encoding.</li><li>Without changing other settings, check the <code>Debug Mode</code> below the advanced settings and restart the task. The software will report an error again, but the output log will contain the error information of the compression software. Please adjust the settings according to the error information (such as when using <strong>Anime4K</strong>, it is easy to report the error of <code>Unable to allocate sufficient video memory</code>) and retry, or contact the developer to solve.</li></ul><h3 id="what-if-the-software-processing-is-completed-but-fails-to-merge-at-the-end" tabindex="-1"><a class="header-anchor" href="#what-if-the-software-processing-is-completed-but-fails-to-merge-at-the-end" aria-hidden="true">#</a> What if the software processing is completed but fails to merge at the end</h3><ul><li>Check the project folder and delete the possible <code>chunk-000-000000-000000</code> block file, which often appears to be damaged.</li><li>Check each block video file to see if it can be played; if not, it means the file is damaged and needs to be restored at this block and then merged.</li><li>If the task is completed but only the merge fails, click <code>Merge Current Task</code> in the toolbox. If it still reports an error, please turn off the subtitle and audio merge, and after the video merge is completed, use a third-party tool such as MKVToolNix to manually merge the audio and subtitle tracks.</li><li>If the task is not completed, click Restore Progress below the basic settings and then click the Start button on the home page to continue the task.</li><li>If the merge fails or the output video clip is much shorter than the preset duration, it is necessary to check each chunk video file in the project folder to see if it can be played; if not, it indicates that the file is damaged and needs to be deleted and progress recovery is carried out to regenerate the chunk.</li></ul><h2 id="other-error-reporting-issues" tabindex="-1"><a class="header-anchor" href="#other-error-reporting-issues" aria-hidden="true">#</a> Other Error Reporting Issues</h2><h3 id="steam-cannot-open-the-software-or-report-garbled-characters-and-pop-up-error-boxes" tabindex="-1"><a class="header-anchor" href="#steam-cannot-open-the-software-or-report-garbled-characters-and-pop-up-error-boxes" aria-hidden="true">#</a> Steam cannot open the software, or report garbled characters and pop-up error boxes.</h3><ul><li>If Steam cannot open the software, or report garbled characters and pop-up error boxes. Add the white list path of all exes in the SVFI installation folder to the anti-virus software, and restore the files in the quarantine area. Check the file integrity in Steam.</li><li>Do not install irrelevant fonts in the system to prevent potential software failure.</li><li>If <code>steamworks: None has no App</code> is reported when starting, please find the SteamworksPy64.dll in the steamworks folder under the SVFI installation directory and add it to the white list.</li><li>Close the background anti-virus software, or choose to upload the false positives.</li></ul><h3 id="steam-cannot-download-files-prompting-insufficient-permissions-or-disk-space" tabindex="-1"><a class="header-anchor" href="#steam-cannot-download-files-prompting-insufficient-permissions-or-disk-space" aria-hidden="true">#</a> Steam cannot download files, prompting insufficient permissions or disk space.</h3><ul><li>Check if there is sufficient space on the installation disk (it is recommended to install on a solid state drive).</li><li>Exit Steam. Enter the file explorer, right-click the installation disk - Security - Grant <code>Full Control</code> permission to all users.</li></ul><h2 id="software-settings-issues" tabindex="-1"><a class="header-anchor" href="#software-settings-issues" aria-hidden="true">#</a> Software Settings Issues</h2><h3 id="if-there-is-only-the-ncnn-model-in-the-frame-interpolation-algorithm-dropdown" tabindex="-1"><a class="header-anchor" href="#if-there-is-only-the-ncnn-model-in-the-frame-interpolation-algorithm-dropdown" aria-hidden="true">#</a> If there is only the ncnn model in the frame interpolation algorithm dropdown:</h3><p>Follow the steps below to correct the error:</p><ul><li>Check if you have an NVIDIA GPU. If not, this situation is normal.</li><li>Exit the software, click <code>steam-library-SVFI-settings (gear)-properties-installed files-check software files-integrity</code></li><li>Check the background anti-virus software, allow the false positive threat from the SVFI installation folder, <strong>add the entire SVFI installation folder to the white list</strong></li><li>Delete the <code>svfi_gpu_info.json</code> in the software installation folder, and restart the software</li><li>If it still doesn&#39;t work, manually delete the three files <code>Installation Folder\\torch\\lib\\cublas64_11.dll</code>, <code>torch\\lib\\caffe2_nvrtc.lib</code>, and <code>torch\\lib\\caffe2_nvrtc.dll</code> and then execute the above steps.</li></ul><h3 id="can-the-progress-be-restored-if-the-frame-interpolation-is-exited-halfway-can-t-find-the-progress" tabindex="-1"><a class="header-anchor" href="#can-the-progress-be-restored-if-the-frame-interpolation-is-exited-halfway-can-t-find-the-progress" aria-hidden="true">#</a> Can the progress be restored if the frame interpolation is exited halfway? Can&#39;t find the progress?</h3><ul><li>Go to <strong>Work Status Recovery</strong> and click <strong>Auto Find Progress</strong>.</li><li>If the software displays &quot;No work progress found&quot; after clicking the button, please troubleshoot the problem according to the following steps: <ul><li>Confirm that the output folder exists</li><li>Confirm that there is a video file named <code>chunk-xxx-yyyyyy-zzzzzz</code> in the output folder. If not, it means there is no recoverable work progress</li><li>Confirm that the <strong>last 10 digits</strong> of the output folder are the same as the <strong>task id</strong> of the input file. If not, please manually change the task id and click the button to try again.</li><li>If the problem still cannot be solved, move the mouse over the option button, read the option description carefully, and fill in the appropriate values in <strong>Starting block count and starting input frame count</strong> according to the prompts.</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>For version 6.x, you can directly drag the output folder/project folder into the input file box to directly restore the project progress</p></div><h3 id="the-svfi-window-size-is-abnormal" tabindex="-1"><a class="header-anchor" href="#the-svfi-window-size-is-abnormal" aria-hidden="true">#</a> The SVFI window size is abnormal?</h3><ul><li>Open the location of SVFI from Steam, and find SVFI.Community for the community version.</li><li>Find SVFI.Professional for professional users.</li><li>Right-click, Properties, Compatibility, Change high DPI settings, override high DPI scaling behavior, System.</li></ul><h3 id="fewer-available-functions-than-in-the-tutorial" tabindex="-1"><a class="header-anchor" href="#fewer-available-functions-than-in-the-tutorial" aria-hidden="true">#</a> Fewer available functions than in the tutorial?</h3><ul><li>Not updated to the latest version</li><li>Some functions are in internal or public beta testing and will be made public later</li><li>The purchased version is not the professional version</li></ul><h3 id="how-to-only-perform-super-resolution-without-frame-interpolation-at-the-same-time" tabindex="-1"><a class="header-anchor" href="#how-to-only-perform-super-resolution-without-frame-interpolation-at-the-same-time" aria-hidden="true">#</a> How to only perform super-resolution without frame interpolation at the same time?</h3><p>After setting the parameters, change the frame interpolation ratio to one time, and then click Encode (do not click Interpolate)</p><h3 id="how-to-perform-slow-motion-frame-interpolation-slow-motion-etc" tabindex="-1"><a class="header-anchor" href="#how-to-perform-slow-motion-frame-interpolation-slow-motion-etc" aria-hidden="true">#</a> How to perform slow motion frame interpolation (slow motion, etc.)?</h3><ul><li>For live-action shooting, please refer to the time remapping in custom encoding.</li><li>For animation, first open one shot and three de-duplication or <strong>forward de-duplication</strong>, then refer to the time remapping in custom encoding, or use AE for variable speed frame interpolation and other post-processing after one shot and three de-duplication frame interpolation.</li></ul><h3 id="how-to-determine-the-original-resolution-of-the-animation" tabindex="-1"><a class="header-anchor" href="#how-to-determine-the-original-resolution-of-the-animation" aria-hidden="true">#</a> How to determine the original resolution of the animation</h3>',25),_={href:"https://github.com/Infiziert90/getnative",target:"_blank",rel:"noopener noreferrer"},I=a('<h2 id="output-effect-issues" tabindex="-1"><a class="header-anchor" href="#output-effect-issues" aria-hidden="true">#</a> Output Effect Issues</h2><div class="hint-container tip"><p class="hint-container-title">warning</p><p>Due to operations such as frame interpolation and super-resolution, the output video may have difficulties in decoding by some players due to high resolution or large bitrate, resulting in situations such as stuttering and incorrect resolution. Here, it is recommended to use mpv instead of other players (such as potplayer, VLC, etc.) to play the video to avoid troubles caused by incorrect playback settings.</p></div><h3 id="what-to-do-if-the-frame-interpolation-effect-is-not-smooth" tabindex="-1"><a class="header-anchor" href="#what-to-do-if-the-frame-interpolation-effect-is-not-smooth" aria-hidden="true">#</a> What to do if the frame interpolation effect is not smooth?</h3><ul><li>This situation may be caused by duplicate frames in the original video, or animation (with 1 shot N), you can try to enable duplicate frame removal in the <strong>frame interpolation settings</strong> and adjust the duplicate removal value.</li></ul><h3 id="what-to-do-if-the-exported-video-has-a-lot-of-noise-graininess-blurriness" tabindex="-1"><a class="header-anchor" href="#what-to-do-if-the-exported-video-has-a-lot-of-noise-graininess-blurriness" aria-hidden="true">#</a> What to do if the exported video has a lot of noise/graininess/blurriness?</h3><ul><li>Before frame interpolation, pull down the <strong>rendering quality CRF value</strong> in the encoding quality settings, or <strong>adjust the compression preset</strong>.</li></ul><h3 id="what-to-do-if-the-video-frame-interpolated-has-distortions-etc" tabindex="-1"><a class="header-anchor" href="#what-to-do-if-the-video-frame-interpolated-has-distortions-etc" aria-hidden="true">#</a> What to do if the video frame interpolated has distortions, etc.?</h3><ul><li>If this situation occurs in animation frame interpolation, <strong>it is recommended to turn off duplicate frame removal or reduce the duplicate removal value. You can also try to increase the optical flow scale to reduce the possibility of image jello</strong>.</li><li>If you have video editing skills, you can patiently use different parameters to frame interpolate several videos, and take the best results of each segment for splicing.</li><li>If the embedded subtitles (hard subtitles, burned subtitles) are distorted, there is currently no good solution. If it is animation frame interpolation, it is recommended to use subtitle-free resources for frame interpolation, and then find subtitles for embedding.</li></ul><h3 id="the-output-video-has-color-cast" tabindex="-1"><a class="header-anchor" href="#the-output-video-has-color-cast" aria-hidden="true">#</a> The output video has color cast</h3><ul><li>First, check in the software&#39;s task list to see if the video is marked as an unknown color space <ul><li>If it is marked as an unknown color space, find the output settings in the advanced settings and manually specify the <strong>input color conversion curve</strong></li><li>If you don&#39;t know what the color conversion curve is, try the first three in turn until the output video is not color cast</li></ul></li><li>If the above does not solve the problem, please export <code>settings.ini</code> under the advanced settings, and then select a section of the original video and its mediainfo and post it to the steam discussion area</li></ul>',10),x={class:"hint-container tip"},S=e("p",{class:"hint-container-title"},"Explanation of a special color cast situation",-1),V={href:"https://github.com/dwbuiten/d2vsource/issues/40",target:"_blank",rel:"noopener noreferrer"},C=e("ul",null,[e("li",null,[e("p",null,"In the first setting, the color conversion curve of SVFI is set to auto, then when SVFI processes this video and completes the YUV to RGB conversion process, it will use the wrong color range tag information, that is, parse the 16-255 content with the range of 0-255. Since the black of 16 in the range of 0-255 is not pure black, the final output result shows that the black appears whiter and the white appears darker.")]),e("li",null,[e("p",null,"In the second setting, the color conversion curve of SVFI is set to bt709, and SVFI will force to parse the video content using the tv color range, and this setting output will not cause color cast.")])],-1),F=a(`<h3 id="the-output-video-hdr-metadata-is-lost" tabindex="-1"><a class="header-anchor" href="#the-output-video-hdr-metadata-is-lost" aria-hidden="true">#</a> The output video HDR metadata is lost</h3><p>For example, HDR10 static data is lost.</p><p>At this time, the output log may have the following records:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2024-04-06 21:45:15,705 - video - 495 - ERROR - Parse Master Display Info Failed: [{&#39;side_data_type&#39;: &#39;SMPTE 12-1 timecode&#39;, &#39;timecodes&#39;: [{&#39;value&#39;: &#39;01:00:00:00&#39;}]}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If a similar situation occurs, you need to fill in relevant parameters in the custom compression command line to force assigning HDR10 static metadata, and re-export the video;<br> Or use the mkvtoolnix packaging tool to repackage the static metadata;</p><p>The specific parameters for using the custom compression command line can be obtained through the following:</p><ul><li>Enable the debug mode under the advanced settings</li><li>Click Only Compress to process other normal HDR10 videos</li><li>Observe the parameters about the compression command line in the output log, select the data containing the HDR10 parameter and then fill it in the custom compression command</li></ul><h3 id="video-output-has-bad-blocks" tabindex="-1"><a class="header-anchor" href="#video-output-has-bad-blocks" aria-hidden="true">#</a> Video output has bad blocks</h3>`,8),P=e("li",null,"First, it is recommended to replace the video player, you can try to use the MPV player",-1),U=e("li",null,"If the problem persists after replacing the MPV player, consider replacing the CPU encoder",-1),z=e("h3",{id:"video-output-has-black-screen-flickering",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#video-output-has-black-screen-flickering","aria-hidden":"true"},"#"),t(" Video output has black screen flickering")],-1),D=e("li",null,"This is caused by the graphics card overload.",-1),A=e("li",null,"It is necessary to reduce the input resolution or change the algorithm model.",-1),E={href:"https://substance3d.adobe.com/documentation/spdoc/gpu-drivers-crash-with-long-computations-128745489.html",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,[t("Using "),e("code",null,"spatiotemporal linearization"),t(" or "),e("code",null,"forward de-duplication"),t(" for frame interpolation may also cause this black screen. If this situation still occurs after trying the above methods, please change to another de-duplication method.")],-1),R=e("h3",{id:"video-output-audio-and-video-are-out-of-sync",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#video-output-audio-and-video-are-out-of-sync","aria-hidden":"true"},"#"),t(" Video output audio and video are out of sync")],-1),H=e("strong",null,"variable frame rate",-1),N=e("strong",null,"variable frame rate",-1),W={href:"https://sourceforge.net/projects/shanaencoder/",target:"_blank",rel:"noopener noreferrer"},G=e("strong",null,"constant frame rate",-1),j=e("li",null,[t("If it is really impossible to double-compress the input video, or if the input video is constant frame rate but the output video is still audio and video out of sync, you can try to enable the "),e("code",null,"Use VSPipe Decoding"),t(" option in the advanced settings, but this still cannot guarantee that the output audio and video can be synchronized in the above cases")],-1),q=e("code",null,"VSPipe Decoding",-1),L=e("code",null,"use_minterpolate",-1),B=e("code",null,"global_advanced_settings",-1),M=e("code",null,"true",-1),O=a('<h3 id="scene-list-from-transition-chooser-de-syncs-from-output-when-using-vfi" tabindex="-1"><a class="header-anchor" href="#scene-list-from-transition-chooser-de-syncs-from-output-when-using-vfi" aria-hidden="true">#</a> Scene List from Transition Chooser de-syncs from output when using VFI</h3><ul><li>Enable Debug mode under advanced settings,</li><li>The scene that SVFI reads from the transition list will be marked out in the output video with a green mark on the top left corner.</li><li>Adjust the number of shift option in the scene detection settings panel to sort of calibrate the scene detection result</li></ul><h2 id="software-performance-issues" tabindex="-1"><a class="header-anchor" href="#software-performance-issues" aria-hidden="true">#</a> Software Performance Issues</h2><h3 id="how-to-determine-if-the-software-processing-speed-is-normal-what-to-do-if-the-graphics-card-utilization-rate-is-low" tabindex="-1"><a class="header-anchor" href="#how-to-determine-if-the-software-processing-speed-is-normal-what-to-do-if-the-graphics-card-utilization-rate-is-low" aria-hidden="true">#</a> How to determine if the software processing speed is normal? What to do if the graphics card utilization rate is low?</h3><ul><li>For NVIDIA GPUs, first click the small triangle next to the <code>3D</code> utilization rate on the <code>Performance</code> page in the task manager, and change it to <strong>CUDA</strong>. If this option is not available, you need to turn off the hardware acceleration feature of Windows. If you don&#39;t want to turn it off, you can treat the 3D utilization rate as the CUDA utilization rate. For AMD GPUs, you need to change it to <code>Compute0</code>.</li><li><strong>The CUDA/3D/Compute0 utilization rate is generally around 85% or higher for normal, and there is no need to care about the CPU utilization rate. It is recommended that the CPU utilization rate is less than 80%, otherwise it will affect the graphics card scheduling speed</strong>.</li><li>If you find that the graphics card utilization rate indicator is low, please check whether the <strong>CPU utilization rate</strong> has reached 100%; if it has reached 100%, it means that the processing speed has encountered a CPU bottleneck. In this case, you can adjust other options, such as encoding settings, using <strong>hardware decoding</strong> or <strong>hardware encoding</strong>, <strong>adjusting the compression preset or changing the encoder</strong> to speed up (such as changing <code>CPU H.265 very slow</code> to <code>fast</code>, and <code>CPU H.264 slow</code> to <code>NVENC H.264 slow</code>), until the graphics card utilization rate exceeds 80%.</li><li>If the CPU is not the bottleneck, it is recommended to use a <strong>better encoder and preset</strong>. Because the number of cores of the graphics card determines the frame interpolation speed, and when using CPU encoding, the CPU determines the encoding speed.</li><li>Under the same settings, to improve the task speed, basically only by <strong>replacing the graphics card with more cores and larger bandwidth</strong>, but the encoding speed can be considered to be improved by <strong>selecting a faster encoder and preset</strong>.</li></ul><h3 id="does-the-software-take-up-a-lot-of-memory" tabindex="-1"><a class="header-anchor" href="#does-the-software-take-up-a-lot-of-memory" aria-hidden="true">#</a> Does the software take up a lot of memory?</h3><ul><li>Please pay attention to whether the software takes up a very large amount of physical memory.</li><li>Unreasonable settings (such as needlessly pursuing 8K video processing) will cause the software to consume a very large amount of memory.</li><li>When the physical memory is exhausted, the software will call virtual memory, resulting in a slower speed.</li><li>Therefore, after the physical memory consumption exceeds 70%, please change the <strong>manual specified cache memory size</strong> in the <strong>Advanced Settings - Output Settings</strong> to <strong>1G</strong>.</li><li>Generally, please allocate more virtual memory to the system disk to avoid memory allocation errors.</li></ul><h3 id="why-is-the-processing-speed-of-high-end-nvidia-gpus-very-slow" tabindex="-1"><a class="header-anchor" href="#why-is-the-processing-speed-of-high-end-nvidia-gpus-very-slow" aria-hidden="true">#</a> Why is the processing speed of high-end NVIDIA GPUs very slow?</h3><ul><li>If the frame interpolation or super-resolution function is used, please observe the <strong>shared video memory usage</strong> in the task manager. If the shared video memory usage exceeds 25% and the graphics card utilization rate is at full load, it means that the current settings exceed the load limit of the graphics card, and you need to refer to the advanced settings to reduce the settings, such as reducing the output resolution.</li><li>The software runs at the fastest speed when the shared video memory usage is 0.</li></ul><h3 id="what-to-do-if-the-video-memory-is-not-fully-utilized" tabindex="-1"><a class="header-anchor" href="#what-to-do-if-the-video-memory-is-not-fully-utilized" aria-hidden="true">#</a> What to do if the video memory is not fully utilized?</h3><ul><li>The more video memory is not necessarily occupied, the faster the speed. Even if the SVFI program fills up the video memory, it may not be able to improve the speed, because there are a large number of other limiting factors such as the render queue length and the machine power consumption limit.</li></ul><h3 id="when-a-task-is-forced-to-end-the-video-memory-and-memory-cannot-be-released" tabindex="-1"><a class="header-anchor" href="#when-a-task-is-forced-to-end-the-video-memory-and-memory-cannot-be-released" aria-hidden="true">#</a> When a task is forced to end, the video memory and memory cannot be released?</h3><ul><li>In the advanced settings, find the toolbox option and click the <strong>End Residual Processes</strong> button.</li></ul><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>This will end all tasks, including other tasks of multi-opening SVFI. To avoid ending the multi-opening SVFI, please manually end all SVFI CLI processes under the current SVFI process in the task manager, or disable the forced exit option in the preferences. When enabling multi-threading, <strong>it is always recommended not to click the end task button easily</strong>.</p></div><h3 id="will-long-term-frame-interpolation-damage-the-graphics-card" tabindex="-1"><a class="header-anchor" href="#will-long-term-frame-interpolation-damage-the-graphics-card" aria-hidden="true">#</a> Will long-term frame interpolation damage the graphics card?</h3><ul><li>Running SVFI for a long time generally will not affect the life of the graphics card, but if the heat dissipation measures are not done well, the temperature is too high, or the frame interpolation program is run after overclocking, it will still cause damage to the graphics card.</li><li>According to the EULA (Software User Agreement), SVFI is not responsible for hardware damage caused by frame interpolation.</li></ul>',16);function K(Y,J){const n=s("RouterLink"),i=s("ExternalLinkIcon");return h(),d("div",null,[u,p,e("ul",null,[f,e("li",null,[t("If "),m,t(" is reported and SVFI is used in an Internet cafe, some network management systems will map the software folder to different disks, resulting in the inability to start the software. Please copy the entire folder to another drive letter, and then start manually without Steam according to "),o(n,{to:"/en/pages/svfi-cli/"},{default:r(()=>[t("Advanced Explanation of Command Line")]),_:1}),t(".")]),g,b,w]),v,e("p",null,[t("Please refer to "),e("a",y,[t("this post"),o(i)]),t(" for processing.")]),k,e("ul",null,[e("li",null,[e("a",_,[t("How to determine the original resolution of the animation"),o(i)])])]),I,e("div",x,[S,e("p",null,[t("Background: A user used an unknown encoder to encode a certain bt709 video to yuv 420p 10bit with assigned tv color range (16-255). The output video should be marked as tv color range, but was wrongly marked as pc (full range) by the unknown encoder. The user then processed this video with SVFI and output a color cast and a non-color cast video under two different settings. Now, according to "),e("a",V,[t("this discussion"),o(i)]),t(", the reason for the color cast is analyzed:")]),C]),F,e("ul",null,[P,U,e("li",null,[t("If green blocks appear when the video is exported and played, enable "),o(n,{to:"/en/pages/advanced-settings/#use-vspipe-for-pre-decoding"},{default:r(()=>[t("VSPipe Decoding")]),_:1})])]),z,e("ul",null,[D,A,e("li",null,[t("Refer to "),e("a",E,[t("this solution"),o(i)]),t(" to modify the response time setting of the GPU to avoid similar errors")]),T]),R,e("ul",null,[e("li",null,[t("SVFI does not support "),H,t(" video input. If the "),N,t(" tag is found in the input video in the task list, please use "),e("a",W,[t("shanaencoder"),o(i)]),t(" to re-encode the input video into "),G,t(" and then input it into SVFI.")]),j,e("li",null,[t("If the "),q,t(" option cannot be enabled, you can try to set the "),L,t(" key in "),B,t(" to "),M,t(", specifically refer to "),o(n,{to:"/en/pages/other-advanced-settings/"},{default:r(()=>[t("here")]),_:1})])]),O])}const Z=l(c,[["render",K],["__file","index.html.vue"]]);export{Z as default};
