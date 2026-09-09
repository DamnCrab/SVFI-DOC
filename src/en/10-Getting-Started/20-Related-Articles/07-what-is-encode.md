---
title: What is encoding
permalink: /en/pages/wiki-what-is-encode/
---


::: tip
The following content is taken from [FXXS-Encode-Guide](https://github.com/ted423/FXXS-Encode-Guide), thanks for their efforts
:::

## Source, encode, and transparency

**Source**: a high-quality video suitable for encoding, typically a Blu-ray disc or high-quality WEB (usually 4K SDR). Encodes should use the **best available source** to raise quality.

As older films get Blu-ray releases, many discs are upscaled from a lower resolution. That is called **upscale**. When encoding, restore the original resolution; do not encode a higher resolution (unless you are doing super-resolution).

Be careful with WEB sources. 1080p web-dl is usually too low quality for a second encode; do not encode it unless you must. 4K SDR WEB sources (often from Netflix, Prime Video, and other overseas streamers) currently have a better reputation and may beat 1080p BD for a 1080p encode; compare them when relevant.

For anime, prefer the BD disc first, then a high-quality WEB source such as Crunchyroll.

:::warning
- Do not re-encode video that has already been encoded. A second encode usually violates the rule of using the best source.

- SVFI recommends encoding from disc sources.
:::

**Encode**: compressing a high-quality source to save size. The process mainly processes the source and fixes obvious common problems, such as dirty edges, banding, blocking, color casts, and gamma correction; crops black bars in 16:9; and re-encodes with a more efficient, usually lossy, compressor.

**Transparency**: how similar the encode is to the source. Good transparency means even an experienced encoder cannot easily tell the encode from the source.

Given how I, P, and B frames work, encoders generally respect I-frame content; even a poor encode will not transform them much. P frames can be turned into B frames to save space, and B frames are re-encoded. Transparency should therefore be judged from P→B and B→B conversion quality versus the source.

**Bloating**: using a high bitrate to reach the same transparency. A widely accepted rule also treats an encode as bloated when its bitrate is too close to the source, as in the table below (x265 should aim for an even smaller ratio):

|                    | 1080p | 720p |
| :----------------: | ----- | ---- |
| Ratio of source bitrate | 75%   | 50%  |

::: tip
SVFI uses preset encoding parameters to compress the super-resolved or interpolated video stream. When set to `AUTO`, it adjusts encoding parameters automatically from the original video.
:::
