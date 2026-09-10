---
title: 实时窗口播放模型说明
permalink: /zh/pages/realtime-models/
---

本页对应左侧栏「实时超补」里的缩放模式与帧生成算法。界面操作见[任意窗口实时播放](/zh/pages/realtime-window/)。

部分神经网络路径（如 ONNX 超分、RIFE）需[专业版 DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)。第一次使用 TensorRT 引擎会编译，耗时较长。

::: tip
OEM 相关模型（DLSS / DLSS-NR、XeSS、FSR3 / FSR4、RTX Video，以及帧生成中的 DLSSFG / XeSSFG）仅在[专业版 DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)中可用，且仅在公测 **Beta** 分支提供。需要手动前往 Steam 设置 → **测试版** 中选择。上述路径还依赖本机是否装有对应运行库。
:::

<div align=center>
<img src="/screenshots/zh/40-realtime-interface.png"  width=600>
</div>

## 缩放模式

| 模式 | 说明 |
|------|------|
| None | 不放大，仅捕获显示 |
| Lanczos | 轻量传统放大，默认、兼容性最好 |
| FSR | AMD FidelityFX Super Resolution 一类空间放大 |
| FSRCNNX | 基于 FSRCNN 的实时超分着色器 |
| CuNNy | 轻量卷积超分着色器 |
| CustomChain | `effects/CustomChain/*.json` 自定义着色器链 |
| ONNX | 专业版；加载 `models/sr/TensorRT/models` 中的超分权重，后端 DirectML 或 TensorRT |
| DLSSNR | NVIDIA DLSS Neural Renderer（一倍画质/降噪向，需本机 DLSS-NR 运行库） |
| DLSS | NVIDIA DLSS 超分 |
| XeSS | Intel XeSS 超分 |
| FSR3 / FSR4 | AMD FSR 3/4 放大路径 |
| RTXVideo | NVIDIA RTX Video Super Resolution / Denoise |

ONNX 模型与离线超分共用 TensorRT/ONNX 规则，详见[超分模型说明](/zh/pages/sr-models/)中的 TensorRT 与自行添加模型部分。

CustomChain 可从 `effects` 目录下载或组合着色器，JSON 列表顺序即滤镜调用顺序。

### RTX Video

- **RTX Video Effect**：`VSR`（超分）或 `Denoise`（同分辨率降噪）
- **RTX Video Quality**：Low / Medium / High / Ultra

### DLSS / DLSS-NR

- **DLSS SR Preset**：NGX 预设。J 为旧默认，K 为 Balanced。
- 可选择在链路中 **DLSS-NR 之后再跑 DLSS SR**，或反过来。
- DLSS-NR 另有风格（Default / Natural / Cinematic）、强度、局部影调/结构、皮肤结构、自动蒙版、UI 保护，以及「细节控制」下的输入分辨率百分比与残差/阴影/高光倍率。降低输入分辨率会损害质量。

这些滑条只在当前缩放模式与帧生成组合需要时出现。

## 帧生成算法

开启「启用帧生成」后可选：

| 算法 | 说明 |
|------|------|
| ABME | 默认实时补帧路径 |
| RIFE | 专业版；ONNX 模型来自 `models/vfi/TensorRT/models`，后端 DirectML 或 TensorRT |
| DLSSFG | NVIDIA DLSS Frame Generation |
| XeSSFG | Intel XeSS Frame Generation |

RIFE 权重与离线补帧不是同一套界面，但同属 RIFE 家族，离线模型介绍见[补帧模型说明](/zh/pages/vfi-models/)。

FSR3/4 与 XeSS 帧生成使用「共享帧引导」（自动 / 全零 / 仅运动 / 仅深度）。光流后端可选 NVOF、AMD OF。

## 显卡与兼容性

- 在「性能」里指定用于缩放和帧生成的 GPU，优先独显。
- DLSS / RTX Video / NVOF 面向 NVIDIA；XeSS 面向 Intel；FSR 更通用，但仍取决于本机运行库。
- A 卡、核显走 DirectML 或传统着色器（Lanczos / FSR / CustomChain 等）更稳妥。
- 覆盖层闪烁时可尝试「禁用 DirectFlip」。
