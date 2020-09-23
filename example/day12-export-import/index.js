import hello, { name, age as myAge, city } from "./myModule.js";

const wrapper = document.querySelector("#wrapper");

wrapper.innerHTML = `
    ${hello()}! 
    I am ${name.first} ${name.last}. 
    I am ${myAge} years old.
    Located in ${city}.
`;
