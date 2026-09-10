---
title: 补帧模型说明
permalink: /zh/pages/vfi-models/
---

以下内容对应当前正式版本和公测 Beta 版本中实际提供的补帧模型。标注 **社区** 的模型无需 DLC，标注 **专业** 的模型需要[专业版 DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)。标注 **Beta** 的模型仅在 Steam 公测分支可用。

不同类型素材表现不同，自动搭配见[预设](/zh/pages/svfi-presets/)。界面上的模型标签与软件内相同：

<Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> <Badge text="抗压缩" color="#222" bgColor="#e6e6fa"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/>

**推荐指数**按当前产品定位给出（★★★★★ 为当下主推）。

## 算法一览

| 算法 | 版本 | 模型标签 | 推荐 | AMD显卡支持情况 |
| :---: | :---: | :---: | :---: | :---: |
| Tariff | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★★ | × |
| RIFE | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | × |
| ncnn-RIFE | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | √ |
| GMFSS | <Badge text="社区" type="info"/> / <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | × |
| UMSS | <Badge text="社区" type="info"/> / <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | × |
| DRBA | <Badge text="社区" type="info"/> / <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★★ | × |
| GIMM-VFI | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★★☆ | × |
| Waft | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★★ | × |
| VFSS | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| TensorRT RIFE | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| MNN Tariff | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | √ |
| Prometheus | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★★★ | × |
| IFUNet | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★☆☆☆ | × |

