---
title: 其他进阶说明
permalink: /zh/pages/other-advanced-settings/
---

## 进度条参数说明

任务执行过程中，任务输出面板中的进度参数意义如下：

| 缩写   | 解释                                  |
|--------|---------------------------------------|
| R      | 当前渲染的帧数                        |
| C      | 当前补帧或处理中的帧数                |
| RPT    | ReadProcessTime单帧读取处理时间      |
| WPT   | WriteProcessTime单帧压制处理时间      |
| S      | 最近识别到的转场                      |
| SC     | 识别到的转场数量                      |
| TAT    | TaskAcquireTime单次补帧任务获取时间  |
| PT     | ProcessTime单次补帧任务处理时间      |
| QL     | QueueLength补帧任务队列长度          |
| SR     | 当前正在超分的帧数                    |
| SRTAT  | SuperResolutionTaskAquireTime单次超分任务获取时间 |
| SRPT   | SuperResolutionProcessTime单次超分任务处理时间 |
| SRL    | SuperResolutionQueueLength超分任务队列长度 |

### 对于进度条参数的特别说明

- 在6.x及以上版本中，输出状态面板的“解码”与“压制压力”面板将会展示当前的解码与压制压力。当解码压力与压制压力都为0时，说明当前没有遭遇性能瓶颈，是最佳状态。解码压力与压制压力的值越大，说明当前遭遇的瓶颈越严重。<Badge text="注"/>该值在使用多补帧或超分线程时不准确。

- 未超分仅补帧时，QL值长期维持在10以下说明**拆帧遇到瓶颈，此时TAT>0.1**，请检查CPU占用是否100%，如是，请更换CPU软编压制参数（如压制预设从slow改为fast），或更换单核性能更强的CPU。若未开启**快速拆帧**，且RPT数值较大（>10s），请开启**快速拆帧**以减轻CPU负荷。开启高精度工作流且为CPU压制时，若CPU不够强劲，QL=0为正常现象。

- 既超分又补帧时，QL=0，TAT>1为正常现象，尽量保证**SRL>0**，SRTAT以使显卡达到最大工作效率，因为SVFI先超分后补帧，原因同上

- TAT(SRTAT)值为0，且QL(SRL)值稳定在较高的值，说明工作速度瓶颈主要在显卡性能，此状态能最大程度发挥显卡性能，**为理想的工作情况。**

## 额外的全局设置

<Badge text="注"/> 当前全局设置对应版本为SVFI 8.3.4

该类全局设置通过在软件根目录下的`global_advanced_settings.json`文件（简称`GAS`）中进行设置，可通过文本编辑器打开进行编辑。**默认情况下，该文件需要手动创建。**

以下 JSON 直接对应当前 `global_advanced_settings.json`，包含全部 70 个键；键值对的值为当前缺省值，可以直接复制以下内容并编辑作为自己的GAS文件。实际编辑时，不存在的键使用对应的缺省值。

需要字段背景时，可参考安装包中的 `SVFI-Skills\svfi-config-build` 目录及其 references；本节 JSON 的键集合和默认值始终以当前 `global_advanced_settings.json` 为准。

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

