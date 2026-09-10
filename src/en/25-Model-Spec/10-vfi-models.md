---
title: Frame interpolation models
permalink: /en/pages/vfi-models/
---

This page lists the VFI models included in the current release and public-beta versions. **Community** items need no DLC; **Professional** items need the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/). **Beta** items are available only on the Steam public-beta branch.

Genre performance differs; auto pairing is in [Presets](/en/pages/svfi-presets/). Model tags match the in-app labels:

<Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Anti-Subtitle" color="#222" bgColor="#ffffe0"/> <Badge text="Decompress" color="#222" bgColor="#e6e6fa"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/>

**Recommendation** is product positioning (★★★★★ = current default pick).

## Algorithm overview

| Algorithm | Edition | Tags | Rec. | AMD |
| :---: | :---: | :---: | :---: | :---: |
| Tariff | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★★ | × |
| RIFE | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | × |
| ncnn-RIFE | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | √ |
| GMFSS | <Badge text="Community" type="info"/> / <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | × |
| UMSS | <Badge text="Community" type="info"/> / <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | × |
| DRBA | <Badge text="Community" type="info"/> / <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★★ | × |
| GIMM-VFI | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★★☆ | × |
| Waft | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★★ | × |
| VFSS | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| TensorRT RIFE | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | × |
| MNN Tariff | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | √ |
| Prometheus | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★★★ | × |
| IFUNet | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★☆☆☆ | × |

