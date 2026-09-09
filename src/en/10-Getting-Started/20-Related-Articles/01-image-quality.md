---
title: Image representation and picture quality
permalink: /en/pages/wiki-image-quality/
---


::: tip
The following content is taken from [FXXS-Encode-Guide](https://github.com/ted423/FXXS-Encode-Guide), thanks for their efforts
:::

## How images are represented

### RGB model

The three primary colors of light are red, green, and blue. Modern displays mix different intensities of these three colors to produce any visible color. Recording the red, green, and blue intensity of every pixel is called the **RGB model**.

Among common image formats, PNG and BMP are based on the RGB model.

For example, the original image:

<div align=center>
<img src="/external/wiki/01-source.webp" alt="Original" width="600">
</div>

Showing only the intensity of the R, G, and B channels looks like this:

<div align=center>
<img src="/external/wiki/02-rgb-r.webp" alt="RGB-R" width="600">
</div>

<div align=center>
<img src="/external/wiki/03-rgb-g.webp" alt="RGB-G" width="600">
</div>

<div align=center>
<img src="/external/wiki/04-rgb-b.webp" alt="RGB-B" width="600">
</div>

Information and detail are not always evenly distributed across the three channels. Look at the blush on Nan Kotobuki's face: how distinct it is differs on the three planes. On the red plane it is almost indistinguishable; the difference mainly comes from the green and blue planes. The surrounding white cheeks are nearly saturated in all three colors, but the blush is saturated only in red, while green and blue are not. That is why the red stands out.

### YUV model

Besides RGB, another widely used model is **YUV**, also called the luma-chroma model. Through a mathematical transform, the three RGB channels become one luma channel (Y, also called Luma) and two chroma channels (UV, together called Chroma).

YUV does a similar job: it converts RGB data into another representation. There are several YUV implementations. A common one is **YCbCr**: it converts RGB into luma (Y), blue chroma (Cb), and red chroma (Cr). You do not need the formulas; just look at the result:

Luma only:

<div align=center>
<img src="/external/wiki/05-yuv-y.webp" alt="YUV-Y" width="600">
</div>

Blue chroma only:

<div align=center>
<img src="/external/wiki/06-yuv-cb.webp" alt="YUV-Cb" width="600">
</div>

Red chroma only:

<div align=center>
<img src="/external/wiki/07-yuv-cr.webp" alt="YUV-Cr" width="600">
</div>

In image and video processing and storage, YUV is generally preferred for these reasons:

1. The human eye is far more sensitive to luma than to chroma, so most of the useful information we see comes from luma. YUV can put most of that useful information into the Y channel. The UV channels record much less. Compared with RGB's relatively even split, YUV concentrates useful information in Y, which reduces redundancy and makes compression easier.

2. It stays backward-compatible with black-and-white displays.

3. In image editing, adjusting brightness and saturation is more convenient in YUV.

Almost all video formats, and the widely used JPEG image format, are based on YCbCr. During playback, the player must convert YCbCr back to RGB. **This step is called rendering.**

Each channel is usually stored as an integer. For example, RGB24 means 8 bits per RGB channel, using 0–255 (the range of an 8-bit integer) for intensity. YUV is the same: each channel is an integer.

### Bit depth

**Bit depth** is what people usually mean by 8-bit and 10-bit: the precision of each channel. 8-bit uses an 8-bit integer `(0–255)` per channel; 10-bit uses a 10-bit integer `(0–1023)`; 16-bit is `0–65535`.

(The wording above is not fully rigorous. When video is encoded, it may not use the full `0–255` range; some values may be reserved, for example `16–235`. We will not go into that here.)

If your display is 8-bit, it can show every RGB intensity from 0 to 255. Video bit depth, however, is YUV bit depth. During playback, YUV is converted to RGB by calculation. So 10-bit precision is indirect: it raises precision during the math so the final colors are finer.

Why an 8-bit display still benefits from 10-bit playback:

A circle has radius 12.33 m. Find its area, rounded to two decimal places.

The radius is given to two decimal places, and the result must also have two decimal places. How many digits of pi do you need? Is two enough?

With pi = 3.14, the area is 477.37 m².

With pi = 3.1416, the area is 477.61 m².

With a sufficiently precise pi, the area is 477.61 m². So 3.1416 is enough, but 3.14 is not.

In other words, even if the final output only needs low precision, the numbers in the calculation—and the calculation itself—cannot stay at that low precision. When the final output is 8-bit RGB, 10-bit YUV still has a precision advantage over 8-bit YUV for this reason. In practice, 8-bit YUV converted to RGB covers about 26% of 8-bit RGB precision, while 10-bit covers about 97%. Want your 8-bit display to show 97% of its possible fineness? Watch 10-bit.

Insufficient 8-bit precision mainly shows up in darker areas as banding.

<div align=center>
<img src="/external/wiki/08-banding.webp" alt="Banding" width="600">
</div>

Notice the wave-like rings on the right. That is what insufficient color precision looks like.

10-bit is not only better for display precision; it also helps compression ratio and reduces distortion compared with 8-bit. We will not expand on that here.

## A short note on sharpness and picture quality

**You often hear “this video’s sharpness is 1080p.” After reading the above, you should know that 1080p is only resolution. It does not directly mean sharpness. I can upscale a 480p DVD to 1080p—does that make it sharper?**

Picture quality is jointly determined by:

1. Source quality.

As the saying goes, a crooked upper beam makes a crooked lower one. If the source is poor, no amount of work will make the result great. Encoders therefore prefer better sources. For example, a BDRip is generally better than a TVRip, even at 720p. Blu-rays also differ by sales region: for a Japanese anime, the Japanese disc is usually better than the US, Taiwan, or Hong Kong versions. Choosing a better source already puts quality one step ahead.

2. Playback conditions.

Whether the viewer has hardware and software that can actually play high quality. That is why we promote good players when releasing rips; sometimes a good player is worth more effort than extra work in production.

3. Bitrate vs. encoding complexity.

A video’s temporal and spatial complexity together are its encoding complexity. Highly complex video usually has lots of detail and motion (for example *Puella Magi Madoka Magica the Movie: Rebellion*), and naturally needs a higher bitrate to look good.

Conversely, some video has low encoding complexity (for example *Is the Order a Rabbit?*, with little motion and soft line detail). Those titles are easier on bitrate.

4. Efficiency and reasonableness of bitrate allocation.

How much quality the same bitrate can buy is called efficiency. H.264 is more efficient than older RealVideo; 10-bit is more efficient than 8-bit. A more advanced encoder, more reasonable settings, and turning on expensive encoder features (usually paid for with encode time) all raise bitrate efficiency.

Reasonableness is whether bitrate is allocated well in space and time. A reasonable allocation looks consistent to the viewer. Both efficiency and reasonableness are on the encoder: they require a solid understanding of the source and of encoder settings.

When allocation is done well, you often get low-bitrate, high-quality encodes.

5. Preprocessing before encode. There are three kinds:

- Objective repair: fix inherent source defects such as aliasing, banding, and ringing.

- Subjective adjustment: make the source more pleasant to look at, such as moderate sharpening and color correction (sometimes you can scientifically show that the source colors are wrong and repair them).

- Removing useless high-frequency information, such as denoising, so bitrate is not wasted on noise.

Good preprocessing can look better than the source, or save bitrate with almost no loss of sharpness.

But preprocessing is a double-edged sword. While optimizing, it can introduce side effects. Denoising, anti-aliasing, and dehalo inevitably lose some real detail (more or less, depending on the encoder). Subjective adjustment can add artifacts (over-sharpening causes aliasing and ringing) or become self-indulgence that misleads viewers.

**In short, excellent picture quality is decided together by the source, the encoder, and the viewer. Bitrate is only one factor, not the decisive one.**
