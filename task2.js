const getFullName = (object) => {
  return `${object.firstName} ${object.lastName}`;
};

getFullName({ firstName: "Kirill", lastName: "Ko" });

const filterUniqueWords = (str) => [...new Set(str.split(" "))].sort();

filterUniqueWords("asas sas asas papapa rrra");

const getAverageGrade = (students) =>
  students
    .map((student) => student.grade)
    .reduce((sum, grade) => sum + grade, 0) / students.length;

getAverageGrade([
  { name: "Kirill", grade: 5 },
  { name: "Roma", grade: 3 },
  { name: "Sasha", grade: 2 },
]);
