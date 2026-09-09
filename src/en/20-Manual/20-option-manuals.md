---
title: Detailed Explanation of Advanced Settings
permalink: /en/pages/advanced-settings/

---
The following content will introduce you to the advanced settings part of the software

<div align=center>
<img src="/Statics/en/UserGuide/MainPage.png"  width=600>
</div>

# Basic Task Settings

<div align=center>
<img src="/Statics/en/UserGuide/BasicSettings.png"  width=600>
</div>

## Auto preset

According to your preference for **speed** or **quality**, options in Advanced Settings that are set to `AUTO` are chosen automatically.

Currently this affects: frame interpolation model selection when set to AUTO, and encode (compression) options.

When this option favors **speed**, related settings are tuned for faster runs with possibly middling output quality; otherwise they favor slower runs with generally more reliable output quality.

## Basic I/O control

Controls whether the output includes subtitles and audio, what the output frame rate is, and so on.

When the **Interpolate ratio** option is active, output FPS = input FPS × **Interpolate ratio**. During export, the software still uses the frame rate shown for **Output FPS**. In other words, **Interpolate ratio** is mainly a shortcut to enter common output frame rates quickly.

::: tip
Some frame interpolation models or smoothness modes require a 1× ratio, so you must click **Output FPS** and set it to the same value as the input frame rate.
:::

## Workflow Recovery

### Automatically locate progress

::: tip
- If the task stops midway due to a power loss or other unexpected interruption and the program exits, you can click **Automatically locate progress** to restore the last chunk position.
- You can also drag the project folder into the software; it will look up the progress for that project folder.
- If dragging the project folder does nothing, do not run Steam or this software under a Windows **Administrator** account with elevated privileges.
:::

Please select the task entry whose progress you want to restore before clicking this button. Then click "**Automatically Configure**", and the software will automatically restore the current task progress.

<div align=center>
<img src="/Statics/en/UserGuide/AutoLoadProgress.png"  width=600>
</div>

### Start point and End point

You can select the time period that needs processing

<div align=center>
<img src="/Statics/en/UserGuide/TaskIOTimepoint.png"  width=600>
</div>

>Input format: **hours:minutes:seconds**

::: warning
After specifying the start and end frame, manual termination or power outage may lead to the failure of progress restoration
:::

### Start from Chunk and Start Frame

Used when automatic progress search fails or when it is necessary to manually specify the starting position of task, which can be used to manually restore the progress of task.

- Start from Chunk = The **last chunk number exported in the output folder + 1** (for example, in the figure, chunk-001, the start block count should be **1+1=2**).
- Start Frame = `Single output block size in the output quality setting (rendering setting) * (Start from Chunk - 1)`.

<div align=center>
<img src="/Statics/UserGuide/8.png"  width=600>
</div>

<div align=center>
<img src="/Statics/en/UserGuide/TaskIOChunk.png"  width=600>
</div>

<div align=center>
<img src="/Statics/en/UserGuide/TaskChunkFrameCnt.png"  width=600>
</div>


As shown in the above figure, a video chunk has 1000 frames.

### Reset

Set the start block and start input frame count to the system default value, and **the software will automatically search for the restoration point and restore the task progress**.

<div align=center>
<img src="/Statics/UserGuide/61.gif"  width=600>
</div>


# Advanced software settings

## Scene Detection

<div align=center>
<img src="/Statics/en/UserGuide/SettingsScdet.png"  width=600>
</div>

### Enable scene detection

Identify scene switches

To avoid the **jelly effect** when switching scenes during VFI, it is recommended to enable scene detection.

After enabling the scene detection option, the default value for the parameter below is usually 12; if you find that the final exported video is rather choppy, you can consider adjusting it to 15; if you find that there is a significant amount of **jelly effect**, you can consider adjusting the parameter value to 9, and the range of the parameter value is typically between 9 and 15.

**As shown in the picture: jelly produced by missed judgment in transition**

<div align=center>
<img src="/Statics/UserGuide/14.gif"  width=600>
</div>

::: warning
Due to the fact that this scene detection mechanism is designed based on **long video input**, for some short video input (2-3 seconds), it is recommended to disable this scene detection function or use third-party software to generate transition data for manual transition processing to avoid jitter caused by poor automatic recognition performance.
:::

### Scdet Max threshold (default does not need to be adjusted)

When **using a fixed scene detection** is not enabled (default), the recommended value for this option is 80-90.

When **using a fixed scene detection** is enabled, the recommended value for this option is 40-60.

### Fixed Scene Detection

Use a fixed threshold (maximum recognition threshold) to identify transitions. The software will perform a similarity detection on every two frames of the video.

If the similarity is greater than the threshold, it is considered a transition frame. This mode is prone to false positives or missed detections, and is only recommended to be used when there are many missed detections with the default transition detection method, such as in a mashup with a large number of lenses.

## Manual selection of transition support

Display when the "scene detection" button is turned off

