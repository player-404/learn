### 事件冒泡

当触发元素事件时，会先从当前事件开始，检查元素是否绑定了触发事件，有则触发；
接着会去寻找上级元素(父级元素)是否绑定了该事件，是则触发，如此循环直至html；
在现代浏览器中，默认情况下，所有事件处理程序都在冒泡阶段进行注册

```javascript
 document.querySelector('.son').addEventListener('click', () => {
            console.log('element is son')
        })  
        document.querySelector('.father').addEventListener('click', () => {
            console.log('element is father')
        })
        document.body.onclick = function() {
            console.log('element is body')
        }
        //element is son   element is father  element is body
```

**阻止事件冒泡**

event.stopPropagation: 阻止捕获和冒泡阶段中当前事件的进一步传播。但是，它不能防止任何默认行为的发生； 例如，对链接的点击仍会被处理

* 语法： `event.stopPropagation();`



### 事件捕获

浏览器检查元素的最外层祖先<html>，是否在捕获阶段中注册了一个触发事件处理程序，如果是，则运行它。
然后，它移动到<html>中单击元素的下一个祖先元素，并执行相同的操作，然后是单击元素再下一个祖先元素，依此类推，直到到达实际点击的元素。

**addEventListener第三个参数可以控制事件 冒泡 还是 捕获**
> 通常我们使用 addEventListener 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 useCapture 参数来说，该参数默认值为 false ，useCapture 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性



> 一般来说，如果我们只希望事件只触发在目标上，这时候可以使用 stopPropagation来阻止事件的进一步传播。通常我们认为 stopPropagation 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。stopImmediatePropagation同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。


### 事件代理
因为事件冒泡，事件会一层一层向外触发，我们可以将事件绑定到父元素，当我们点击子元素时，会触发父元素的相同事件，再使用e.target 判断是否为子元素即可
