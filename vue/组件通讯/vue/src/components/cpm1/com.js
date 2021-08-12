export default {
    inject: ['msg', 'msgName'],
    created() {
        console.log(this.msg);
    }
}