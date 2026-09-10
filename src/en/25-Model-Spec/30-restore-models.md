---
title: Image restoration models
permalink: /en/pages/restore-models/
---

These models appear in the super-resolution list or as restore toggles in Advanced settings. They run at **1×** (no upscale) for decompression, watermark removal, debanding, and demosaic. All of them are provided in the Professional version.

<Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> <Badge text="Decompress" color="#222" bgColor="#e6e6fa"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/>

## Algorithm overview

| Algorithm | Edition | Tags | Rec. | AMD |
| :---: | :---: | :---: | :---: | :---: |
| BasicVSR++ T3 | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Decompress" color="#222" bgColor="#e6e6fa"/> | ★★★★☆ | × |
| Gloom | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | × |
| InPaint STTN | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | × |
| LaMa | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | × |
| DeMosaic | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| DLSS NR | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★☆☆ | × |
| DeepDeband | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| FMNet | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |

::: warning
Multi-frame restore (T3, Gloom, InPaint) is VRAM-heavy; 6 GB or more is safer.
DeepDeband / FMNet are available only on the **public-beta** branch.
:::

## BasicVSRPlusPlusRestore

IRL-oriented; quality depends on sequence length. T3 is included in the release Professional version; the `_trt` variant is available only on the public-beta branch.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| basicvsrpp_ntire_t3_decompress_max_4x | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Decompress" color="#222" bgColor="#e6e6fa"/> | ★★★★☆ | Excellent on heavily compressed footage | Slow and high VRAM; despite the 4x name, SVFI uses it as a 1× restore model |
| basicvsrpp_ntire_t3_decompress_max_4x_trt | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Decompress" color="#222" bgColor="#e6e6fa"/> | ★★☆☆☆ | TensorRT attempt | Recommended only for GPUs with at least 16 GB VRAM |

### Visual comparison

<imgSlider :items="[
{
	first: '/compare/04-t3-in.png',
    second: '/compare/04-t3-out.png',
	name: 'BasicVSR++ Track3 (T3)',
    desc: 'basicvsrpp-ntire-t3-decompress-max-4x 1× restore, excellent on heavy compression (slow)'
}
]"/>

## Gloom

Gloom is available only on the public-beta branch. It is a multi-frame enhancement model for low-resolution footage and can restore before upscaling; then specify 2× output resolution to use it as an SR model. `Gloom-pro` sequence length must be 4n+1 (1 / 5 / 9 / …); try 16 for Gloom and 33 for pro.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| Gloom_x1 | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Uses multiple frames to enhance the image | High VRAM |
| Gloom-pro_x1 | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Stronger pro path | At least 8 GB VRAM recommended |

## InPaint Watermark Removal Model

`InPaint_STTN` is available only in the public-beta Professional version. It performs 1× restoration and needs a static mask from the [internal player](/en/pages/player/#draw-a-static-mask).

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| InPaint_STTN | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | Static watermarks inside the mask can be removed automatically | Fails on solid/static backgrounds; the mask must contain motion |

### Steps

1. Enable super-resolution and select this model
<div align=center>
<img src="/screenshots/en/32-inpaint-select-model.png"  width=600>
</div>

2. Open the [internal player](/en/pages/player/)
<div align=center>
<img src="/screenshots/en/33-inpaint-player.png"  width=600>
</div>

3. Enable the mask
<div align=center>
<img src="/screenshots/en/34-inpaint-mask.png"  width=600>
</div>

4. Draw and save

<div align=center>
<img src="/screenshots/en/35-inpaint-draw-mask.png"  width=600>
</div>

Leave enough **moving** content inside the mask, or detection fails.

::: warning
Watermarks on **solid / fully static** backgrounds inpaint poorly.
:::

5. Click Encode. Sequence length greater than 30 is recommended.

<imgSlider :items="[
{
	first: '/compare/05-inpaint-in.png',
    second: '/compare/05-inpaint-out.png',
	name: 'InPaint watermark removal demo',
    desc: 'Sequence length greater than 30 is recommended'
}
]"/>

## LaMa

LaMa is a classic image erasure model. SVFI automatically detects subtitles in video and removes them. It is not suitable for solid-color still backgrounds.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| big-lama | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> | ★★★☆☆ | Classic erase network; works with a mask | Also weak on solid stills |

## DeMosaic

DeMosaic removes mosaic and pixelation from special-source footage. SVFI automatically detects and removes mosaics. In debug mode, it does not remove them, but shows the detected regions so the mosaic-detection threshold can be adjusted.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| bvpp_x1 (DeMosaic, LADA) | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Removes mosaics | Incompatible with the 16-bit workflow |

## DLSS NR

DLSS NR is a 1× denoise model that must use Turbo and currently supports only the 8-bit workflow. It is designed to add realistic lighting detail to game recordings.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| DLSSNR_x1 | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★☆☆ | Adds realistic lighting detail | Turbo required; currently 8-bit only |

<imgSlider :items="[
{
	first: '/compare/06-dlss-off.png',
    second: '/compare/06-dlss-on.png',
	name: 'DLSS NR demo',
    desc: 'Enable reconstruction guidance (reconstructed input motion vectors and depth information)'
}
]"/>

## DeepDeband

DeepDeband uses an AI algorithm to remove banding from video. **Available only on the public-beta branch**.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| deepdeband-f / deepdeband-w | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Reduces color banding | Unavailable on Turbo |

## FMNet

FMNet uses an AI algorithm to convert SDR video to HDR10 video. **Available only on the public-beta branch**. When enabled, the video becomes HDR10 with static metadata.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| FMNet anime_v1 / anime_v2 / final | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Restore for HDR and color-grading scenarios | Unavailable on Turbo |
