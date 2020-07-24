const iterations = Number(process.argv[2]);
const timeStamp = () => Number(new Date());
const start = timeStamp();

///////////////////////////////////////////////////////////
// Pure Object Composition (passing object reference)

const methods = (state) => ({
  print: () => `${state.id}, ${state.name}`,
});

const Person = (id, name) => {
  const person = {
    id,
    name,
  };
  
  return Object.assign(person, methods(person));
};

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
