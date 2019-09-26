import MockDate from 'mockdate';
import greet from './greetings';

describe('Greeter', () => {
  let name;
  let nameCapitalized;
  let date;

  beforeEach(() => {
    name = 'wouter   ';
    nameCapitalized = name[0].toUpperCase() + name.slice(1);
    date = new Date().setHours(13, 0, 0);
    MockDate.set(date);
  });

  afterEach(() => {
    MockDate.reset();
  });
  it('should trim the name', () => {
    const greeting = greet(name);

    expect(greeting).toBe(`Hello ${nameCapitalized.trim}`);
  });

  it('should capitalize the first letter of the name', () => {
    const greeting = greet(name);

    expect(greeting).toBe(`Hello ${nameCapitalized.trim}`);
  });

  it('should return a morning greeting', () => {
    MockDate.set(new Date().setHours(6, 0, 0));
    const greeting = greet(name);

    expect(greeting).toBe(`Good morning ${nameCapitalized.trim}`);
  });

  it('should return a evening greeting', () => {
    MockDate.set(new Date().setHours(18, 0, 0));
    const greeting = greet(name);

    expect(greeting).toBe(`Good evening ${nameCapitalized.trim}`);
  });

  it('should return a night greeting', () => {
    MockDate.set(new Date().setHours(22, 0, 0));
    const greeting = greet(name);

    expect(greeting).toBe(`Good night ${nameCapitalized.trim}`);
  });
});
