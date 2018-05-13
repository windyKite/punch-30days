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

/**
 * 第 9 天
 * const obj = {a: 1, b: 2, c: 3}
 * function select(obj, arr){
 * 
 * }
 * select(obj,["a","c"])
 * 输出 {a: 1, c: 3}
 */
// (1) ES5直接遍历
// const obj = {a: 1, b: 2, c: 3}
// function select(obj, arr){
//   let result = {}
//   for(let i = 0; i < arr.length;i++){
//     result[arr[i]] = obj[arr[i]]
//   }
//   return result
// }
// select(obj,["a","c"])

// (2) ES6 for...of遍历数组的值
// const obj = {a: 1, b: 2, c: 3}
// function select(obj,arr){
//   let result = {}
//   for(let value of arr){
//     result[value] = obj[value]
//   }
//   return result
// }
// select(obj,["a","c"]) 

// (3) ES5 forEach遍历
// const obj = {a: 1, b: 2, c: 3}
// function select(obj,arr){
//   let result = {}
//   arr.forEach((key,index)=>{
//     result[key] = obj[key]
//   })
//   return result
// }
// select(obj,["a","c"]) 

// (4) reduce 遍历
// const obj = {a: 1, b: 2, c: 3}
// function select(obj, arr){
//   return arr.reduce((accumulator,currentValue)=>{
//     accumulator[currentValue] = obj[currentValue]
//     return accumulator
//   },{})
// }
// select(obj,["a","c"]) 

// (5) 遍历 obj 键
// const obj = {a: 1, b: 2, c: 3}
// function select(obj, arr){
//   let result = {}
//   Object.keys(obj).filter((key)=>{
//     return arr.includes(key)
//   }).map( value => {
//     result[value] = obj[value]
//   })
//   return result
// }
// select(obj,["a","c"]) 


// (6) JSON.stringify
// JSON.stringify() 第二个参数可以是函数或者数组，为函数时，每个值都会经过函数处理。为数组时，则序列化数组中的属性名。
// const obj = {a: 1, b: 2, c: 3}
// function select(obj, arr){
//   return JSON.parse(JSON.stringify(obj,arr))
// }
// select(obj,["a","c"])

// (7)
// const obj = {a: 1, b: 2, c: 3}
// function select(obj,arr){
//   return arr.reduce((accumulator, key)=>{
//     return Object.assign(accumulator, { [key]: obj[key]})
//   },{})
// }
// select(obj,["a","c"])

/**
 * 第 10 天
 * 依次点击A、B按钮，发送ajax请求，将请求的数据依次渲染出来
 * （B响应可能比A快，依然要先渲染A）
 */
// buttonA.onclick = function(){
//   get('/a',function(responseText){
//     console.log(responseText)
//     input.value = responseText
//   })
// }

// let xhrQueue = []
// function get(url,callback){
//   let request = new XMLHttpRequest()
//   request.open('get', url)
//   request.send()
//   xhrQueue.push(request)
//   request.options.finished = false
//   request.onloadend = function(){
//     this.options.finished = true
//     checkQueue()
//   }

//   function checkQueue(){
//     let xhr = xhrQueue[0]
//     if(xhr && xhr.options.finished){
//       if(xhr.status === 200 || xhr.status === 304){
//         callback(xhr.responseText)
//       }
//       xhrQueue.shift()
//       xhr = xhrQueue[0]
//     }
//   }
// }

/**
 * 第 11 天
 * 写一个 execTimes，用于测试一个函数执行一定次数的时长
 * 如：execTimes(sort, 1000)('hello')表示：执行 sort 函数 1000 次，sort 的参数是 'hello'
 * function execTimes(){
 *   // 补全
 * }
 * function sort(str){
 *   return str.split('').sort().join('')
 * }
 * // 执行 sort 1000 次，sort 的参数是 'hello'
 * execTimes(sort,1000)('hello')
 * // 输出: '执行1000次，耗时43ms'
 */
// function execTimes(fn,times){
//   return (param)=>{
//     let startTime = new Date().getTime()
//     let count = 0
//     while(count < times){
//       fn(param)
//       count++
//     }
//     let endTime = new Date().getTime()
//     time = endTime - startTime
//     console.log(`执行${times}次，耗时${time}ms`)
//   }
// }

// function sort(str){
//   return str.split('').sort().join('')
// }
// execTimes(sort,1000)('hello')


/*
 * 第 12 天
 * 用 JavaScript 实现一个方法，该方法能够判断两个字符串是否匹配，如：
 * function isMatch(str1,str2){
 *  // ...
 * }
 * isMatch('something','gnihtemos')  // true
 * isMatch('aaa','aa')  // false
 */
// (1) 计数排序的思想，将 str1 的值放入一个对象，再检测 str2 的值属不属于这个对象
// function isMatch(str1, str2){
//   if(str1.length !== str2.length){
//     return false
//   }
//   let template = {}
//   for(let i = 0, len = str1.length;i < len;i++){
//     template[str1[i]] = true
//   }
//   for(let i = 0,len= str2.length;i < len;i++){
//     if(!template[str2[i]]){
//       return false
//     }
//   }
//   return true
// }

