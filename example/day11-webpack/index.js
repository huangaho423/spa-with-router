//引入JQuery
import $ from "jquery";

//使用ES6 const宣告常數
const wrapper = document.querySelector("#wrapper");
//使用ES6 arrow function
const render = () => {
  wrapper.innerHTML = "<h1>Hello,webpack!</h1>";
};
//呼叫函式
render();

//使用JQuery改變style
$("#wrapper").css("color", "red");