The JSON path option fills in the path of the video `transition list file` exported from Transition Chooser (TC), see [Usage Tutorial](https://youtu.be/opig4Ur_mxM?si=P85QMhrOn09r44Hb).

This method enables the import of transitions manually marked using TC software to replace the automatically recognized transitions, providing full control over where to fill frames and where not to in the input video.

<div align=center>
<img src="/Statics/en/UserGuide/SettingsScdetTC.png"  width=600>
</div>

## Other scene detection settings

### Output Detected Transitions

Output the scene frames in the video.

The scene frames will be accompanied by relevant decision information and output in the scene folder of the project folder in png format. The project folder will be retained. This option helps you spot false positives and missed transitions so you can tune the thresholds.

::: warning
This option is incompatible with **Enable NVIDIA fast decoding**.
:::

### Frame Blend Transitions

When this option is off, the previous frame is copied in proportion as the transition frame to match the output frame rate.

When this option is on, the previous and next frames are blended gradually to reduce stutter from copying transition frames.

### Extrapolate Scenes

When this option is off, the previous frame is copied as the transition frame.

When this option is on, the two frames before the transition frame are used with the frame interpolation algorithm to extrapolate, reducing stutter from copying transition frames.

::: warning
Only some frame interpolation models support this option; if the selected model does not support it, this option has no effect.

It is not recommended to enable this option when using the RIFE algorithm, otherwise jelly will be introduced.
:::

## Output Resolution Settings

<div align=center>
<img src="/Statics/en/UserGuide/SettingsResolution.png"  width=600>
</div>

### Output Resolution Preset

The dropdown box is used for resolution preset selection.

When the preset is **Custom**, you can set the final output resolution of the video. SVFI will adjust the resolution of the picture first, and then perform VFI.

### Symmetrical Cropping

Can be used to crop the black bars in the video, and the width and height need to be specified manually.

> Example: Video <Badge text="Note"/> resolution 3840x2160, actual picture resolution 3840x1620, then the **height** here is filled in as `270 = (original height - actual height) ÷ 2`.

<Badge text="Note" vertical="middle"/>: If AI super-resolution is used, the video here refers to the final output video

> Example: Input video 1920x1080, actual resolution 1920x800, super-resolution 2x output 3840x1600. Then the black border height is filled in as 280, and the output resolution can be customized to 3840x1600

:::tip
If **Auto Crop** is enabled, or both width and height are entered as -1, SVFI will automatically identify the black bars of the input video and crop them.
:::

### Pad Output

After cropping the black bars, perform processing (VFI or super-resolution), and automatically add the black bars back after filling the frames.

:::tip
This can reduce the amount of computing per frame to some extent and speed up the processing.
:::

## AI Super Resolution - to Make Video Images Clearer

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

::: warning
Performing VFI and super-resolution simultaneously will consume more video memory, and insufficient video memory may cause the task to fail.

If the video memory is less than 10G, it is recommended to press Encode button to complete the super-resolution first, and then perform VFI in another task.
:::

### Is SR later than VFI

Perform VFI first, and then perform super-resolution (this usually slows down the speed, but reduces the video memory usage and often achieves better results).

### Process GPU (Super-Resolution)

Specify which graphics card to use for super-resolution.

## Super-Resolution Algorithm

See [Model Specification](/en/pages/model-spec/)

## Introduction to Other Super-Resolution Options

### Super-Resolution Model multiplier

The super-resolution ratio of the currently selected model

### Intermediate Resolution Ratio

That is, the pre-scaling function: first scale the original video by the percentage set by the user, and then perform super-resolution

>Example: Original video: **1920x1080**, transfer resolution ratio: **50%**, model upscale: **4x**
>
>At this time, the software running process is: `1920x1080` (input) -> `960x540` (down-scaled by 50%) -> `3840x2160` (super-resolution)

::: tip
- For restoration models, the transfer resolution will be forced to be set to 100%.
:::

::: warning
- SVFI will only perform one super-resolution or restoration process on each frame, which means that when the user sets the output resolution to `400%` but uses the 2x model for super-resolution, SVFI will only perform super-resolution on the original video once to 200% using the super-resolution model, and then stretch it to 400% using bicubic scaling (Bicubic).
- Therefore, using 100% transfer resolution, using a 2x model for 400% super-resolution, and using a 4x model for 200% super-resolution will have different effects.
::: 

### Tiling mode for CUGAN

Dedicated to certain models, smaller the tile size, the more video memory you save, and the slower the speed

### RealCUGAN Low Video Memory Mode

Dedicated to realCUGAN, to be used when the video memory of the graphics card is insufficient

- **None**: Do not use the low video memory mode

- **Low VRAM mode**: When enabled, it may affect picture quality

### Tiling Size

- There are presets for the size of the video memory, and you can also choose to customize the adjustment

::: tip Suggested operation when encountering video memory shortage
- For graphics cards with less than 6G of video memory, if the video memory is insufficient, directly enable tiling, and keep other options default.
- For more than 6G, try not to enable tiling, and enable the tiling mode. If it is still out of video memory when the maximum (1/4) is turned on, turn off this setting and directly enable tiling, and try the options from large (512) to small in turn.
- For 4G or less video memory, please enable the low video memory mode and directly enable tiling.
:::

::: warning 
When using realCUGAN, tiling is not recommended if you want to preserve the model's depth perception behavior.
:::

### Intensity for CUGAN

Only used for the RealCUGAN super-resolution model series

For non-TensorRT models: the smaller the value, the clearer and sharper the image, and the larger the value, the more conservative and stable (recommended value range 0.5-1.2)

For TensorRT models, the opposite is true: the smaller the value, the more blurred the image, and the upper limit is 1.

### Super-Resolution Threads

When there are multiple graphics cards or the graphics card occupancy is not fully utilized, you can try to increase this value, increasing by 1 at a time.

### Super-Resolution Sequence Length

Only valid when algorithms such as the BasicVSR series, InPaint, and DeMosaic that require multi-frame input are selected

- The larger the super-resolution sequence length, the more frames are fed to the model in one pass, and the texture is more stable, but at the same time, the video memory usage will increase.
- It is recommended to keep this value above 10. If the video memory is insufficient, it is recommended to reduce the picture resolution and ensure that the value is above 5.
- For the watermark removal (InPaint) and demosaicing (DeMosaic) models, this value is generally recommended to be 30 or higher for better results.

### Super-Resolution Using Half-Precision

- It is recommended to enable, which can greatly reduce the video memory usage and have little impact on the picture quality.

::: danger
When using NVIDIA 10xx series Pascal architecture graphics cards, enabling this option will slow down the super-resolution speed and may cause the output to be black.

It is recommended to turn off this option.
:::

### TTA

Only supported by ncnnCUGAN, in exchange for a small improvement in image quality at the cost of a large amount of time consumption

## Output settings

<div align=center>
<img src="/Statics/en/UserGuide/SettingsQuality.png"  width=600>
</div>

Used to tune encoding (compression) and decoding quality.

### Encoding parameter area

#### Encode quality (CRF)

Used to adjust the quality loss when the video is exported, which is **positively correlated with the output bitrate**.

Using different encoding codecs and encoding presets will have an impact on CRF.

**The CRF numerical parameter is generally 16**, which is lossless to the naked eye;

For H.265 encoding, the bitrate will be significantly reduced. **Please use the visual quality of the picture to determine whether the CRF numerical value is reasonable.**

If it is used for **archival-grade output, the CRF numerical parameter can be set to 12**.

**The smaller the CRF value, the less the loss of the picture after the operation, and the larger the volume (bitrate) of the exported finished video.**

::: warning
Different encoders can produce different visual quality at the same numeric setting.

For some encoders (such as NVENC), the value here behaves like a CQ control rather than classic CRF.
:::

::: tip
When adjusting the output video bitrate, if you are not familiar with CRF, please use the default value **16**.
:::

#### Target bitrate

As an alternative to CRF-based quality, it is basically the same as the setting style of Adobe Premiere Pro, After Effects, and DaVinci Resolve.

#### Encoder

- **AUTO**
    Automatically determine the encoder option based on the slider below the software
- **CPU**
    Select this option for encoding, **the quality is the highest, but the CPU usage rate is also the highest**. The **performance of the CPU** determines whether the frame interpolation or super-resolution process will be blocked (resulting in a decrease in the graphics card usage) and the **length of time** it takes to complete the final operation.
- **NVENC**
    This option is only for **NVIDIA graphics cards that support the NVENC function**. If your graphics card **does not support the NVENC function, please do not select this option**.
    Please refer to the NVIDIA NVENC Gen.pdf in the installation directory to check whether your graphics card supports NVENC
- **VCE**
    This option is only for **AMD graphics cards that support the VCE function**. If your graphics card **does not support the VCE function, please do not select this option**.
- **QSV**
    This option is only for users with **Intel integrated graphics** (such as Intel UHD 630, IrisPro 580). Non-such users should not select this option.

::: tip
The following codecs need to purchase the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)
:::

