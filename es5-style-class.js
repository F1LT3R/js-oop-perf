const iterations = Number(process.argv[2]);
const timeStamp = () => Number(new Date());
const start = timeStamp();

///////////////////////////////////////////////////////////
// ES5 Style class

function Person(id, name) {
  this.id = id;
  this.name = name;
}

Person.prototype.print = function() {
  return `${this.id}, ${this.name}`;
};

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
