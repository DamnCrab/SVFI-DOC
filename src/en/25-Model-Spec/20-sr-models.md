---
title: Super-resolution models
permalink: /en/pages/sr-models/
---

::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

Currently, SVFI supports the following super-resolution algorithms.

| Algorithm Name | Applicable Genre | Requires BETA | Available on AMD GPUs |
| :---: | :---: | :---: | :---: |
| Anime4K | Anime |  | √ |
| AnimeSR | Anime |  | × |
| realCUGAN | Anime | | × |
| ncnnCugan | Anime |  | √ | 
| waifuCuda | Anime |  | × |
| PureBasicVSR | Live Action |  | × |
| [BasicVSR++ T3](/en/pages/restore-models/) | Live Action | √ | × |
| ATD | Live Action | √ | × |
| realESR | General |  | × |
| ncnnRealESR | General |  | √ |
| waifu2x | General |  | √ |
| TensorRT(ONNX) | General |  | × |
| Compact | General | √ | × |
| SPAN | General | √ | × |

:::tip
SVFI defines the distinction between anime materials and live-action materials as follows:

**Anime** materials are moving video clips mainly composed of flat image layers, and **the boundaries between each layer and the other layers are clear**. For example, hand-drawn 2D animation, most three-dimensional rendered two-dimensional pictures, etc.

**In Real Life** (IRL) materials are real-world pictures or computer-generated pictures captured using a single-lens camera, and **the individual layers and their boundaries cannot be distinguished by the naked eye**. For example, live-action movies, 3D CG, 3D game pictures, etc.

In particular, we consider animations made with 3D/3G backgrounds + 2D characters to be in the anime material category.
:::

<div align=center>
<img src="/Statics/en/UserGuide/sr-settings.png"  width=600>
</div>

## Introduction to the Super-Resolution Model

### realCUGAN

**Exclusive for anime, the effect is very excellent**

- up2x represents a 2x upscale, and 3x, 4x, etc. are similar.
- The pro model is an enhanced version, see [official introduction](https://github.com/bilibili/ailab/tree/main/Real-CUGAN) for details.
- Models with the word "conservative" are conservative models.
- Models with "no-denoise" do not perform noise reduction.
- Models with "denoise" perform noise reduction, and the number behind represents the noise reduction intensity.

- ncnnCUGAN

The NCNN version of CUGAN (universal for AMD GPUs, NVIDIA GPUs, and Inte; GPUs), the introduction is the same as above.

### realESR

**Applicable to both 3D anime, more suitable for anime**

- The RealESRGAN model tends to fill in the blanks, making the picture clearer and more vivid.
- The RealESRNet model tends to smudge, but the picture retains its original color.
- Models marked with "anime" are dedicated for anime super-resolution, and the speed is slightly faster than the previous two.
- anime is the official model, and anime_110k is a self-trained model.
- RealESR_RFDN is a self-trained super-resolution model with fast speed and is suitable for anime input.

- ncnnRealESR

The NCNN version of realESR, universal for AMD GPUs, Intel GPUs, and NVIDIA GPUs.
- realesr-animevideov3 (a relatively conservative anime video super-resolution model, with fast speed and high quality)
- realesrgan-4xplus (4x upscale model)
- realesrgan-4xplus-anime (4x anime upscale model)

### AnimeSR 

An anime super-resolution algorithm developed by Tencent ARC Lab

Only one 4x upscale model (AnimeSR_v2_x4.pth), the effect is more conservative compared to cugan.

### BasicVSRPlusPlusRestore

A 1× restoration model. See [Image restoration models](/en/pages/restore-models/).

### Anime4K 

A super-fast real-time anime super-resolution algorithm, relatively conservative

There are 6 preset scripts in total.
- Anime4K_Upscale_x2 A/B/C/D are all 2x upscales (default is A).
- Anime4K_Upscale_x3 is 3x upscale, and the x4 model is similar.

#### Custom Anime4K models

- In the installation folder `models\sr\Anime4K\models`, you can see the `.json` model configuration file.
- Take `Anime4K_Upscale_x2_A.json` as an example.

```json
{
  "shaders": [
    {
      "path": "Restore/Anime4K_Clamp_Highlights.glsl", "args": []
    },
    {
      "path": "Restore/Anime4K_Restore_CNN_VL.glsl", "args": []
    },
    {
      "path": "Upscale/Anime4K_Upscale_CNN_x2_VL.glsl", "args": ["upscale"]
    }
  ]
}
```
- Among them, `Anime4K_Clamp_Highlights.glsl` and `Anime4K_Restore_CNN_VL.glsl` are 1x restoration algorithms, corresponding to `models\sr\Anime4K\Restore\Anime4K_Clamp_Highlights.glsl`. The `args` parameter of this model needs to be left empty.
- `Anime4K_Upscale_CNN_x2_VL.glsl` is a 2x upscale algorithm, corresponding to `models\sr\Anime4K\Upscale\Anime4K_Upscale_CNN_x2_VL.glsl`. The `args` parameter of this model needs to be filled in with `upscale`.
- Similar to the `Anime4K_AutoDownscalePre_x2.glsl` model, the `args` parameter needs to be filled in with `downscale`.

- The order of the list is the actual calling order of the filters, and you can observe the model folder to freely combine, edit or create a new `.json` file to take effect.

### waifu2x 

A classic conservative super-resolution algorithm

- The cunet model is used for anime super-resolution.
- The photo model is used for real-world shooting.
- anime is used for anime super-resolution.

- waifuCuda: CUDA implementation of waifu2x

Used for anime super-resolution, the speed and effect are somewhat similar to cugan.

### Compact

::: tip
This algorithm is only available in the beta version of the public test of the professional DLC, and you need to manually go to the Steam settings - beta version to select it.
:::

A super-resolution model structure, some models such as **AnimeJanai** are trained based on this structure.

#### AnimeJanai

**Applicable to both 3D anime, more suitable for anime**

- A weakened version of RealCUGAN, with poor depth-of-field recognition (easy to sharpen the background), less computing power and faster speed.
- Speed: UltraSuper > Super > Compact model.


### SPAN

::: tip
This algorithm is only available in the beta version of the public test of the professional DLC, and you need to manually go to the Steam settings - beta version to select it.
:::

A super-resolution model structure, some model series such as **Nomos** are trained based on this structure.


### TensorRT 

Dedicated acceleration for the NVIDIA GPU of some of the above super-resolution algorithms

- All models of cugan can be accelerated.
- real-animevideov3 is a model specifically prepared for anime video super-resolution in RealESR.
- RealESRGANv2-animevideo-xsx2 2x anime video super-resolution upscale model.
- RealESRGANv2-animevideo-xsx4 4x anime video super-resolution upscale model.


::: warning
Since pre-compilation is required for processing using TRT, do not enable more than 1 thread when using TRT encoding for the first time.

If an error occurs when using it for the first time, please try five or six times.

If the error still occurs, please contact the developer.

In theory, the effect is the same as the non-TRT version, but there are differences in individual scenarios.
:::

## Visual Comparison Demonstration of Super-Resolution Models

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/aniscale_in.png',
    second: '/Statics/UserGuide/SrCompare/aniscale_out.png',
	name: 'Aniscale Demo 1',
    desc: '2x-AniScale-compact, 2x super-resolution model, good details, low smearing and sharpening'
}]"/>

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/aniscale_1_in.png',
    second: '/Statics/UserGuide/SrCompare/aniscale_1_out.png',
	name: 'Aniscale Demo 2',
    desc: 'Same as above'
}
]"/>

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/animevideo-v3_in.png',
    second: '/Statics/UserGuide/SrCompare/animevideo-v3_out.png',
	name: 'ealesr-animevideov3-x2',
    desc: 'Two-times super-resolution model, good details, slight smearing, medium sharpening'
}
]"/>