- **NVENCC** is an optimized version of **NVENC**, with faster processing speed and better work quality.
- **QSVENCC** is an optimized version of **QSV**, with higher efficiency in completing tasks.
- **VCENCC** is an optimized version of **VCE**, with higher efficiency in completing tasks.

::: tip Manually specify the GPU used by the hardware encoder
In **Custom encode command line** under Advanced Settings,

- When using the encc encoder, fill in `-d||<gpu>` to control the used encoding GPU, such as `-d||0`
- When using the ffmpeg nvenc encoder, fill in `-gpu||<gpu>` to control the used encoding GPU
- When using the ffmpeg vce, qsv encoder, fill in `-init_hw_device||qsv=intel,child_device=<gpu>` to control the used encoding GPU
:::

Sensible comparison:

| Encoder | Use Hardware | Speed | Quality | File Size | Selection Suggestions |
| ------ | --------- | ---- | ---- | -------- | -------------------------------------------- |
| CPU | CPU | Medium | High | Medium | Users who prioritize image quality and encoding stability, including AMD GPU users |
| NVENC | NVIDIA GPU | Fast | Medium | Large | Users who want both speed and quality; best for NVIDIA GPUs |
| QSV | Intel graphics | Fast | Medium | Large | Users who want both speed and quality; systems with Intel iGPU or Intel discrete graphics |
| VCE | AMD graphics | Fast | Medium | Large | Users who want both speed and quality; systems with AMD iGPU or AMD discrete graphics |

