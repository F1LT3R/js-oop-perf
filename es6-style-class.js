const iterations = Number(process.argv[2]);
const timeStamp = () => Number(new Date());
const start = timeStamp();

///////////////////////////////////////////////////////////
// ES6 Style Class

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  print() {
    return `${this.id}, ${this.name}`;
  }
}

///////////////////////////////////////////////////////////

const people = Array(iterations)
  .fill('')
  .map(() => new Person(1, 'Me'));

console.log(
  Object.assign(
    {
      person: people[0],
      print: people[0].print(),
    },
    {
      time: `${(timeStamp() - start) / 1000} seconds`,
    },
    process.memoryUsage(),
  ),
);
