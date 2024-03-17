import orderByProps from '../app.js';

test('orderByProps function with initial props', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const setOrder = ['name', 'level'];
  const result = orderByProps(obj, setOrder);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }]);
});