#### Select the encoding codec

::: warning If you are not familiar with encoding, please keep the following rules in mind:

- For HDR video, always choose **H.265 10-bit** to retain HDR metadata. Do **not** choose H.264 for HDR delivery.
- For resolutions above 2K, choose **H.265**.
- If H.264/H.265 playback shows corruption, try an **mpv**-based decoder path; for editing workflows with enough storage, **ProRes** is a good mezzanine codec (visually near-lossless, very large files).
- In most cases, **H.265 fast** or **ProRes** is a practical default.
- When a `Broken Pipe` error occurs, switch directly to **H.265**. Note that codecs have maximum resolution and frame rate limits.
- Do not chase extreme resolution and frame rate at the same time (for example, 8K 120 fps).
:::


::: tip
- CPU encoding is software encoding: **generally slower, smaller files, higher quality**.
- NVENC, QSV, and VCE are hardware encoders: **faster, larger files**; at low bitrates / small files, quality can be worse than CPU encoding.
- Prefer NVENC when available. In the NVIDIA hardware preset list, check your GPU generation on the [NVIDIA encode/decode matrix](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new). RTX 20/30 series and newer can usually use **7th+** class presets.
- Hardware encoding loads the GPU. If **Broken Pipe** appears with NVENC, **lower the NVIDIA preset** or **switch to QSV** on Intel graphics.
- If errors persist, **use CPU encoding**.

:::

::: tip Other general suggestions

- If the output is only for personal viewing and encoding quality requirements are low, prefer hardware encoding (NVENC, VCE, QSV, etc.) to avoid a CPU encode bottleneck. A CPU bottleneck lowers GPU utilization and slows the whole job.
:::

#### Select the encoding preset

- CPU: **the faster the preset, the lower the quality, and vice versa**.

- NVENC (NVIDIA): It is fine to pick **p7** directly.

- QSV (Intel graphics): Pick **slow** directly.

- VCE (AMD GPU): Pick **quality** directly.

- NVENCC (NVIDIA): Pick **quality** directly.

- QSVENCC (Intel graphics): Pick **best** directly.

- VCENCC (AMD GPU): Pick **slow** directly.

#### Enable zero-latency decode/encode

It is only valid when the selected output codec is **H.264** or **H.265**.

Using this feature can reduce the video decoding pressure, and is suitable for scenarios that require fast decoding and low latency, such as:
- When uploading video works to platforms such as BiliBili and Youtube, to avoid jitter transcoding
- When playing ultra-high-definition and ultra-high-frame-rate content on VR headsets
- When the player decodes the screen is distorted

::: warning
This feature does not work when the input is HDR
:::

#### NVENC encoding preset

When choosing the NVENC encoder, the preset can reduce the export video size without changing the picture quality. You need to query which generation of NVENC encoding chip your NVIDIA GPU is. If it exceeds 7th, directly select 7th+.

### Default encoding scheme

Uses ffmpeg's traditional encoding path; exported files may be larger.

:::tip
Enabling this feature can solve most **Broken Pipe** problems.
:::

#### Re-encode audio

- Re-encode the audio; commonly used when uploading to UGC platforms.
- Compress all audio tracks in the video to **640 kbps AAC**.

#### HDR strict mode

Uses CPU H.265 processing for HDR to maximize compatibility. Leave enabled unless you know you need otherwise.

#### Dolby Vision / HDR10 compatibility

When outputting Dolby Vision, keep HDR10 compatibility enabled unless you have a specific reason to disable it.

#### One-click HDR

Contains four one-click HDR modes for different scenarios; try them and pick what looks best on your content.

### Decoding quality control

#### Hardware decoding

It can reduce the decoding pressure of large-resolution videos, but may **reduce the picture quality** to a certain extent, and cause the frame interpolation module to **run out of video memory** when the video memory is tight.

#### Fast frame extraction

Fast frame extraction can **reduce decoding pressure**, but may **cause color shifts**.

#### High-precision optimization workflow

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

- If the CPU performance is excessive, it is recommended to enable this feature, which can **solve most color deviation problems** and can solve the color cast problem caused by HDR video encoding to the greatest extent. This feature will **increase the CPU burden** and even affect the frame interpolation speed.
- Enabling this feature for super-resolution work will **disable half-precision** (requires more video memory). Please **choose according to your needs**.

