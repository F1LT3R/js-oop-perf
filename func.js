const iterations = Number(process.argv[2]);
const timeStamp = () => Number(new Date());
const start = timeStamp();

///////////////////////////////////////////////////////////

function Person (id, name) {
  return `${id}, ${name}`;
}

///////////////////////////////////////////////////////////

const people = Array(iterations)
  .fill("")
  .map(() => Person(1, "Me"));

console.log(
  Object.assign(
    {
      person: people[0],
    },
    {
      time: `${(timeStamp() - start) / 1000} seconds`,
    },
    process.memoryUsage()
  )
);
