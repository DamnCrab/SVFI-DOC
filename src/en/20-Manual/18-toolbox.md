---
title: Toolbox settings
permalink: /en/pages/toolbox/
---

## Terminate Remaining Processes

Will end all tasks, including tasks that are opened by other SVFI instances.

::: tip
If you need to avoid terminating tasks that are started by other SVFI instances, you need to manually end all SVFI CLI processes under the current SVFI process in the task manager. When enabling multi-threading, **it is always recommended not to click the** Terminate button manually.
:::

## Video to GIF

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

## Concatenate Chunks

Merge scattered chunk fragments.
::: tip
If the task fails during the final merge, you can directly select the task item and click this button to complete the merge operation after adjusting the settings.
:::

## Audio Muxing

- Fill in the complete path of the video (<Badge text="Example"/> `D:\01\myvideo.mp4`)

- Fill in the audio path of the video (<Badge text="Example"/> `D:\01\myvideo.aac`), or use a video to input audio (<Badge text="Example"/> `D:\01\otherVideo.mp4`)

- Output video path (<Badge text="Example"/> `D:\01\output.mp4`)

- Secondary encoding audio: Compress the audio to aac format, 640kbps

## Remote task port service

Click the button to obtain a web link that can control SVFI on this machine from another device.

<div align=center>
<img src="/Statics/en/UserGuide/SettingsRemoteSR.png"  width=600>
</div>

Currently only **image super-resolution** is supported over the remote UI.

Typical use case: upload a photo from your phone, pick a model, and run super-resolution.

::: warning
Do not share this link publicly.
:::
