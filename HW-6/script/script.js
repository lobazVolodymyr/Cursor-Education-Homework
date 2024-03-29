const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (obj) => {

    let newArr = [];

    for(let key in obj.subjects) {

        newArr.push( key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ') );

    }

    return newArr;

}

console.log( getSubjects(students[0]) );


const getAverageMark = (student) => {

    let sum = 0;

    let savedLength = 0;

    for(let key in student.subjects) {

        for(let i = 0;i < student.subjects[key].length;i++ ) {

            sum += student.subjects[key][i];
            savedLength++;

        }

    }

    return +(sum / savedLength).toFixed(2);

}

console.log( getAverageMark(students[0]) );


const getStudentInfo = (student) => {

    const picked = (({ name, course }) => ({ name, course}))(student);

    picked.averageMark = getAverageMark(students[0]);

    return picked;

}

console.log( getStudentInfo(students[0]) );


const getStudentsNames = (students) => { 

    const studentNames = Object.keys(students).map( key => students[key].name);
    
    return studentNames.sort();

}

console.log( getStudentsNames(students) );


const getBestStudent = (students) => {

    let bestStudent = students.reduce( (prev, i) => {

        if (getAverageMark(prev) > getAverageMark(i) ) {
            
            return prev;

        } else {

            return i;

        }

    });

    return bestStudent.name;

}

console.log(getBestStudent(students));


const calculateWordLetters = (text) => {

    let obj = {}   

    for(let char of text) {

        if(obj[char]) {

            obj[char] += 1;

        } else {

            obj[char] = 1;

        }
    } 

    return obj;

};

console.log( calculateWordLetters("тест"));