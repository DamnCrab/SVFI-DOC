---
title: 超分模型说明
permalink: /zh/pages/sr-models/
---

::: tip
超分功能需购买[专业版 DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)。所有超分模型都在专业版中提供。下表标注 **Beta** 的模型仅在 Steam 公测分支可用。
:::

<Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="去字幕" color="#222" bgColor="#ffffe0"/> <Badge text="抗压缩" color="#222" bgColor="#e6e6fa"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/>

**推荐指数**按当前产品定位给出（★★★★★ 为当前主推）。一倍修复类模型详见[画质恢复模型说明](/zh/pages/restore-models/)。

## 算法一览

| 算法 | 版本 | 模型标签 | 推荐 | A 卡 |
| :---: | :---: | :---: | :---: | :---: |
| realCUGAN | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | × |
| ncnnCugan | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | √ |
| realESR | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | × |
| ncnnRealESR | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | √ |
| Anime4K | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | √ |
| AnimeSR | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | × |
| waifu2x | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | √ |
| waifuCuda | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | × |
| RTXSR | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| TensorRT（ONNX） | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★★ | × |
| Compact | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| SPAN | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |

::: tip
SVFI 对素材的划分：

**动漫**主要由平面图层构成，**图层交界清晰**。如手绘 2D、多数三渲二。3D 背景 + 2D 人物也是动漫类型。

**实拍**是单镜头真实世界或 CG，**肉眼分不出图层交界**。如真人电影、3D CG、3D 游戏。

特别地，我们认为3D/3G背景+2D人物制作的动画为动漫素材类别。
:::

<div align=center>
<img src="/screenshots/zh/31-sr-settings.png"  width=600>
</div>


## realCUGAN / ncnnCugan

**动漫专用，效果很好。** up2x / 3x / 4x 为倍率；`pro` 为增强版，见[官方介绍](https://github.com/bilibili/ailab/tree/main/Real-CUGAN)。`conservative` 保守，`no-denoise` 不降噪，`denoise_N` 降噪强度。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| realCUGAN 全套 pth | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★★ | 动漫超分主力 | 仅 CUDA |
| ncnnCugan 对应套件 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | A / I / N 卡通用 | 略慢于 CUDA 同款 |

## realESR / ncnnRealESR

**3D 动漫也能用，整体更偏动漫。** RealESRGAN 偏脑补、更锐更艳；RealESRNet 偏涂抹、保原色。带 `anime` 的模型速度更快；`anime` 为官方模型。`RealESR_RFDN` 速度快，适合动漫素材。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| RealESRGAN_x2plus / x4plus 及 anime 变体 | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 清晰艳丽 | 容易过锐 |
| RealESRNet_x4plus | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 保色、涂抹向 | 细节少 |
| RealESR_RFDN_x2plus_anime110k | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 快 | 倍率固定 2× |
| RealESR_x2_anime_APISR_RRDB_GAN | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | APISR 动漫向 | 仅在公测 Beta 版本中提供 |
| ncnn：animevideov3 x2/x3/x4、x4plus、x4plus-anime | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 跨厂商 | 质量略逊 CUDA |
| ncnn：AnimeJaNai / AniScale / LSDIR / nomo8ksc | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Beta 额外 ncnn 模型 | 仅在公测 Beta 版本中提供 |

`realesr-animevideov3`：较保守的动漫视频超分，快、质量稳，不建议开 TTA。

## AnimeSR

AnimeSR 由 Tencent ARC Lab 开发，仅提供 `AnimeSR_v2_x4` 一个四倍放大模型，整体比 CUGAN 更保守。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| AnimeSR_v2_x4 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Tencent ARC，比 CUGAN 保守 | 只有 4× |

## Anime4K

Anime4K 是超高速、偏保守的实时动漫超分算法，共有 6 种预设：`Anime4K_Upscale_x2_A/B/C/D` 为二倍放大（默认使用 A），另有 `x3` 和 `x4` 版本。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| Anime4K_Upscale_x2 A/B/C/D、x3、x4 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 极快、实时向、保守 | 细节上限低 |

### 自定义 Anime4K

安装目录 `models\sr\Anime4K\models` 下的 `.json` 为滤镜链。以 `Anime4K_Upscale_x2_A.json` 为例：

```json
{
  "shaders": [
    { "path": "Restore/Anime4K_Clamp_Highlights.glsl", "args": [] },
    { "path": "Restore/Anime4K_Restore_CNN_VL.glsl", "args": [] },
    { "path": "Upscale/Anime4K_Upscale_CNN_x2_VL.glsl", "args": ["upscale"] }
  ]
}
```

- 1× 恢复类（Clamp / Restore）的 `args` 留空
- 2× 放大类填 `upscale`
- `Anime4K_AutoDownscalePre_x2.glsl` 一类填 `downscale`
- 列表顺序即调用顺序，可自行组合或新建 json

## waifu2x

waifu2x 是经典的保守型超分算法：`cunet` 和 `anime` 主要用于动漫，`photo` 可用于实拍素材。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| waifu2x cunet / anime / photo | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 经典保守；photo 可走实拍 | 一代算法 |

### waifuCuda

waifuCuda 是 waifu2x 的 CUDA 实现，主要用于动漫素材，速度和观感与 CUGAN 接近。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| waifuCuda nunif-cunet2x | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | CUDA 实现，观感接近 CUGAN | 仅 CUDA |

## RTXSR

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| rtxsr_q1～q4 | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | NVIDIA 渲染器超分，档位 1–4 | 需 NVIDIA 硬件编码路径 |

## Compact / SPAN

Compact 和 SPAN 仅在专业版的公测 Beta 版本中可用。使用前需要在 Steam 设置 → 测试版中选择公测分支。Compact 上常见 **AnimeJaNai**、**AniScale**；SPAN 上常见 **Nomos** 等。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | --- | :---: | --- | --- |
| AnimeJaNai HD V3 Compact / Ultra / SuperUltra | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 快；速度 SuperUltra > Ultra > Compact | 景深识别弱，易锐化背景 |
| AnimeJaNai V2 三档 | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | 上一代 JaNai | 不如 V3 |
| 2x-AniScale-compact / AniScale2S | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | 细节保留好、涂抹低、锐化低 | 偏慢、显存仍要预留 |
| SPAN Nomos / ClearReality / PurePhoto | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 实拍/通用来源多 | SVFI 只能载入 `nf=48` |

AnimeJaNai 适用于 3D 动漫，也可处理部分实拍素材，但更适合动漫。它可以看作是偏轻量的 CUGAN 类模型，景深识别较弱，容易把背景锐化；速度通常为 `SuperUltra > Ultra > Compact`。

## TensorRT（ONNX）

N 卡加速。`qa_fte` 会打上 <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/>，只在涡轮路径使用。

| 模型 | 版本 | 模型标签 | 推荐 | 优点 | 缺点 |
| --- | --- | :---: | :---: | --- | --- |
| CUGAN 系列 onnx | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 同款 CUGAN 的 TensorRT 加速 | 首次编译久 |
| qa_fte v0/v1（1× / 2× / 4×） | <Badge text="专业" type="warning"/> | <Badge text="实拍" color="#222" bgColor="#90ee90"/> <Badge text="仅涡轮" color="#222" bgColor="#ffb6c1"/> | ★★★★★ | 实拍效果好 | 必须涡轮 |
| realesr-animevideov3-4x、RealESRGANv2-animevideo xsx2/xsx4 | <Badge text="专业" type="warning"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> | ★★★★☆ | 轻量动漫视频 | 倍率固定 |
| AnimeJaNai / AniScale / AniSD / Adore / Fallin / waifu2x cunet 等 | <Badge text="专业" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="动漫" color="#222" bgColor="#add8e6"/> <Badge text="实拍" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Beta 额外 onnx 模型 | 仅在公测 Beta 版本中提供；部分文件名带 `test_only` |

::: warning
TRT 要预编译：第一次不要把线程数开到大于 1。
失败可重试五六次，仍失败请联系开发。
理论上与非 TRT 同款接近，个别镜头有差别。
:::

## 超分模型视觉对比

<imgSlider :items="[
{
	first: '/compare/01-aniscale-a-in.png',
    second: '/compare/01-aniscale-a-out.png',
	name: 'Aniscale Demo 1',
    desc: '2x-AniScale-compact 二倍超分，细节保留好，涂抹低、锐化低（显存较低，速度较慢）'
}]"/>

