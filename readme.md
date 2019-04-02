# jest相关demo

``` 
npm test
```

## demo01basic

一些jest的基本语法知识

### async

异步情况的写法

### matcher

expect相关比较值的语法

### order

执行顺序和作用域，以及全局钩子

### sum

一个最简单的demo

---

## demo02mock

mock相关demo

### class.automock

自动mock es6 class的测试方式

### bypassMock

在mock了模块的情况下，通过jest.requireActual绕过mock，取到真实模块的内容

### fileSummarizer

一个手动mock fs模块的例子，因为fs模块基于硬盘比较脆弱。

### returnValue

mock返回值mockReturnValueOnce和mockReturnValue


---

## demo03snapshot

快照测试，toMatchSnapshot；对比两次结果的不同，通过jest -u去更新

---

## demo04timer

定时器相关处理方式

### allTimer
掉过所有定时器，模拟执行完毕状态

### recursiveTime
递归调用定时器的情况

### timerGame
最基本的定时器验证