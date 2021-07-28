//es5 方法: 双层循环 外层循环之后的每一个元素都与外层循环当前的元素比较
function removal(arr) {
    for (let i = 0; i < arr.length; i++) { //外层循环
        for (let j = i + 1; j < arr.length; j++) { //内层循环作用：
            if (arr[i] === arr[j]) {
                arr.splice(j, 1); //相同则去除数组中的这个元素
                j--; //因为去除了数组中的一个元素所以index -1；
            }
        }
    }
    return arr;
}

//indexOf 去重
function unique(arr) {
    if (!Array.isArray(arr)) return 'type Error';
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i]);
        }
    }
    return array;
}

//include 去重
function unique(arr) {
    if (!Array.isArray(arr)) return 'type Error';
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array;
}
