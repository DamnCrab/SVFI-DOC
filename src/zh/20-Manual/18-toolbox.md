---
title: 工具箱设置说明
permalink: /zh/pages/toolbox/
---

## 结束残留进程

将结束所有任务，包括多开SVFI的任务。

::: tip
如果需要避免结束多开SVFI的情况，需要手动在任务管理器中，结束当前SVFI进程下的所有SVFI CLI进程。在开启多线程时，**始终建议不要轻易点击**结束任务按钮。
:::

## 视频转换 GIF 动图

生成高质量的 GIF 动图

使用范例:
 > 输入视频路径: `E:\VIDEO\video.mp4`
 >
 > 输出动图(gif)路径: `E:\GIF\video_gif_output.gif`
 >
 > 输出帧率: 30 fps 
 
::: tip
输出帧率一般要小于等于原视频的帧率, 不建议高于30

需要填写完整路径
:::

## 合并已有区块

将散落的chunk片段合并。
::: tip
若任务在最后的合并期间失败，可以在调整设置后直接选中任务并点击此按钮完成合并操作。
:::

## 音视频合并

- 填入视频的完整路径(<Badge text="例"/> `D:\01\myvideo.mp4`)

- 填入视频的音频路径(<Badge text="例"/> `D:\01\myvideo.aac`), 或者使用一个视频来输入音频(<Badge text="例"/> `D:\01\otherVideo.mp4`)

- 输出视频路径(<Badge text="例"/> `D:\01\output.mp4`)

- 二次压制音频: 将音频压制为aac格式, 640kbps

## 远程任务端口服务

点击按钮获取网页链接，该链接可用于操控机上SVFI。

<div align=center>
<img src="/screenshots/zh/30-remote-sr.png"  width=600>
</div>

当前仅支持超分图片功能。
典型应用场景：通过手机上传照片，选择模型后进行超分

::: warning
链接千万不要外传！
:::
