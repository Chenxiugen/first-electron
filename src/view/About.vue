<!--
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-23 15:22:04
 * @LastEditTime: 2021-07-13 20:14:50
 * @LastEditors: 陈秀根
 * @Description: 
 * 
-->
<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="tab-container">
      <span
        class="tab-item"
        :class="{ selected: selected === 1 }"
        @click="click(1)"
        ><span class="text">第一名</span></span
      >
      <span
        class="tab-item"
        :class="{ selected: selected === 2 }"
        @click="click(2)"
        ><span class="text">第二名</span></span
      >
      <span
        class="tab-item"
        :class="{ selected: selected === 3 }"
        @click="click(3)"
      >
        <span class="text">第三名</span></span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const title = "关于";
    const selected = ref(0);

    const click = (index: number) => {
      selected.value = index;
    };

    return {
      title,
      selected,
      click,
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  min-width: 800px;
  h1 {
    background: rgb(159, 157, 157);
  }
}

.tab-container {
  margin: 0 auto;
  display: flex;
  width: 300px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 12px 12px 0 0;
  background: rgb(159, 157, 157);
  color: #ffffff;
  .tab-item {
    display: inline-block;
    width: 100px;
    height: 50px;
    position: relative;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    .text {
      position: relative;
    }
    &.selected::before {
      content: "";
      position: absolute;
      width: 102%;
      height: 108%;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      background: #000;
      border-radius: 12px 12px 0 0;
    }
  }
}
</style>