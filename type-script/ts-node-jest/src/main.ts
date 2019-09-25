// import { sum, subtract } from './calc';
import request, { Response } from 'request';

// console.log('sum:', sum(1, 2));
// console.log('subtract:', subtract(1, 2));

// console.log('start');
// waitASecond('peter', (arg: any) => {
//   setTimeout(() => {
//     console.log('done', arg);
//   }, 1000);
// });

// function waitASecond(arg: string, cb: (arg: string) => void) {
//   cb(arg);
// }

// console.log('start');
// countDown('peter', 5, (arg, cnt, end) => {
//   console.log(`ready ${arg}: `, cnt);
//   if (end) {
//     console.log(`done`);
//   }
// });

// function countDown(arg: string, count: number, cb: (arg: string, cnt: number, end: boolean) => void) {
//   // implement me

//   if (count === 1) {
//     cb(arg, count, true);
//   } else {
//     cb(arg, count, false);
//     count--;
//     countDown(arg, count, cb);
//   }
// }

// from SWAPI api get person with id 1

// // //
// // // add your code here
// // //
// const PEOPLE_URL = 'https://swapi.co/api/people/';

// // request.get(PEOPLE_URL + 1, (err: Error, response: any, body: string) => {
// //   console.log(JSON.parse(body));
// // });

// // function getHomePlanetById(peopleId: number, callback: (err: Error, planet: string) => void) {
// //   //
// //   // implement me
// //   //

// //   request.get(PEOPLE_URL + peopleId, (err: Error, response: any, body: string) => {
// //     const bodyParsedPeople = JSON.parse(body);
// //     request.get(bodyParsedPeople.homeworld, (err2: Error, response2: any, body2: string) => {
// //       const bodyParsedPlanet = JSON.parse(body2);
// //       callback(err2, bodyParsedPlanet.name);
// //     });
// //   });
// // }

// // getHomePlanetById(1, (err, planet) => {
// //   if (err) {
// //     return console.log(err);
// //   }
// //   console.log(planet);
// // });

// function getNameById(peopleId: number, timeout: number, callback: (err: Error, name: string) => void) {
//   //
//   // implement me.
//   //
//   let isOnTime = true;

//   const timer = setTimeout(() => {
//     isOnTime = false;
//     callback(new Error('The API was not on time'), '');
//   }, timeout);

//   request.get(PEOPLE_URL + peopleId, (err: Error, response: any, body: string) => {
//     if (isOnTime) {
//       clearTimeout(timer);
//       const bodyParsedPeople = JSON.parse(body);
//       callback(err, bodyParsedPeople.name);
//     }
//   });
// }

// // use the function
// getNameById(1, 2000, (err, name) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(name);
// });

// function setTimerP(timeout: number): Promise<void> {
//   return new Promise((resolve: () => void, reject: () => void) => {
//     if (timeout > 0) {
//       setTimeout(() => {
//         resolve();
//       }, timeout);
//     } else {
//       reject();
//     }
//   });
// }

// console.log('start');

// setTimerP(1000)
//   .then(() => {
//     console.log('first');
//     return setTimerP(1000);
//   })
//   .then(() => {
//     console.log('Second');
//   })
//   .catch(() => {
//     console.log('out of time');
//   });

// function httpGet<T>(url: string) {
//   //
//   // implement me
//   // return a Promise!
//   //
//   return new Promise((resolve: (res: Res<T>) => void, reject: (err: Error) => void) => {
//     request.get(url, (err: Error, response, body: string) => {
//       if (response.statusCode !== 200) {
//         reject(err);
//       }
//       resolve(Object.assign(response, { data: JSON.parse(body) }));
//     });
//   });
// }

// httpGet<Person>('https://swapi.co/api/people/1')
//   .then(res => {
//     // res.body == string
//     // res.data == parsed body
//     console.log(res);
//     console.log(res.data.name);
//     console.log(res.body);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// interface Res<T> extends request.Response {
//   data: T;
// }

