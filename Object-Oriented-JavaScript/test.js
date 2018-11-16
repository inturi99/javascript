const x = [{ 'id': 1 }, { 'id': 2 }];
const y = [{ 'name': 'krishna' }, { 'name': 'venkat' }];

let z = map((x, y) => ({ 'id': x.id, 'name': y.name }))

console.log(z)


