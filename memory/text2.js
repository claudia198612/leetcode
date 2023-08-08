const arr1 = ["A1","A2","B1","B2","C1","C2","D1","D2"];
const arr2 = ["A","B","C","D"];

const arrMap = {};
arr2.forEach(item => arrMap[item] = []);

arr1.forEach(item => {
  const key = item[0];
  if (arrMap.hasOwnProperty(key)) {
    arrMap[key].push(item);
  }
});

const result = [];
arr2.forEach(item => result.push(...arrMap[item],item[0]));

console.log(result); // [ 'A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D' ]
