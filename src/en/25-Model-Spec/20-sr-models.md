---
title: Super-resolution models
permalink: /en/pages/sr-models/
---

::: tip
Super-resolution requires the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/). All SR models are provided in the Professional version. **Beta** in the table means the model is available only on the public-beta branch.
:::

<Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> <Badge text="Decompress" color="#222" bgColor="#e6e6fa"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/>

**Recommendation** is product positioning (★★★★★ = current default pick). 1× restore models are detailed under [Image restoration models](/en/pages/restore-models/).

## Algorithm overview

| Algorithm | Edition | Tags | Rec. | AMD |
| :---: | :---: | :---: | :---: | :---: |
| realCUGAN | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | × |
| ncnnCugan | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | √ |
| realESR | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | × |
| ncnnRealESR | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | √ |
| Anime4K | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | √ |
| AnimeSR | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | × |
| waifu2x | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | √ |
| waifuCuda | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | × |
| RTXSR | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| TensorRT (ONNX) | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★★ | × |
| Compact | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| SPAN | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |

::: tip
SVFI’s genre split:

**Anime** is mostly flat layers with **clear layer boundaries** (hand-drawn 2D, most 3D-to-2D). 3D backgrounds + 2D characters still count as anime.

**IRL** is single-camera live-action or CG where **layers cannot be told apart** (live-action film, 3D CG, 3D games).
:::

<div align=center>
<img src="/screenshots/en/31-sr-settings.png"  width=600>
</div>

## realCUGAN / ncnnCugan

**Anime-first, excellent results.** up2x / 3x / 4x are scale factors; `pro` is the enhanced line, see the [official notes](https://github.com/bilibili/ailab/tree/main/Real-CUGAN). `conservative` is conservative; `no-denoise` skips denoise; `denoise_N` is denoise strength.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| Full realCUGAN pth set | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★★ | Main anime SR | CUDA only |
| Matching ncnnCugan set | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | AMD / Intel / NVIDIA | A bit slower than CUDA |

## realESR / ncnnRealESR

**Usable on 3D anime; still anime-leaning.** RealESRGAN hallucinates more (sharper, punchier); RealESRNet smears more and keeps color. Models with `anime` in the name are faster; `anime` is official. `RealESR_RFDN` is fast for anime.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| RealESRGAN_x2plus / x4plus and anime variants | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Clear and vivid | Easy to oversharpen |
| RealESRNet_x4plus | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Color-preserving smear | Less detail |
| RealESR_RFDN_x2plus_anime110k | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Fast | Locked to 2× |
| RealESR_x2_anime_APISR_RRDB_GAN | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | APISR anime line | Beta only |
| ncnn: animevideov3 x2/x3/x4, x4plus, x4plus-anime | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Cross-vendor | Slightly below CUDA |
| ncnn: AnimeJaNai / AniScale / LSDIR / nomo8ksc | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Extra beta ncnn models | Available only on the public-beta branch |

`realesr-animevideov3`: conservative anime-video SR, fast and stable; avoid TTA.

## AnimeSR

AnimeSR was developed by Tencent ARC Lab. Only `AnimeSR_v2_x4` is provided, and its look is more conservative than CUGAN.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| AnimeSR_v2_x4 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Tencent ARC; more conservative than CUGAN | 4× only |

## Anime4K

Anime4K is a very fast, conservative real-time anime SR algorithm with six presets: `Anime4K_Upscale_x2_A/B/C/D` are 2× presets (A is the default), followed by `x3` and `x4` presets.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| Anime4K_Upscale_x2 A/B/C/D, x3, x4 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Very fast, realtime-ish, conservative | Low detail ceiling |

### Custom Anime4K

JSON chains live under `models\sr\Anime4K\models`. Example `Anime4K_Upscale_x2_A.json`:

```json
{
  "shaders": [
    { "path": "Restore/Anime4K_Clamp_Highlights.glsl", "args": [] },
    { "path": "Restore/Anime4K_Restore_CNN_VL.glsl", "args": [] },
    { "path": "Upscale/Anime4K_Upscale_CNN_x2_VL.glsl", "args": ["upscale"] }
  ]
}
```

- 1× restore shaders (Clamp / Restore): empty `args`
- 2× upscale shaders: `upscale`
- `Anime4K_AutoDownscalePre_x2.glsl`-style: `downscale`
- List order is execution order; edit or add JSON files as needed

## waifu2x

waifu2x is a classic conservative SR algorithm: `cunet` and `anime` are mainly for anime, while `photo` can be used for live-action footage.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| waifu2x cunet / anime / photo | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Classic conservative; photo for IRL | Old generation |

### waifuCuda

waifuCuda is the CUDA implementation of waifu2x; it is mainly for anime and has a speed and look somewhat similar to CUGAN.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| waifuCuda nunif-cunet2x | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | CUDA port, CUGAN-like | CUDA only |

## RTXSR

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| rtxsr_q1–q4 | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | NVIDIA renderer SR, quality 1–4 | Needs the NVIDIA encode path |

## Compact / SPAN

Compact and SPAN are available only in the public-beta Professional version. In Steam, open the app properties → **Betas** and opt in first. Compact commonly hosts **AnimeJaNai** and **AniScale**; SPAN hosts **Nomos** and similar.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| AnimeJaNai HD V3 Compact / Ultra / SuperUltra | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Fast; SuperUltra > Ultra > Compact | Weak DoF, easy to sharpen backgrounds |
| AnimeJaNai V2 three tiers | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Previous JaNai | Behind V3 |
| 2x-AniScale-compact / AniScale2S | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Keeps detail, low smear/sharpen | Slower |
| SPAN Nomos / ClearReality / PurePhoto | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Many IRL/general models | SVFI loads `nf=48` only |

AnimeJaNai works on 3D anime and some live-action footage, but is better suited to anime. It is a lighter CUGAN-like model with weak depth-of-field recognition, so it can sharpen backgrounds. Speed is generally `SuperUltra > Ultra > Compact`.

## TensorRT (ONNX)

NVIDIA acceleration. `qa_fte` is tagged <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> and only runs on the Turbo path.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | :---: | :---: | --- | --- |
| CUGAN onnx set | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | TensorRT CUGAN | First compile is slow |
| qa_fte v0/v1 (1× / 2× / 4×) | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★★★ | Good live-action results | Turbo required |
| realesr-animevideov3-4x, RealESRGANv2-animevideo xsx2/xsx4 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Light anime video | Fixed scale |
| AnimeJaNai / AniScale / AniSD / Adore / Fallin / waifu2x cunet and similar | <Badge text="Pro" type="warning"/> <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Extra beta onnx | Beta only; some filenames say `test_only` |

::: warning
TRT must compile first: keep thread count at 1 on the first run. Retry five or six times on failure, then contact the developers. Quality should match the non-TRT sibling except on a few shots.
:::

## Visual comparisons

<imgSlider :items="[
{
	first: '/compare/01-aniscale-a-in.png',
    second: '/compare/01-aniscale-a-out.png',
	name: 'Aniscale Demo 1',
    desc: '2x-AniScale-compact, strong detail, low smear/sharpen (lower VRAM, slower)'
}]"/>