// interface Person {
//   homeworld: string;
//   name: string;
//   planet: {
//     name: string;
//   };
// }

// interface Planet {
//   name: string;
// }

// function getPersonWithHomeWorldById(peopleId: number, timeout?: number) {
//   //
//   // implement me
//   //
//   return httpGet<Person>(`https://swapi.co/api/people/${peopleId}`).then(res => {
//     return httpGet<Planet>(res.data.homeworld).then(resPlanet => {
//       return {
//         name: res.data.name,
//         planet: {
//           name: resPlanet.data.name,
//         },
//       };
//     });
//   });
// }

// getPersonWithHomeWorldById(1).then(person => {
//   console.log(person.name);
//   console.log(person.planet.name);
// });

// function timer(timeout: number) {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error('The API was too late.'));
//     }, timeout);
//   });
// }

// function getNameByIdP(timeout: number, peopleId: number) {
//   //
//   // implement me
//   //

//   return Promise.race([httpGet<Person>(`https://swapi.co/api/people/${peopleId}`), timer(timeout)]).then((res: any) => {
//     return {
//       name: res.data.name,
//     };
//   });
// }

// getNameByIdP(10000, 1)
//   .then(person => {
//     console.log(person.name);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

// function timer() {
//   setTimeout(() => {}, 1000);
// }

// async function printWords() {
//   try {
//     await timer();
//     console.log('done');
//     await timer();
//     console.log('finished');
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log('start');
// printWords();

// function delay(milliseconds: number, word: string): Promise<string> {
//   return new Promise<string>(resolve => {
//     setTimeout(() => {
//       resolve(word);
//     }, milliseconds);
//   });
// }

// async function printWords(): Promise<void> {
//   console.log('start');

//   for (let i = 0; i < 2; i++) {
//     // await is converting Promise<number> into number
//     const word: string = await delay(1000, 'done');
//     console.log(word);
//   }
// }

// printWords();
// async function printPerson() {
//   const person = await getPersonWithHomeWorldById(1);
//   console.log(person.name);
//   console.log(person.planet.name);
// }

// function getPersonWithHomeWorldById(personId: number) {
//   // implement me
//   return httpGet<Person>(`https://swapi.co/api/people/${personId}`).then(res => {
//     return httpGet<Planet>(res.data.homeworld).then(resPlanet => {
//       return {
//         name: res.data.name,
//         planet: {
//           name: resPlanet.data.name,
//         },
//       };
//     });
//   });
// }

// printPerson();

function timer(timeout: number) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('The API was too late.'));
    }, timeout);
  });
}

function httpGet(url: string) {
  //
  // implement me
  // return a Promise!
  //
  return new Promise((resolve: (res: Person) => void, reject: (err: Error) => void) => {
    request.get(url, (err: Error, response, body: string) => {
      if (response.statusCode !== 200) {
        reject(err);
        return;
      }
      const parsed = JSON.parse(body);
      resolve({
        name: parsed.name,
      });
    });
  });
}

async function getPersons(timeout: number, arg: number): Promise<Person>;
async function getPersons(timeout: number, ...args: number[]): Promise<Person[]>;
async function getPersons(timeout: number, ...args: number[]): Promise<Person | Person[]> {
  const arrayPromises: Promise<Person>[] = [];

  args.forEach(arg => {
    arrayPromises.push(httpGet(`https://swapi.co/api/people/${arg}`));
  });

  return Promise.race([Promise.all(arrayPromises), timer(timeout)]).then((persons: any) => {
    if (persons.length === 1) {
      return persons[0];
    }
    return persons;
  });
}

async function printPersons() {
  const timeout = 10000;
  const persons = await getPersons(timeout, 1, 2, 3);
  /* eslint-disable */
  for (let person of persons) {
    console.log(person.name);
  }

  const person = await getPersons(timeout, 1);
  console.log(person.name);
}

printPersons();

interface Person {
  name: string;
}