## Add Super-Resolution Models on OpenModelDB by Yourself

SVFI supports adding super-resolution model weights that meet the requirements by oneself.

[OpenModelDB](https://openmodeldb.info/) supports the model structure as shown in the following figure
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_1.png"  width=600>
</div>
Among them, the ones compatible with SVFI are Compact, SPAN, ATD, ONNX (TensorRT).

### Example: Adding Compact or Compact Model

- Search for Aniscale, and you can see the model to be tested, AniScale-2-Compact
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_2.png"  width=600>
</div>

- Click to enter the first generation of Aniscale.
- Pay attention to the model information Size on the right side, `64nf` represents the number of features ("model channel number"), and `16nc` represents the number of convolutions ("model depth").
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_3.png"  width=600>
</div>

- The strategy for SVFI to load Compact models is as follows:
    - If the model name contains `super ultra` (from animejanai), `nf=24, nc=8`;
    - If the model name contains `ultra` (from animejanai), `nf=64, nc=8`;
    - Default `nf=64, nc=16`.
- Looking back at Aniscale-2-Compact, it is found that there is no model information description on the web page, so it is considered that it uses the default model structure configuration, `nf=64, nc=16`.
- Just download the pth model directly to `SVFI\models\sr\Compact\models` and it can be used. If there is no such folder, please create it manually.

- The same is true for importing the SPAN model.
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_4.png"  width=600>
</div>

SVFI can currently only load models with `nf=48`, and other models are not supported for the time being. Other modified models are also not supported.

### Example: Adding TensorRT Model

You can also add other supported super-resolution models such as [AnimeJanai](https://github.com/the-database/mpv-upscale-2x_animejanai).

The onnx requirements of the super-resolution model supported by SVFI are as follows:

- There is only one input, and the dimension is `[dynamic, 3, dynamic, dynamic]`.
- There is only one output, and the dimension is `[dynamic, 3, dynamic, dynamic]`.
- The input node name is `input`, and the output node name is `output`.

Put it in `SVFI\models\sr\TensorRT\models`.

::: tip Model Compilation Instructions
- After the model is compiled, a `.engine` file will be generated. For example, `realesrgan_2x.onnx.540x960_workspace128_fp16_io32_device0_8601.engine` indicates that the input size (patch size) of the model is 540x960.
- Different patch sizes will lead to completely different super-resolution speeds, so the patch block size should be carefully selected, and try not to enable the patch block.
:::

### Other Model Rules

- Under the default state of esrgan, only models with `nf=64, nb=23` are supported.
- When the model name contains `anime`, `nb` will be recognized as 6.

::: tip Terminology Explanation
- nf => number of features, 
- nc => number of convs, 
- nb => number of blocks
:::
