const axios = require('axios');

axios({
    url: 'http://47.95.218.187:3000/login/cellphone',
    method: "post",
    params: {
        "phone": "13030530994",
        "password": "lzp12138"
    }
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})