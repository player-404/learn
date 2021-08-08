function ajax(method = 'get', url, data, success, failed) {
    //创建XMLHttpRequest实例
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        //兼容IE
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //get 请求时设置传入的参数
    let str = '';
    if (typeof data == 'object') {
        for (let key in data) {
            str += key + '=' + data[key] + '&';
        }
        data = str.replace(/&$/, "");
    }

    //get请求
    if (method.toUpperCase() == 'GET') {
        if (data) {
            xhr.open(method, `${url}?${data}`)
        } else {
            xhr.open(method, url, true);
        }
        xhr.send();
    } 

    //post请求
    if (method.toUpperCase() === 'post') {
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }

    //处理返回数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.state === 200) {
                success(xhr.responseText);
            } else {
                failed(xhr.state);
            }
        }
    }
}