/*
 * @Author: chenxiugen@zuoyebang.com
 * @Date: 2021-06-25 19:08:37
 * @LastEditTime: 2021-07-05 16:42:13
 * @LastEditors: 陈秀根
 * @Description: 工具类
 * 
 */

export const formatDate = (date: Date) => {
  return date;
}

/**
 * 根据给定 年月获取该月的总天数
 * @param {number} month 月份
 * @param {number} year 年份，默认 当前时间年份
 */
export function getDaysByMounth(month: number = new Date().getMonth(), year: number = new Date().getFullYear()) {
  try {
    return new Date(year, month, 0).getDate();
  } catch (error) {
    console.error("[getDaysByMounth]参数错误：", error);
    return 0;
  }
}
