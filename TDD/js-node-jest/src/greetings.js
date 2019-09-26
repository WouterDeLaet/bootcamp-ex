export default function greet(name) {
  const time = new Date();
  const hours = time.getHours();
  const trimmedName = name.trim();
  const nameWithUppercase = `${trimmedName[0].toUpperCase()} ${name.slice(1)}`;
  let string = 'Hello';

  if (hours >= 6 && hours < 12) {
    string = 'Good morning';
  }
  if (hours >= 18 && hours < 22) {
    string = 'Good evening';
  }
  if (hours >= 22 || hours < 6) {
    string = 'Good night';
  }
  return `${string} ${nameWithUppercase.trim}`;
}
