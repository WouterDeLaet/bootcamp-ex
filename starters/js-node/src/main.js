import deepfreeze from 'deep-freeze';

const items = [
  { time: '5:17', name: 'Flexbox Video' },
  { time: '8:22', name: 'Redux Video' },
  { time: '3:34', name: 'Flexbox Video' },
  { time: '5:23', name: 'Flexbox Video' },
  { time: '7:24', name: 'Redux Video' },
  { time: '6:46', name: 'Flexbox Video' },
  { time: '4:45', name: 'Flexbox Video' },
  { time: '7:58', name: 'Flexbox Video' },
  { time: '11:51', name: 'Redux Video' },
  { time: '9:13', name: 'Flexbox Video' },
  { time: '5:50', name: 'Flexbox Video' },
  { time: '5:52', name: 'Redux Video' },
  { time: '5:49', name: 'Redux Video' },
  { time: '8:57', name: 'Flexbox Video' },
  { time: '11:29', name: 'Flexbox Video' },
  { time: '3:07', name: 'Redux Video' },
  { time: '3:31', name: 'Redux Video' },
];

const flexbox = items
  .filter(item => item.name.includes('Flexbox'))
  .map(item => item.time)
  .map(item => {
    const time = item.split(':');
    const seconds = +time[0] * 60 + +time[1];
    return seconds;
  })
  .reduce((acc, item) => {
    return acc + item;
  }, 0);

const flexboxSeconds = items.reduce((acc, item) => {
  if (item.name.includes('Flexbox')) {
    const times = item.time.split(':');
    const seconds = +times[0] * 60 + +times[1];
    return acc + seconds;
  }
  return acc;
}, 0);

console.log(flexbox);
console.log(flexboxSeconds);

const skills = [
  {
    name: 'Tom',
    skill: 'CSS',
    yearsExperience: 3,
    category: 'Web Design',
  },
  {
    name: 'Jim',
    skill: 'HTML',
    yearsExperience: 10,
    category: 'Web Design',
  },
  {
    name: 'Sue',
    skill: 'JavaScript',
    yearsExperience: 5,
    category: 'Web Development',
  },
  {
    name: 'Maria',
    skill: 'PHP',
    yearsExperience: 7,
    category: 'Web Development',
  },
  {
    name: 'John',
    skill: 'Photoshop',
    yearsExperience: 1,
    category: 'Web Design',
  },
  {
    name: 'David',
    skill: 'Writing',
    yearsExperience: 12,
    category: 'Content',
  },
  {
    name: 'Ellen',
    skill: 'Editor',
    yearsExperience: 5,
    category: 'Content',
  },
];

const totalYearsOfExp = skills.reduce((acc, item) => {
  return acc + item.yearsExperience;
}, 0);

const totalYearsOfExpPerCategory = skills.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }

  acc[item.category] += item.yearsExperience;

  return acc;
}, {});

console.log(totalYearsOfExp);
console.log(totalYearsOfExpPerCategory);

const obj = { name: 'peter', age: 25 };
deepfreeze(obj);

// Set the age to 52

const newObj = {
  ...obj,
  age: 52,
};

// eslint-disable-next-line prefer-object-spread
const obj2 = Object.assign({}, obj, { age: 25 });
console.log(newObj);
console.log(obj2);

const ar = [12, 33, 999];
deepfreeze(ar);

// Add the number 1000 to the array

const ar2 = [...ar, 1000];
console.log(ar2);

const ar3 = [{ name: 'jane' }, { name: 'john' }, { name: 'ike' }];
deepfreeze(ar3);

// Remove john from the array

const ar4 = ar3.slice(1);
console.log(ar4);

const ar5 = [{ name: 'jane', age: 12 }, { name: 'john', age: 22 }, { name: 'ike', age: 1 }];
deepfreeze(ar5);

// Set the age of ike to 20

const ar6 = ar5.map(item => {
  if (item.name === 'ike') {
    return { ...item, age: 20 };
  }
  return item;
});

console.log(ar6);

const ar7 = [1, 5, 6, 1000];
deepfreeze(ar7);

// Take the second & third element

const ar8 = ar7.slice(1, 3);

console.log(ar8);
