const persons = [
  { name: "Alice", age: 25, geschlecht: "weiblich" },
  { name: "Bob", age: 30, geschlecht: "männlich" },
  { name: "Charlie", age: 35, geschlecht: "männlich" },
  { name: "Diana", age: 28, geschlecht: "weiblich" },
  { name: "Ethan", age: 40, geschlecht: "männlich" }
];

//persons.sort() nach alter
const sortedByAge = persons.sort((a, b) => a.age - b.age);
console.log(sortedByAge);


//filter männlich weiblich
const filteredByGeschlecht = persons.filter(person => person.geschlecht == "männlich" || person.geschlecht == "weiblich");
console.log(filteredByGeschlecht);
