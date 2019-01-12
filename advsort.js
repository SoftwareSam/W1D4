var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "zoidberg", age: 44 },
  { id: 6, name: "barbara",  age: 55 }
];

students.sort(function(a, b){

  var nameA = a.name;
  var nameB = b.name;

  if(nameA === nameB){
    return b.age - a.age;
  }

  if(nameA < nameB){
    return -1;
  }
   if(nameA > nameB){
    return 1;
  }

  return 0;

});

console.log(students);