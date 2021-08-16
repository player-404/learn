function ajax(method, url, data, success, failed) {
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest;
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    let methods = method.toUpperCase();
    let str;
    if (typeof data === 'object') {
        for (let key in data) {
            str += `${key}=${data[key]}&`;
        }
        str.replace(/&$/, '');
    }

    if (methods === 'GET') {
        if (data) {
            xhr.open(methods, `${url}?${str}`, true);
        } else {
            xhr.open(methods, url, true);
        }
        xhr.send()
    }

    if (methods === 'POST') {
        xhr.open(methods, url, true);
        xhr.setRequestHeader('Content-tyep', 'application/x-www-form-urlencode');
        xhr.send(data);
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.responseText);
            } else {
                failed(xhr.status);
            }
        }
    }
}