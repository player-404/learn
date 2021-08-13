
class Dep {
    constructor() {
        this.subs = [];
    }

    //收集watcher
    addSub() {
        this.subs.push(watcher);
    }

    //通知观察者去更新
    notify() {
        this.subs.forEach(w => w.update())        
    }
}


class Observer {
    constructor(data) {
        this.observer(data)
    }

    observer(data) {

        if (data && typeof data === 'object') {

            Object.keys(data).forEach(key => {
                this.defineidReactive(data, key, data[key]);
            })
        }
    }

    defineidReactive(data, key, value) {
        this.observer(value);

        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                return value;
            },
            set:(newv) => {
                this.observer(newv);
                if (newv === value) return;
                value = newv;
            }
        })
    }


}