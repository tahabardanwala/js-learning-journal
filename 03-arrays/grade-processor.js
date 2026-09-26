const students = [
    {name:'Ravi' , score:85},
    {name:"Anita" , score: 42},
    {name:'Sain' , score: 55},
    {name: "Suresh" , score: 95},
    {name: 'Priya' , score: 67}
]
const passedStudents = students.filter(student => student.score >= 40).map(student => student.name )
console.log('Students Passed :',passedStudents)
const total = students.reduce((sum , student) => sum + student.score,0)
const average = total/ students.length
console.log('Average :',average)