| 键名 | 默认值 | 说明 |
|---|---:|---|
| `is_cudnn_enabled` | `true` | 是否启用 cuDNN 加速。 |
| `trt_max_workspace_size` | `1073741824` | TensorRT 最大工作空间大小（字节）。 |
| `trt_min_tactic_dram_size` | `1073741824` | TensorRT tactic 搜索所需的最小 DRAM 大小（字节）。 |
| `trt_weight_streaming` | `false` | 是否启用 TensorRT 权重流式加载。 |
| `is_trt_dynamic` | `true` | 是否启用 TensorRT 动态形状。 |
| `calib_sr_len` | `750` | TensorRT INT8 超分校准使用的样本帧数。 |
| `is_cuda_graph_enabled` | `false` | 是否对支持的模型启用 CUDA Graph。 |
| `is_turbo_rife_cuda_graph` | `false` | 是否对 Turbo RIFE 启用 CUDA Graph。 |
| `turbo_working_frames` | `8` | Turbo RIFE 每次处理的工作帧数。 |
| `is_torchscript_enabled` | `false` | 是否对支持的模型启用 TorchScript。 |
| `is_cuda_loading_lazy` | `true` | TensorRT 是否使用懒加载，以降低显存占用。 |
| `is_torch_trt_io32` | `false` | 是否让 Torch-TensorRT 使用 FP32 输入和输出。 |
| `is_rife_trtexec_prec_obey` | `false` | 是否遵循 RIFE trtexec 的精度约束。 |
| `trt_max_aux_streams` | `1` | TensorRT builder 使用的最大辅助 CUDA stream 数。 |
| `show_trt_debug` | `false` | 是否显示 TensorRT 调试信息。 |
| `debug_scdet` | `false` | 是否显示场景检测调试信息。 |
| `use_scdet_onnx` | `false` | 是否使用 ONNX 场景检测后端。 |
| `use_scdet_mnn` | `false` | 是否使用 MNN 场景检测后端。 |
| `scene_list_ratio` | `2` | 场景列表检测的比例参数。 |
| `pure_scene_threshold` | `10` | 纯场景检测阈值。 |
| `scdet_flow_cnt` | `4` | 场景检测使用的光流数量。 |
| `scdet_mode` | `0` | 场景检测模式编号。 |
| `scdet_dom_ratio` | `6` | 场景检测主导场景比例阈值。 |
| `scdet_var_k` | `0.65` | 场景检测方差系数。 |
| `scdet_onnx_resize` | `224` | ONNX 场景检测模型的输入缩放尺寸。 |
| `use_minterpolate` | `false` | 使用 ffmpeg 读取视频时是否启用 minterpolate 滤镜。 |
| `fmnet_model` | `"final"` | FMNet 模型名称；模型位于 `models/restorer/FMNet/models`。 |
| `deep_deband_model` | `"deepdeband-f.pth"` | DeepDeband 模型文件名；模型位于 `models/restorer/DeepDeband/models`。 |
| `is_omit_svfi_version_tag` | `true` | 是否省略输出中的 SVFI 版本标记。 |
| `pure_scene_len_threshold` | `20` | 纯场景长度阈值。 |
| `turbo_put_half_scene` | `false` | Turbo 模式是否按半场景策略提交处理。 |
| `vfi_use_pad` | `true` | 补帧预处理是否使用 pad 而不是 interpolate。 |
| `is_vfi_check_static` | `true` | 是否在补帧前检查静态帧。 |
| `is_vfi_random_flip` | `true` | 静态帧检查是否使用随机翻转增强。 |
| `vfi_check_static_scale` | `1.0` | 静态帧检查的缩放系数。 |
| `forw_dedup_use_pad` | `false` | 前进消重预处理是否使用 pad 而不是 interpolate。 |
| `forw_dedup_use_correction` | `false` | 前进消重是否使用校正。 |
| `is_softsplat_stable` | `false` | 是否启用 SoftSplat 稳定模式。 |
| `is_softsplat_gaussian` | `false` | 是否启用 SoftSplat 高斯核。 |
| `is_evict_flicker` | `false` | 是否启用去闪烁。 |
| `use_xformers` | `true` | 是否使用 xFormers 加速部分模型推理。 |
| `trt_builder_optimization_level` | `0` | TensorRT builder 优化等级。 |
| `drba_swap_thres` | `1.0` | DRBA 交换阈值。 |
| `torch_inference_mode` | `false` | 是否使用 `torch.inference_mode()` 推理。 |
| `sisr_state_dict_key` | `"params"` | 自定义 SISR 模型的 state_dict 权重键。 |
| `prometheus_scdet_thres` | `0.8` | Prometheus 场景检测阈值。 |
| `prometheus_pad_hw` | `[64,64]` | Prometheus 模型的 pad 高度和宽度，格式为 `[height, width]`。 |
| `gloom_cpu_offload` | `true` | 是否将 GLOOM 推理卸载到 CPU。 |
| `cv2_inter` | `"cubic"` | OpenCV 使用的插值方法。 |
| `use_full_vspipe_seg` | `true` | 使用完整 VSPipe 流程时是否自动拆分输出 chunk。 |
| `qtgmc_fps_divisor` | `2` | QTGMC 帧率除数。 |
| `ignore_deinterlace_warn` | `true` | 遇到反交错提示时是否忽略警告。 |
| `encoded_audio_format` | `"aac"` | 编码音频格式。 |
| `encoded_audio_bitrate` | `"640k"` | 编码音频码率。 |
| `gui_scan_interval` | `10` | GUI 监控文件夹的扫描间隔（秒）。 |
| `gui_import_warn_cnt` | `10` | 触发 GUI 导入警告的数量阈值。 |
| `cli_i18n_locale` | `"auto"` | CLI 国际化区域；`auto` 表示自动选择。 |
| `inpaint_subtitle_auto_ocr` | `true` | 是否自动对字幕启用 OCR。 |
| `inpaint_subtitle_ocr_lang` | `"en"` | 字幕 OCR 语言代码。 |
| `inpaint_subtitle_ocr_conf_threshold` | `0.5` | 字幕 OCR 置信度阈值。 |
| `inpaint_subtitle_ocr_bundle` | `"rapid_ppocrv4"` | 字幕 OCR 模型包名称。 |
| `inpaint_mask_dilate_px` | `24` | 字幕修复蒙版膨胀像素数。 |
| `inpaint_mask_feather_px` | `4` | 字幕修复蒙版羽化像素数。 |
| `inpaint_edge_ring_px` | `0` | 字幕修复边缘环带像素数。 |
| `inpaint_detection_frame_skip` | `0` | 字幕修复检测的帧间隔；0 表示不跳帧。 |
| `inpaint_kalman_tracking` | `true` | 是否启用字幕修复的 Kalman 跟踪。 |
| `inpaint_kalman_iou_threshold` | `0.3` | Kalman 跟踪的 IoU 阈值。 |
| `inpaint_kalman_max_age` | `2` | Kalman 跟踪目标允许的最大丢失帧数。 |
| `inpaint_phash_skip_enable` | `true` | 是否启用感知哈希跳帧。 |
| `inpaint_phash_skip_distance` | `4` | 感知哈希跳帧的距离阈值。 |

