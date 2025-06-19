function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const obj1: { name: string } = {
  name: "Grow",
};
const obj2: { color: string } = {
  color: "blue",
};

const result = merge(obj1, obj2);

console.log(result);
