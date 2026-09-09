---
title: 任意窗口实时播放
permalink: /zh/pages/realtime-window/
---

左侧栏「实时超补」页可对**任意窗口**做实时超分或帧生成：捕获目标窗口，用缩放算法放大/锐化，并可选择插入补帧，再以覆盖层显示。模块未载入时该页不可用。

算法与模型清单见[实时窗口播放模型说明](/zh/pages/realtime-models/)。

<div align=center>
<img src="/screenshots/zh/40-realtime-interface.png"  width=600>
</div>

右上角状态为 StandBy → Compiling → Running。TensorRT / 部分 OEM 滤镜第一次编译可能较久，属正常现象。

::: tip
捕获游戏窗口时，建议**以管理员身份运行 SVFI**，否则可能抓不到画面。
:::

::: tip
OEM 相关模型（DLSS / DLSS-NR、XeSS、FSR3 / FSR4、RTX Video，以及帧生成中的 DLSSFG / XeSSFG）仅在[专业版 DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)中可用，且仅在公测 **Beta** 分支提供。需要手动前往 Steam 设置 → **测试版** 中选择。
:::

## 捕获

### 目标窗口

选择要放大的窗口。开启自动缩放后，把该窗口切到前台才会开始覆盖。

### 捕获方式

用于抓取源窗口的屏幕捕获 API：

- **GDI**
- **Graphics Capture**（默认，即 Windows Graphics Capture）
- **Desktop Duplication**（桌面复制；不支持窗口化缩放）

### 最大帧延迟

Graphics Capture 设备上 `IDXGIDevice1` 的最大帧延迟（1–15）。数值越大，捕获吞吐通常越好。

### 前台时自动缩放

窗口到前台后何时自动开始：

- **窗口化缩放**
- **全屏缩放**
- **关闭**

### 隐藏 OSD / 切换 OSD

隐藏覆盖层工具条，仅用全局快捷键唤出。默认快捷键为 `Alt + Shift + D`。

## 缩放

### 缩放模式

对捕获画面做超分或锐化的算法。各模式说明见[实时窗口播放模型说明](/zh/pages/realtime-models/)。

选 **ONNX** 时会出现推理后端（DirectML / TensorRT）和超分模型列表（`models/sr/TensorRT/models`）。

选 **CustomChain** 时使用 `effects/CustomChain/*.json` 合成着色器链，可自行向 `effects` 目录添加着色器。

### 显示缩放

覆盖层相对源窗口的尺寸：

- **不改变大小**：覆盖层约 1.01 倍盖住源窗口，内部仍可按算法放大再缩回。
- **按比例缩放**：覆盖层按「初始缩放倍数」放大。

全屏目标始终按「不改变大小」处理。

### 缩放策略

在「不改变大小」且算法本身带放大倍数时，内部着色器顺序：

- **先缩小再放大**
- **先放大再缩小**（默认）

### 初始缩放倍数

窗口化模式下启动时的倍数（约 1.01x–4x）。

ONNX、RTX Video、DLSS / DLSS-NR 等模式下还会出现对应的质量与细节选项，含义见模型说明页。

## 帧生成

### 共享帧引导

给 FSR3/4、XeSS 等 OEM 帧生成提供运动/深度引导：**自动**、**全零**、**仅运动**、**仅深度**。

### 启用帧生成

插入补帧以提高输出帧率。开启后选择算法、倍率和（RIFE 时）模型。详见[实时窗口播放模型说明](/zh/pages/realtime-models/)。

### 帧生成倍率

输出帧率 ≈ 捕获帧率 × 倍率。

### 检测捕获帧率 / 捕获帧率

可自动检测片源帧率，或手动指定捕获帧率。

## 性能

### 显卡

用于缩放与帧生成推理的 GPU。尽量选独显以保持覆盖层流畅。

### 禁用 DirectFlip

覆盖层闪烁或花屏时可尝试打开。

### 使用运动向量 / 使用估计深度

给 DLSS-NR 及 OEM 引导提供运动向量，以及估计深度（关闭则深度为零）。

### 光流后端

运动向量来源：NVOF、AMD OF、Flow TRT。NVIDIA 光流还可选质量档。

## 使用流程

1. 打开左侧栏 **实时超补**。
2. 选择目标窗口、捕获方式和自动缩放策略。
3. 选择缩放模式；需要神经网络超分时选 ONNX 或对应 OEM 模式。
4. 需要插帧时开启帧生成并指定算法与倍率。
5. 把目标窗口切到前台（自动缩放开着时）开始；状态变为 Running。
6. 用 OSD 快捷键显示或隐藏覆盖层工具条。
