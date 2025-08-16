---
title: Get Started with SVFI SR
permalink: /en/pages/svfi-quick-start-sr/
sidebar: false
toc: false
---
::: tip
This feature requires the purchase of the [Professional DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/).
:::

## SVFI Super Resolution Quick Start Guide

Welcome to the super resolution (SR) feature of SVFI. This feature is dedicated to making blurry videos or images clearer.

::: tip
The following is a basic tutorial on using SVFI to super-resolve a video.

The same applies for performing super-resolution on image sequences. Just replace the input video with a folder containing the image sequences, and specify the input frame rate of the image sequence in the `Basic Settings`.

If the resolution of the images in the folder is different, enable the output image sequence option, otherwise an error will be reported due to inconsistent resolutions.
:::

1. Distinguish the functions corresponding to the two buttons of **Interpolate** and **Encode**

   - Click **Encode** to start the task when only performing super resolution operation or compression operation on the video.

   - Click **Interpolate** to start the task when performing both frame interpolation and super resolution, or only frame interpolation operation.

2. Super resolution of videos

   - Refer to [the introduction of various super resolution algorithms and their corresponding effects of different models](/en/pages/advanced-settings/#introduction-to-the-super-resolution-model). Select the desired super resolution algorithm and super resolution model.

   - Drag the video into the software or click **Input Video File** to select the video to be super resolved.

   - Set the **Output Folder** and select the **Output File Format**.

   - Click **Encode** to start the super resolution task.

  ![Steps to perform super resolution on a video](/Statics/en/QuickGuide/basic-settings-sr.png)

