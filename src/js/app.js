const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export default function orderByProps(obj, setOrder) {
  const array1 = [];
  const array2 = [];

  for (const key in obj) {
    if (setOrder.includes(key)) {
      const index = setOrder.indexOf(key);
      array1[index] = {key, value: obj[key]};
    }
    else {
      array2.push({key, value: obj[key]});
    }
    array2.sort((a, b) => (a.key > b.key ? 1 : -1));
  }
  const result = [...array1, ...array2];
  return result;
}

