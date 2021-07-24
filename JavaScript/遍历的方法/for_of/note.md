# for of
### for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）

**语法**：

`for (variable of iterable) {
//statements
}`

**参数**:

variable
在每次迭代中，将不同属性的值分配给变量。

iterable
被迭代枚举其属性的对象。

```javascript
let arr = ['张三', '李四', '王五'];
for (value of arr) {
    console.log(value); // 张三 李四 王五
}
```

对象不可迭代
```javascript
let obj = {name: '张三', age: 12};
for (value of obj) {
    console.lo(value); //  obj is not iterable
}
```

对于for...of的循环，可以由break, throw, continue或return终止
```javascript
let arr1 = ['小红', "小明", "效率"];
for (value of arr1) {
    console.log(value);
    break; // 终止循环 小红
}
```