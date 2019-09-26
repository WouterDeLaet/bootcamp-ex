import httpHelper from './httpHelper';
// javascript version
export function expire(timeout) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout Error'));
    }, timeout);
  });
}

export class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = message;
    this.statusCode = statusCode;

    // fix name
    Object.defineProperty(this, 'name', {
      value: new.target.name,
      enumerable: false,
    });

    // fix prototype
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export async function getPersons(timeout, ...ids) {
  const promises = ids.map(async id => {
    const res = await httpHelper(`https://swapi.co/api/people/${id}`);
    return res.data;
  });
  const results = await Promise.race([expire(timeout), Promise.all(promises)]);
  if (results.length === 1) {
    return results[0];
  }
  return results;
}
