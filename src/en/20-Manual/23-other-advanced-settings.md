---
title: Other Advanced Settings
permalink: /en/pages/other-advanced-settings/
---

## Progress bar parameter instructions

During the task execution process, the progress parameters in the task output panel are as follows:

| Abbreviation | Explanation |
| ---- | ---- |
| R | The number of frames currently rendered |
| C | The number of frames currently being VFI or processed |
| RPT | ReadProcessTime single-frame read processing time |
| WPT | WriteProcessTime single-frame render processing time |
| S | The most recently recognized transition |
| SC | The number of recognized transitions |
| TAT | TaskAcquireTime single VFI task acquisition time |
| PT | ProcessTime single VFI task processing time |
| QL | QueueLength VFI task queue length |
| SR | The number of frames currently being super-resolved |
| SRTAT | SuperResolutionTaskAquireTime single super-resolution task acquisition time |
| SRPT | SuperResolutionProcessTime single super-resolution task processing time |
| SRL | SuperResolutionQueueLength super-resolution task queue length |

### Special instructions for progress bar parameters

- In version 6.x and above, the "Decode Pressure" and "Render Pressure" panels in the output status panel will show the current decoding and rendering pressure. When the decoding pressure and render pressure are both 0, it means that there is currently no performance bottleneck and it is in the best state. The greater the values of the decoding pressure and render pressure, the more serious the current bottleneck is. <Badge text="Note"/> This value is inaccurate when using multiple VFI or super-resolution threads.

- When only VFI without super-resolution, if the QL value remains below 10 for a long time, it indicates that the frame-extraction encounters a bottleneck. At this time, TAT>0.1. Please check whether the CPU usage is 100%. If so, please change the CPU software encoding render parameters (such as changing the render preset from slow to fast) or replace the CPU with more powerful single-core performance. If **Fast Extraction** is not enabled and the RPT value is large (>10s), please enable **Fast Extraction** to reduce the CPU load. When enabling the high-precision workflow and CPU render, if the CPU is not strong enough, QL=0 is a normal phenomenon.

- When both super-resolution and VFI are performed, QL=0 and TAT>1 are normal phenomena. Try to ensure that **SRL>0** and SRTAT to maximize the working efficiency of the graphics card, because SVFI performs super-resolution first and then VFI, for the same reason as above.

- If the TAT (SRTAT) value is 0 and the QL (SRL) value is stable at a relatively high value, it means that the bottleneck of the working speed is mainly in the performance of the graphics card. This state can give full play to the performance of the graphics card, **which is an ideal working situation.**

## Additional global settings

<Badge text="Note"/> The current global settings correspond to version SVFI 8.3.4

This type of global settings is set in the `global_advanced_settings.json` file (referred to as `GAS`) in the software root directory and can be edited by opening it with a text editor. **By default, this file needs to be created manually.**

The following JSON is synchronized directly with the current `global_advanced_settings.json` and contains all 70 keys. Each value is the current default, so you can copy it and edit it as your own GAS file. When editing the file, a missing key uses its corresponding default value.

For field background, you may consult the `SVFI-Skills\svfi-config-build` directory and its references in the installed bundle; the key set and defaults in this JSON are always authoritative from the current `global_advanced_settings.json`.

```json
{
  "is_cudnn_enabled": true,
  "trt_max_workspace_size": 1073741824,
  "trt_min_tactic_dram_size": 1073741824,
  "trt_weight_streaming": false,
  "is_trt_dynamic": true,
  "calib_sr_len": 750,
  "is_cuda_graph_enabled": false,
  "is_turbo_rife_cuda_graph": false,
  "turbo_working_frames": 8,
  "is_torchscript_enabled": false,
  "is_cuda_loading_lazy": true,
  "is_torch_trt_io32": false,
  "is_rife_trtexec_prec_obey": false,
  "trt_max_aux_streams": 1,
  "show_trt_debug": false,
  "debug_scdet": false,
  "use_scdet_onnx": false,
  "use_scdet_mnn": false,
  "scene_list_ratio": 2,
  "pure_scene_threshold": 10,
  "scdet_flow_cnt": 4,
  "scdet_mode": 0,
  "scdet_dom_ratio": 6,
  "scdet_var_k": 0.65,
  "scdet_onnx_resize": 224,
  "use_minterpolate": false,
  "fmnet_model": "final",
  "deep_deband_model": "deepdeband-f.pth",
  "is_omit_svfi_version_tag": true,
  "pure_scene_len_threshold": 20,
  "turbo_put_half_scene": false,
  "vfi_use_pad": true,
  "is_vfi_check_static": true,
  "is_vfi_random_flip": true,
  "vfi_check_static_scale": 1.0,
  "forw_dedup_use_pad": false,
  "forw_dedup_use_correction": false,
  "is_softsplat_stable": false,
  "is_softsplat_gaussian": false,
  "is_evict_flicker": false,
  "use_xformers": true,
  "trt_builder_optimization_level": 0,
  "drba_swap_thres": 1.0,
  "torch_inference_mode": false,
  "sisr_state_dict_key": "params",
  "prometheus_scdet_thres": 0.8,
  "prometheus_pad_hw": [
    64,
    64
  ],
  "gloom_cpu_offload": true,
  "cv2_inter": "cubic",
  "use_full_vspipe_seg": true,
  "qtgmc_fps_divisor": 2,
  "ignore_deinterlace_warn": true,
  "encoded_audio_format": "aac",
  "encoded_audio_bitrate": "640k",
  "gui_scan_interval": 10,
  "gui_import_warn_cnt": 10,
  "cli_i18n_locale": "auto",
  "inpaint_subtitle_auto_ocr": true,
  "inpaint_subtitle_ocr_lang": "en",
  "inpaint_subtitle_ocr_conf_threshold": 0.5,
  "inpaint_subtitle_ocr_bundle": "rapid_ppocrv4",
  "inpaint_mask_dilate_px": 24,
  "inpaint_mask_feather_px": 4,
  "inpaint_edge_ring_px": 0,
  "inpaint_detection_frame_skip": 0,
  "inpaint_kalman_tracking": true,
  "inpaint_kalman_iou_threshold": 0.3,
  "inpaint_kalman_max_age": 2,
  "inpaint_phash_skip_enable": true,
  "inpaint_phash_skip_distance": 4
}
```

