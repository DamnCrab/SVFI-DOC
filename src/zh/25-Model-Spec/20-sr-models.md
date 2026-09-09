---
title: 超分模型说明
permalink: /zh/pages/sr-models/
---

::: tip
使用这些算法需购买[专业版DLC](https://store.steampowered.com/app/1718750/SVFI_Professional/)
:::

目前SVFI支持以下超分算法。

| 算法名称 | 适用素材 | 需要BETA | A卡可用|
| :---: | :---: | :---: | :---: |
| Anime4K | 动漫 |  | √ |
| AnimeSR | 动漫 |  | × |
| realCUGAN | 动漫 | | × |
| ncnnCugan | 动漫 |  | √ | 
| waifuCuda | 动漫 |  | × |
|PureBasicVSR | 实拍 |  | × |
| [BasicVSR++ T3](/zh/pages/restore-models/) | 实拍 | √ | × |
| ATD | 实拍 | √ | × |
| realESR | 通用 |  | × |
| ncnnRealESR | 通用 |  | √ |
| waifu2x | 通用 |  | √ |
| TensorRT(ONNX) | 通用 |  | × |
| Compact | 通用 | √ | × |
| SPAN | 通用 | √ | × |

:::tip
SVFI对动漫素材和实拍素材的定义区分如下：

**动漫**素材是主要由平面影像图层构成的运动视频片段，**每一图层与另一图层的交界清晰**。如，手绘2D动画，大多数三渲二画面等。

**实拍**素材是使用单镜头摄影机拍摄的真实世界画面或计算机生成图画，**肉眼无法分辨出各个图层与其交界**。如，真人电影，3D CG，3D游戏画面等。

特别地，我们认为3D/3G背景+2D人物制作的动画为动漫素材类别。
:::

<div align=center>
<img src="/Statics/UserGuide/57.png"  width=600>
</div>

## 对超分模型的介绍

### realCUGAN

**动漫专用 效果十分优秀**

- up2x代表2倍放大，3x,4x类似

- pro模型为增强版，详见[官方介绍](https://github.com/bilibili/ailab/tree/main/Real-CUGAN)

- 带conservative字样的模型是保守类模型

- 带no-denoise的模型表现不进行降噪

- 带denoise的模型表现进行降噪,后面的数字代表降噪强度

- ncnnCUGAN

CUGAN的NCNN版本(A卡，N卡，I卡通用)，介绍同上

### realESR

**3D动漫均可用，更适合动漫**

- RealESRGAN模型倾向于脑补,画面更加清晰,艳丽

- RealESRNet模型倾向于涂抹,但画面保持原色彩

- 带anime标注的模型为动漫超分专用，速度较前两者略快

- anime为官方模型，anime_110k为自训练模型

- RealESR_RFDN 为自训练超分模型,速度快,适合于动漫输入

- ncnnRealESR

realESR的NCNN版本，A卡，I卡，N卡通用

- realesr-animevideov3 (比较保守的动漫视频超分模型，速度较快，质量较高)

- realesrgan-4xplus (4倍放大模型)

- realesrgan-4xplus-anime (4倍动漫放大模型)

### AnimeSR 

由Tencent ARC Lab开发的动漫超分算法

仅一个四倍放大模型(AnimeSR_v2_x4.pth), 效果相比cugan更保守

### BasicVSRPlusPlusRestore

一倍画质恢复模型，详见[画质恢复模型说明](/zh/pages/restore-models/)。

### Anime4K 

超高速实时动漫超分算法, 较保守

共有6种预设脚本

- Anime4K_Upscale_x2 A/B/C/D 均为2倍放大（默认为A）

- Anime4K_Upscale_x3 为3倍放大，x4模型类似

#### 自定义Anime4K模型

- 在安装文件夹`models\sr\Anime4K\models`可看到`.json`模型配置文件

- 以`Anime4K_Upscale_x2_A.json`为例

```json
{
  "shaders": [
    {
      "path": "Restore/Anime4K_Clamp_Highlights.glsl", "args": []
    },
    {
      "path": "Restore/Anime4K_Restore_CNN_VL.glsl", "args": []
    },
    {
      "path": "Upscale/Anime4K_Upscale_CNN_x2_VL.glsl", "args": ["upscale"]
    }
  ]
}
```
- 其中，`Anime4K_Clamp_Highlights.glsl`和`Anime4K_Restore_CNN_VL.glsl`为1x恢复算法，对应`models\sr\Anime4K\Restore\Anime4K_Clamp_Highlights.glsl`。这种模型的`args`参数需要留空
- `Anime4K_Upscale_CNN_x2_VL.glsl`为2x放大算法，
  对应`models\sr\Anime4K\Upscale\Anime4K_Upscale_CNN_x2_VL.glsl`。这种模型的`args`参数需要填入`upscale`
- 类似于`Anime4K_AutoDownscalePre_x2.glsl`模型的`args`参数需要填入`downscale`

- 列表顺序即为滤镜实际调用顺序，可以观察模型文件夹自由组合，编辑或新建`.json`文件生效。

### waifu2x 

经典保守超分算法

- cunet模型用于动漫超分

- photo模型用于实拍

- anime用于动漫超分

- waifuCuda：waifu2x的CUDA实现版本

用于动漫超分，速度与效果和cugan有些许相似

### Compact

::: tip
该算法仅在专业版DLC的公测Beta版本中可用，需要手动前往Steam设置-测试版中选择
:::

一种超分模型结构，一些模型如**AnimeJanai**基于该结构训练

#### AnimeJanai

**3D动漫均可用，更适合动漫**

- RealCUGAN的弱化版本，对景深识别差（容易锐化背景），计算量少速度快
- 速度：UltraSuper > Super > Compact 模型


### SPAN

::: tip
该算法仅在专业版DLC的公测Beta版本中可用，需要手动前往Steam设置-测试版中选择
:::
一种超分模型结构，一些模型系列如**Nomos**基于该结构训练


### TensorRT 

对以上部分超分算法的N卡专用加速

- cugan全部模型均可加速

- real-animevideov3 为RealESR中专门为动漫视频超分准备的模型

- RealESRGANv2-animevideo-xsx2 两倍动漫视频超分放大模型

- RealESRGANv2-animevideo-xsx4 四倍动漫视频超分放大模型


::: warning
由于使用TRT处理需要进行预编译，因此初次使用TRT编码时，不要开启大于1的线程数。

如果初次使用报错，请尝试五到六次。

若仍然报错，请联系开发人员。

理论上与非TRT版本效果相同，在个别场景下存在区别
:::

## 超分模型视觉对比演示

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/aniscale_in.png',
    second: '/Statics/UserGuide/SrCompare/aniscale_out.png',
	name: 'Aniscale Demo 1',
    desc: '2x-AniScale-compact 二倍超分模型，画面细节保留效果很好，涂抹感很低画面锐化低（显存占用较低，速度较慢）'
}]"/>

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/aniscale_1_in.png',
    second: '/Statics/UserGuide/SrCompare/aniscale_1_out.png',
	name: 'Aniscale Demo 2',
    desc: '同上'
}
]"/>

