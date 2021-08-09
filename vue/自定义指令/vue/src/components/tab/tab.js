import focus from "../../directives/focus";
export default {
    data: () => ({
        items: [
            {
                text: 'tab1',
                id: 4563738
            },
            {
                text: 'tab2',
                id: 362383
            },
            {
                text: 'tab3',
                id: 6348374
            },
            {
                text: 'tab4',
                id: 46203400
            }
        ],
        curIndex: 0
    }),
    methods: {
        click(index) {
            console.log(index)
            this.curIndex = index;
        }
    },
    directives: {
        focus
    }
}