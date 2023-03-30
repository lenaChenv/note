# Javascript

## 变量类型
JS变量最基本的分类就是 ==值类型== 和 ==引用类型== ，两者有何区别呢，可以通过例子看出来。

### 值类型

#### undefined
```javascript
let a 
```
#### Number
```javascript
const n = 100
```
#### String
```javascript
const s =  'abc'
```
#### boolean
```javascript
const b = true 
```
#### Symbol
```javascript
const s = Symbol('s')
```

### 引用类型
#### Object 
```javascript
const obj = { x: 100} 
```
#### Array
```javascript
const arr = [ 'a', 'b', 'c'] 
```
#### Function
```javascript
function fn() = {} 
```
#### Null
```javascript
const n = null
``` 
特殊引用类型指针指向空地址

::: tip
##### `null`和`undefined`的区别
- undefined
1. 此处应该有一个值但是还没有定义
2. typeof undefined = undefined
3. 转为数值为NaN
4. 例如变量被声明了但没有赋值，就等于`undefined`。函数没有返回值默认返回`undefined`
- null
1. 表示“没有对象”，即该处不应该有值
2. typeof null=object
3. 转为数值为0
4. 作为函数的参数，表示该函数得参数 不是对象。作为对象原型链的终点
:::

::: tip
##### 如何判断一个数据是NaN
- 用`typeof`判断是否为`number`类型并且判断是否满足`isNaN`
- 利用`NaN`是唯一一个不等于任何自身的特点n!==n
- `Object.is()` 方法用来判断两个值是否是相同的值。
```javascript
NaN == NaN
Number.isNaN(NaN)
Object.is(NaN,NaN)
```
:::

### 数组常用api
#### 循环
- for
- for…in… 
- forEach
- for…of
- map
- filter
- some
- every
- reduce
#### 直接修改原数组
- arr.push 在数组的尾部追加 1-n 个新元素
- arr.pop 用于删除数组中的最后一个元素
- arr.shift 用于删除并返回数组中的第一个元素，并将后面的元素向前移动一位，并且 length-1
- arr.reverse 用于颠倒数组中的所有元素
- arr.sort(callback)
	对数组内的元素按照特定的规则进行排序；
	参数：callback 用于排序规则的回调函数，默认按照第一个字符的 Uncode 编码进行排序；
