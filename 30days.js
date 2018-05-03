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

/**
 * 第 5 天
 * 写出一个函数 fn,使得 fn 满足以下条件：
 * 1. fn() 打印出 'a'
 * 2. fn()() 打印出 'b'
 * 3. fn()()() 打印出 'c
 */
// function fn(){
//   let chr = 'a'
//   setTimeout(()=>{
//     console.log(chr)
//   })

//   return function(){
//     chr = 'b'
//     return function(){
//       chr = 'c'
//     }
//   }
// }

/**
 * 第 6 天
 * 写出一个函数 fn，使得 fn 满足以下条件
 * fn() == 'a'
 * fn()() == 'b'
 * fn()()() == 'c'
 */
// 思路：类型自动转换机制对复杂类型会先调用valueOf()方法，使用valueOf()方法的返回值进行比较
// function fn(){
//   return a
// } 
// function a(){
//   return b
// }
// a.valueOf = function(){
//   return 'a'
// }
// function b(){
//   return c
// }
// b.valueOf = function(){
//   return 'b'
// }
// function c(){
//   return 'c'
// }
// fn() == 'a'     // true
// fn()() == 'b'   // true
// fn()()() == 'c' // true 

/**
 * 第 7 天
 * function exam(){
 *   var score = Math.floor(Math.random()*101)
 *   if(score >= 60){
 *     console.log('及格，和凯丽坐到一起。')
 *   } else{
 *     console.log('不及格，继续考试')
 *     setTimeout(exam,1000)
 *   }
 * }
 * 
 * exam()
 * 对上述代码使用 Promise 进行改写，能用以下方式调用
 * exam().then(score => {
 *   console.log('及格，和凯丽坐到一起'，score)
 * })
 */
// (1) exam 中递归判断函数，在 exam 函数内部解决判断
// function exam(){
//   return new Promise(function(resolve,reject){
//     function fn(){
//       var score = Math.floor(Math.random()*101)
//       if( score >= 60){
//         resolve(score)
//       } else{
//         console.log('不及格，继续考试') 
//         setTimeout(() => {
//           fn()
//         }, 1000);
//       }
//     }
//     fn()
//   })
// }
// exam().then(score => {
//   console.log('及格，和凯丽坐到一起', score)
// })

// (2) 递归 exam 函数，在 promise 调用链中解决判断，实现基础是 resolve() 的实参可以是一个 Promise 实例
// function exam(){
//   return new Promise(function(resolve,reject){
//     var score = Math.floor(Math.random()*101)
//     // 无论 score 结果如何，Promise实例都会 resolve，只不过接受的实参不同
//     // resolve() 可以接受一个 Promise 实例作为实参，会直接返回该实例
//     if(score >= 90){
//       resolve(score)
//     } else{
//       setTimeout(() => {
//         resolve(exam())
//       }, 1000);
//     }
//   })
// }
// exam().then(score => {
//   console.log('及格，和凯丽坐到一起', score)
// })

// (3) exam 内部解决判断问题 
// function exam(){
//   return new Promise(function(resolve,reject){
//     var score = Math.floor(Math.random()*101)
//     while(score < 60){
//       score = Math.floor(Math.random()*101)
//     }
//     resolve(score)
//   })
// }
// exam().then(score => {
//   console.log('及格，和凯丽坐到一起', score)
// })

/**
 * 第 8 天，数组排序
 * 写一个 byField 函数，实现数组按姓名、年纪、任意字段排序
 * var users = [
 *   {name: "John", age: 20, company: "Jirengu"},
 *   {name: "Pete", age: 18, company: "Alibaba"},
 *   {name: "Ann", age: 19, company: "Tencent"},
 * ]
 * users.sort(byField('company'))
 * [
 *   {name: "Pete", age: 18, company: "Alibaba"},
 *   {name: "John", age: 20, company: "Jirengu"},
 *   {name: "Ann", age: 19, company: "Tencent"},
 * ]
 */
// function byField(field){
//   return function(a,b){
//     if(a[field] < b[field]){
//       return -1
//     }
//     if(a[field] > b[field]){
//       return 1
//     }
//   }
// }
// var users = [
//   {name: "John", age: 20, company: "Jirengu"},
//   {name: "Pete", age: 18, company: "Alibaba"},
//   {name: "Ann", age: 19, company: "Tencent"},
// ]

// users.sort(byField('name'))
