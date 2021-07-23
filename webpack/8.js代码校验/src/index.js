import './index.css';
import './index.less';
// eslint-disable-next-line
window.clicks = () => {
  // eslint-disable-next-line
    alert('这里是一条弹窗消息')
};
const p = new Promise((resolve) => {
  console.log('promise');
  resolve('hello');
});
console.log(p);
