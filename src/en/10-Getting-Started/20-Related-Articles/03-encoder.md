---
title: Codecs, encoders, and containers
permalink: /en/pages/wiki-encoder/
---

::: tip
The following content is taken from [FXXS-Encode-Guide](https://github.com/ted423/FXXS-Encode-Guide), thanks for their efforts
:::

## Containers

A **container** is also called a wrapper format, or simply a format — a multimedia container. Common containers include MP4 and MKV. H.264 / H.265 / AC3 / AAC are **codecs** (coding formats). The video and audio streams inside MP4 or MKV can use the same codecs.

Common containers include MP4, MKV, RMVB, TS, FLV, AVI, and many others. Different containers support different codecs.

MKV vs MP4, the main differences:

1. MKV can wrap FLAC as audio; MP4 cannot. MP4 can still wrap lossless audio (for example ALAC, though ALAC is generally considered less efficient than FLAC).
2. MKV can wrap ASS/SSA subtitles; MP4 cannot. Fansub groups usually produce ASS, so muxed subtitles are more common in MKV.
3. As an industry standard, MP4 is generally more compatible with video editors and playback devices than MKV (Premiere can add MKV via plugins; iOS and Android can play it with third-party players). That is why encodes aimed at mobile devices usually use MP4.

There are also outdated containers such as RM and AVI.

MediaInfo usually needs a container to show fairly complete information. Files such as `.pcm`, `.aac`, and `.hevc` may not show duration. `.hevc` often cannot seek with a progress bar in players.

## Codecs

LPCM (Linear pulse-code modulation) is often just called PCM, but it is a specific kind of PCM (Pulse Code Modulation): its quantization levels are linear and uniform.

### The H.26x family

<BiliBili bvid="BV1ox4y1q7bP" title="A good introduction to H.264 encoding" />

Led by ITU (International Telecommunication Union): H.261, H.262, H.263, H.264, H.265.

* H.264: H.264 / MPEG-4 Part 10, also called AVC (Advanced Video Coding), a widely used format for recording, compressing, and distributing high-precision video.
* H.265: High Efficiency Video Coding (HEVC) is a video compression standard, the successor to H.264 / MPEG-4 AVC. HEVC improves image quality and can reach about twice the compression of H.264 / MPEG-4 AVC (about 50% less bitrate at the same quality). It supports 4K and even UHDTV, up to 8192×4320 (8K). This is the current trend.

### The MPEG family

Led by MPEG (Moving Picture Experts Group) under ISO. Main video codecs:

* MPEG-1 Part 2: mainly used on VCD; some online video also uses it. Quality is roughly comparable to VHS tape.
* MPEG-2 Part 2: equivalent to H.262, used on DVD, SVCD, and most digital TV broadcast and cable distribution systems.
* MPEG-4 Part 2: usable for network delivery, broadcast, and media storage; compression is better than MPEG-2 and the first version of H.263.
* MPEG-4 Part 10: technically the same standard as ITU-T H.264. The two bodies cooperated and produced H.264/AVC. ITU-T calls it H.264; ISO/IEC calls it MPEG-4 Advanced Video Coding (AVC).

### AVS (Audio Video coding Standard)

China’s own source-coding standard, short for the *Information Technology — Advanced Audio and Video Coding* series. Two generations have been completed.

* The first generation includes the national standards *Information Technology — Advanced Audio and Video Coding Part 2: Video* (AVS1) and *Part 16: Broadcast Television Video* (AVS+). AVS+ compression is comparable to H.264/AVC High Profile.
* The second generation, AVS2, targets ultra-high-definition video and efficiently compresses ultra-high resolution (4K and above) and high dynamic range video. AVS2 is about twice as efficient as AVS+ and H.264/AVC, and exceeds HEVC/H.265 of the same class.

Other families such as VP8 and VP9 (Google) and RealVideo (RealNetworks) are less common for internet video and are not covered here.

## Transcoding

**Video transcoding** converts an already compressed bitstream into another bitstream to fit different network bandwidths, device capabilities, and user needs. In essence it is decode then encode, so the streams before and after may or may not use the same video codec.

## Remux

**Remux** converts the container of video or audio, for example AVI to MP4, without encoding or decoding the streams. It copies the compressed video and audio from one container into another. In short: copy-paste. Compared with transcoding, remux has two traits:
It is extremely fast. Audio/video codec work is complex and takes most of transcoding time. Remux skips encode and decode, saving a lot of time.
Quality is lossless. There is no decompress/compress cycle, so there is no generation loss.
Resolution, bitrate, and so on stay almost the same as the original, so playback is often called “original quality.”

## Demux

Splitting coded tracks out of a container.

## Lossless and lossy compression

PCM and LPCM are uncompressed formats; they are not called lossless compression. ~~(Calling them lossless is not really wrong either.)~~

In everyday talk, “lossless” is informal and you need to understand what is meant. A lossless format usually means algorithmically lossless; the resulting file is not always lossless. Lowering bit depth or sample rate on an audio track still loses information. There are also unconventional conversions from lossy to lossless.

People often call an original disc or a remux “lossless.” An original disc is usually the best source you can find, but its codecs are still lossy: the master (loosely speaking) is lossy-compressed before release. A remux is mainly a lossless extract or conversion of the video track and the main audio track. (Hybrids exist, though.)

## Audio

DTS (the company) audio compresses poorly, and they advertise that as a feature, claiming it improves decode efficiency and sound quality.

DTS-HD MA is lossless.

DTS-HD HRA is lossy.

Both include a core (DTS core; “DTS” usually means DTS core, though sometimes it is unclear).

The encoder also includes a DTS Digital (lossy DTS) core so that players that do not support DTS-HD MA or DTS-HD HRA (DTS-HD High Resolution Audio) can fall back to DTS Digital (typically encoded at a constant 255 kbps, placed in the same stream as DTS-HD MA/HRA, named DTS-HD Core).

### Lossy audio

AC3 is an industry standard for film and TV. It was released very early (slightly before MP3).

#### DTS

DTS core 768 is generally considered inferior to AC3 640.

#### AC3

Dolby Laboratories used MDCT and perceptual coding to develop AC-3 for cinema. AC-3 was published as Dolby Digital in 1991.

- AC-3 (Audio Codec 3, Advanced Codec 3, Acoustic Coder 3. [Not the same as Adaptive Transform Acoustic Coding 3 / ATRAC3, another format from Sony])

- Dolby Digital Surround EX

Dolby Digital Surround EX is a collaboration between Dolby Laboratories and Lucasfilm THX, first used in *Star Wars: Episode I – The Phantom Menace* in May 1999. For cost and backward compatibility, a rear surround channel was added between left and right surround, making 6.1. It uses matrix encoding as a separate channel, similar to how the center relates to front left/right. It can output 5.1 on standard 5.1 gear and 6.1 on Surround EX gear. The Star Wars series used this; many DVDs support Dolby Digital Surround EX.

- Dolby Digital EX

Dolby Digital EX is the consumer version of Surround EX. Like Dolby’s earlier Pro Logic, it uses matrix techniques to add a center and a rear channel to a stereo track. On top of 5.1 Dolby Digital it adds a rear channel for 6.1 or 7.1. It is not true discrete 6.1 or 7.1, unlike competitor DTS-ES, which can provide fully separate 6 or 7 tracks.

#### Dolby Digital Plus / DDP / EAC3

Currently this group’s preferred format (except 1.0/2.0; encodes are generally recommended with EX).

Dolby Digital Plus, also called E-AC-3, is an enhanced coding system based on AC3. It raises the maximum bitrate to 6 Mbps, supports 14 channels (13.1), and reduces compression artifacts. It is not compatible with Dolby Digital hardware, but a Dolby Digital Plus decoder can transcode to Dolby Digital for optical/coaxial output. Dolby Digital Plus is a required audio format on HD DVD and Blu-ray. On Blu-ray players it is optional for Primary Audio and required for Secondary Audio.

#### AAC

AAC is stronger at low bitrates (though Opus does even better).

AAC is a large family with 9 profiles for different uses. The many profiles confuse ordinary users:

- MPEG-2 AAC LC (Low Complexity)

- MPEG-2 AAC Main

- MPEG-2 AAC SSR (Scalable Sample Rate)

- MPEG-4 AAC LC (Low Complexity); audio in MP4 files on many phones uses this

- MPEG-4 AAC Main

- MPEG-4 AAC SSR (Scalable Sample Rate)

- MPEG-4 AAC LTP (Long Term Prediction)

- MPEG-4 AAC LD (Low Delay)

- MPEG-4 AAC HE (High Efficiency)

Among these, Main includes every feature except gain control and has the best quality. LC is simpler, without gain control, but more encoding-efficient. SSR is largely the same as LC plus gain control. MPEG-4 AAC / LTP / LD / HE are used at low bitrates. HE in particular is supported by Nero AAC and has been commonly used. In practice Main and LC quality are close, so the most used profile is LC, partly because phone memory was not yet adequate.

MPEG-4 AAC LC is the most common profile, “Low Complexity,” or LC-AAC. It balances efficiency and quality at medium bitrates: about 96–192 kbps. If you use LC-AAC, keep bitrate in that range if possible.

In ffmpeg, quality from high to low:

libopus > libvorbis >= libfdk_aac > aac > libmp3lame >= eac3/ac3 > libtwolame > vorbis > mp2 > wmav2/wmav1

#### Some lossy-audio tests

References:

<https://web.archive.org/web/20060831191536/>

<http://www.rjamorim.com/test/>

<https://web.archive.org/web/20110522045514/>

<http://cec.concordia.ca/econtact/9_4/tsabary.html>

<https://tech.ebu.ch/docs/tech/tech3324.pdf>


## Other notes

### flac - Free Lossless Audio Codec

flac is both a codec and a container.

flac is also the name of the container format.

<https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers>

### m4a

m4a (a container; audio-only MPEG-4/MP4 files use the `.m4a` extension) can use ALAC (Apple Lossless Audio Codec) or AAC (Advanced Audio Coding).

### mp3

MP3 (formally MPEG-1 Audio Layer III or MPEG-2 Audio Layer III) is an MPEG-1 container plus a track encoded with MPEG-1 Audio Layer III.

### wav

WAV is a container. The PCM it wraps is raw audio, fully uncompressed.

PCM — Pulse Code Modulation — is a way to digitize analog signals. It is the most common, simplest waveform coding method.

LPCM is a specific kind of PCM. Although `PCM` is the more general term, it is often used for data encoded as LPCM.

BWF (Broadcast Wave Format)

Also uses the wav extension. As a successor to WAV, it is a standard audio format created by the European Broadcasting Union. BWF has more data regarding the file. Audio quality is the same.

RF64 (often given the w64 extension to distinguish it) (multichannel audio file)

An extension of WAV that allows files larger than 4 GB. It has been specified by the European Broadcasting Union. It has been accepted as ITU recommendation ITU-R BS.2088.

### qaac

qaac is a command-line AAC/ALAC encoder frontend based on Apple’s encoder. From 1.00 onward, qaac uses CoreAudioToolbox.dll directly, so QuickTime is no longer required. An Apple application is still needed for support. It supports AAC-LC, AAC-HE, and ALAC. What we usually produce is LC.

(qaac is open source, appears to be Copyleft, and has no extra restrictions.)

### H.265

H.265/HEVC is a codec.

H.265 is the standard; HEVC is the winning name, also called MPEG-H Part 2.

Some people use H.265 in conversation for commercial HEVC encoders other than x265 (unofficial, undefined slang; for reference only).

Some sites require Web-DL titles to say H.265, not HEVC, while original discs / remuxes may only say HEVC. (This is a regional rule, not a standard.)

x265 is a free open-source encoder. There are also commercial encoders such as [Strongene](http://www.strongene.com/) and [NVENC](https://www.nvidia.com/en-us/geforce/guides/broadcasting-guide/).
