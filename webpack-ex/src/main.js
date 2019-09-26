import $ from 'jquery';
import userService from './userService';
import './style.scss';
import 'font-awesome/css/font-awesome.css';

var users = userService.getAll();
users.forEach(function(user) {
  $('#list').append(`<li>${user.name}</li>`);
});

console.log('Version:', VERSION);


// const userService = require('./userService');
// const users = userService.getAll();
// users.forEach(function(user) {
//   console.log(user.id, user.name);
// });
