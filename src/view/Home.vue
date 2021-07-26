<!--
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-23 15:21:50
 * @LastEditTime: 2021-07-19 17:36:32
 * @LastEditors: 陈秀根
 * @Description: 
 * 
-->
<template>
  <div class="calendar-contaniner">
    <section class="current-info">
      <div class="date">{{ currentDate }}日</div>
    </section>
    <div class="calendar-title">2021年06月</div>
    <div class="calendar-weeks">
      <span class="week-item item">星期一</span>
      <span class="week-item item">星期二</span>
      <span class="week-item item">星期三</span>
      <span class="week-item item">星期四</span>
      <span class="week-item item">星期五</span>
      <span class="week-item item">星期六</span>
      <span class="week-item item">星期日</span>
    </div>
    <section class="calendar-days">
      <div
        class="day-item item"
        :class="{ selected: selectedDay === index + 1 }"
        v-for="(item, index) in days"
        :key="index"
        @click="clickHandler(index + 1)"
      >
        {{ index + 1 }}
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { formatDate, getDaysByMounth } from "@/utils";

export default defineComponent({
  setup() {
    // 当前时间
    const now = new Date();
    // 当前月
    const currentMonth = now.getMonth();
    // 当前日
    const currentDate = now.getDate();
    const days = new Array(getDaysByMounth(currentMonth));
    const selectedDay = ref(new Date().getDate());

    const clickHandler = (index: number) => {
      selectedDay.value = index;
    };

    return {
      currentDate,
      days,
      selectedDay,
      clickHandler,
    };
  },
});
</script>
<style lang="less" scoped>
.calendar-contaniner {
  display: grid;
  width: 100%;
  min-width: 850px;
  grid-template-columns: 150px 1fr;
  grid-auto-flow: column dense;
  background: #6ff1a6;
}

.current-info {
  grid-row: 1 / span 3;
  background: #28e075;
  padding: 15px 5px;
  .date {
    width: 100%;
    font-size: 58px;
    font-weight: 700;
  }
}

.calendar-title {
  font-size: 32px;
  font-weight: 700;
  height: 80px;
  line-height: 80px;
}

.item {
  display: block;
  min-width: 100px;
  min-height: 100px;
  padding: 5px;
  text-align: center;
  font-weight: 700;
  box-sizing: border-box;
}

.calendar-weeks {
  display: grid;
  grid-template-columns: repeat(7, auto);
  .week-item {
    line-height: 50px;
  }
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, auto);
  .day-item {
    cursor: pointer;
  }
  .selected {
    border-radius: 12px;
    border: solid 2px #d32af9;
  }
}
</style>
