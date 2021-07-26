<!--
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-23 15:22:11
 * @LastEditTime: 2021-07-22 17:48:35
 * @LastEditors: 陈秀根
 * @Description: 
 * 
-->
<template>
  <div class="setting">
    <h2>设置</h2>
    <day-item :info="info" @update:test="test = $event" />
    <h3>{{ test }}</h3>
    <section class="repeat-box">
      <div class="repeat-item">第1项</div>
      <div class="repeat-item">第2项</div>
      <div class="repeat-item">第3项</div>
      <div class="repeat-item">第4项</div>
      <div class="repeat-item">第5项</div>
      <div class="repeat-item">第6项</div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import DayItem from "@/components/day-item.vue";

export default defineComponent({
  components: { DayItem },
  setup() {
    const info = {
      sunDay: new Date().getDate(),
    };

    const test = ref(1);
    return {
      info,
      test,
    };
  },
});
</script>
<style lang="less" scoped>
.setting {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}

.repeat-box {
  width: 300px;
  columns: 2 120px;
  margin: 40px auto 0;
  padding: 10px;
  background: #999999;

  .repeat-item {
    display: inline-block;
    width: 120px;
    height: 50px;
    margin-top: 15px;
    text-align: center;
    background: #ffffff;
  }
}
</style>