| Key | Default | Explanation |
|---|---:|---|
| `is_cudnn_enabled` | `true` | Enable cuDNN acceleration. |
| `trt_max_workspace_size` | `1073741824` | Maximum TensorRT workspace size in bytes. |
| `trt_min_tactic_dram_size` | `1073741824` | Minimum DRAM size in bytes required for TensorRT tactic selection. |
| `trt_weight_streaming` | `false` | Enable TensorRT weight streaming. |
| `is_trt_dynamic` | `true` | Enable dynamic shapes in TensorRT. |
| `calib_sr_len` | `750` | Number of sample frames used for TensorRT INT8 super-resolution calibration. |
| `is_cuda_graph_enabled` | `false` | Enable CUDA Graph for supported models. |
| `is_turbo_rife_cuda_graph` | `false` | Enable CUDA Graph for Turbo RIFE. |
| `turbo_working_frames` | `8` | Number of working frames processed by Turbo RIFE per step. |
| `is_torchscript_enabled` | `false` | Enable TorchScript mode for supported models. |
| `is_cuda_loading_lazy` | `true` | Enable TensorRT lazy loading to reduce video memory usage. |
| `is_torch_trt_io32` | `false` | Use FP32 inputs and outputs in Torch-TensorRT. |
| `is_rife_trtexec_prec_obey` | `false` | Honor the precision constraints of RIFE trtexec. |
| `trt_max_aux_streams` | `1` | Maximum number of auxiliary CUDA streams used by the TensorRT builder. |
| `show_trt_debug` | `false` | Display TensorRT debug information. |
| `debug_scdet` | `false` | Display scene-detection debug information. |
| `use_scdet_onnx` | `false` | Use the ONNX scene-detection backend. |
| `use_scdet_mnn` | `false` | Use the MNN scene-detection backend. |
| `scene_list_ratio` | `2` | Ratio parameter used when building the scene list. |
| `pure_scene_threshold` | `10` | Pure-scene detection threshold. |
| `scdet_flow_cnt` | `4` | Number of optical-flow samples used for scene detection. |
| `scdet_mode` | `0` | Scene-detection mode index. |
| `scdet_dom_ratio` | `6` | Dominant-scene ratio threshold for scene detection. |
| `scdet_var_k` | `0.65` | Variance coefficient used by scene detection. |
| `scdet_onnx_resize` | `224` | Input resize dimension for the ONNX scene-detection model. |
| `use_minterpolate` | `false` | Use the minterpolate filter when reading videos with ffmpeg. |
| `fmnet_model` | `"final"` | FMNet model name; models are stored in `models/restorer/FMNet/models`. |
| `deep_deband_model` | `"deepdeband-f.pth"` | DeepDeband model filename; models are stored in `models/restorer/DeepDeband/models`. |
| `is_omit_svfi_version_tag` | `true` | Omit the SVFI version tag from output. |
| `pure_scene_len_threshold` | `20` | Pure-scene length threshold. |
| `turbo_put_half_scene` | `false` | Use the half-scene submission strategy in Turbo mode. |
| `vfi_use_pad` | `true` | Use pad instead of interpolate for preprocessing in the VFI pipeline. |
| `is_vfi_check_static` | `true` | Check for static frames before frame interpolation. |
| `is_vfi_random_flip` | `true` | Use random-flip augmentation during static-frame checks. |
| `vfi_check_static_scale` | `1.0` | Scale factor used for static-frame checks. |
| `forw_dedup_use_pad` | `false` | Use pad instead of interpolate for preprocessing in forward deduplication. |
| `forw_dedup_use_correction` | `false` | Use correction during forward deduplication. |
| `is_softsplat_stable` | `false` | Enable SoftSplat stability mode. |
| `is_softsplat_gaussian` | `false` | Enable the SoftSplat Gaussian kernel. |
| `is_evict_flicker` | `false` | Enable flicker removal. |
| `use_xformers` | `true` | Use xFormers to accelerate inference for selected models. |
| `trt_builder_optimization_level` | `0` | TensorRT builder optimization level. |
| `drba_swap_thres` | `1.0` | DRBA swap threshold. |
| `torch_inference_mode` | `false` | Use `torch.inference_mode()` for inference. |
| `sisr_state_dict_key` | `"params"` | State-dict weight key for a custom SISR model. |
| `prometheus_scdet_thres` | `0.8` | Prometheus scene-detection threshold. |
| `prometheus_pad_hw` | `[64,64]` | Prometheus pad height and width in `[height, width]` form. |
| `gloom_cpu_offload` | `true` | Offload GLOOM inference to the CPU. |
| `cv2_inter` | `"cubic"` | OpenCV interpolation method. |
| `use_full_vspipe_seg` | `true` | Automatically split output chunks when using the full VSPipe workflow. |
| `qtgmc_fps_divisor` | `2` | QTGMC frame-rate divisor. |
| `ignore_deinterlace_warn` | `true` | Ignore deinterlacing warnings. |
| `encoded_audio_format` | `"aac"` | Encoded audio format. |
| `encoded_audio_bitrate` | `"640k"` | Encoded audio bitrate. |
| `gui_scan_interval` | `10` | GUI monitoring-folder scan interval in seconds. |
| `gui_import_warn_cnt` | `10` | Count threshold that triggers GUI import warnings. |
| `cli_i18n_locale` | `"auto"` | CLI localization locale; `auto` selects it automatically. |
| `inpaint_subtitle_auto_ocr` | `true` | Enable automatic OCR for subtitles. |
| `inpaint_subtitle_ocr_lang` | `"en"` | Subtitle OCR language code. |
| `inpaint_subtitle_ocr_conf_threshold` | `0.5` | Subtitle OCR confidence threshold. |
| `inpaint_subtitle_ocr_bundle` | `"rapid_ppocrv4"` | Subtitle OCR model-bundle name. |
| `inpaint_mask_dilate_px` | `24` | Subtitle-inpainting mask dilation in pixels. |
| `inpaint_mask_feather_px` | `4` | Subtitle-inpainting mask feather radius in pixels. |
| `inpaint_edge_ring_px` | `0` | Subtitle-inpainting edge-ring width in pixels. |
| `inpaint_detection_frame_skip` | `0` | Frame interval for subtitle-inpainting detection; 0 means no frames are skipped. |
| `inpaint_kalman_tracking` | `true` | Enable Kalman tracking for subtitle inpainting. |
| `inpaint_kalman_iou_threshold` | `0.3` | IoU threshold for Kalman tracking. |
| `inpaint_kalman_max_age` | `2` | Maximum number of missed frames allowed for a Kalman track. |
| `inpaint_phash_skip_enable` | `true` | Enable perceptual-hash frame skipping. |
| `inpaint_phash_skip_distance` | `4` | Distance threshold for perceptual-hash frame skipping. |