## 快捷键

### 主页面

| 快捷键   | 解释                                  |
|--------|---------------------------------------|
| <kbd>Ctrl</kbd>+<kbd>1</kbd> | 打开设置面板 |
| <kbd>Ctrl</kbd>+<kbd>2</kbd> | 打开预览面板 |
| <kbd>Ctrl</kbd>+<kbd>3</kbd> | 打开输出状态面板 |
| <kbd>Ctrl</kbd>+<kbd>4</kbd> | 打开Steam设置面板 |
| <kbd>Ctrl</kbd>+<kbd>5</kbd> | 打开偏好设置面板 |
| <kbd>Backspace</kbd> | 返回上一页 |
| <kbd>Ctrl</kbd>+<kbd>B</kbd> | 打开基础设置面板 |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | 打开高级设置面板 |
| <kbd>Ctrl</kbd>+<kbd>P</kbd> | 显示/隐藏高级设置面板 |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | 保存当前设置 |
| <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> 或  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd>| 加载默认设置 |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | 复制当前项目 |
| <kbd>Delete</kbd> | 删除当前项目 |
| <kbd>Ctrl</kbd>+<kbd>Delete</kbd> | 清空项目列表 |
| <kbd>Ctrl</kbd>+<kbd>I</kbd> | 导入项目 |
| <kbd>Ctrl</kbd>+<kbd>Return</kbd> | 开始补帧 |
| <kbd>Ctrl</kbd>+<kbd>E</kbd> | 开始压制 |

- 按住 <kbd>Ctrl</kbd> 拖入文件夹会使SVFI自动导入该文件夹下的所有视频文件
- 按住 <kbd>Shift</kbd> 拖入文件夹会使SVFI将该文件夹作为监视文件夹导入

### 任务状态页面

| 快捷键   | 解释                                  |
|--------|---------------------------------------|
| <kbd>Ctrl</kbd>+<kbd>End</kbd> | 停止补帧/压制 |
| <kbd>Ctrl</kbd>+<kbd>Space</kbd> | 暂停补帧/压制 |

### 蒙版绘制页面

在[内置播放器](/zh/pages/player/#绘制静态蒙版)中打开蒙版画布后可用。

| 快捷键   | 解释                                  |
|--------|---------------------------------------|
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | 撤销 |
| <kbd>Ctrl</kbd>+<kbd>R</kbd> | 重做 |

### 播放器组件

内置播放器的播放控制。功能说明见[播放器介绍](/zh/pages/player/)。

| 快捷键   | 解释                                  |
|--------|---------------------------------------|
| <kbd>Space</kbd> | 播放/暂停 |
| <kbd>Right</kbd> | 快进 |
| <kbd>Left</kbd> | 快退 |
