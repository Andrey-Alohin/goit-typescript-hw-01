type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

let type1: AllType = {
  name: "Kevin",
  position: 2,
  color: "yellow",
  weight: 70,
};
let type2: AllType = {
  name: "Fred",
  position: 3,
  color: "red",
  weight: 100,
};

const result = compare(type1, type2);

console.log(result);