## Shortcuts

### Main page

| Shortcut | Explanation |
| ---- | ---- |
| <kbd>Ctrl</kbd>+<kbd>1</kbd> | Open the settings panel |
| <kbd>Ctrl</kbd>+<kbd>2</kbd> | Open the preview panel |
| <kbd>Ctrl</kbd>+<kbd>3</kbd> | Open the output status panel |
| <kbd>Ctrl</kbd>+<kbd>4</kbd> | Open the Steam settings panel |
| <kbd>Ctrl</kbd>+<kbd>5</kbd> | Open the preference settings panel |
| <kbd>Backspace</kbd> | Go back one page |
| <kbd>Ctrl</kbd>+<kbd>B</kbd> | Open the basic settings panel |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | Open the advanced settings panel |
| <kbd>Ctrl</kbd>+<kbd>P</kbd> | Show/Hide advanced settings panel |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Save the current settings |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> | Load default settings |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | Duplicate the current project |
| <kbd>Delete</kbd> | Delete the current project |
| <kbd>Ctrl</kbd>+<kbd>Delete</kbd> | Clear the project list |
| <kbd>Ctrl</kbd>+<kbd>I</kbd> | Import project |
| <kbd>Ctrl</kbd>+<kbd>Return</kbd> | Start VFI |
| <kbd>Ctrl</kbd>+<kbd>E</kbd> | Start render |

- Holding down <kbd>Ctrl</kbd> and dragging in a folder will cause SVFI to automatically import all video files under that folder.
- Holding down <kbd>Shift</kbd> and dragging in a folder will cause SVFI to import that folder as a monitored folder.
### Task status page

| Shortcut | Explanation |
| ---- | ---- |
| <kbd>Ctrl</kbd>+<kbd>End</kbd> | Stop VFI/render |
| <kbd>Ctrl</kbd>+<kbd>Space</kbd> | Pause VFI/render |

### Mask drawing page

| Shortcut | Explanation |
| ---- | ---- |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>+<kbd>R</kbd> | Redo |

### Player component

| Shortcut | Explanation |
| ---- | ---- |
| <kbd>Space</kbd> | Play/Pause |
| <kbd>Right</kbd> | Fast forward |
| <kbd>Left</kbd> | Fast backward |