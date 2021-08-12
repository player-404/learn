import eventBus from '../../utils/eventBus'
export default {
    methods: {
        click() {
            console.log('clicks')
            this.$root.$emit('msg', '这是兄弟组件传递过来的数据')
        }
    }
}