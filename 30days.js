/**
 * 第 1 天
 * 写一个函数 execTime，参数 time：时间毫秒数，作用：什么都不做，但函数执行时会耗时参数传递的毫秒数
 */
// function execTime(time){
//   let currentTime = a = new Date().getTime()
//   let endTime = currentTime + time
//   while(currentTime < endTime){
//     currentTime = new Date()
//   }
// }
// console.log(1)
// execTime(3000)
// console.log(2)

/**
 * 第 2 天
 * 写一个函数 execTime，参数 t：,时间毫秒数，参数：回调函数，作用：t 秒后执行回调函数
 */
// function execTime(t,callback){
//   setTimeout(callback,t)
// }
// console.log(1)
// execTime(3000,function(){
//   console.log(3)
// })
// console.log(2)
// 执行结果为：立即输出1和2,3秒后输出3

/**
 * 第 3 天
 * 用 JS 写出一个对象，使得
 * obj.obj.obj.obj === obj
 * 也就是说，不管出现多少次 .obj,都得到 obj
 */
// let obj = {}
// obj.obj = obj

/**
 * 第 4 天
 * 写出一个函数 fn，使得 fn 满足一下条件：
 * 1. fn() === fn
 * 2. fn.fn === fn
 */
// function fn(){
//   fn.fn = fn
//   return fn
// }
// fn() === fn
// fn.fn === fn