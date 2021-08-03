//n秒内执行一次，如果在再次触发，则重新计算时间
const debounce = function(fn, time) {
    let timeout = null;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, time);
        }, timeout);
    }   
}