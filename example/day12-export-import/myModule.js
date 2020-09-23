//named export
export const name = { first: "river", last: "huang" };

//named export
const age = 30;
const city = "Taipei";
export { age, city };

//default export
export default function hello() {
  return "Hello";
}