::: tip
Weights named `ncnn` / `mnn` use [ncnn](https://github.com/Tencent/ncnn) or MNN and run on NVIDIA, AMD, and iGPU. Other CUDA models do not run on AMD or iGPU.
:::

::: warning
GMFSS / UMSS / some DRBA paths use a lot of VRAM; avoid 4K+ in one shot. If you also super-resolve, enable **VFI then SR** under output resolution, or split into two jobs. If artifacts get worse, go back to SR then VFI.

The UI recommends **Tariff** over GMFSS: similar quality, much faster.
:::

## Tariff

Current next-generation family. Quality can match GMFSS pg104 at higher speed. This family is available only in the Professional version.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| Tariff_neu2_upg | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Near pg104 quality at about 2× the speed | — |
| Tariff_neu2_pwr / pwr_fix | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | About 2× faster than UPG; `pwr_fix` targets pan jitter | Stock PWR may shimmer on pans |
| Tariff_neu2_pge / pge_v2 / pge_v3_gram / pge_v3_real | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★★ | Quality-oriented PGE line; v3 splits gram / real | Slower than PWR |
| Tariff_neu2_stable / stable_v2 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Safer default look | Peak detail a bit behind UPG |
| Tariff_neu2_nb202 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Lighter structure for iGPU / low VRAM | Below UPG / PGE quality |
| Tariff_neu2_nb202_mnn / pwr_mnn | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | MNN path; Tariff can run on iGPU / AMD | Below CUDA Tariff quality |

## RIFE

Fast, widely used. `official_*` and most `rpr_*` are included in the Community version.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| official_4.26 / 4.26_heavy / 4.22 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Latest IRL line for most live-action | heavy is slower and hungrier |
| official_4.18 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Bidirectional + dynamic flow can beat newer gens on some IRL | Extra options must be turned on |
| official_4.15 / 4.17 | <Badge text="Community" type="info"/> / <Badge text="Beta" type="tip"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Bridge between 4.9 and 4.18 | 4.17 is available only in the public-beta Community version |
| official_4.9 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Tuned for both anime and IRL | Speed similar to the previous gen |
| official_4.8 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Anime-biased training | Weak on live-action |
| official_4.6 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 2nd-gen, stable, non-integer ratios | Less fine than newer gens |
| official_2.3 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★☆☆☆ | Classic 1st-gen | No non-integer ratios |
| rpr_v7_2.3 | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | 3rd-gen combo, complex motion | Average speed |
| rpr_v7_2.3_ultra#2 | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Stronger combo on complex shots | Available only in the Professional version |
| rpr_v7_1.0 | <Badge text="Community" type="info"/> <Badge text="Beta" type="tip"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★☆☆☆ | Early rpr | Available only in the public-beta Community version |

## ncnn-RIFE

Community. Slightly below same-gen CUDA RIFE; much broader GPU support. Many versions ship `ensembleTrue` / `ensembleFalse`.

The Community version includes: `rife-v2.3`, `rife-v4`, `rife-v4.6`, `rife-v4.9`, `rife-v4.10`–`4.11`, `4.15`, `4.16_lite`, `4.18`, `4.22`, `4.22_lite`.

| Strengths | Weaknesses |
| --- | --- |
| NVIDIA / AMD / iGPU; fast | Softer than CUDA RIFE; lite variants blur more |

## GMFSS

Anime quality reference, but slow. The Community version includes `pg_104` / `pg_117` / `union_v`; the Professional version includes `pg_104_lite` / `pg_104_pro`. `pg_119` is available only in the public-beta Community version.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| GmfSs_pg_104 | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Among the strongest anime VFI | Slow; Pro users should prefer Tariff |
| GmfSs_pg_104_lite / pro | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | lite is faster; pro leans quality | Still much slower than Tariff |
| GmfSs_pg_117 / pg_119 | <Badge text="Community" type="info"/> / <Badge text="Beta" type="tip"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Post-104 experiments | 119 is available only on the public-beta branch |
| GmfSs_union_v | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Stable, smooth | Can blur more than basic |

## UMSS

Same anime niche as GMFSS.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| Umss_v1 | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Some shots cleaner/smoother than pg104 | Slightly slower than pg104 |
| Umss_v4 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Newer UMSS | Still slow |

## DRBA

Keeps anime cadence: linear motion (backgrounds) is interpolated; non-linear motion (characters) keeps the original beat.

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/demos/05-drba-in.gif" width="300" style="display:inline-block;" />
  <img src="/demos/06-drba-out.gif" width="300" style="display:inline-block;" />
</div>

The left side is the input and the right side is the output. Backgrounds and other linear motion remain linear after interpolation, while characters and other non-linear motion keep their original anime cadence.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| DRBA_RIFE_v4.26 / 4.26_heavy | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Preserves the original cadence; fast; Turbo can approach realtime on some GPUs | heavy is slower |
| DRBA_RIFE_v4.22_lite | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Lighter DRBA-RIFE | Included only in the release Community version; removed from beta |
| DRBA_GmfSs_pg | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | High-quality export that preserves the original cadence | Slow |
| DRBA_RIFE_v4.17 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | DRBA-RIFE in the Professional version | Older than 4.26 |
| DRBA_Distill_v1 / v2_lite | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★☆ | Accelerated distilled cadence path | lite trades some quality |
| DRBA_Tariff_neu2_pge | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★★★ | Tariff quality with DRBA cadence | Professional version required |

## GIMM-VFI

Solid IRL VFI, [GIMM-VFI](https://github.com/GSeanCDAT/GIMM-VFI/tree/main). Professional; tagged **Turbo-Only**.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| GimmVfi_r_arb | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★★☆ | Anytime IRL VFI | Blurry output |
| GimmVfi_r_arb_lpips | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★★☆ | LPIPS-oriented look | Slower |

## Waft

Professional models. `waft_v1` is the anime-leaning version; `waft_v2` / `v2_lpips` are newer versions.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| waft_v1 | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Anime-oriented Waft | Older than v2 |
| waft_v2 / waft_v2_lpips | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | Newer line; lpips has a more perceptual look | Needs helper model files such as depth |

## VFSS

Community, multi-frame input. `Vfss_v1_anime` / `Vfss_v1_real`. Does not support resample-style dedup.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| Vfss_v1_anime | <Badge text="Community" type="info"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> | ★★★☆☆ | Multi-frame context, anime | Dedup options limited |
| Vfss_v1_real | <Badge text="Community" type="info"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★☆☆ | Multi-frame context, IRL | Dedup options limited |

## TensorRT RIFE

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| rife_v4.6 / 4.8 / 4.18 / 4.22 / 4.26_heavy.onnx | <Badge text="Pro" type="warning"/> | <Badge text="IRL" color="#222" bgColor="#90ee90"/> | ★★★★☆ | TensorRT same-gen RIFE | Long first compile; non-NVIDIA cards require VSPipe decoding and DirectML inference |

## Prometheus

Recommended general-purpose VFI for live-action footage.

| Model | Edition | Tags | Rec. | Strengths | Weaknesses |
| --- | --- | --- | :---: | --- | --- |
| prometheus_svfi / prometheus_v2_svfi | <Badge text="Pro" type="warning"/> | <Badge text="Anime" color="#222" bgColor="#add8e6"/> <Badge text="IRL" color="#222" bgColor="#90ee90"/> <Badge text="Turbo-Only" color="#222" bgColor="#ffb6c1"/> | ★★★★★ | Stable on subtitles and UI footage | Uses substantial VRAM and may need tiling |
