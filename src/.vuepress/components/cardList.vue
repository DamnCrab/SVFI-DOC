<template>
  <div class="card-gallery">
    <a :href="item.link" class="card" v-for="(item, index) in items" :key="index">
      <div class="image-wrapper">
        <div class="image" :style="imageStyle(item.img)"></div>
      </div>
      <div class="info">
        <p class="info-name">{{ item.name }}</p>
        <p class="info-desc">{{ item.desc }}</p>
      </div>
      <div class="author">
        <img :src="item.avatar" alt="作者头像"/>
        <p>{{ item.author }}</p>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import {defineProps, computed} from 'vue';

const props = defineProps({
  /**
   * @description 数据传入 传数组 数组内对象定义如下
   * img: string; 图片地址
   * name: string; 图片名称
   * desc: string; 图片描述
   * link: string; 跳转链接
   * author: string; 作者
   * avatar: string; 作者头像
   */
  items: {
    type: Array as () => CardItem[],
    required: true,
  },
  /**
   * @description 图片对齐方式 不传默认cover
   * cover：覆盖
   * height：高度对齐
   * width: 宽度对齐
   * 偷懒了 没写自适应
   */
  cover: {
    type: String,
    required: false,
    default: 'cover'
  }
});

/**
 * @description 图片样式生成
 * @param url
 */
const imageStyle = (url) => {
  let coverType = {
    cover: 'cover',
    height: 'auto 100%',
    width: '100 auto'
  }
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: coverType[props.cover]
  };
}

interface CardItem {
  img: string;
  name: string;
  desc: string;
  link: string;
  author: string;
  avatar: string;
}
</script>

<style scoped lang="less">
.card-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.7rem;
}

@media (max-width: 600px) {
  .card-gallery {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
}

.card {
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  background-color: #fff;
  border-radius: 0.5rem;
  margin: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    text-decoration: none;
    transform: translateY(-0.2rem);
    transition: transform 0.4s ease;
  }
}


.image-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;

  .image {
    border-radius: 0.5rem 0.5rem 0 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../.vuepress/public/img/logo.png");
    background-repeat: no-repeat;
    background-position: center;
  }
}

.info {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &-name {
    font-size: 1rem;
    margin: 0;
  }

  &-desc {
    font-size: 0.8rem;
    margin: 0;
  }
}

.author {
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  p {
    font-size: 0.8rem;
    margin: 0 0 0 0.5rem;
  }
}
</style>
