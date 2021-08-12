import com from '../cpm1/com1.vue'
export default {
    components: {
        com
    },
    props: {
        params: {
            type: Number
        },
        name: {
            type: String,
        },
        age: {
            type: Number
        }
    },
    data() {
        return {
            personName: this.name,
            personAge: this.age,
            sonParams: this.params
        }
    },
    mounted() {
        console.log(this.name)
        this.$root.$on('msg', (msg) => {
            console.log(msg)
        })
    },
    created() {
        
    }
}