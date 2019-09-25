"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _deepFreeze = _interopRequireDefault(require("deep-freeze"));

var items = [{
  time: '5:17',
  name: 'Flexbox Video'
}, {
  time: '8:22',
  name: 'Redux Video'
}, {
  time: '3:34',
  name: 'Flexbox Video'
}, {
  time: '5:23',
  name: 'Flexbox Video'
}, {
  time: '7:24',
  name: 'Redux Video'
}, {
  time: '6:46',
  name: 'Flexbox Video'
}, {
  time: '4:45',
  name: 'Flexbox Video'
}, {
  time: '7:58',
  name: 'Flexbox Video'
}, {
  time: '11:51',
  name: 'Redux Video'
}, {
  time: '9:13',
  name: 'Flexbox Video'
}, {
  time: '5:50',
  name: 'Flexbox Video'
}, {
  time: '5:52',
  name: 'Redux Video'
}, {
  time: '5:49',
  name: 'Redux Video'
}, {
  time: '8:57',
  name: 'Flexbox Video'
}, {
  time: '11:29',
  name: 'Flexbox Video'
}, {
  time: '3:07',
  name: 'Redux Video'
}, {
  time: '3:31',
  name: 'Redux Video'
}];
var flexbox = items.filter(function (item) {
  return item.name.includes('Flexbox');
}).map(function (item) {
  return item.time;
}).map(function (item) {
  var time = item.split(':');
  var seconds = +time[0] * 60 + +time[1];
  return seconds;
}).reduce(function (acc, item) {
  return acc + item;
}, 0);
var flexboxSeconds = items.reduce(function (acc, item) {
  if (item.name.includes('Flexbox')) {
    var times = item.time.split(':');
    var seconds = +times[0] * 60 + +times[1];
    return acc + seconds;
  }

  return acc;
}, 0);
console.log(flexbox);
console.log(flexboxSeconds);
var skills = [{
  name: 'Tom',
  skill: 'CSS',
  yearsExperience: 3,
  category: 'Web Design'
}, {
  name: 'Jim',
  skill: 'HTML',
  yearsExperience: 10,
  category: 'Web Design'
}, {
  name: 'Sue',
  skill: 'JavaScript',
  yearsExperience: 5,
  category: 'Web Development'
}, {
  name: 'Maria',
  skill: 'PHP',
  yearsExperience: 7,
  category: 'Web Development'
}, {
  name: 'John',
  skill: 'Photoshop',
  yearsExperience: 1,
  category: 'Web Design'
}, {
  name: 'David',
  skill: 'Writing',
  yearsExperience: 12,
  category: 'Content'
}, {
  name: 'Ellen',
  skill: 'Editor',
  yearsExperience: 5,
  category: 'Content'
}];
var totalYearsOfExp = skills.reduce(function (acc, item) {
  return acc + item.yearsExperience;
}, 0);
var totalYearsOfExpPerCategory = skills.reduce(function (acc, item) {
  if (!acc[item.category]) {
    acc[item.category] = 0;
  }

  acc[item.category] += item.yearsExperience;
  return acc;
}, {});
console.log(totalYearsOfExp);
console.log(totalYearsOfExpPerCategory);
var obj = {
  name: 'peter',
  age: 25
};
(0, _deepFreeze["default"])(obj);
var newObj = (0, _objectSpread2["default"])({}, obj, {
  age: 52
});
console.log(newObj);