::: tip
带 `ncnn` / `mnn` 的模型会使用 [ncnn](https://github.com/Tencent/ncnn) 或 MNN进行推理，N 卡、A 卡、核显都能用。其余 CUDA 模型不能用于 A 卡和核显。
:::

::: warning
GMFSS / UMSS / 部分 DRBA 显存占用高，不建议直接补 4K 及以上分辨率。若要同时超分，请在输出分辨率里勾选 **先补帧后超分**，或拆成两步。若瑕疵明显，使用**先超分再补帧**。

改用 **Tariff**：质量接近、速度明显更快。
:::

## Tariff

当前主推的新一代补帧算法，质量可对标 GMFSS pg104，速度更快。该算法仅在专业版中提供。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| Tariff_neu2_upg | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 质量接近 GMFSS pg104，大约快一倍 | — |
| Tariff_neu2_pwr / pwr_fix | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 比 UPG 再快约一倍；`pwr_fix` 针对平移抖动 | 原版 PWR 平移画面可能会有轻微抖动 |
| Tariff_neu2_pge / pge_v2 / pge_v3_gram / pge_v3_real | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★★ | PGE质量取向；v3 分 gram / real 素材 | 比 PWR 慢 |
| Tariff_neu2_stable / stable_v2 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 更稳的默认观感 | 极限细节略逊 UPG |
| Tariff_neu2_nb202 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 更轻的结构，适合核显/低显存路径 | 质量低于 UPG / PGE |
| Tariff_neu2_nb202_mnn / pwr_mnn | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | MNN 路径，核显 / A 卡可运行 Tariff | 质量低于 CUDA Tariff |

## RIFE

高速、常用的补帧算法。下列 `official_*` 与 `rpr_*` 在社区版本中提供。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| official_4.26 / 4.26_heavy / 4.22 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 最后的官方实拍模型，覆盖绝大多数实拍场景 | heavy 更慢、更吃显存 |
| official_4.18 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 开双向光流与动态光流时，部分实拍可能更好 | 需手动开相关选项，兼容性略挑 |
| official_4.15 / 4.17 | <Badge text="社区" type="info"/> / <Badge text="Beta" type="tip"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 介于 4.9 与 4.18 之间的过渡模型 | 4.17 仅在公测 Beta 版本中提供 |
| official_4.9 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 动漫与实拍都做过优化，实拍好于 4.8 | 速度与上一代接近 |
| official_4.8 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 针对动漫训练，动漫观感好 | 实拍一般 |
| official_4.6 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 第二代，流畅稳定，支持非整数倍率 | 精细度不如新一代 |
| official_2.3 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★☆☆☆ | 初代经典 | 不支持非整数倍率，兼容性差 |
| rpr_v7_2.3 | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 第三代组合模型，复杂画面适应更好 | 速度一般 |
| rpr_v7_2.3_ultra#2 | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 组合模型，更能适应复杂画面 | 仅在专业版中提供 |
| rpr_v7_1.0 | <Badge text="社区" type="info"/> <Badge text="Beta" type="tip"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★☆☆☆ | 早期 rpr | 仅在公测 Beta 版本的社区版本中提供 |

## ncnn-RIFE

社区版。质量略低于同代 CUDA RIFE，换兼容性。同版本常带 `ensembleTrue` / `ensembleFalse`。

社区版本中提供：`rife-v2.3`、`rife-v4`、`rife-v4.6`、`rife-v4.9`、`rife-v4.10`～`4.11`、`4.15`、`4.16_lite`、`4.18`、`4.22`、`4.22_lite`。

| 优点 | 缺点 |
| --- | --- |
| N / A / 核显都能跑，速度快 | 同代画质略逊 CUDA RIFE；部分 lite 更糊 |

## GMFSS

动漫补帧质量标杆，但速度较慢。社区版本包含 `pg_104` / `pg_117` / `union_v`，专业版本包含 `pg_104_lite` / `pg_104_pro`。`pg_119` 仅在公测 Beta 版本的社区版本中提供。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| GmfSs_pg_104 | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 最强之一的动漫补帧 | 慢；专业版更建议 Tariff |
| GmfSs_pg_104_lite / pro | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | lite 更快，pro 质量取向 | 仍明显慢于 Tariff |
| GmfSs_pg_117 / pg_119 | <Badge text="社区" type="info"/> / <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 104 之后的试验版本 | 119 仅在公测 Beta 版本中提供 |
| GmfSs_union_v | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 结构稳、画面流畅 | 部分内容比 basic 更糊 |

## UMSS

与 GMFSS 同属动漫向。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| Umss_v1 | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 部分镜头比 pg104 更顺、杂质更少 | 略慢于 pg104 |
| Umss_v4 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 更新的 UMSS | 仍偏慢 |

## DRBA

保留动漫原始节奏的补帧模型：背景等线性运动被补上，角色等非线性运动仍按原拍数运动。

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/demos/05-drba-in.gif" width="300" style="display:inline-block;" />
  <img src="/demos/06-drba-out.gif" width="300" style="display:inline-block;" />
</div>

GIF 左侧为输入，右侧为输出。可以看到，背景等线性运动部分在补帧后仍保持线性运动，人物等非线性运动部分仍保持原有的非线性运动节奏。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| DRBA_RIFE_v4.26 / 4.26_heavy | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 保留原始拍数；速度较快；涡轮下部分显卡可接近实时预览 | heavy 更慢 |
| DRBA_RIFE_v4.22_lite | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 更快的 DRBA-RIFE | 仅正式社区版本提供，公测 Beta 版本已移除 |
| DRBA_GmfSs_pg | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 高质量、保留原始拍数的导出效果 | 速度较慢 |
| DRBA_RIFE_v4.17 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 专业版本中的 DRBA-RIFE | 不如 4.26 新 |
| DRBA_Distill_v1 / v2_lite | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 经过蒸馏加速的保留原始拍数版本 | lite 版本画质略有下降 |
| DRBA_Tariff_neu2_pge | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★★ | 兼具 Tariff 画质和 DRBA 效果 | 需要专业版 |

## GIMM-VFI

不错的实拍补帧，[GIMM-VFI](https://github.com/GSeanCDAT/GIMM-VFI/tree/main)，仅专业版可用。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| GimmVfi_r_arb | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★★☆ | 任意时刻实拍补帧 | 画面糊 |
| GimmVfi_r_arb_lpips | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★★☆ | LPIPS 取向，观感更贴感知 | 更慢 |

## Waft

专业版模型。`waft_v1` 偏动漫素材，`waft_v2` / `v2_lpips` 为后续版本。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| waft_v1 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 动漫向 Waft | 不如 v2 新 |
| waft_v2 / waft_v2_lpips | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 新一代；lpips 版本的观感更贴近人眼感受 | 速度可能较慢 |

## VFSS

社区版，多帧输入。`Vfss_v1_anime` / `Vfss_v1_real` 分别对应动漫与实拍。不支持**时空重采样**类去重。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| Vfss_v1_anime | <Badge text="社区" type="info"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 多帧上下文，动漫 | 去重选项受限 |
| Vfss_v1_real | <Badge text="社区" type="info"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 多帧上下文，实拍 | 去重选项受限 |

## TensorRT RIFE

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| rife_v4.6 / 4.8 / 4.18 / 4.22 / 4.26_heavy.onnx | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | N 卡 TensorRT 加速同代 RIFE | 首次编译久；非 N 卡需要开启vspipe解码，使用DirectML推理才可用 |

## Prometheus
推荐用于实拍素材的通用补帧模型。
| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| prometheus_svfi / prometheus_v2_svfi | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★★★ | 字幕和 UI 画面表现稳定 | 较为消耗显存，可能需要开启切割块 |