:::tip
It is recommended to enable this option when inputting HDR videos.
:::

#### Use VSPipe

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

Decode through VSPipe. This is a prerequisite for many specific features (such as deblocking, fast grain, QTGMC deinterlacing).

If VSPipe cannot decode your input or the task errors, turn this option off.

::: tip
You can edit the `vspipe.py` template in the installation folder to add custom filters such as `dpir`. You can also change the default **super-resolution before VFI** order based on it.
:::

#### Full VSPipe workflow

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

Processes the whole pipeline with VSPipe to reduce redundant work.

Only TensorRT-accelerated super-resolution and some frame interpolation models are supported.

#### Enable deinterlacing

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

- Use **ffmpeg** to deinterlace **interlaced** inputs.

- When VSPipe pre-decoding is enabled, QTGMC is used for deinterlacing.

### Denoise

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

Unless you have a specific need, keep this closed; otherwise it will **slow down task processing**.

::: tip
It is recommended to test this option by controlling the variables yourself to see if it is helpful for improving the picture quality.

Not compatible with the high-precision optimization workflow.
:::

#### Fast grain

Add noise to the video, often used together with super-resolution.

#### Custom decode parameters

Used to replace ffmpeg or VSPipe decode parameters; separate custom tokens with `||`.

### Custom encoding settings

#### Specify the number of encoding threads

When the encoder is CPU, there is a chance to control the CPU usage rate to control the rendering speed.

#### Customized encoding parameters

This feature is a professional option (note that the number of input items must be **even**),

The key values are separated by `||`

> <Badge text="Example"/> Custom encoding parameters for CPU h265 encoding:
>
> `-x265-params||ref=4:me=3:subme=4:rd=4:merange=38:rdoq-level=2:rc-lookahead=40:scenecut=40:strong-intra-smoothing=0`
> You can also add `pools="8，8，8，8"` to assign core specific encoding threads

#### Time remapping: change the speed of the video

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

- This feature is used to create "slow motion" materials.

- For example, if the output frame rate is set to 120 frames and the time remapping is set to 60 frames, the output effect is equivalent to 50% **slow playback of the playback speed**.

- Similar to other situations, you can set the output frame rate by yourself, **support decimals**.

