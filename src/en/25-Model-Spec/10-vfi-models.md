---
title: Frame interpolation models
permalink: /en/pages/vfi-models/
---

The following content is the specification and usage case of each AI model integrated in the software

SVFI integrates several frame interpolation algorithms, such as RIFE, GMFSS, Tariff, etc.

These algorithms perform differently on different genres of input, and the algorithms and models for In-Real-Life and In-Game/Animation footages are respectively shown in [Presets](/en/pages/svfi-presets/) and the following introduction

## Introduction to Frame Interpolation Models

- RIFE: High-speed, popular frame interpolation algorithm 

| Model | Strengths | Weaknesses |
| --- | --- | --- |
| 4.25+ | Newest generation; suitable for most real-life interpolation scenarios |  |
| 4.18 | With bidirectional + dynamic optical flow, real-life quality can exceed 4.25+ | Some features must be enabled manually; slightly pickier compatibility |
| rpr_v7_2.3_ultra | 3rd-gen combined model; strong on complex motion |  |
| rpr_v7_2.3_ultra#2 | Combined model; strong on complex motion |  |
| 4.6–4.7 | 2nd-gen; smooth/stable; supports non-integer FPS ratios | Less fine detail than newer generations |
| 4.8 | Trained with a strong anime bias; great on anime | Not ideal for real-life footage |
| 4.9 | Tuned for both anime and real-life; better on real-life than 4.8-era models | Speed is broadly similar to the previous generation |
| 2.3 | Classic 1st-gen baseline | Weaker compatibility; no non-integer FPS ratio support |

::: tip
Models with the `ncnn` prefix use [ncnn](https://github.com/Tencent/ncnn) as the forward reasoning framework, which is compatible with NVIDIA GPUs and AMD GPUs, and models without this prefix cannot be used for AMD GPUs and core displays.
:::

- ncnn-rife: RIFE with support for various graphics card versions, good compatibility, fast speed, and slightly worse quality than RIFE.

- GIMMVfi: A good VFI model [GIMM-VFI](https://github.com/GSeanCDAT/GIMM-VFI/tree/main)

- GMFSS: Slow speed, super high quality (the following is the model introduction) (models with the trt mark are acceleration models)

| Model | Strengths | Weaknesses |
| --- | --- | --- |
| pg104 | Newest GMFSS anime model; currently the strongest anime VFI model | Slow |
| Umss_v1 | Same niche as pg104; in some shots smoother/cleaner than pg104 | Slightly slower than pg104 |
| union_v | Stable structure; smooth output | Slightly more blur than `basic` in some content |

::: warning
The series model consume a lot of VRAM and not recommended for 4K+ resolution interpolation,
please enable "Is SR later than VFI" in the "Use AI SR" settings of advanced settings to perform super resolution and VFI together at least VRAM cost.
:::

- **Tariff**: The current recommended next-generation VFI family.

| Model | Strengths | Weaknesses |
| --- | --- | --- |
| UPG | Quality comparable to GMFSS pg104 at ~2× the speed | - |
| PWR | ~2× faster than UPG | Panning shots may show subtle jitter |

- DRBA: VFI model that preserves the original pace of anime

| Model | Strengths | Weaknesses |
| --- | --- | --- |
| DRBA_RIFE_v4.26 | Keeps anime cadence; fast; with Turbo, can approach real-time preview on some GPUs | - |
| DRBA_GmfSs_pg | High-quality cadence-preserving export | Slower |

**DRBA Demo**

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/Statics/UserGuide/69.gif" width="300" style="display:inline-block;" />
  <img src="/Statics/UserGuide/70.gif" width="300" style="display:inline-block;" />
</div>

The left side of the GIF shows the input, and the right side shows the output. The background (linear motion part) maintains linear motion after interpolation, while the characters (non-linear motion part) maintain their non-linear motion pattern.
