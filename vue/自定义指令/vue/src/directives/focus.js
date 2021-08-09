function getEle(className) {
    return document.querySelectorAll(`.${className}`);
}
export default {
    bind(el, binding, vnode) {

    },
    inserted(el, binding, vnode, oldVnode) {
        const op = binding.value;
        const eles = getEle(op.ele);
        eles[op.curIndex].classList.add(op.className);
    },
    update(el, binding, vnode, oldVnode) {
        const op = binding.value;
        const eles = getEle(op.ele);
        eles[op.curIndex].classList.add(op.className);
        eles[binding.oldValue.curIndex].classList.remove(op.className);
    },
    componentUpdate(el, binding, vnode, oldVnode) {

    }
}