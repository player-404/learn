//观察者
class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.oldVal = this.getOldVal();
    }

    getOldVal() {
        Dep.target = this;
        const oldVal = complainUtil.getVal(this.expr, this.vm);
        Dep.target = null;
        return oldVal;
    }

    update() {
        const newVal = complainUtil.getVal(this.expr, this.vm);
        if (newVal !== this.oldVal) {
            this.cb(newVal);
        }
    }
}

//订阅器
class Dep {
    constructor() {
        this.subs = [];
    }

    //收集watcher
    addSub(watcher) {
        this.subs.push(watcher);
    }

    //通知观察者去更新
    notify() {
        console.log('subs', this.subs);
        this.subs.forEach(w => w.update())
    }
}

//给data中的每个属性添加get与set
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
        //创建dep
        const dep = new Dep();
        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                console.log('触发get');
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set: (newv) => {
                console.log('触发set');
                this.observer(newv);
                if (newv === value) return;
                value = newv;
                dep.notify();
            }
        })
    }


}