<imgSlider :items="[
{
	first: '/Statics/UserGuide/SrCompare/animevideo-v3_in.png',
    second: '/Statics/UserGuide/SrCompare/animevideo-v3_out.png',
	name: 'realesr-animevideov3-x2',
    desc: '二倍超分模型，画面细节保留效果很好，会有略微的涂抹感画面锐化中等（显存占用较低，速度较快，不建议开启TTA）'
}
]"/>


## 自行添加OpenModelDB上的超分模型

SVFI支持自行添加符合要求的超分模型权重。

[OpenModelDB](https://openmodeldb.info/)支持的模型结构如下图
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_1.png"  width=600>
</div>
其中与SVFI兼容的有Compact，SPAN，ATD，ONNX（TensorRT）.

### 示例：新增Compact或Compact模型

- 搜索Aniscale，可以看到待测模型AniScale-2-Compact
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_2.png"  width=600>
</div>

- 点击进入第一代Aniscale
- 关注右侧的模型信息Size，`64nf`代表特征数量（“模型通道数”），`16nc`代表卷积数量（“模型深度”）
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_3.png"  width=600>
</div>

- SVFI载入Compact模型的策略如下：
    - 模型名带`super ultra`（来自animejanai），`nf=24，nc=8`；
    - 模型名带`ultra`（来自animejanai），`nf=64，nc=8`；
    - 默认`nf=64，nc=16`.
- 回头点击Aniscale-2-Compact，发现网页没有模型信息说明，那么认为它使用默认的模型结构配置，`nf=64，nc=16`，
- 直接下载pth模型到`SVFI\models\sr\Compact\models`即可使用，若没有该文件夹，请手动新建

- 导入SPAN模型同理
<div align=center>
<img src="/Statics/UserGuide/openmodeldb_4.png"  width=600>
</div>

SVFI目前只能载入`nf=48`的模型，其他模型暂时不支持。其他魔改模型也不支持

### 示例：新增TensorRT模型

你也可以添加其他支持的超分模型如[AnimeJanai](https://github.com/the-database/mpv-upscale-2x_animejanai)

SVFI支持的超分模型onnx要求满足以下条件：

- 只有一个输入，维度为`[dynamic, 3, dynamic, dynamic]`
- 只有一个输出，维度为`[dynamic, 3, dynamic, dynamic]`
- 输入节点名为`input`，输出节点名为`output`

放在`SVFI\models\sr\TensorRT\models`

::: tip 模型编译说明
- 模型编译完成后会生成`.engine`文件，如`realesrgan_2x.onnx.540x960_workspace128_fp16_io32_device0_8601.engine`说明模型输入大小（切割大小）是540x960，
- 不同切割大小会导致完全不同的超分速度，因此要谨慎选择切割块大小，尽量不要开启切割块
:::

### 其他模型规则

- esrgan默认状态下只支持`nf=64，nb=23`的模型，
- 当模型名称包含`anime`时，`nb`会被识别为6；

::: tip 术语说明
- nf => number of features, 
- nc => number of convs, 
- nb => number of blocks
:::