<imgSlider :items="[
{
	first: '/compare/02-aniscale-b-in.png',
    second: '/compare/02-aniscale-b-out.png',
	name: 'Aniscale Demo 2',
    desc: 'Same as above'
}
]"/>

<imgSlider :items="[
{
	first: '/compare/03-animevideo-v3-in.png',
    second: '/compare/03-animevideo-v3-out.png',
	name: 'realesr-animevideov3-x2',
    desc: '2× SR, good detail, slight smear, medium sharpen (lower VRAM, faster; avoid TTA)'
}
]"/>

## Add OpenModelDB super-resolution models

SVFI can load extra model files that match its loaders. The Compact, SPAN, ATD, and ONNX (TensorRT) structures on [OpenModelDB](https://openmodeldb.info/) are compatible.

<div align=center>
<img src="/external/openmodeldb/01-structures.png"  width=600>
</div>

### Example: add Compact

- Search Aniscale for AniScale-2-Compact
<div align=center>
<img src="/external/openmodeldb/02-aniscale-search.png"  width=600>
</div>

- Open the first-generation Aniscale page. Size: `64nf` = features (channels), `16nc` = convs (depth)
<div align=center>
<img src="/external/openmodeldb/03-model-info.png"  width=600>
</div>

- Compact loading rules:
    - name contains `super ultra` (AnimeJaNai): `nf=24, nc=8`
    - name contains `ultra`: `nf=64, nc=8`
    - default `nf=64, nc=16`
- If Aniscale-2-Compact has no structure text, assume the default and put the pth in `SVFI\models\sr\Compact\models` (create the folder if needed)

SPAN is the same idea; only `nf=48` is supported. Other forks are not.

<div align=center>
<img src="/external/openmodeldb/04-span.png"  width=600>
</div>

### Example: add a TensorRT model

You can also add onnx such as [AnimeJaNai](https://github.com/the-database/mpv-upscale-2x_animejanai). Requirements:

- One input and one output, both `[dynamic, 3, dynamic, dynamic]`
- Input name `input`, output name `output`
- Place under `SVFI\models\sr\TensorRT\models`

::: tip Engine compile
Compile produces an `.engine`, e.g. `realesrgan_2x.onnx.540x960_workspace128_fp16_io32_device0_8601.engine` means a 540×960 tile. Tile size changes speed a lot; prefer no tiling.
:::

### Other rules

- ESRGAN defaults to `nf=64, nb=23`; if the name contains `anime`, `nb` is treated as 6

::: tip Terms
- nf → number of features
- nc → number of convs
- nb → number of blocks
:::
