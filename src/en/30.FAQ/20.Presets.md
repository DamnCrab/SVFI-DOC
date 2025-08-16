---
title: Presets
permalink: /en/pages/svfi-presets/
sidebar: false
toc: false
---
## Recommended Presets for Frame Interpolation Tasks

For the **Encoding mode**, H265 or ProRes encoding must be used for resolutions above 2K.

:::warning
Make sure your player can play H.265 10bit,
otherwise select H.264 veryslow
:::

### Animation (Normal Frame Interpolation)

| Scene | Video Smoothness Optimization | Encoding Mode | Optical Flow Scale | Frame Interpolation Model |
| :---: | :---: | :---: | :---: | :---: |
| Ultra High Quality | Spatiotemporal Smoother | CPU H.265 slow | 1.0 | gmfss pg104 |
| High Quality | Spatiotemporal Smoother | CPU H.265 medium | 1.0 | rife 4.13 |
| Normal | Spatiotemporal Smoother | CPU H.265 fast | 1.0 | rife 4.13 |
| Speed (NVIDIA GPU) | Spatiotemporal Smoother | NVENCC H.264 quality | 1.0 | rife 4.6 |
| Speed (NVIDIA GPU, Hybrid Acceleration Encoding) | Spatiotemporal Smoother | QSVENCC H.264 best | 1.0 | rife 4.6 |
| Speed (AMD GPU) | Spatiotemporal Smoother | VCEENCC H.264 slow | 1.0 | ncnn rife 4.6 |

### Animation (Slow Motion Frame Interpolation and Animation Editing)

Assume the frame rate of the footage is around 24 fps.

| Scene | Video Smoothness Optimization | Encoding Mode | Optical Flow Scale | Frame Interpolation Model |
| :---: | :---: | :---: | :---: | :---: |
| Top Smoothness | Forward Dedup | Select from the preset table above | 1.0 | gmfss pg104 |
| Extreme Smoothness | First Order Dedup | Select from the preset table above | 1.0 | rife 4.13 |
| Extreme Smoothness | Dedup shots on twos/threes | Select from the preset table above | 1.0 | rife 4.13 |
| Only Reduce Stuttering, Suppress Jello | Single Threshold 0.80 | Select from the preset table above | 1.0 | rife 4.13 |

::: tip A representative frame interpolation preset for NVIDIA GPU dedicated animation

- **Configuration Requirements**: Graphics card video memory 4G and above
- **Tested Devices**: 1650 4g, laptop
- **Frame Rate**: 24 -> 60
- **Output Resolution**: 1080p
- **Encoding Parameters**:
  - **Rendering Quality (CRF)**: 12
  - **CPU**: Good effect, slow speed
  - **NVENC**: Fast speed, but relatively reduced quality
  - **Codec**: H.265, 10bit
- **Optical Flow Scale**: 1.0
- **Smoothness Optimization**:
  - **Spatiotemporal Resampling**: Good smoothness, medium speed, but will increase jello
  - **Forward Dedup**: Best effect, at picture qualities surpassing hand-drawn, but slow speed
    - Change the option value to 2 to solve one shot three, and 3 to solve one shot four pictures, and so on
- **Frame Interpolation Model**:
  - GmfSs-pg-104 (Best quality)
  - official-4.15 or official-4.22 (Fast speed, medium effect)
- **Number of Frame Interpolation Threads**: 1
- **Bidirectional Optical Flow**: Off
- **Other Settings Default**
:::

### Live Action

| Scene | Video Smoothness Optimization | Encoding Mode | Optical Flow Scale | Frame Interpolation Model |
| :---: | :---: | :---: | :---: | :---: |
| Quality | Spatiotemporal Smoother | CPU H.265 medium | 1.0 | rife 4.13 |
| Normal | Spatiotemporal Smoother | CPU H.265 fast | 1.0 | rife 4.13 |
| Speed (NVIDIA GPU) | Spatiotemporal Smoother | NVENCC H.264 quality | 1.0 | rife 4.6 |
| Speed (NVIDIA GPU, Hybrid Acceleration Encoding) | Spatiotemporal Smoother | QSVENCC H.264 best | 1.0 | rife 4.6 |
| Speed (AMD GPU) | Spatiotemporal Smoother | VCEENCC H.264 slow | 1.0 | ncnn rife 4.6 |

## Recommended Presets for Super Resolution Tasks

(Under Maintenance...)

But the commonly used super resolution models are summarized as follows:

<div align=center>
<img src="/Statics/UserGuide/sr_usage_1.png"  width=600>
</div>
