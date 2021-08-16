export default {
    name: 'listitem',
    props: {
        level: {
            type: String
        }
    },
    created() {

    },
    render(h) {
        return h(
            `div`,
            {
                class: ['box'],
                style: {
                    color: 'red',
                    fontSize: '28px',
                    fontWeight: 'bold'
                },
                attrs: {
                    id: 123,
                    name: 'box'
                },
                props: {
                    text: 'box'
                },
                domProps: {
                    innerHTML: '<h1>123</h1>',
                },
                on: {
                    click: this.clicks
                },
                directives: {
                    alert:{
                        bind() {

                        },
                        inserted(el) {
                            alert('子组件插入')
                        },
                        update() {

                        },
                        componentUpdate() {

                        },
                        unbind() {

                        }
                    }
                }
            },
            '这里是渲染函数创建的html'
        )
    },
    methods: {
        clicks() {
            console.log('渲染函数创建的元素被点击了')
        }
    }
}
