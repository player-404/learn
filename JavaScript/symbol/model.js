function A(name) {
    this.name = name
}
if (!global[Symbol.for('foo')]) {
    global[Symbol.for('foo')] = new A('张三');
}
module.exports = global[Symbol.for('foo')];