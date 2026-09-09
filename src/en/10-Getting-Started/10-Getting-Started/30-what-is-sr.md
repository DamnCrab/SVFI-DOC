---
title: What is SR
permalink: /en/pages/what-is-sr/
---


## SR = Super Resolution = Upscale

Improve the video resolution through some specific algorithms, that is, increase the resolution of each frame of the video to make the look feel clearer.

Common algorithms include [BICUBIC](https://en.wikipedia.org/wiki/Bicubic_interpolation), [LANCZOS](https://en.wikipedia.org/wiki/Lanczos_algorithm), etc., which are not implemented by AI, commonly known as "Resize".

SVFI uses deep network-based artificial intelligence algorithm [RealESR](https://github.com/xinntao/Real-ESRGAN), [RealCUGAN](https://github.com/bilibili/ailab/tree/main/Real-CUGAN) for super-resolution, and its super-resolution quality on animation is better than other algorithms.

::: tip
For the processing task of the same video, SVFI will perform super resolution first, and then perform frame interpolation at default settings.
:::

::: right
[Description of SVFI built-in super resolution algorithm](/en/pages/output-resolution/#super-resolution-algorithm)
:::

Effect reference:

<cardList :items="[
{
img: '/external/bilibili/06-genshin.jpg',
name: 'Genshin Impact',
desc: 'Drama CM short film, 8K 60fps',
link: 'https://www.bilibili.com/video/BV1FS4y1C7RD',
author: 'SVFI Vision ',
avatar: '/brand/logo.png'
},
{
img: '/external/bilibili/07-umamusume.jpg',
name: 'Umaron',
desc: 'Season 2 NCOP 8K 60fps',
link: 'https://www.bilibili.com/video/BV1QY411b7e4',
author: 'SVFI Vision',
avatar: '/brand/logo.png',
},
{
img: '/external/bilibili/08-re0.jpg',
name: 'Re Zero-Starting Life in Another World',
desc: 'Season 2 NCED Believe in you',
link: 'https://www.bilibili.com/video/BV1kF411p7FB',
author: 'SVFI Vision',
avatar: '/brand/logo.png'
}
]"/>
