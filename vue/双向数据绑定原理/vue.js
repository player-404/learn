
//入口
class Vue {
    constructor(options) {
        this.$data = options.data;
        this.$methods = options.methods;
        this.$el = options.el;

        if (this.$el) {
            new Observer(this.$data)
            new Complain(this.$el, this);
        }

    }
}

//该模块为complain: 将data数据绑定到dom  将vue指令绑定到dom
class Complain {
    constructor(el, vm) {
        this.vm = vm;
        let node = this.isElement(el) ? el : document.querySelector(el);
        //创建文档片段 避免重绘回流
        let f = this.createFrameElement(node);
        //解析
        this.complain(f);

        node.appendChild(f);
    }
    //  解析
    complain(node) {
        let nodes = [...node.childNodes];
        nodes.forEach(child => {
            if (this.isElement(child)) {
                //解析元素节点
                this.complainElement(child);
            } else {
                //解析文本节点
                this.complainText(child);
            }

            if (child.childNodes && child.childNodes.length) {
                this.complain(child);
            }
        })
    }
    //解析文字
    complainText(node) {
        let value = node.textContent;
        complainUtil.text(node, value, this.vm)
    }

    //解析->将数据渲染到dom上
    complainElement(node) {
        const attributes = node.attributes;
        //获取元素上绑定的指令
        [...attributes].forEach(item => {
            const { name, value } = item;
            if (this.isDirective(name)) {
                const directive = name.split('-')[1];
                const [dirName, dirEvent] = directive.split(':');
                //vue指令解析
                complainUtil[dirName](node, value, this.vm, dirEvent);
                //删除元素上的v-属性
                node.removeAttribute(`v-${directive}`);

                //v-on语法糖(@)
            } else if (this.isBindEvent(name)) {
                const eventName = name.split('@')[1];
                complainUtil.on(node, value, this.vm, eventName);

                //v-bind语法糖(:)
            } else if (this.isAttrBind(name)) {
                const eventName = name.split(':')[1];
                complainUtil.bind(node, value, this.vm, eventName);
            }
        })
    }

    //判断是否为：语法糖
    isAttrBind(directive) {
        return directive.startsWith(':');
    }

    //判断是否为@语法糖
    isBindEvent(directive) {
        return directive.startsWith('@')
    }
    //判断元素属性是不是命令
    isDirective(directive) {
        return directive.startsWith('v-')
    }

    //创建文档碎片 -> 提高性能 避免修改dom 频繁的重绘回流
    createFrameElement(node) {
        let fragment = document.createDocumentFragment();
        while (node.firstChild) {
            fragment.appendChild(node.firstChild);
        }
        return fragment;
    }

    //判断是不是元素
    isElement(el) {
        return el.nodeType === 1;
    }
}

//绑定指令
const complainUtil = {
    text(node, key, vm) {
        let value = this.getVal(key, vm);
        new Watcher(vm, key, (newv) => {
            this.update.textUpdate(node, newv);
        })
        this.update.textUpdate(node, value);
    },
    model(node, key, vm) {
        let value = this.getVal(key, vm);
        new Watcher(vm, key, (newv) => {
            node.value = newv;
        })
        node.addEventListener('input', (e) => {
            this.setVal(key, vm, e.target.value);
        })
        node.value = value;
    },
    html(node, key, vm) {
        let value = this.getVal(key, vm);
        new Watcher(vm, key, (newv) => {
            this.update.htmlUpdate(node, newv);
        })
        this.update.htmlUpdate(node, value);
    },
    on(node, key, vm, dirEvent) {
        let fn = vm.$methods[key];
        node.addEventListener(dirEvent, fn.bind(vm));
    },
    bind(node, key, vm, dirEvent) {
        console.log('dirEWvent', dirEvent, vm[key])
        new Watcher(vm, key, (newv) => {
           node[dirEvent] = newv;
        })
        node.setAttribute(dirEvent, vm.$data[key]);
    },
    getVal(key, vm) {
        //{{}}
        if (key.includes("{{")) {
            const reg = /\{\{(.*)\}\}/g;
            return key.replace(reg, (match, p) => {
                return vm.$data[p];
            })
        }
        //传入的事字符串
        if (key.startsWith("'")) {
            let str = key.replace(/\'|\'/g, "").trim();
            return str;
        }

        let attr = key.split('.');
        return [...attr].reduce((data, currentAttr) => {
            return data[currentAttr] || currentAttr;
        }, vm.$data)
    },
    setVal(expr, vm, value) {
        expr.split('.').reduce((data, current) => {
            data[current] = value;
        }, vm.$data)
    },
    update: {
        textUpdate(node, value) {
            node.textContent = value;
        },
        htmlUpdate(node, value) {
            node.innerHTML = value;
        }
    }
}
