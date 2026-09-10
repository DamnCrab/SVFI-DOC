---
title: Player introduction
permalink: /en/pages/player/
---

The task list on the Settings page has two players: the **external player** and the **internal player**. Right-click a task to open either one. You can also turn on the internal player with the **Player On** switch under the list.

They serve different jobs. The external player uses the bundled **mpv** to preview super-resolution or frame interpolation **in real time**, using the current software settings. The internal player only plays the source: draw a static mask, split segments, confirm scene cuts, and set in/out points. It **cannot** preview realtime VFI or SR.

Do not confuse these with the left-sidebar [Preview](/en/pages/sidebar/#preview) page or [Real-time window scaling](/en/pages/realtime-window/). Preview shows the task output as it is encoded; Realtime scales an arbitrary window as an overlay.

<div align=center>
<img src="/screenshots/en/44-player.png"  width=600>
</div>

::: tip
Player menu items appear only for **video files**. Image sequences and still images are not supported.
:::

## External player

Right-click a task and choose **External Player**. SVFI launches the bundled **mpv** with that task’s current interpolation, super-resolution, target frame rate, and GPU settings, and plays the processed source in real time.

At launch you are asked whether to enable frame interpolation. Yes uses the current VFI model and output FPS; No keeps the rest of the settings (including SR) without interpolating.

::: warning
Realtime SR preview supports **TensorRT** super-resolution models only. If SR is on but the current model is not a TensorRT path, the external player will fail to start.
:::

The external player is for judging look and feel only; it does not write a finished file. Export still uses **Interpolate** or **Encode** on the Settings page.

## Internal player

Right-click a task and choose **Internal Player for Section Missions**, or turn **Player On**. The task list is replaced by a source preview bar.

The right side of the timeline has three modes: **Normal**, **Sections**, and **Scenes**. The brush on the left opens the static mask canvas. The two arrow buttons set the in-point and out-point for the whole task.

<div align=center>
<img src="/screenshots/en/45-multiseg-A.png"  width=600>
</div>

::: tip
If the software crashes after opening the player, uninstall other DirectShow filters (for example from SVP or PotPlayer) and try again.
:::

<kbd>Space</kbd> plays or pauses; <kbd>Right</kbd> / <kbd>Left</kbd> seek. Full shortcuts are in [Other advanced settings](/en/pages/other-advanced-settings/#player-component).

### Draw a static mask

Click the brush on the play bar to open the mask canvas. Use the pen or rectangle to mark regions to protect or restore; saving binds the mask to the current task.

Typical uses:

- **Game HUD / UI**: during interpolation, masked pixels stay as in the source, so health bars, crosshairs, and minimaps are not warped by optical flow.
- **Watermark removal**: with the [InPaint watermark removal model](/en/pages/restore-models/#inpaint-watermark-removal-model), draw over a static watermark; the model restores only inside the mask. Leave enough **moving** content inside the mask. Solid or fully static backgrounds inpaint poorly.

Save when you finish. An InPaint task will not start if no mask was saved. Undo / redo on the canvas: [Other advanced settings](/en/pages/other-advanced-settings/#mask-drawing-page).

### Split multi-segment tasks

Switch to **Sections**. Right-click the timeline and choose **Add KeyPoint Here** to split the video into colored ranges. Click a range to switch to it; the panels on the right load that segment’s settings.

**The first segment’s settings are the default.** Later segments can use different interpolation models, SR, frame rates, and so on—useful when OP/ED and the episode, or cutscenes and gameplay, need different treatment.

- Drag keypoints to move boundaries; right-click to **Delete Nearest KeyPoint** or edit a keypoint.
- If the file has chapter markers, right-click the player area and choose **Import Segments from Chapters**.
- Closing the player returns to the first segment so later segments do not lock the base settings.
- Multi-segment is available only for playable video files.

<div align=center>
<img src="/screenshots/en/45-multiseg-B.png"  width=600>
</div>

### Confirm scene-detection marks

Switch to **Scenes**. Marks on the timeline come from the transition JSON (SVFI’s offline detector or a Transition Chooser export). Right-click the timeline to mark the current frame as a scene cut or to delete an existing mark.

Turn automatic scene detection off, run an offline pass, then fine-tune here. Full steps: [Scene detection settings](/en/pages/scene-detect/#manual-selection-of-transition-support).

### Set in and out points

Move the playhead, then click the in-point or out-point button. That writes the start / end times under [Basic task settings](/en/pages/task-basic/#start-point-and-end-point). Only the span between them is processed; nothing outside it is exported.

You can also type `hours:minutes:seconds` in Basic settings. After in/out points are set, stopping midway or losing power may prevent progress restore.
