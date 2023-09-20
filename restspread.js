// Refactor

const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

// findMin

const findMin = (...args) => args.reduce((min, num) => num < min ? num : min)

//mergeObj

const mergeObj = (obj1,obj2) => ({...obj1, ...obj2})

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num*2)]

//slice and dice

function removeRandom(items){
  const newItems = [...items];
  newItems.splice(Math.floor(Math.random()*items.length),1);
  return newItems;
}

function extend(array1, array2){
  return [...array1, ...array2];
}

function addKeyVal(obj, key, val){
  return {...obj, key:val};
}

function removeKey(obj,key){
  const newObj = {...obj};
  delete newObj[key];
  return newObj;
}

function combine(obj1,obj2){
  return {...obj1, ...obj2};
}

function update(obj, key, val){
  const newObj = {...obj};
  newObj[key] = val;
  return newObj;
}