// (2) 将两个字符串转换成数组，排序之后再转换成字符串比较
// function isMatch(str1, str2){
//   return str1.split('').sort().join('') === str2.split('').sort().join('')
// }

/**
 * 第 13 天，关于 this 的判断
 * 以下代码输出什么？为什么？
 */
// var app = {
//   fn1: function(){
//     console.log(this)
//   },
//   fn2: function(){
//     return function(){
//       console.log(this)
//     }
//   },
//   fn3: function(){
//     function fn(){
//       console.log(this)
//     }
//     fn()
//   },
//   fn4: function(){
//     return {
//       fn: function(){
//         console.log(this)
//       }
//     }
//   },
//   fn5(){
//     setTimeout(function(){
//       console.log(this)
//     },10)
//   },
//   fn6(){
//     setTimeout(() => {
//       console.log(this)
//     }, 20);
//   },
//   fn7(){
//     setTimeout((function(){
//       console.log(this)
//     }).bind(this),30)
//   },
//   fn8: ()=>{
//     setTimeout(()=>{
//       console.log(this)
//     },40)
//   }
// }

// app.fn1()   // app, app.fn1() === fn1.call(app)
// app.fn2()()  // Window, app.fn2()() === (app.fn2()).call(undefined) app.fn2() 是一个函数
// app.fn3()    // Window, app.fn3()内部执行了 fn.call(undefined)
// app.fn4().fn()  // app.fn4()   app.fn4()是一个对象，包含 fn 方法，app.fn4().fn() === fn.call(app.fn4())
// app.fn5()    // Window, setTimeout 里的 function 使用 fn.call(undefined)的调用方式
// app.fn6()    // app, 箭头函数没有自己的 this，箭头函数的 this 指向上一层函数的 this
// app.fn7()    // app, bind 手动绑定 this，将 app.fn7.call(app) 的 this 绑定了
// app.fn8()    // Window, fn8 是一个箭头函数，this 指向上一层，也就是 Window

/**
 * 第 14 关，以下代码中出现的所有 this 分别指代什么？默认已经引入jQuery
 */
// $('.child').on('click',function(){
//   console.log(this)
// })

// $('.father').on('click','.child',function(){
//   console.log(this)
// })

// $('.child')[0].onclick = function(){
//   console.log(this)
// }
// // 事件监听函数里面的 this，默认指向触发事件的 node 节点,当回调函数是箭头函数时，this指向Window

// var app = {
//   init: function(){
//     // 使用 app.init() 调用时，this 全部指向 app
//     // this.$father === app.$father
//     this.$father = $('.father')
//     // this.$child === app.$child
//     this.$child = $('.child')
//     // this.bind() === app.bind()
//     this.bind()
//   },
//   bind: function(){
//     // 使用 app.bind() 调用时，this 指向 app
//     // _this = this === _this = app
//     var _this = this
//     // this.sayHi === app.sayHi
//     this.$father.on('click',this.sayHi)
//     this.$child.on('click',function(){
//       // _this === app,_this.sayHello() === app.sayHello()
//       _this.sayHello()
//     })
//     this.$child.on('click',this.sayBye.bind(this))
//   },
//   sayHi: function(){
//     console.log(this)   // 作为回调函数使用，this依然指向触发事件的 node 节点
//   },
//   sayHello: function(){
//     console.log(this)  // 直接 app.sayHello()调用，this 指向 app
//   },
//   sayBye: function(){
//     console.log(this) // bind() 绑定了 this 是 app
//   }
// }
// app.init()

/**
 * 第 15 关
 * 封装一个 jsonp 方法，可以使用如下方式调用：
 * jsonp(url[,data][,callbackName])
 * url: 
 * 类型：String,请求 url
 * 
 * data:
 * 类型：PlainObject,参数对象
 * 
 * callbackName
 * 类型：String,传递给服务器的回调函数的key，默认是“callback”
 * 
 * 返回值：
 * Promise 对象
 */

// function jsonp(url,data = {},callbackName = 'callback'){
//   return new Promise(function(resolve, reject){
//     let script = document.createElement('script')
//     let query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
//     window.fn = data => resolve(data)
//     script.src = `${url}?${callbackName}=fn&${query}`
//     document.head.appendChild(script)
//     script.addEventListener('error',()=>{reject('error')})
//     document.head.removeChild(script)
//   })
// }

// jsonp('http://photo.sina.cn/aj/index',{page: 1, cate: 'recommend'},'jsoncallback')
//   .then(data => {
//     console.log(data)
//   })

/**
 * 第 16 关
 * 以下代码输出了什么？为什么？
 */
/*
setTimeout(()=>{
  console.log(4)
},0)
new Promise(resolve => {
  console.log(1)
  for(var i = 0;i < 10000; i++){
    i == 9999 && resolve()
  }
  console.log(2)
}).then(()=>{
  console.log(5)
  Promise.resolve(7)
    .then(v => console.log(v))
}).then(() => {
  console.log(6)
})
console.log(3)
*/
// 输出顺序： 1,2,3,5,6,7,4，主要考察微任务和宏任务的执行顺序。