<imgSlider :items="[
{
	first: '/compare/02-aniscale-b-in.png',
    second: '/compare/02-aniscale-b-out.png',
	name: 'Aniscale Demo 2',
    desc: '同上'
}
]"/>

<imgSlider :items="[
{
	first: '/compare/03-animevideo-v3-in.png',
    second: '/compare/03-animevideo-v3-out.png',
	name: 'realesr-animevideov3-x2',
    desc: '二倍超分，细节保留好，略有涂抹，锐化中等（显存较低，速度较快，不建议开 TTA）'
}
]"/>

## 自行添加 OpenModelDB 上的超分模型

SVFI 可加载符合要求的模型文件。[OpenModelDB](https://openmodeldb.info/) 中的 Compact、SPAN、ATD、ONNX（TensorRT）结构与 SVFI 兼容。

<div align=center>
<img src="/external/openmodeldb/01-structures.png"  width=600>
</div>

### 示例：新增 Compact

- 搜索 Aniscale，可见 AniScale-2-Compact
<div align=center>
<img src="/external/openmodeldb/02-aniscale-search.png"  width=600>
</div>

- 进入第一代 Aniscale，看右侧 Size：`64nf` 为特征数（通道），`16nc` 为卷积数（深度）
<div align=center>
<img src="/external/openmodeldb/03-model-info.png"  width=600>
</div>

- Compact 载入规则：
    - 名称带 `super ultra`（AnimeJaNai）：`nf=24，nc=8`
    - 名称带 `ultra`：`nf=64，nc=8`
    - 默认 `nf=64，nc=16`
- Aniscale-2-Compact 网页若无结构说明，按默认 `nf=64，nc=16`，pth 放到 `SVFI\models\sr\Compact\models`（没有就新建）

SPAN 同理，目前只能载入 `nf=48`，其它结构不支持。

<div align=center>
<img src="/external/openmodeldb/04-span.png"  width=600>
</div>

### 示例：新增 TensorRT 模型

也可添加如 [AnimeJaNai](https://github.com/the-database/mpv-upscale-2x_animejanai) 一类 onnx。要求：

- 单输入、单输出，维度均为 `[dynamic, 3, dynamic, dynamic]`
- 输入名 `input`，输出名 `output`
- 放到 `SVFI\models\sr\TensorRT\models`

::: tip 模型编译说明
编译后会生成 `.engine`，如 `realesrgan_2x.onnx.540x960_workspace128_fp16_io32_device0_8601.engine` 表示切割大小 540×960。不同切割大小速度差很大，尽量不要开切割。
:::

### 其他规则

- ESRGAN 默认只支持 `nf=64，nb=23`；名称含 `anime` 时 `nb` 按 6 识别

::: tip 术语
- nf → number of features
- nc → number of convs
- nb → number of blocks
:::
