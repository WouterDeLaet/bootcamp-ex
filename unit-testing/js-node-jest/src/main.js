import request from 'request';
import { sum, subtract } from './calc';

console.log(sum(1, 2));
console.log(subtract(3, 2));

export function setTimerP(timeout, arg) {
  if (timeout < 0) {
    return Promise.reject(new Error('timeout must be > 0'));
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arg);
    }, timeout);
  });
}

export function countDown(arg, timeout, count, cb) {
  if (count > -1) {
    setTimeout(() => {
      cb(arg, count, count === 0);
      countDown(arg, timeout, count - 1, cb);
    }, timeout);
  }
}

export function httpGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      const extendedRes = Object.assign(res, {
        data: JSON.parse(res.body),
      });
      resolve(extendedRes);
    });
  });
}
