/* import "core-js/stable";
import "regenerator-runtime/runtime"; */
new Promise(resolve => {
    console.log('resolve');
    resolve('hello')
})

window.clicks = () => {
    console.log(123)
}