- arr.splice(start[ deleteCount [,val , ……])
> - 可以删除指定索引的数组元素；
> - 可以用于数组的元素替换；
> - 可以在指定的索引位置插入新的元素，并将之前的元素向后移动；
> - 参数： start：开始索引；deleteCount ： 要删除的数量；val ： 要插入到 start 位置的元素；
>  - 返回值：返回的是被删除的数组片段，返回类型是数组；
- arr.unshift()
> - 用于在数组的头部有插入一条或多条数据，原数组向后移动；

#### 返回新数组
- arr.concat(value[, …… , valueN])
> - 用于将参数依次添加到数组尾部，并返回一个新数组；
> - 参数：value 需要天骄到新数组的元素
> - 返回值：添加元素后的新数组
- arr.join()
> - 用于将数组内所有元素进行 toString() 操作，并进行连接；
> - 参数：用于拼接字符串额的连接符号；
> - 返回值：新的字符串，包含了数组所有元素的 toString() 结果，默认以 ， 连接；
- arr.slice()
> - 截取数组指定索引的片段；
> - 参数： start ：开始end：结束（可缺省，表示从 start 开始到数组结尾结束），也可以为负值；
> - 返回值：截取到的数组片段；

#### es6
- arr.index(value[,start])
> - 用于检索数组中的 value 值，找到返回 index；否则，返回 -1；
- arr.forEach(callback)
> - 用于遍历数组，并将数组的每一个元素和索引值传入到回调函数中；
- arr.filter(callback)
> - 用于过滤数组
> - 执行过程： 遍历数组；使用逻辑表达式进行检测；将所有的 true 的结果保存到一个新的数组中；返回新数组；
- arr.map(callback)
> - 用于遍历并操作数组元素；
> - 返回值：新的数组；
> - 执行过程： 遍历数组操作数组元素返回新数组
- arr.reduce(callback)
> - 在执行第一次回调函数的时候，会将数组的元素传入到 pre ，将数组的第二个元素传入到 next，之后每一次执行 pre 都是上次的 return ，最后一次执行的结果是整个 reduce 的返回值；
> - 参数： pre : 上一个next ：下一个
- arr.every(callback)
> - 使用一个逻辑表达式，检测数组中的每个元素，全部为 true 则为 true ，否则为 false；
- arr.some(callback)
> - 使用一个逻辑表达式，检测数组中的每个元素，全部为 false 则为 false ，全部为 true 则为 true；

	- 对象常用api

		- Object.assign

			- 将多个对象合并到目标的属性合并到目标对象中，相同属性的值以最后一个合并对象的为准，返回目标对象，不改变被合并对象，可以实现浅克隆

		- Object.create

			- 初始化一个对象


		- Object.defineProperty

			- 参数

		- Object.getOwnPropertyNames

			- 查找目标对象的所有key值，并返回一个包含所有key值的数组


		- Object.keys

			- 查找目标对象的所有key值，并返回一个包含所有key值的数组


		- Object.getPrototypeOf

			- 该方法返回对象的原型对象，如果没有的话，则返回null


		- Object.is

			- 是确定两个值是否是相同的值,


		- Object.preventExtensions

			- 让一个对象永远不能添加新的属性，严格模式下会报错


		- Object.isExtensible

			- 判断一个对象是否可以修改属性,是放回true，反之返回false


		- Object.seal

			- 对一个对象进行密封，并返回被密封的对象，这些对象都是不能够添加属性，不能删除已有属性，以及不能够修改已有属性的可枚举型、可配置型、可写性

		- Object.isSealed

			- 判断一个对象是否被密封,是放回true，反之返回false


		- Object.freeze

			- 浅冻结一个对象，使其不能做任何修改，深层级的还是可以修改

			- 如果要实现深度冻结，可以通过递归来实现


		- Object.isFrozen

			- 判断一个对象是否被冻结,是放回true，反之返回false


		- Object.getOwnPropertySymbols

			- 返回一个对象中所有以Symbol类型为key的数组

		- Object.entries

			- 将对象中的所有key:value转为[key,value]格式，返回包含所有健值对的二维数组


		- Object.fromEntries

			- 把Object.entries转换后的二维数组重新转换为对象


		- Object.values

			- 返回一个对象的所有value值的数组集合


- typeof运算符

	- 识别所有的值类型
	- 识别函数
	- 判断是否是引用类型(object) 

- 深拷贝

	- 深拷贝代码-1
	- 深拷贝代码-2

- 类型转换

	- ===和== 

		- ==

			- 唯一使用==

		- ===

	- 字符串拼接
	- if语句和逻辑运算

		- if语句

			- truly变量:!!a===true
			- falsely变量:!!a===false

		- 逻辑运算

### 原型和原型链

- class

	- class的原型本质

		- 原型和原型链的图示
		- 属性和方法的执行规则

	- 内容

		- constructor
		- 属性
		- 方法

- 继承

	- extends
	- super
	- 扩展或重写方法

- 原型

	- 原型图-1
	- 每个class都有显式原型prototype
	- 每个实例都有隐式原型__proto__
	- 实例的__proto__指向对应class的prototype
	- 基于原型的执行规则获取属性或执行方法时

		- 先在自身属性和方法查找
		- 如果找不到则自动去__proto__中查找

- 原型链

	- 原型链图-1
	- 验证一个属性是否是对象/实例本身的属性

- instanceof

	- instanceof主要用于判断某个实例是否属于某个类型也可用于判断某个实例是否是其父类型或者祖先类型的实例
	- instanceof主要的实现原理

		- 只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false。

- 手写一个简易的jQuery，考虑插件和扩展性

	- 实现
	- 调用const $p = new  jQuery(‘p’)
	- 插件
	- 扩展性

- new操作符做了哪些事情

	- new操作符新建了一个空对象
	- 这个对象原型指向构造函数的prototype
	- 执行构造函数后返回这个对象

### 作用域和闭包

- 作用域

	- 全局作用域
	- 函数作用域
	- 块级作用域（ES6）{}

- 自由变量

	- 一个变量在当前作用域没有被定义，但是被使用了
	- 向上级作用域一层一层依次寻找，直到找到为止
	- 如果到全局作用域都没找到，则报错xx is not defined 
	- 自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方

- 闭包

	- 函数作为参数被传递
	- 函数作为返回值被返回
	- 应用

		- 隐藏数据
		- 闭包作用回调函数
		- 函数节流，函数防抖

	- 闭包的优缺点
	- 什么是闭包

		- 闭包是指有权访问另一个函数作用域中的变量的函数。其本质是函数的作用域链中保存着外部函数变量对象的引用。


- this

	- 作为普通函数
	- 使用call apply bind 

		- bind会返回一个新的函数去执行


			- func.bind(thisObj, arg1, arg2 ...)

				- 手写bind函数

		- apply

			- fn.apply(thisObj, [arg1, arg2 ...])


				- 手写apply函数

		- call

			- fn.call(thisObj, arg1, arg2 ...)


				- 手写call函数

	- 作为对象方法被调用
	- 在class方法中调用
	- 箭头函数（永远取它上级作用域中this的值）
	- this在各个场景中取什么样的值，是在函数执行的时候确定的，而不是定义的时候

### 异步

- 单线程和异步

	- 单线程

		- JS是单线程语言，只能同时做一件事
		- 浏览器和nodejs已支持js启动进程，如Web Worker 
		- JS和DOM渲染共用同一个进程，因为JS可修改DOM结构
		- 遇到等待（网络请求、定时任务）不能卡住

	- 异步

		- 回调callback函数形式
		- 异步不会阻塞代码执行
		- 应用场景

			- 网络请求，如：ajax 图片加载 

				- ajax请求
				- 图片加载

			- 定时任务，如：setTimeout

	- 同步

		- 同步会阻塞代码执行

- callback

	- callback hell 

- promise

	- 
	- Promise解决callback hell的问题 ，支持多并发
	- promise加载一个图片

		- 先加载一个图片，再加载另一个图片

### 模块化

- ES6 Module 

	- Interface和type的区别 
	- set和map

## JS-WEB-API

### BOM（Browser Object Model） 

- navigator
- screen
- location
- history

### DOM document object model 

- 树形结构
- 节点操作

	- 获取节点 querySelectorAll返回的是NodeList集合

- 属性：引起DOM重新渲染         所以尽量使用property去操作

	- property：以js对象的形式来修改属性，               在html结构中本来就存在

		- nodeName和nodeType
		- property是DOM对象自身就拥有的属性


	- attribute：修改html属性，会改变html结构
	- 区别

- 树结构操作

	- 新增/插入节点
	- 获取子元素的列表，获取父元素

		- 子元素中过滤dom元素

	- 删除

- 性能

	- 避免频繁的DOM操作
	- 对DOM查询做缓存
	- 将频繁操作改为一次性操作

### 事件

- 绑定

	- 阻止默认行为
	- 通用事件绑定函数

		- 调用

- 冒泡

	- 阻止冒泡
	- 描述事件冒泡的流程

		- 基于DOM的树形结构
		- 事件会顺着触发元素往上冒泡
		- 应用场景：代理

- 代理：利用冒泡的机制，在瀑布流或者子元素数量庞大的情况下，事件可以绑定到父元素上

	- 优化版
	- 代码简洁
	- 减少浏览器内存占用

### ajax

- XMLHttpRequest

	- get
	- post

- 状态码
- 跨域

	- 同源策略

		- ajax请求时，浏览器要求当前网页和server必须同源（安全）
		- 同源：协议、域名、端口，三者必须一致
		- 加载图片、css、js可无视同源策略

			- 可用于统计打点，使用第三方统计服务
			-  可使用CDN，CDN一般都是外域
			- 可以实现JSONP

	- 跨域解决方案

		- JSONP

			- 可以绕过跨域限制
			- 服务器可以任意动态拼接数据返回
			- 所以， 就可以获得跨域的数据，只要服务端愿意返回

		- CORS（服务端支持）

- readyState
- 写一个简单的ajax
- 插件

	- jquery

- ajax的五个步骤

	- 创建XMLHttpRequest对象
	- 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
	- 设置响应HTTP请求状态变化的函数.
	- 发送HTTP请求.
	- 获取异步调用返回的数据.

- get与post的区别

### 存储

- cookie

	- 本身用于浏览器和server通讯
	- 最早是被借用来做本地存储
	- 缺点

		- 存储大小：4KB
		- http请求时需要发送到服务端，增加请求数据量
		- 只能用document.cookie=“a=100;”来修改

- localStorage和session Storage 

	- HTML5专门为存储而设计，最大可存5M
	- API简单易用 setItem getItem 
	- 不会随着http请求被发送出去
	- 区别

		- localStorage

			- 数据永久存储，除非代码或者手动删除

		- sessionStorage

			- 数据只存在于当前会话，浏览器关闭则清空

## 问题

## 开发环境

### git

- 最常用的代码版本管理工具
- git服务端

	- github
	- coding.net

- 常用命令

	- git rebase 
	- git clone 
	- git config 
	- git fetch
	- git stash &amp; git stash pop 

- .gitignore文件表示忽略文件提交，比如：node_modules

### 调试

### webpack和babel 

- webpack搭建环境

	- npm init -y 

		- webpack.config.js

- babel

### linux命令

### 抓包

- 移动端h5页，查看网络请求，需要抓包
- 抓包工具

	- Windows  fiddler
	- mac OS charles 

- 抓包过程

	- 手机和电脑连接同一个局域网
	- 将手机代理到电脑上
	- 手机浏览网，即可抓包 
	- 查看网络请求
	- 网址代理
	- https

## 运行环境

### 页面加载

- 加载

	- 加载资源的形式

		- html代码
		- 媒体文件
		- js css

	- 加载页面的过程

		- DNS解析：域名->IP地址
		- 浏览器根据IP地址向服务器发起http请求
		- 服务器处理http请求，并返回给浏览器

- 渲染

	- 根据Html代码生成DOM Tree 
	- 根据CSS代码生成CSSOM 
	- 将DOM Tree 和CSSOM整合成一个Render Tree 
	- 浏览器根据RenderTree渲染页面 
	- 如果遇到 则暂停渲染，优先加载并执行js代码

### 性能优化

- 加载资源优化

	- 减少资源体积

		- 压缩资源体积

			- 比如：webpackproduction mode 

	- 减少访问次数

		- 合并代码

			- 比如：webpack bundle.js 

		- SSR服务器端渲染

			- 将网页和数据一起加载，一起渲染

		- 缓存

			- 静态资源加hash后缀，根据文件内容计算hash
			- 文件内容不变，则hash不变，则url不变
			- url和文件不变，则会自动触发http缓存机制，返回304

	- 使用更快的网络

		- 比如：CDN，根据地域做静态文件服务，因为不同区域网速不一样 

- 渲染优化

	- CSS放在head里面，js放在body最下面
	- 今早开始执行js，用DOM Content Loaded触发
	- 懒加载：图片懒加载，上滑加载更多
	- 对DOM查询进行缓存
	- 频繁DOM操作，合并到一起，插入DOM结构
	- 节流throttle

		- 示例

			- 封装节流

	- 防抖debounce

		- 封装防抖

### 安全

- xss跨站请求攻击 

	- 预防（npm xss包） 
	- 漏洞

		- 以script标签形成注入
		- 在内联的js中，拼接的数据突破了原本的限制
		- 在标签的href、src等属性中，包含js等可执行代码
		- 在onload、onerror、onclick等事件中，注入不受控制代码
		- 在style属性和标签中，包含类似background-image：url（js代码）新版浏览器已经可以防范 
		- 在style属性和标签中，包含类似expression
		- 包含引号添加属性 

	- 攻击分类

		- 存储型

			- 攻击者将恶意代码提交到目标网站的数据库中 

		- 反射型

			- 攻击者构造出特殊的url，其中包含恶意代码

		- DOM型

			- 前端js自身的漏洞，攻击者构造出特殊的url，其中包含恶意代码

				- 预防

					- innerHTML、outerHTML、document.write、textContent、set Attribute
					- v-html/dangerouslySetHTML
					- location、onclick、onerror、onload、onmouseover、a标签的href 
					- js的eval、setTimeout、setInterval

		- 预防

			- 防止HTML中出现注入
			- 防止javascript执行时，执行恶意代码
			- Content Security Policy 
			- 输入内容长度限制
			- HTTP-only cookie 
			- 验证码

- XSRF跨站请求伪造

	- 预防

- iframe
- opener
- clickJacking
- HSTS
- CND劫持

### window.onload和DOMContentLoaded的区别

### 从输入url到渲染出页面的整个过程

## 问题

### typeof能判断哪些类型

### 何时使用===何时使用==

### 值类型和引用类型的区别

### 如何准确判断一个变量是不是数组

### class的原型本质，怎么理解

### this的不同应用场景，如何取值

- 1
- 2

### 实际开发中闭包的应用

### 异步和同步的区别

### 异步的应用场景

### DOM是哪种数据结构

### DOM操作常用的api

### property和attribute的区别

### 一次性插入节点，考虑性能

### 如何识别浏览器的类型

### 分析拆解url各个部分

### 描述事件冒泡的流程

### 无限下拉的列表如何监听每个图片的点击

### 跨域的实现方式

### 描述cookie localStorage sessionStorage的区别 

### 网页加载过程

### 性能优化

### 安全

