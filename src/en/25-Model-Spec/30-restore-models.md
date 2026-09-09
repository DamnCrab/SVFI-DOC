---
title: Image restoration models
permalink: /en/pages/restore-models/
---

These models appear in the super-resolution section of the software, but they run at **1×** (no upscale). Use them for decompression, watermark removal, demosaic, and similar restoration.

## BasicVSRPlusPlusRestore

A real-world super-resolution algorithm that depends on the length of the super-resolution sequence for effect.

::: tip
This algorithm is only available in the beta version of the public test.
:::

::: warning
This series of algorithms consume a lot of video memory, it is recommended to use a graphics card with more than 6G.
:::

- basicvsrpp_ntire_t3_decompress_max_4x 4x upscale deencoding model t3 (recommended)
- basicvsrpp_ntire_t3_decompress_max_4x_trt 4x upscale deencoding model t3 (TensorRT acceleration) (difficult to compile, not recommended)

## Visual comparison

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/t3_in.png',
    second: '/Statics/UserGuide/SrCompare/t3_out.png',
	name: 'BasicVSR++ Track3 (T3)',
    desc: 'basicvsrpp-ntire-t3-decompress-max-4x, excellent restoration on highly compressed with slow speed'
}
]"/>

## InPaint Watermark Removal Model

::: tip
This algorithm is only available in the beta version of the professional DLC, and you need to manually go to the Steam settings - beta version to select it.
:::

- inpaint_sttn_1x: Currently, this model only supports one-time restoration and has no super-resolution function. It needs to be used with the mask function:

The activation process is as follows:

1. Enable the super-resolution function and select the correct model
<div align=center>
<img src="/Statics/en/UserGuide/inpaint_1.png"  width=600>
</div>

2. Enable the player function
<div align=center>
<img src="/Statics/en/UserGuide/inpaint_2.png"  width=600>
</div>

3. Enable the mask function
<div align=center>
<img src="/Statics/en/UserGuide/inpaint_3.png"  width=600>
</div>

4. Draw the mask and save it

<div align=center>
<img src="/Statics/en/UserGuide/inpaint_4.png"  width=600>
</div>

This model will automatically identify and remove static watermarks in each mask area. Please make sure there is enough **dynamic change content** in the mask area, otherwise it cannot be automatically identified.

::: warning
This model has poor performance in identifying and removing watermarks on **solid background/static content**.
:::

5. Click Encode to start removing watermarks


<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/inpaint_in.png',
    second: '/Statics/UserGuide/SrCompare/inpaint_out.png',
	name: 'InPaint Watermark Removal Effect Demonstration',
    desc: 'It is recommended that the sequence length is greater than 30'
}
]"/>

## DeMosaic models

As the name suggests: models focused on **demosaic / mosaic-style** restoration (pixelation removal), when supported for your input.