::: warning
For anime materials, please try to enable [Forward Dedup](/en/pages/advanced-settings/#video-smoothness-optimization) in the **Smoothness Optimization** of the **VFI Settings** as much as possible.

Or use software such as Premiere to reduce the frame rate of the original video to remove the repeated frames to avoid jitter after remapping.

The frame rate of the original video is generally reduced to 8 or 12 fps
:::

#### Loop

Put the last frame in the first frame to adapt to some looping videos that are connected end to end.

::: tip 
Under normal circumstances, the end will miss (output frame rate / input frame rate) frames because there are no new frames that can be interpolated, which is normal. But it is not affected in the loop mode, because there are always frames that can be used as pairs for interpolation.
:::

### IO control

<div align=center>
<img src="/Statics/en/UserGuide/io-control.png"  width=600>
</div>

#### Assign RAM buffer manually

If the running memory is tight (below 16G), it is recommended to **manually specify the size of the buffer memory** to 2-3G to avoid **out of memory** errors.

#### Chunk size

- For frame interpolation and encoding tasks, every frame rendered for this value will output a small clip without audio for you to **preview the effect**.
- The clips will be generated in the output folder you set, **and merged into one file after the frame interpolation or encoding task is completed**.

#### Keep cache files (chunks)

Do not delete the project folder after the task is completed.

## Frame interpolation settings

<div align=center>
<img src="/Statics/en/UserGuide/SettingsVFI.png"  width=600>
</div>

### Safe FPS

If the video is to be uploaded to the corresponding media platform for online viewing, please enable this option.

This option will convert the output correctly to the corresponding NTSC format video (such as `60000/1001`) when the input is an NTSC format video (such as a video with a frame rate of `24000/1001`), to avoid audio-video asynchrony. If not enabled, audio-video asynchrony may occur (such as an output of `59994/1000`).

It is recommended to enable this option

::: warning
If this option is not enabled, when the input is a non-standard frame rate (such as 119800/1000), the output mkv may become a variable frame rate video due to mkvmerge.

Try to use videos with standard input frame rates for processing to avoid audio-video asynchrony
:::


### Half-Precision Mode

It can reduce the video memory usage, and has acceleration effect for NVIDIA graphics cards of 20 series, 30 series, 40 series and above

::: warning
May cause a decrease in picture quality.
For example, when using the gmfss model for frame interpolation, it may cause the output video to have a grainy feel
:::

<!-- ### Reversed optical flow

This feature can make the picture **smoother** to a certain extent.

::: tip 
If the `cudnn status error` occurs when using the GMFSS pg 104 frame interpolation model, please turn off the reverse optical flow.

Enabling this feature may cause artifacts around moving objects in some models (such as Gmfss pg104). It needs to be selectively enabled or disabled after repeated experiments by yourself. The same applies to other similar functions.
::: -->

### Scale of Optical Flow

This is the optical flow resolution scaling factor used by SVFI when performing optical flow calculation using the frame interpolation algorithm. 0.5 means that the input picture is scaled by half and then the optical flow calculation is performed to improve the performance or effect of certain algorithms.

- When using the RIFE algorithm, when the original video size is 1080P, the default is 1.0; 4K and above is 0.5; less than 1080P is 1.0

- When using the GMFSS algorithm, when the original video size is 1080P, the default is 1.0; 4K and above is 0.5; less than 1080P is 1.0

::: warning
When using the GMFSS algorithm, it is not recommended to fill in a value lower than 1.0 for the option when the original video size is less than or equal to 1080P
:::

### Interlace Interpolation

- Equivalent to a special tiling, used to reduce video memory usage, there will be no screen tearing, but the picture will be blurred

- Choosing this option appropriately can allow a small video memory graphics card to interpolate an ultra-high-resolution (for example, interpolating 8K on a 4 GB GPU)

### Smoothness Optimization

::: warning
This series of options is only used for anime input or live-action materials with duplicate frames.

It is not recommended to enable this option for real-shot materials in general.
:::

| Method | Application Scenarios | Speed | Smoothness | Number of Jellies |
|------------|-------|-------|-------|------|
| Spatio-Temporal Smoother (TruMotion) | Universal | ★★☆ | ★☆☆ | ☆☆☆ |
| Single Threshold | Universal | ★★★ | ★☆☆ | ☆☆☆ |
| Dedup shots on twos | Anime | ★★★ | ★★☆ | ★☆☆ |
| Dedup shots on twos/threes | Anime | ★★★ | ★★☆ | ☆☆☆ |
| Spatio-Temporal Resampling | Anime | ★★☆ | ★★★ | ★★★ |
| First-Order Dedup | Anime | ★★☆ | ★★☆ | ★★☆ |
| Dual Referenced Reconstruction | Anime | ★☆☆ | ★★★ | ☆☆☆ |
| Forward Dedup | Anime | ☆☆☆ | ★★★ | ☆☆☆ |
| Diff smooth | Anime; 1× restoration | ★★★ | - | ☆☆☆ |

Note: **The fewer the number of jellies, the better the video quality; the more stars, the more likely the algorithm will output jellies**.

Explanation:

- **Spatio-Temporal Smoother (TruMotion)**: Solves the jitter caused by the asymmetry problem during frame interpolation, and has a certain smooth and stable effect on any video (also known as TruMotion)
- **Single Threshold**: Used to alleviate the jitter feeling caused by duplicate frames, the general value is 0.2, 0.5, 1.0 or higher for anime
- **Dedup shots on twos**: Recognize and change one frame every two frames in the animation to one frame per one
- **Dedup shots on twos/threes**: Recognize and change one frame every three frames and two frames in the animation to one frame per one
- **First-Order Dedup**: Similar to removing one frame every two and one frame every three, but the dedup is more aggressive
- **Spatio-Temporal Resampling**: If the input video frame rate is around 24 and there is only one frame every three at most, and there is no higher frame rate picture, the jitter of the anime video material can be completely removed
- **Dual Referenced Reconstruction**: Similar to spatio-temporal resampling, the overall effect will be better. The input frame rate must be around 24, and the output frame rate can only be an integer multiple of the input frame rate, and is only used for specific models
- **Forward Dedup**: Completely remove the jitter of the anime video material. If the frame rate of your input video is around 24, the default is 2, which means it can solve the problem of jitter caused by one frame every three or less
- **Diff smooth**: When the video has irregular duplicate frames (an unknown repeating cadence), or when processing screen recordings with dropped frames, this mode can apply a smoothing pass.

::: warning
**Diff smooth** does not change the input frame rate.

For some videos with long solid-color segments, this option may introduce extra duplicate frames and cause audio-video desync.
:::

::: tip
**Forward Dedup**, **Dual Referenced Reconstruction**, **Spatio-Temporal Resampling** only support algorithms and models that can interpolate frames at arbitrary time  step
If you are not sure whether your video is one frame per two or one frame per three, please check [Anime Shots on Ns Introduction](https://www.idtech.com/blog/what-does-animating-on-ones-twos-and-threes-mean).

If the output video is still not smooth enough after dedup optimization, scene detection may be misjudging transitions and lowering perceived smoothness—try raising the scene detection sensitivity threshold.
:::

:::warning
Due to the limited ability of AI frame interpolation in anime frame interpolation at this stage, choosing dedup will increase the inter-frame motion range, resulting in picture distortion during frame interpolation.

Please test and select the best dedup mode for each input video by controlling the variables multiple times.

It is recommended that you choose the dedup mode carefully. If you are frame interpolating long anime footage, it is recommended to use TruMotion or leave duplicate-frame removal off.
:::

**Frame interpolation effect after enabling video smoothness optimization (forward dedup)**

<div align=center>
<img src="/Statics/UserGuide/65.gif"  width=600>
</div>

<div align=center>
<img src="/Statics/UserGuide/66.gif"  width=600>
</div>

### Process GPU (VFI)

Specify which graphics card to use for frame interpolation

## Introduction to Frame Interpolation Algorithms

See [Model Specification](/en/pages/model-spec/)

## Other Frame Interpolation Options Introduction

### TTA Mode

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

>Enabling this feature can **reduce picture jellies, reduce subtitle jitter, and weaken the problem of object disappearance**. Making the picture more **smooth and comfortable**
>
>**It takes extra frame interpolation time, and some frame interpolation models do not support this feature**.
>
>The larger the number behind, the slower, the less jellies, usually just fill in 1 or 2
>
>Medium to, suitable for RIFE 2.3

### Forward Ensembled Optical Flow

>The speed is reduced by about half, and the effect of the RIFE 2.x series frame interpolation model may be slightly improved
>
>The gmfss/umss model enables bidirectional optical flow to accelerate by 5%, the effect will not change, but it will increase the video memory usage

### Dynamic Scaled Optical Flow

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

>During frame interpolation, the optical flow scale is dynamically selected, which can reduce the problem of object disappearance and reduce jellies (only applicable to RIFE 2.3 and RIFE 4.6)

## Custom preset bar

<div align=center>
<img src="/Statics/en/UserGuide/SettingsPreset.png"  width=600>
</div>

### New preset from current settings

After naming the preset, click **New preset from current settings** to create it.

### Remove Preset

Delete the currently selected preset

### Apply Preset

Load the previously saved preset and automatically load the parameters

### Search presets

Search community-shared presets.

## Toolbox

### Terminate Remaining Processes

Will end all tasks, including tasks that are opened by other SVFI instances.

::: tip
If you need to avoid terminating tasks that are started by other SVFI instances, you need to manually end all SVFI CLI processes under the current SVFI process in the task manager. When enabling multi-threading, **it is always recommended not to click the** Terminate button manually.
:::

### Video to GIF

Generate high-quality GIF animations

Usage example:
 > Input video path: `E:\VIDEO\video.mp4`
 >
 > Output animation (gif) path: `E:\GIF\video_gif_output.gif`
 >
 > Output frame rate: 30 fps 

::: tip
The output frame rate generally needs to be less than or equal to the frame rate of the original video; it is not recommended to be higher than 30.

Paths must be **full absolute paths**.
:::

### Concatenate Chunks

Merge scattered chunk fragments.
::: tip
If the task fails during the final merge, you can directly select the task item and click this button to complete the merge operation after adjusting the settings.
:::

### Audio Muxing

- Fill in the complete path of the video (<Badge text="Example"/> `D:\01\myvideo.mp4`)

- Fill in the audio path of the video (<Badge text="Example"/> `D:\01\myvideo.aac`), or use a video to input audio (<Badge text="Example"/> `D:\01\otherVideo.mp4`)

- Output video path (<Badge text="Example"/> `D:\01\output.mp4`)

- Secondary encoding audio: Compress the audio to aac format, 640kbps

### Remote task port service

Click the button to obtain a web link that can control SVFI on this machine from another device.

<div align=center>
<img src="/Statics/en/UserGuide/SettingsRemoteSR.png"  width=600>
</div>

Currently only **image super-resolution** is supported over the remote UI.

Typical use case: upload a photo from your phone, pick a model, and run super-resolution.

::: warning
Do not share this link publicly.
:::

## Settings Under the Advanced Settings

### Output Current Settings

Export the settings information as an `.ini` file, which can be shared with other users to contribute their settings. The usage method is to directly drag it into the software, and it will prompt that the preset has been successfully applied.
See [Usage Tips](/en/pages/useful-tips/) for detailed usage.

:::tip
If the video output of the software does not meet expectations, such as color shift or visibly wrong results, you can click this button and send the settings file to the developer to locate the problem.
:::

### Restore to Default

Restore Advanced Settings to Default. This will not affect the settings in the Preference settings panel.

### Global Settings

Apply the same setting to all tasks in the list, with regard to the high-lighted current task before clicking start button.

### Debug

Output debug information during the task.

::: warning
In some cases, this mode will add debug content to the picture and slow down the task processing speed.

So please turn off this option when processing tasks formally.
:::

### Turbo mode

Accelerates the existing workflow, improving task processing speed.
::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::
::: tip
Available only for NVIDIA graphics cards, with some features and models having limitations
:::


# Bar Options on the left

<div align=center>
<img src="/Statics/en/UserGuide/left-title-bar.png"  width=600>
</div>

## Settings

Main settings page

<div align=center>
<img src="/Statics/en/UserGuide/MainPage.png"  width=600>
</div>

## Preview

Output preview page

<div align=center>
<img src="/Statics/en/UserGuide/PreviewPage.png"  width=600>
</div>

::: tip
When previewing using the player interface, if the input is an HDR video, it is normal for the preview picture to be gray.

Preview is not available when **Turbo mode** is enabled together with **NVIDIA fast decode/encode** paths that bypass the preview pipeline.
:::

## Status

View the program output information

<div align=center>
<img src="/Statics/en/UserGuide/StatusPage.png"  width=600>
</div>

## User Page

View the software achievements and expandable or owned DLCs

<div align=center>
<img src="/Statics/en/UserGuide/SteamPage.png"  width=600>
</div>

## Preference Settings

### Rest Interval

Let the device rest for 15 minutes every X hours (temporarily pause the task)

### Cache Folder

Specify the task folder to another location. The final output video will still be in the target folder

### After task operation

You can choose some automatic operations after the frame interpolation is completed

### Exit Recklessly

Default is enabled, the software forcibly ends the software process when an error occurs, avoiding residual processes

::: tip
When you need to use the multi-instance or `one_line_shot_args` pipeline function of SVFI, it is recommended to turn off this option to avoid the instance being forcibly exited due to the forced exit of the software after it ends.
:::


### Enable Preview

Show the preview window while a task is running

### Auto Error Correction

Automatically modify settings to prevent task errors

::: tip
Turning off automatic error correction can improve task initialization speed. It is recommended to turn off this option when processing queue tasks with stable settings.

In particular, if the encoding option or frame interpolation option setting value has an "AUTO" option, then even if this option is turned off, automatic error correction will still run.

It is recommended to set all option values to non-AUTO values to completely turn off automatic error correction.
:::

### Custom Output Filename Abbreviation

You can customize the output file name. The default value is `{INPUT}-{RENDER}.{16BIT}.{DI}.{DN}.{FG}.{DB}.{DP}.{OCHDR}.{FN}.{FPS}.{VFI}.{DEDUP}.{SR}.{FP16}.{DEBUG}_{TASKID}{EXT}`. The meanings of each abbreviation are as follows:

| Abbreviation | Meaning |
|------------|-------|
| INPUT | Input file name |
| RENDER | Enable only encoding mode |
| 16BIT | Whether to enable high-precision mode |
| DI | Whether to enable de-interlacing |
| DN | Whether to enable noise reduction |
| FG | Whether to enable fast noise addition |
| DB | Whether to enable debanding |
| DP | Whether to enable lens stabilization |
| OCHDR | Whether to enable one-click HDR |
| FN | Whether to enable FMNet HDR |
| FPS | Output frame rate |
| VFI | VFI model used |
| DEDUP | Duplicate frame deduplication mode |
| SR | Super-resolution model used |
| FP16 | Whether to enable half precision |
| DEBUG | Debug mode |
| TASKID | Task ID |
| EXT | Output file extension |

::: tip
At least one item in the abbreviation must be included, otherwise the output file name will be invalid.
:::

### Empty Task List After Interpolation

Clear the input queue after all tasks in the list are completed

### Quiet Mode

Do not pop up windows and notifications

### Windows on top

Keep the window on top to avoid possible Windows scheduling performance loss.

### Background Image

You can select pictures to enable custom backgrounds

### Background blur radius

The larger the value, the more blurred the background

### Background opacity

The larger the value, the higher the background brightness

### Classic Advanced Settings Layout

Use classic vertical advanced settings layout from SVFI 3.x

### Application Theme

Change the theme of the application

### Theme Color

Change the theme color of the application

### Language

Set the preferred language for the user interface

### Add White List

Click the button to add the installation folder to the Windows Defender whitelist. This operation is ineffective for other anti-virus software.

### Check Installation Integrity

Click the button to check the file integrity through Steam at the next startup. It may be possible to fix some problems where the software cannot run normally due to software updates or incorrect settings.

### Use CPU Only

Perform AI tasks only using the CPU. Only applicable to devices without graphics cards.

### Use All GPUs

Use all available GPUs for AI reasoning acceleration.

::: warning
If the device has only one graphics card, please be sure to turn off this option.
:::

<!-- ### TensorRT INT8 quantization

Speeds up TensorRT models, but compiling with INT8 takes longer and **may reduce model quality**—use with care.

By default the software runs about 750 calibration rounds; you can tune this under [Other advanced settings](/en/pages/other-advanced-settings/). Processing time is long and speedups may be modest on some devices. -->

### Help

Learn about new features and useful tips of SVFI (shortcut operations, shortcut keys, etc.)

### Global advanced settings

See [Other advanced settings](/en/pages/other-advanced-settings/).

### Provide Feedback

Provide feedback to help us improve SVFI

### Privacy Agreement

Click the button to determine whether to send non-private diagnostic data to help us improve the software.

### About

Software copyright and logs

