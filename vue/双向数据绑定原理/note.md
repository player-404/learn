### 双向数据绑定原理

流程：
修改data中的数据时 --触发--> set --触发watcher中的notify-->  获取到修改之后的新值 --watcher中的callback --> 将新值更新到dom


初次渲染vue会dom中用到的数据替换成vue中响应的data中的数据，单当data中的数据更改时是不会反应到dom中的


初次渲染的同时 dom中用到几个data中的属性就会创建多少个watcher实例


vue会将data中的每个属性利用objec.definedProperty添加set与get, 并会为每个属性创建一个dep实例


在get中会将wtahcer添加到响应属性的dep数组中


set也就时值修改时会触发watcher中的回调函数去更新dom