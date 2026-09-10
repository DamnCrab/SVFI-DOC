---
title: 画质恢复模型说明
permalink: /zh/pages/restore-models/
---

这类模型出现在超分栏目或高级设置的修复开关里，倍率为 **一倍**（不放大），用于去压缩、去水印、去色带、去马赛克等。所有模型都在专业版中提供。

<Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> <Badge text="抗压缩" color="#222" bgColor="#e6e6fa"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/>

## 算法一览

| 算法 | 版本 | 模型标签 | 推荐 | A 卡 |
| :---: | :---: | :---: | :---: | :---: |
| BasicVSR++ T3 | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="抗压缩" color="#222" bgColor="#e6e6fa"/> | ★★★★☆ | × |
| Gloom | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | × |
| InPaint STTN | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | × |
| LaMa | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | × |
| DeMosaic | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| DLSS NR | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★☆☆ | × |
| DeepDeband | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| FMNet | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |

::: warning
多帧修复（T3、Gloom、InPaint）很吃显存，建议 6 GB 以上。
DeepDeband / FMNet 只在 **公测 Beta** 分支可用。
:::

## BasicVSRPlusPlusRestore

实拍向，效果依赖超分序列长度。T3 在正式专业版本中提供；带 `_trt` 的版本仅在公测 Beta 版本中提供。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| basicvsrpp_ntire_t3_decompress_max_4x | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="抗压缩" color="#222" bgColor="#e6e6fa"/> | ★★★★☆ | 高压缩画面修复效果极佳 | 速度较慢、显存占用高；名称含 4x，但在 SVFI 中按一倍修复使用 |
| basicvsrpp_ntire_t3_decompress_max_4x_trt | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="抗压缩" color="#222" bgColor="#e6e6fa"/> | ★★☆☆☆ | TensorRT 加速尝试 | 仅建议 16 GB 及以上显存的显卡使用 |

### 视觉对比

<imgSlider :items="[
{
	first: '/compare/04-t3-in.png',
    second: '/compare/04-t3-out.png',
	name: 'BasicVSR++ Track3（T3）',
    desc: 'basicvsrpp-ntire-t3-decompress-max-4x 一倍修复，高压缩画面效果极佳（速度较慢）'
}
]"/>

## Gloom

Gloom 仅在公测 Beta 版本中可用。它是专门用于低分辨率修复的多帧增强模型，可先修复再拉伸然后指定2x分辨率作为超分模型使用。`Gloom-pro` 的序列长度须为 4n+1（1 / 5 / 9 / …），建议 Gloom 使用 16，pro 使用 33。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| Gloom_x1 | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 利用多帧信息增强画面 | 显存占用高 |
| Gloom-pro_x1 | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 更强 pro 路径 | 显存最好在8G以上 |

## InPaint 去水印模型

仅专业版 **Beta** 分支可用。`InPaint_STTN` 只做一倍修复，需配合[内置播放器](/zh/pages/player/#绘制静态蒙版)的静态蒙版。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| InPaint_STTN | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | 蒙版内静态水印可自动去掉 | 纯色/完全静止背景很差 |

### 开启流程

1. 开启超分并选择该模型
<div align=center>
<img src="/screenshots/zh/32-inpaint-select-model.png"  width=600>
</div>

1. 开启[内置播放器](/zh/pages/player/)
<div align=center>
<img src="/screenshots/zh/33-inpaint-player.png"  width=600>
</div>

1. 开启蒙版
<div align=center>
<img src="/screenshots/zh/34-inpaint-mask.png"  width=600>
</div>

1. 绘制并保存

<div align=center>
<img src="/screenshots/zh/35-inpaint-draw-mask.png"  width=600>
</div>

请保证蒙版区域内留有足够的**动态变化**，否则无法识别。

::: warning
对**纯色背景 / 静态内容**上的水印，识别和去除都差。
:::

5. 点击一键压制开始去水印。建议序列长度大于 30。

<imgSlider :items="[
{
	first: '/compare/05-inpaint-in.png',
    second: '/compare/05-inpaint-out.png',
	name: 'InPaint 去水印效果演示',
    desc: '建议序列长度大于 30'
}
]"/>

## LaMa

LaMa 是经典的图像擦除模型。SVFI会自动识别视频中的字幕并去除。不适用于纯色静态背景。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| big-lama | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | 经典擦除结构，可配合蒙版 | 同样不适用于纯色静态背景 |

## DeMosaic

DeMosaic 用于去除特殊片源的马赛克和像素化。SVFI会自动识别视频中的马赛克并去除。开启调试模式后不会去除马赛克，但是会显示识别到的马赛克区域以方便马赛克识别阈值的调整。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| bvpp_x1（DeMosaic，LADA） | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 去除马赛克 | 不兼容 16 位工作流 |

## DLSS NR

DLSS NR 是一倍降噪模型，必须使用涡轮，且目前仅支持 8bit 工作流。专门用于为游戏录屏添加真实的光影细节。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| DLSSNR_x1 | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★☆☆ | 添加真实的光影细节 | 必须使用涡轮，且目前仅支持 8bit 工作流 |

<imgSlider :items="[
{
	first: '/compare/06-dlss-off.png',
    second: '/compare/06-dlss-on.png',
	name: 'DLSS NR 效果演示',
    desc: '建议开启重建引导（重建输入的运动向量和深度信息）'
}
]"/>

## DeepDeband

DeepDeband 使用AI算法去除视频中的色带。**仅公测 Beta 版本可用**。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| deepdeband-f / deepdeband-w | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 减少色带 | 涡轮不可用 |

## FMNet

FMNet 使用AI算法将SDR视频转化为HDR10视频。**仅公测 Beta 版本可用**。开启后视频会变为HDR10（静态元数据）规格。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| FMNet anime_v1 / anime_v2 / final | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 适合 HDR 和调色场景的修复 | 涡轮不可用 |
