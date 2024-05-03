<template>
  <div class="card-gallery">
    <a class="card" v-for="(item, index) in items" :key="index">
      <div class="image-wrapper">
        <ImgComparisonSlider class="slider">
          <img
            slot="first"
            style="width: 100%"
            :src="item.first"
          />
          <img
            slot="second"
            style="width: 100%"
            :src="item.second"
          />
          <!-- eslint-enable -->
        </ImgComparisonSlider>
      </div>
      <div class="info">
        <p class="info-name">{{ item.name }}</p>
        <p class="info-desc">{{ item.desc }}</p>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import {defineProps, computed} from 'vue';

const props = defineProps({
  /**
   * @description 数据传入 传数组 数组内对象定义如下
   */
  items: {
    type: Array as () => CardItem[],
    required: true,
  },
  /**
   * @description 图片对齐方式 不传默认cover
   */
  cover: {
    type: String,
    required: false,
    default: 'cover'
  }
});

interface CardItem {
  first: string;
  second: string;
  name: string;
  desc: string;
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

.slider {
  transition: box-shadow 200ms ease-in-out;
}

.slider:focus {
  outline: none;
}
</style>
