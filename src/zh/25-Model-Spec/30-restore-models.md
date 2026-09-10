---
title: 画质恢复模型说明
permalink: /zh/pages/restore-models/
---

这类模型出现在软件的超分栏目中，但倍率为 **一倍**（不放大分辨率），用于去压缩、去水印、去马赛克等画质恢复。

## BasicVSRPlusPlusRestore

实拍超分算法，效果依赖超分序列长度

::: tip
该算法仅在公测Beta版本中可用
:::

::: warning
此系列算法消耗显存较多，建议使用6G以上的显卡
:::

- basicvsrpp_ntire_t3_decompress_max_4x 四倍放大去压缩模型t3（推荐使用）

- basicvsrpp_ntire_t3_decompress_max_4x_trt 四倍放大去压缩模型t3 (TensorRT加速)（较难编译，不建议使用）

### 视觉对比演示

<imgSlider :items="[
{
	first: '/compare/04-t3-in.png',
    second: '/compare/04-t3-out.png',
	name: 'BasicVSR++ Track3 （T3）',
    desc: 'basicvsrpp-ntire-t3-decompress-max-4x 一倍修复模型，对高压缩画面修复效果极佳（速度较慢）'
}
]"/>

## InPaint 去水印模型

::: tip
该算法仅在专业版DLC的公测Beta版本中可用，需要手动前往Steam设置-测试版中选择
:::

- inpaint_sttn_1x: 目前该模型仅支持一倍修复，无超分功能，需配合[内置播放器](/zh/pages/player/#绘制静态蒙版)的静态蒙版使用：

开启流程如下：

1. 开启超分功能并选择正确的模型
<div align=center>
<img src="/screenshots/zh/32-inpaint-select-model.png"  width=600>
</div>

2. 开启[内置播放器](/zh/pages/player/)
<div align=center>
<img src="/screenshots/zh/33-inpaint-player.png"  width=600>
</div>

3. 开启蒙版功能
<div align=center>
<img src="/screenshots/zh/34-inpaint-mask.png"  width=600>
</div>

4. 绘制蒙版并保存

<div align=center>
<img src="/screenshots/zh/35-inpaint-draw-mask.png"  width=600>
</div>

该模型会自动识别每块蒙版区域内的静态水印并去除。请务必保证蒙版区域内留有足够的**动态变化内容**，否则无法自动识别。

::: warning
该模型对于**纯色背景/静态内容**上的水印识别及去除性能较差。
:::

5. 点击一键压制开始去水印

<imgSlider :items="[
{
	first: '/compare/05-inpaint-in.png',
    second: '/compare/05-inpaint-out.png',
	name: 'InPaint去水印效果演示',
    desc: '建议序列长度大于30'
}
]"/>

## DeMosaic 去马赛克模型

字面意思
