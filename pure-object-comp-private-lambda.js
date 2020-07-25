const iterations = Number(process.argv[2]);
const timeStamp = () => Number(new Date());
const start = timeStamp();

///////////////////////////////////////////////////////////
// Pure Object Composition (private)

const Person = (id, name) => ({
  print: () => `${id}, ${name}`,
});

///////////////////////////////////////////////////////////

const people = Array(iterations)
  .fill('')
  .map(() => Person(1, 'Me'));

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
