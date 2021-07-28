//在函数内部，this的值取决于函数被调用的方式
function fun() {
    console.log(this); //window
}

function fun2() {
    fun();
}
fun2();