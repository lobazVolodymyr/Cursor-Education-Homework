const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const splitTheStudents = (students) => {

    let finalRes = [];

    finalRes.push([students[0],students[2]], [students[1],students[3]], [students[4],students[5]]);

    return finalRes;

}

//
splitTheStudents(students);


const compareCouples = (couples, themes) => { 

    let newArray = [];

    for(let i = 0;i < couples.length;i++) {

        newArray.push([couples[i].join(' i ')]);

    }

    for(let j = 0;j < newArray.length;j++) {
        
        newArray[j].push(themes[j]);

    }

    return newArray;

}

//
compareCouples(splitTheStudents(students), themes);


const compareMarks = (students, marks) => { 

    let newArray = students;
   
    for(let i = 0;i < students.length;i++) {
        
        console.log( newArray[i], marks[i] );

    }

    return newArray;

}

console.log( compareMarks(students, marks) );
