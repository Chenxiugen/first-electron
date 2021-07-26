import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 错误收集
// window.onerror = function (msg, url, lineNo, columnNo, error) {
//   var string = (msg as string).toLowerCase();
//   var substring = "script error";
//   if (string.indexOf(substring) > -1) {
//     console.info('Script Error: See Browser Console for Detail');
//   } else {
//     var message = [
//       'Message: ' + msg,
//       'URL: ' + url,
//       'Line: ' + lineNo,
//       'Column: ' + columnNo,
//       'Error object: ' + JSON.stringify(error)
//     ].join(' - ');

//     console.info(message);
//   }

//   return false;
// };

createApp(App).use(router).mount('#app')
