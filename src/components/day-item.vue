<!--
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-07-19 17:37:18
 * @LastEditTime: 2021-07-19 19:18:57
 * @LastEditors: 陈秀根
 * @Description: 每天日期
 * 
-->
<template>
  <div class="item-container"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DayInfo {
  sunDay: number;
}

export default defineComponent({
  props: {
    info: {
      type: Object,
      require: true,
    },
  },
  setup(prop, { emit }) {
    setTimeout(() => {
      emit("update:test", Date.now());
    }, 3000);
  },
});
</script>
<style lang="less" scoped>
</style>